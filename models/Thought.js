const {Schema,model} = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {type: String, required: true, min_length: 1, max_length: 280, }, 
    createdAt: {type: Date, }
    email: {type: String, required: true, unique: true, match: /^([A-Za-z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([A-Za-z\.]{2,6})$/ }, 
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        },

    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
    ],
},

{
    toJSON: {
        virtuals: true,
    },
        id: false,
},

);

userSchema.virtual("friendCount").get(function(){
    return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;