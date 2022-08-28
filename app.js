import  express  from 'express';
import mongoose from 'mongoose';
import router from './CRUD/router.js';

import DB_URL from './Config/database.js';

const PORT = 5001;

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