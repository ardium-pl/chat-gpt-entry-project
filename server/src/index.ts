import ansis from 'ansis';
import cors from 'cors';
import 'dotenv/config';
import express, { Request, Response } from 'express';
import './dotenv-type';
import { authRouter } from './routers/auth.EXAMPLE';
import { clientRouter } from './routers/client';
import { OK_STR } from './utils/console-colors';

const PORT = process.env.PORT ?? 5050;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(cors({ credentials: true, origin: process.env.APP_URL }));

// Routers
// app.use('/api/auth', authRouter);

app.post('/api/message', (req: Request, res: Response) => {
  const { message } = req.body;
  // const processedData = processGpt(message);
  if (message) {
    console.log('Received message, subject and sender: ' + message);
    res.status(200).send({ status: 'Kurwa ok ' +  message
     });
  } else {
    res.status(400).send({ error: 'No message provided' });
  }
});
app.use(clientRouter);

// Startup
console.log(`Starting server...`);
app.listen(PORT, () => {
  console.log(`${OK_STR}Running on port ${ansis.greenBright.underline(String(PORT))}!`);
  
  try {
    console.log(`${OK_STR}Connected to database!`);
  } catch (err) {
    throw err;
  }
});
//127.0.0.1