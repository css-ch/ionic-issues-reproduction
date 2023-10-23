import { Injectable } from '@angular/core';
import { from, map, Observable, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileUploadResult } from '../model/file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) {
  }

  uploadFile(url: string, fileName: string): Observable<FileUploadResult> {
    return from(fetch(`/assets/test-files/${fileName}`)).pipe(
      switchMap((response) => from(response.blob())),
      switchMap((blob) => {
        const start = performance.now();
        return this.httpClient.post(url, blob, {
          observe: 'response',
          headers: new HttpHeaders().set('Content-Type', 'application/octet-stream'),
          responseType: 'text'
        }).pipe(map((response) => ({
          status: response.status,
          elapsedTimeMs: performance.now() - start
        })));
      })
    );
  }
}
