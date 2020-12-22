module.exports = {
  //all fields are **required**
  token: 'Nzg5ODA1Nzk0NTI1NzA4Mjkw.X93Z9w.1tOalbTqrbE6Sh-6ts3CfUAf6VU', // Your bot's token
  clockchannel: '790952101315477554', // ID of a voice channel that used to display the time
  timezone: 'Europe/Warsaw', // Timezone (take a look at https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)
  format: 'HH:mm (z)', // Clock format, leave this default seting for 24h format, read more at https://momentjs.com/docs/#/displaying/format/
  updateinterval: 600000, // Discord is ratelimiting us for 10 minutes!
  //[ON WORK, IGNORE THIS FIELD] dev: '400581909912223744', // Developer's ID for sending the errors
}
