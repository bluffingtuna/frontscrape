module.exports = function(mongoose){
    const QueueSchema = mongoose.Schema({
        url: {
            type: String,
            required: true
        },
        pagescore: {
            type: Number,
            default: 0
        }
    });
    return Page = mongoose.model("Page", PageSchema);
}