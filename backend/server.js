const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const feedbacks  =[];;


app.post('/api/feedback', (req, res)=>{
    const {message} = req.body;
    if(!message) return res.status(400).json({error: 'message is required!!'});

    feedbacks.push({message, timestamp:new Date()});
    res.status(201).json({message: 'feedback received!!'});

});

app.get('/api/feedbacks', (req, res)=>{
    res.json(feedbacks);
});

const PORT = 5000;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));
