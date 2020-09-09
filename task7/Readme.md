## Task7: Linux

Note: these exercises are intended to be done using a CLI.

- List all system users.
- Create an empty file.
- Modify the owner for that file.
- Print last 5 entries from a log file.
- Print the very first line from a log file.
- Enable and disable a service.
- Restart a service.
- Find all occurrences of a word recursively in all files from a directory.
- Extract all lines from a log file that include a certain word.

#### Answers

- List all system users.

```
$ cut -d: -f1 /etc/passwd

  root
  daemon
  bin
  sys
  sync
  games
  man
  lp
  mail
  news
  uucp
  proxy
  www-data
  backup
  list
  irc
  gnats
  nobody
  systemd-network
  systemd-resolve
  syslog
  messagebus
  _apt
  uuidd
  avahi-autoipd
  usbmux
  dnsmasq
  rtkit
  cups-pk-helper
  saned
  avahi
  colord
  hplip
  sddm
  geoclue
  pulse
  _flatpak
  tincho
  gitlog
  gitdaemon
  systemd-timesync
  tss
  tcpdump
  systemd-coredump
  ossec
```

- Create an empty file.

```
$ touch new-file.txt
```

- Modify the owner for that file.

```
# chown root new-file.txt
```

- Print last 5 entries from a log file.

```
# tail -n 5 /var/log/apache2/access.log
```

- Print the very first line from a log file.

```
# head -n 1 /var/log/apache2/access.log
```

- Enable and disable a service.

```
# systemctl enable apache2
# systemctl disable apache2
```

- Restart a service.

```
# systemctl restart apache2
```

- Find all occurrences of a word recursively in all files from a directory.

```
$ grep -r "my word" /path/to/dir
```

- Extract all lines from a log file that include a certain word.

```
$ grep "19:22:43" /var/log/apache2/access.log
```
