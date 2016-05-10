# zoeobookkeeping.com

# Prerequisites

1. Install node
```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```
2. Clone repo
```
git clone git@github.com:freedomzoom/freedomzoom.github.io.git
```
3. Install build dependencies
```
cd freedomzoom.github.io
npm install
bower install
```

# Making Changes

1. Edit files in `src/*`
2. Rebuild
```
grunt
```
3. Commit and push
