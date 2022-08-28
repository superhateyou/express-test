import  express  from 'express';
import mongoose from 'mongoose';
import router from './CRUD/router';

import DB_URL from './Config/database';

const PORT = 5000;

const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log('Server started on port!' + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();