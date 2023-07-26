const mongoose = require('mongoose');

const mongoDBConection = async () => {
    await mongoose.connect('mongodb+srv://okoyechukwunonso17:noscarosylva17@sylvacluster.1hqwfzy.mongodb.net/classcode')
    .then((info)=> {
        console.log('connection established', info);
    })
    .catch(err => console.log('error connecting', err))

}
module.exports = mongoDBConection
