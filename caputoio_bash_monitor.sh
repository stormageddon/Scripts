#!/bin/bash

url="https://api.mailgun.net/v3/sandbox902b5a6f8e3b4bbd9380a5f5b7cb6b21.mailgun.org/messages"
from="Thor Monitor <postmaster@sandbox902b5a6f8e3b4bbd9380a5f5b7cb6b21.mailgun.org>"
to="mcaputo@cloudmine.me"
date=`date +%Y-%m-%d+%H:%M`
subject="Monitoring for $date"
body="This is my test monitoring email. It should be pretty cool. <br>Try a new line."
user="api:key-578f7bbca33b10b75b48a99d70170f23"
req="-s --user '$user' $url -F from='$from' -F to='$to' -F subject='$subject' -F text='$body' -X \"POST\""

echo $date

operationsNormal=true


#
# Check Overall health of caputo.io
#
caputoIOUp=$(curl --write-out "%{http_code}\n" --silent --output /dev/null "http://www.caputo.io")

if [[ $caputoIOUp == *"5"*  ]]
then
    caputoIOMessage="Caputo IO is down with status code $caputoIOUp"
    operationsNormal=false
elif [[ $caputoIOUp == *"4"* ]]
then
    caputoIOMessage="Caputo IO is down with the status code $caputoIOUp"
    operationsNormal=false
else
    caputoIOMessage="Caputo IO is operating normally with status code $caputoIOUp"
fi


#
# Check overall health of Ghost Blog
#
blogUp=$(curl --write-out "%{http_code}\n" --silent --output /dev/null "http://www.caputo.io/blog")

if [[ $blogUp == *"5"*  ]]
then
    blogMessage="Ghost blog is down with status code $blogUp"
    operationsNormal=false
elif [[ $blogUp == *"4"* ]]
then
    blogMessage="Ghost blog is down with the status code $blogUp"
    operationsNormal=false
else
    blogMessage="Ghost blog is operating normally with status code $blogUp"
fi


#
# Check health of steam_buddy
#
steamBuddyMessage="Status unknown"


#
# If all services are outside of 4xx-5xx responses,
# operations are considered normal
#
if [[ $operationsNormal == true ]]
then
    subject="$date Monitoring on Thor: All is good"
else
    subject="$date Monitoring on Thor: PROBLEM REQUIRES ATTENTION"
fi

curl -i \
-X POST --user "$user" \
-F to="$to" \
-F from="$from" \
-F subject="$subject" \
-F text="Status report for $date
CaputoIO: $caputoIOMessage
Blog: $blogMessage
Steam Buddy: $steamBuddyMessage" \
"https://api.mailgun.net/v3/sandbox902b5a6f8e3b4bbd9380a5f5b7cb6b21.mailgun.org/messages"
