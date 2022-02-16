const statusAndmessage = require('../../util/statusAndMessage');

const sendResponse = async (response) => {
  const result = statusAndmessage.find((r) => r.messageReceived === response);
  return { status: result.status, message: result.message };
};

module.exports = sendResponse;