import express from 'express';
import ResourceRoutes from './routes/ResourceRoutes';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to FaithConnect API!');
});

// Resource routes
app.use('/api/resources', ResourceRoutes);

export default app;