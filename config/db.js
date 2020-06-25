const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://pober:N37XzydzjxIWbYmo@buglogger-thzz7.mongodb.net/buglogger?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
    );

    console.log('MongoDB Connected');
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
