# 🎉 Discord Mass DM Bot 🎉

## 📜 Description

This Discord bot is designed to send direct messages (DMs) to all members of a server with a single command.

## 🚀 Features

- **Mass DM Sending**: Send a direct message to all server members with one command. 📩
- **Security**: Only the bot owner (specified in the config) can use the DM command. 🔐

## 🛠️ Prerequisites

Before running this bot, ensure you have the following:

1. **Node.js**: A JavaScript runtime environment. Install Node.js from [nodejs.org](https://nodejs.org/) (version 18 or higher recommended). 🖥️
2. **npm**: Node.js package manager, which comes bundled with Node.js. 📦
3. **A valid Discord bot token**: Obtain this from the [Discord Developer Portal](https://discord.com/developers/applications). 🎟️

## 📥 Installation

1. **Clone the repository** (if not already done):
    ```bash
    git clone https://github.com/g0k1/Discord-Mass-DM-s.git
    cd discord-mass-dm-bot
    ```

2. **Install Node.js and npm**:

   - **Windows**:
     Download the installer from [Node.js official website](https://nodejs.org/) and follow the installation instructions.

   - **macOS**:
     You can use Homebrew to install Node.js and npm:
     ```bash
     brew install node
     ```

   - **Linux**:
     Use a package manager like `apt` (Debian/Ubuntu) or `dnf` (Fedora):
     ```bash
     # For Debian/Ubuntu
     sudo apt update
     sudo apt install nodejs npm
     
     # For Fedora
     sudo dnf install nodejs npm
     ```

3. **Install project dependencies**:
    ```bash
    npm install
    ```

4. **Configure `config.json`**:
    Create a `config.json` file in the root of your project with the following content:
    ```json
        {
          "prefix": "YOU_PREFIX", 
          "token": "YOUR_TOKEN",
          "ownerId": "YOUR_DISCORD_ID"
        }
    ```
    Replace the placeholder values with your actual bot information and preferred status messages.

## 🚀 Usage

1. **Start the bot**:
    ```bash
    node index.js
    ```

2. **Use Commands**:
    - **`[YOU_PREFIX]dm <message>`**: Sends the specified message as a DM to all server members. Only the user with the ID matching `ownerId` in `config.json` can use this command.

## ⚠️ Notes

- **Permissions**: Ensure the bot has the necessary permissions to send DMs to members.
- **Discord Policy Compliance**: Please adhere to [Discord's Community Guidelines](https://discord.com/guidelines) and avoid spamming to prevent misuse of the bot.

---

This project is provided as-is, with no warranties of any kind. Use at your own risk. 🚀
