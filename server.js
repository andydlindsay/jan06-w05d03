require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3;
const villainsRouter = require('./routes/villains');

app.use('/villains', villainsRouter);

app.get('*', (req, res) => {
  res.redirect('/villains');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
