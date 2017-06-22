module.exports = function(mongoose) {
    const UserSchema = mongoose.Schema({
        email: {
            type: String
        },
        password: {
            type: String
        }
    });
    return User = mongoose.model("User", UserSchema);
}
