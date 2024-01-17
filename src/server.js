import express from 'express';
const app = express();

app.use((req, res, next) => {
  res.header('X-Content-Type-Options', 'nosniff');
  next();
});

// ... rest of your code

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
