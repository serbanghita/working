## Special characters

https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html#Special-Parameters

# Wait for process to have a PID


#!/bin/bash

dir=$(pwd)
bin_name="process_binary"
echo $dir

# Start process
$dir/$bin_name &
proc_pid=$!

echo -e "Waiting for PID of $bin_name ..."
wait $proc_pid
echo $proc_pid



# Loop until selenium server is available
printf 'Waiting Selenium Server to load\n'
until $(curl --output /dev/null --silent --head --fail http://localhost:4444/wd/hub); do
    printf '.'
    sleep 1
done


# replaced this with https://httpie.io/
function sendHttpRequest() {
  curl -i -X $1 "${2}" ${@:3}
}

# from https://www.markusdosch.com/2022/05/generating-a-random-string-on-linux-macos/
function generatePassword() {
  chars="${1:-64}"
  cat /dev/urandom | LC_ALL=C tr -dc 'a-zA-Z0-9' | fold -w $chars | head -n 1
}

# alias http='sendHttpRequest'
# alias generatepassword='generatePassword'
