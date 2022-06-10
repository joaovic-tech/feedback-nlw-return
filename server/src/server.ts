import express from 'express';
import cors from 'cors';
import { routes } from './routes';
const PORT = process.env.PORT || process.env.PORT_URL;

export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('Server running!')
});
