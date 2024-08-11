const mongo = require('mongoose')

const BannerSchema = mongo.Schema({
    heading: {
        type : String,
        required : true
    },
    subheading : {
        type : String,
        required : true
    },
    slide: {
        type : String,
        required : true
    },
})

module.exports = mongo.model('banners',BannerSchema)