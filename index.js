import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT; 

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(PORT,() => console.log(`Server running on port: ${PORT}`));