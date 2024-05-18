const { DataTypes } = require("sequelize");
const { sequelize } = require("../dbinit");
//定义实例
const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER,
});
//添加user
async function addUser(obj = {}) {
  let re = await findUser(obj.name);
  if (!re) {
    const newUser = await User.create({
      name: obj?.name,
      age: obj?.age,
      cash: obj?.cash,
    });
    console.log("newUser Id(自动生成)", newUser.id);
  } else {
    console.log("用户已存在");
  }
}
//名字查重
async function findUser(name) {
  const re = await User.findOne({
    where: {
      name: name,
    },
  });
  console.log(re?.id);
}
//查找全部
async function getAllUsers() {
  const users = await User.findAll();
  console.log("All users:", JSON.stringify(users, null, 2));
}
//
async function getUserByName(name) {
  const users = await User.findOne({
    where: {
      name: name,
    },
  });
  console.log(users);
}
//执行函数
(async () => {
  console.log("开始执行");
  //   await addUser({ name: "张三", age: 18, cash: 1000 });
  //   await getAllUsers();
  // await findUser("张三");
  await findUser("张三");
})();
