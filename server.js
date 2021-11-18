const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

// Connecting database
// const DB = process.env.DATABASE_LOCAL;
const DB = process.env.DATABASE_REMOTE.replace(
  '<PASSWORD>',
  process.env.DBPASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    //console.log(con.connection);
    // console.log('DB Connected succesfull.......');
  });

// Creating a web server
const port = process.env.PORT || 5000;
// const host = 'localhost';
const server = app.listen(port, 'localhost', (req, res) => {
  console.log('App is running on ' + process.env.NODE_ENV + ' mode');
  // console.log(`App is running on port ${port} ......`);
});
process.on('unhandledRejection', (err) => {
  // console.log(err.name, err.message);
  // console.log('Unhandled rejection....');

  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  // console.log(err.name, err.message);
  // console.log('Uncaught Exception....');

  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  // console.log('SIGTERM received. shutting down gracefully ..');
  server.close(() => {
    // console.log('Process terminated!');
  });
});
