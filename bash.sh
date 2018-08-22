## Special characters

https://www.gnu.org/software/bash/manual/html_node/Special-Parameters.html#Special-Parameters

# Wait for process to start

```
#!/bin/bash

dir=$(pwd)
bin_name="process_binary"
echo $dir

# Start process
$dir/$bin_name &
proc_pid=$!

echo -e "Waiting for $bin_name to start ..."
wait $proc_pid
```
