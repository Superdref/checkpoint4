const Artist = require("./models/artists");
const Event = reuire("./models/events");
const User = require("./models/users");

//ARTIST
Artist.hasMany(Event, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE"
});

//EVENT
Event.hasMany(Artist, {
  foreignKey: { allowNull: false },
  onDelete: "CASCADE"
});
Event.hasMany(User, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });

//USER
User.hasMany(Event, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
