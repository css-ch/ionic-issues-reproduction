import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonButton, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FileUploadService } from '../services/file-upload.service';
import { FileUploadResult } from '../model/file-upload.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonInput, IonItem, IonLabel, IonButton, ReactiveFormsModule, IonSelect, IonSelectOption, DecimalPipe]
})
export class Tab1Page {
  formGroup = this.formBuilder.group({
    url: ['https://localhost:8000/file-upload', Validators.required],
    file: ['3MB.png', Validators.required]
  });

  result: FileUploadResult = { status: 0, elapsedTimeMs: 0 };
  error: Error | undefined = undefined;

  constructor(private formBuilder: FormBuilder, private fileUploadService: FileUploadService) {
  }

  submitForm(): void {
    if (this.formGroup.valid && this.formGroup.value.url && this.formGroup.value.file) {
      this.fileUploadService.uploadFile(this.formGroup.value.url, this.formGroup.value.file).subscribe({
        next: (result) => this.result = result,
        error: (error) => this.error = error
      });
    }
  }
}
