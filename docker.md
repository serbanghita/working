Remove all dangling images with `<none:none>` (-f optional)

`docker rmi -f $(docker images -f "dangling=true" -q)`
