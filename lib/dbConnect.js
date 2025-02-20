import mongoose from 'mongoose';

const ConnectionDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    // console.log(`DB Already);
    return;
  }
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('DB Connected...');
}

export default ConnectionDB;