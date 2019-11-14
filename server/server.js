import express from 'express';
import createError from 'http-errors';
import bodyParser from 'body-parser';
import routesCharacters from './routes/characters';

const app = express();

app.use(bodyParser.json());
app.use('/characters', routesCharacters);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.json({ error: err.status, message: err.message });
  next();
});

module.exports = app;
