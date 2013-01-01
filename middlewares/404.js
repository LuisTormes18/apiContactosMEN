const path = require("path");
const Error404 =  (req, res) => {
res.sendFile('404.html', { root: path.join(__dirname, '../public') });
}
module.exports = Error404;