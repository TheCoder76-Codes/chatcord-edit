const moment = require('moment');

function formatMessage(username, text, id) {
  var msgObj = {
    username: username,
    text: text,
    time: moment().format('h:mm a'),
    id: id,
  }
  return msgObj;
}

module.exports = formatMessage;
