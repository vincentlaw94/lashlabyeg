const key = require('./lashlabdev-128f70c5a9f2.json');

const SERVICE_ACCT_ID = 'admin-618@lashlabdev.iam.gserviceaccount.com';
const CALENDAR_URL ='https://calendar.google.com/calendar?cid=dmluY2VudGxhdzk0QGdtYWlsLmNvbQ'
const CALENDAR_ID = {
  'primary': 'vincentlaw94@gmail.com',
  'An':'r7v1vgu2suqad80njcn6opmrrs@group.calendar.google.com',
  'Sylyanne':'v5avh27u7fhhkdngt044rf0v9o@group.calendar.google.com'

};
const TIMEZONE = 'America/Edmonton';

module.exports.calendarUrl = CALENDAR_URL;
module.exports.key = key.private_key;
module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.calendarId = CALENDAR_ID;
module.exports.timezone = TIMEZONE;
