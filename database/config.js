const mongoose = require('mongoose');

const dbConnection = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFiendAndModify: false
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('db ok')
    } catch (error) {
        console.log(error)
        throw new Error('Error run db');
    }
}

module.exports = {
    dbConnection
}