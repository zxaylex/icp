# This script is used to set up the environment for Internet Computer development.
# It installs necessary tools like nvm, dfx, and rust, and configures the environment.
# Ensure the script is run with bash
#!/bin/bash

# This project also contains a .devcontainer directory for github codespaces.

# nvm install

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# post nvm install
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# libunwind

sudo apt install libunwind-dev

# dfx install command
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)" # proceed with the installation: press 1
source "$HOME/.local/share/dfx/env"

# node js install
nvm install --lts

# rust instal
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# rust post install
. "$HOME/.cargo/env"            # For sh/bash/zsh/ash/dash/pdksh
source "$HOME/.cargo/env.fish"  # For fish
source $"($nu.home-path)/.cargo/env.nu"  # For nushell

# install dfx 
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"

# post dfx install
source "$HOME/.local/share/dfx/env"
