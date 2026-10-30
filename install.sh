gcc strm.c -o strm

sudo mkdir -p /opt/strm

sudo chown -R jrb /opt/strm

rsync -a --exclude='.git' ./ /opt/strm/

sudo ln -sf /opt/strm/strm /usr/bin/strm
