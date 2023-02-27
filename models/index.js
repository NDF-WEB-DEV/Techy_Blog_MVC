const User = require('./User');
const Post = require('./Post');
const Video = require('./Video');

User.hasMany(Post, { 
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, { 
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Video.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// Video.belongsToMany(User, {
//     through: {
//         model: Post,
//         unique: false
//     },
//     as: 'user_video'
// });

module.exports = {User, Post, Video};