const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

//look into added relationships for Comments

module.exports = { User, Blog };
