## Remove all dangling images with `<none:none>` (-f optional)

`docker rmi -f $(docker images -f "dangling=true" -q)`

## Chrome in Docker

https://chromium.googlesource.com/chromium/src/+/lkgr/docs/user_data_dir.md
`google-chrome --user-data-dir=/path/to/foo`

Dockerizing Chrome Security Concerns #341 - about `Failed to move to new namespace: PID namespaces supported, Network namespace supported, but failed: errno = Operation not permitted` error.

Chrome on Docker with custom custom seccomp profile: https://github.com/jessfraz/dockerfiles/blob/master/chrome/stable/Dockerfile#L17
