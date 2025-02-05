import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  }
}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User', UserSchema)