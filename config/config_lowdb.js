const low = require('lowdb');

const FileSync = require('lowdb/adapters/FileSync');

const adpter = new FileSync('./database/db.json');

const db = low(adpter);

module.exports = db;