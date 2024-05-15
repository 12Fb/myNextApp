const { Sequelize } = require("sequelize");
const dbName = "my_database";
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "my_database.db",
});
//连接数据库
function createDb() {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connection established.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
}
//测试连接
async function testConnect() {
  try {
    await sequelize.authenticate();
    console.log(" successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
//关闭连接
function closeConection() {
  sequelize.close().then((res) => {
    console.log("Connection Closed");
  });
}
// testConnect();
module.exports = { sequelize };
