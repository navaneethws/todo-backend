const db = require('./db')

// get lists

const allList = () => {
    return db.List.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    lists: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: 'No data is available'
                }
            }
        }
    )
}


const addList = (id,list_item) => {
    return db.List.findOne({
        list_item
    }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: 'Task already exist'
            }
        }
        else {
            const newTask = new db.List({
                id,
                list_item
            })

            newTask.save()

            return {
                statusCode: 200,
                message: 'new data added successfully'
            }
        }
    })
}

module.exports = {
    allList,
    addList
}