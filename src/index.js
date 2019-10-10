import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../docs/role-manager-api.json';

const app = express();

if (
  process.env.NODE_ENV === 'development'
    || process.env.NODE_ENV === 'production'
) {
  app.use(logger('dev'));
}

const DEBUG = Debug('dev');
const PORT = process.env.PORT || 5000;

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userRoutes from '../src/routes/usersRoutes'
app.use('/users',userRoutes)

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Role-Manager...'
  });
});

app.get((req, res, next) => {
  const error = new Error('resource not found');
  error.status = 404;
  next();
});

app.get((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: 'an error occurred while loading this page'
    }
  });
});

app.listen(PORT, () => DEBUG(`Server running on port ${PORT}`));

export default app;
