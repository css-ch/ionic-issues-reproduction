import { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

export function fileUpload(app: Express): void {
  app.post('/file-upload', bodyParser.raw({limit: 99999999999999}), (req: Request, res: Response) => {
    console.log('-------------------------------------------------------------------------------------------------------');
    console.log(`Received File: size: ${req.body.length / (1024 * 1024)}MB`);
    console.log(req.body.toString().substring(0, 200));
    res.send();
  });
}
