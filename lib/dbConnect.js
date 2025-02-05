import mongoose from 'mongoose';

const ConnectionDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    // console.log(`DB Already);
    return;
  }
  await mongoose.connect(
    `mongodb+srv://salonhamal278:salon123@cluster0.pad5g.mongodb.net/task-management?retryWrites=true&w=majority&appName=Cluster0`
  );
  console.log('DB Connected...');
}

export default ConnectionDB;