## Special characters

https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html#Special-Parameters

# Wait for process to have a PID

```
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
```

```
# Loop until selenium server is available
printf 'Waiting Selenium Server to load\n'
until $(curl --output /dev/null --silent --head --fail http://localhost:4444/wd/hub); do
    printf '.'
    sleep 1
done
```
