import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: 'String',
      require: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: 'String',
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: 'string',
      require: true,
    },
  },
  { timeStamp: true }
);

export const User = mongoose.model('User', userSchema);
