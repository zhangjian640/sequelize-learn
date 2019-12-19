const Sequelize = require('sequelize')
const config = {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
    supportBigNumbers: true,
    bigNumberStrings: true
 },
 define: {
  underscored: true,
  charset:'utf8mb4'
}
}
const seq = new Sequelize('koa2_weibo_db', 'root', '数据库密码', config)

module.exports = seq
