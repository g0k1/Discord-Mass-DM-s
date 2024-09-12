# 🎉 Discord Mass DM Bot 🎉

## 📜 Description

This Discord bot is designed to send direct messages (DMs) to all members of a server with a single command. Additionally, it rotates its status message every 5 seconds between two custom messages configured in the settings.

## 🚀 Features

- **Mass DM Sending**: Send a direct message to all server members with one command. 📩
- **Status Message Rotation**: Changes the bot's status message every 5 seconds. 🔄
- **Security**: Only the bot owner (specified in the config) can use the DM command. 🔐

## 🛠️ Prerequisites

Before running this bot, ensure you have the following:
- Node.js (version 18 or higher recommended) 🖥️
- A valid Discord bot token 🎟️
- Access to the Discord Developer Portal to configure your bot

## 📥 Installation

1. **Clone the repository** (if not already done):
    ```bash
    git clone https://github.com/your-repository/discord-mass-dm-bot.git
    cd discord-mass-dm-bot
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure `config.json`**:
    Create a `config.json` file in the root of your project with the following content:
    ```json
    {
      "ownerId": "your-owner-id",
      "token": "your-bot-token",
      "prefix": "!",
      "StatusMessage1": "caca",
      "StatusMessage2": "pipi"
    }
    ```
    Replace the placeholder values with your actual bot information and preferred status messages.

## 🚀 Usage

1. **Start the bot**:
    ```bash
    node index.js
    ```

2. **Use Commands**:
    - **`!dm <message>`**: Sends the specified message as a DM to all server members. Only the user with the ID matching `ownerId` in `config.json` can use this command.

## ⚠️ Notes

- **Permissions**: Ensure the bot has the necessary permissions to send DMs to members.
- **Discord Policy Compliance**: Please adhere to [Discord's Community Guidelines](https://discord.com/guidelines) and avoid spamming to prevent misuse of the bot.

## 🐞 Troubleshooting

If you encounter errors such as connection issues or permission problems, check the following:
- Ensure the bot token is valid.
- Verify the bot has the required permissions on the server.
- Review the console output for detailed error messages.

## 🤝 Contributing

If you'd like to contribute to this project, feel free to open a pull request or report issues via the [GitHub repository](https://github.com/your-repository/discord-mass-dm-bot/issues).

---

This project is provided as-is, with no warranties of any kind. Use at your own risk. 🚀
