const verifyWebhook = (req, res) => {
  let VERIFY_TOKEN = 'pusher-bot';

  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
};

module.exports = verifyWebhook;

const token = 'EAAqSMjHYMjQBABxS7cUpPVNbfrpaLLCyT3wvRpvswhCcC9bgV57o3DeEaqfH2fAESr6WUwKpiZAwialT6LvhsVLe4RBkcf4ehFMcR3HicDjfTdE3m9IHZBBM5VtljWZCCJL1c1Cao0TwXDTRvWOkZCZC8DMVpNhZCsFqIXFHW8hQZDZD'