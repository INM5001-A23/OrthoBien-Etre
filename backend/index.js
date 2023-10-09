
import express from 'express';
import mongoose from 'mongoose';

// import routes
import categoryRoutes from './routes/category.js'
import productRoutes from './routes/product.js'
import cartRoutes from './routes/cart.js'

// app
const app = express();
const port = 3300;

// db connection
// mongoose.connect('mongodb://localhost:27017/orthobienetre',{useNewUrlParser: true});
mongoose.connect('mongodb+srv://admin:pVYa4Qc0WZzMFQ9U@cluster0.6hiecyv.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true});
mongoose.connection.on('connected', () => console.log('Mongodb Connected...'))
mongoose.connection.on('disconnected', () => console.log('Mongodb Disconnected...'))
mongoose.connection.on('error', err => console.error(err))

// app
app.get('/', (req, res) => {
  res.send('<h2>API is running...</h2>');
});

// Use API Routes
app.use('/categories', categoryRoutes)
app.use('/products', productRoutes)
app.use('/cart', cartRoutes)


app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});


  