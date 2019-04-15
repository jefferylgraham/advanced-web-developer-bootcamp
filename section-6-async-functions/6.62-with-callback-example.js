function sendMessage(msg, cb) {
  return cb(msg);
}

sendMessage("Message for console", console.log);
sendMessage("Message for alert", alert);

var answer = sendMessage("Are you sure", confirm);