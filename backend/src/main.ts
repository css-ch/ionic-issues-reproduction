import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as https from 'https';
import * as fs from 'fs';
import { fileUpload } from './app/file-upload';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

https.createServer({
  key: fs.readFileSync('certs/server.key'),
  cert: fs.readFileSync('certs/server.cert')
}, app).listen(port, ()=>{
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

// app.listen(port, ()=>{
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

fileUpload(app);
