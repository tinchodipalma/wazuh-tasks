const fs = require('fs');
const args = process.argv.slice(2);

let alertsFile = '/var/ossec/logs/alerts/alerts.json';
let displayLastAlertData = true;
let selectedDate = null;
args.forEach((arg, index) => {
  if (arg === '--file' || arg === '-f') {
    alertsFile = args[index + 1];
  }

  if (arg === '--count' || arg === '-c') {
    displayLastAlertData = false;
    selectedDate = new Date(Date.parse(args[index + 1]))
      .toISOString()
      .slice(0, 10);
  }
});

const rawData = fs.readFileSync(alertsFile, 'utf8');
const rawAlerts = rawData.trim().split('\n');

let alerts = [];
try {
  alerts = rawAlerts.map((rawAlert) => JSON.parse(rawAlert));
} catch (err) {
  console.error(`${alertsFile} couldn't be parsed`);
}

let filteredAlerts = alerts;
if (selectedDate) {
  filteredAlerts = alerts.filter(({ timestamp }) => {
    return timestamp.slice(0, 10) === selectedDate;
  });
}

if (displayLastAlertData) {
  const lastAlert = filteredAlerts.slice(-1)[0];

  if (lastAlert) {
    const alertDate = new Date(Date.parse(lastAlert.timestamp));
    const month = alertDate.toLocaleString('default', { month: 'short' });
    const dateString = `${alertDate.getFullYear()} ${month} ${alertDate.getDate()} ${alertDate.getHours()}:${alertDate.getMinutes()}:${alertDate.getSeconds()}`;

    console.log('Last alert information:');
    console.log(' - Timestamp:', dateString);
    console.log(' - Rule ID:', lastAlert.rule.id);
    console.log(' - Rule Level:', lastAlert.rule.level.toString());
    console.log(' - Log file:', lastAlert.location);
  } else {
    console.error('Error: there is no alert to be displayed');
  }
} else {
  console.log(
    `Alerts generated in ${selectedDate.split('-').join('/')}: ${
      filteredAlerts.length
    }`
  );
}
