#!/bin/bash

# Update the system
echo 'Updating and upgrading...'
sudo apt-get update -y
sudo apt-get upgrade -y

# We need some git
echo 'Installing git...'
sudo apt-get install git -y

# Install n for node version management
echo 'Fetching n...'
sudo git clone https://github.com/visionmedia/n.git /usr/local/n
sudo ln -Fs /usr/local/n/bin/n /usr/local/bin/n

echo 'Installing latest stable node...'
sudo n stable

# Giving local over to the vagrant user
echo 'Giving ownership of /usr/local to Vagrant...'
sudo chown -R vagrant:vagrant /usr/local
