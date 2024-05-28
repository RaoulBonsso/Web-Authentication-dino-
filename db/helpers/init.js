class Db {
  constructor() {
    this.Sequelize = require("sequelize");
  }
  init() {
    const dbName = process.env.PGDATABASE;
    const dbUsername = process.env.PGUSER;
    const dbPassword = process.env.PGPASSWORD;
    const dbHost = process.env.PGHOST;
    const dbPort = process.env.PPORT;
    return new this.Sequelize(dbName, dbUsername, dbPassword,{

        host: dbHost,
        port: dbPort,
        dialect: 'postgre',
    })
  }
}

module.exports = new Db().init();