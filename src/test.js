const { sequelize } = require("./dbinit");
const { Model, DataTypes } = require("sequelize");
const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: "green",
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER,
});

(async () => {
  await sequelize.sync({ force: true });
  // 这里是代码
  let a = await CreateUser("hby", 22, 9999);
  console.log("name:", a.name);
})();

//Function

//创建user
async function CreateUser(name = "none", age = 0, cash = 0) {
  const jane = await User.create({ name, age, cash });
  return jane;
}
