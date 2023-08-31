const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/todo')

const List = mongoose.model('List',{
    id:String,
    list_item:String
})

module.exports={
    List
}