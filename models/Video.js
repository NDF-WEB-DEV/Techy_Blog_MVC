const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Video extends Model {}

Video.init(
{
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
},
post_id: {
type: DataTypes.INTEGER,
references: {
model: 'Post',
key: 'id',
},
}

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'video',
}
);

module.exports = Video;