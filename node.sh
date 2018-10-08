tree node_modules/ | wc -l

ls node_modules | wc -l
du -sh node_modules


cat packages.json \
  | jq -r '.packages[] | [.location, .version] | join(" ")' \
  | awk 'BEGIN {print "Entries:"} {print "  * " $1 " : " $2}'
