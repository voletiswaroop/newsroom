import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { join } from 'path';
import { log } from 'winston';

/**
 * Configures hot reloading and assets paths for local development environment.
 * Use the `npm start` command to start the local development server.
 *
 * @param app Express app
 */
const configureDevelopment = app => {
	const clientConfig = require('../webpack/client');
	const serverConfig = require('../webpack/server');
	const publicPath = clientConfig.output.publicPath;
	const outputPath = clientConfig.output.path;

	const multiCompiler = require('webpack')([clientConfig, serverConfig]);
	const clientCompiler = multiCompiler.compilers[0];

	app.use(require('webpack-dev-middleware')(multiCompiler, { publicPath }));
	app.use(require('webpack-hot-middleware')(clientCompiler));

	app.use(publicPath, express.static(outputPath));

	app.use(require('webpack-hot-server-middleware')(multiCompiler, {
		serverRendererOptions: { outputPath }
	}));

	app.set('views', join(__dirname, '../public/views'));
};

/**
 * Configures assets paths for production environment.
 * This environment is used in deployment and inside the docker container.
 * Use the `npm run build` command to create a production build.
 *
 * @param app Express app
 */
const configureProduction = app => {
	const clientStats = require('./resources/stats.json');
	const serverRender = require('./resources/app.server.js').default;
	const publicPath = '/resources/';
	const outputPath = join(__dirname, 'resources');

	app.use(publicPath, express.static(outputPath,
		{ maxAge: '30d' } // Setting browser cache for 30 Days.
	));
	app.use(serverRender({
		clientStats,
		outputPath
	}));

	app.set('views', join(__dirname, 'views'));
};

const app = express();
// Adding post request body parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const isDevelopment = process.env.NODE_ENV === 'development';


log('info', `Configuring server for environment: ${process.env.NODE_ENV}...`);
app.use(helmet());

app.use(function (req, res, next) {
	if (req.path.substr(-1) == '/' && req.path.length > 1) {
		var sanitized = req.url
			.replace(/\/+/g, '/')       // replace consecutive slashes with a single slash
			.replace(/\/+$/, '');       // remove trailing slashes
		res.redirect(301, sanitized);
	} else {
		next();
	}
});

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 5000);

if (isDevelopment) {
	configureDevelopment(app);
} else {
	configureProduction(app);
}

app.listen(app.get('port'), () => log('info', `Server listening on port ${app.get('port')}...`));