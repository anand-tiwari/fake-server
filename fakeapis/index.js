const candidate = require("./candidate.json");
const tabsData = require("./tabs-data.json");
const sql = require("./sql.json");
// Something more

module.exports = () => ({
    candidate: candidate,
    "tabs-data": tabsData,
    sql: sql,
    // Something more
});