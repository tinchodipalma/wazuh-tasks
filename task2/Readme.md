## Task2: Extracting alert information

Create a script that extracts the following fields for the last alert in the alerts.json file:
Timestamp
Rule ID
Rule Level
Log file

If the script is called using the argument --count YYYY/MM/DD, it returns the number of alerts generated that day.

Example:

```
$ node ./script
Last alert information:
- Timestamp: 2018 Feb 17 20:14:41
- Rule ID: 5502
- Rule Level: 3
- Log file: /var/log/auth.log
```

```
$ node ./script.js --count 2018/02/17
Alerts generated in 2018/02/17: 23.
```

#### Requirements

- `node.js v12.x.x` or highter

#### How to execute?

```
node ./task2 [--count <YYYY/MM/DD>] [--file </path/to/alerts.json>]
```

##### Examples

- `node ./task2`
- `node ./task2 --count 2020/09/09`
- `node ./task2 --file /var/ossec/logs/alerts/alerts.json`
- `node ./task2 --count 2020/09/09 --file /var/ossec/logs/alerts/alerts.json`
