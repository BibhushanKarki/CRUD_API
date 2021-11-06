import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'
// import cors from 'cors'

const app = express();
const PORT=process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});