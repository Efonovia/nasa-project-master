const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL


require('dotenv').config();


mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error('No Internet-----------------------------------------\n '+err);
});

async function mongoConnect() {
  mongoose.set('strictQuery', false)
  await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}