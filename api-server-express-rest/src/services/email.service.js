// Initializing sendgrid object
const sendgrid = require('@sendgrid/mail');
// Insert your API key here
sendgrid.setApiKey(process.env.SEND_GRID_KEY);

exports.send = async (to, subject, body) => {
  sendgrid.send({
    to,
    from: 'fabriciopinheiro713@gmail.com',
    subject,
    html: body,
  });
};
