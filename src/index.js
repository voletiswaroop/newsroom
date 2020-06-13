import express from 'express';
import { log } from 'winston';
import compression from 'compression';

const app = express();

// Compress all response.
app.use(compression());

// Handle default pages
app.use(function (req, res) {
  console.log('Vhost Domain Not Found:', req.get('host'));
  res.send('Current domain is not been handled. Please contact site administrator if this is a valid domain name.');
});

log('info', `Configuring server for environment: ${process.env.NODE_ENV}...`);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => log('info', `Server listening on port ${app.get('port')}...`));