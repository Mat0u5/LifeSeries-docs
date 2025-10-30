# Config Overview

This mod has over 100 configurable features, so anyone can play exactly the way they want to.

Each season has its own separate config file - So that means that changing settings for one season does not affect any other seasons.

## Accessing The Config

The config can be accessed in two main ways:

### Via the in-game GUI:
:::warning This is the recommended way to access the config
:::

![config.png](/config.png)

To access the in-game config GUI, you can use the `/lifeseries config` command.

That will open up a interactive menu where you can change different aspect of the mod.

Some more complex features are not **yet** available in the GUI form, so for those you will need to use the second method:

### Via the config files:

The config files are located in the `config/lifeseires/*` folder of your minecraft or server directory.

## Reloading
:::tip Reloading
After changing the config files, you need to run the `/lifeseries reload` command to apply the changes.

Changing the config with the in-game GUI will automatically apply the changes without needing to reload.
:::

## Client vs Server Config

Some config options are client-side only, and most are server-side.

`/lifeseries config` opens both the client and server config options, but only players with operator permissions can change the server-side options.

Client-side config options only affect your own game, and do not affect other players on a server - for example, colored hearts based on lives.

Server-side config options affect all players on the server - for example, starting amount of lives.

## Global vs Season Config Options

Global config options are available in all seasons, such as being able to turn on/off the Boogeyman, or changing the starting amount of lives.

Season config options are specific to each season, such as wildcard options for Wild Life, and they are only available in that season.

## Advanced Configs
Some configurable features of the mod are more complex, and **require** editing JSON files in the `config/lifeseries/*` folder.

That includes:
- [Secret Life Tasks](/config/secret-life-tasks)
- [Wild Life Trivia](/config/wild-life-trivia)
- [Wild Life Snails](/config/wild-life-snails)
