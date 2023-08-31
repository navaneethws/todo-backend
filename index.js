const express = require('express')

const cors = require('cors')

const logic = require('./services/logic')

const server = express()

server.use(cors({
    origin: 'http://localhost:3000'
}))

server.use(express.json())

server.listen(8000,()=>{
    console.log('todo server started on port 8000');
})

//get lists api
server.get('/get-all-lists',(req,res)=>{
    logic.allList().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// add new list

server.post('/add-list',(req,res)=>{
    logic.addList(req.body.id,req.body.task)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})