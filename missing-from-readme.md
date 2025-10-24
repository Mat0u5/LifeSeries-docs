![Banner](images/banner.png)

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Mat0u5/LifeSeries/graphs/commit-activity)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Discord](https://badgen.net/discord/online-members/QWJxfb4zQZ?icon=discord&label=Discord&list=what)](https://discord.gg/QWJxfb4zQZ)

[<img alt="modrinth" height="40" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact/available/modrinth_vector.svg">](https://modrinth.com/mod/life-series)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/mat0u5)


# Life Series Mod
This mod is a one-to-one recreation of [Grian](https://www.youtube.com/c/Grian)'s Life Series in minecraft fabric, with as many QOL features as possible. 
That includes automated lives tracking, automated team colors, automated session timer, automatic Boogeyman selection and kill tracking, and much more.<br>
The mod is *server-side required* and optional (**but very much recommended**) on the client-side, as that adds further QOL features (such as GUIs for most of the features, so you don't have to use the commands as much).<br>
Join the [Discord](https://discord.gg/QWJxfb4zQZ) or make an issue if you want to submit any bugs or give suggestions.
## Features

This mod contains every single season of the Life Series, so that's Third Life, Last Life, Double Life, Limited Life, Secret Life, Wild Life and Past Life.<br>
It also contains april fools seasons, Real Life and Simple Life.

| Third Life | Last Life | Double Life | Limited Life | Secret Life | **Wild Life** | Past Life |
|------------|-----------|-------------|--------------|-------------|---------------|-----------|
| Completed  | Completed | Completed   | Completed    | Completed   | Completed     | Completed |

## Wild Life
This is the *only* full recreation of Wild Life that exists publicly, and it took a lot of work to make, so enjoy!<br>
To play Wild Life, the mod must be installed on the server **and on the client** - every player needs to have the mod installed in order to play.<br>
This is because Wild Life contains features which would be impossible to do without client-side modifications.<br>
**NOTE: Wild Life modifies core mechanics of the minecraft game, and using other complex mods or modded clients (Lunar Client, etc.), might cause some of the features not to work properly!!**<br>
*It is also worth mentioning that some features in Wild Life will most probably trigger any anti-cheats, so consider disabling any anti-cheats that you have installed on the server.*

-----
## Usage
### Selecting a series
After first starting a server with this mod installed, you will need to choose the series you want.<br>
You can do this with the `/lifeseries chooseSeries` command (or with the `/lifeseries setSeries <series>` command, if you don't have the mod installed client-side)<br>
Don't worry, you don't have to remember all of this, you will be given instructions in chat ;) <br>

### Starting a session
To start a session, you must first set its length using `/session timer set <time>`. The `<time>` field is a string, which includes the hours, minutes and seconds you want the session to last - example valid values: `30m`,`1h`, `1h45m`, `2h35m20s`,...<br>
After you set your session time, you can simply run `/session start` to start the session.<br>

### The Blacklists
Every season has certain blacklisted items to prevent players from getting to overpowered, just like Grian's series, where some for example banned enchantment tables and similar OP items.<br>
Since I am creating this mod mainly for the group of players I am playing with, the Blacklists are catered to how we feel a balanced series should look like.<br>
For Example most of the seasons have maces, end crystals, strength pots,... banned.<br>
Blacklisted items are automatically deleted from inventories, and cannot even be crafted.<br>
A similar feature to the item blacklist is enchantment clamping, which limits specific (mainly combat) enchantments to level 1.<br>
On series where bookshelves are banned, the enchantment table algorithm has been modified to be able to give all the enchantments (because in vanilla its impossible to get some without bookshelves), and its also possible to get higher levels on some enchants directly from the table without bookshelves (like efficiency, unbreaking, fortune,...)
All of this is configurable, which brings me to the next point, the **Config**.

### Config
- Using `/lifeseries config` while having the Life Series mod installed client-side, along with the Cloth Config mod will open a GUI for you to edit the config from in-game.<br>
- The config files are all located in the `config/lifeseries/*` folder. There are files for every series, where you can modify the gameplay for each one of them.<br>
- Reload the config using `/lifeseries reload` or simply the vanilla `/reload`
- Currently, you can modify these (check the config files themselves for more info):
  - Modify default number of lives, the blacklists, Clamped enchants, spawn egg drop rates, if players drop items when they lose their last life ** and much, much more**.
  - Change tasks in Secret Life (`config/lifeseries/secretlife/` folder) - there are three files, where you can modify / add / remove the easy, hard and red tasks.
  - Modify rewards for completing tasks in Secret Life (`config/lifeseries/secretlife/task_reward_loottable_<version>.json`)
  - Modify rewards for answering trivia correctly in Wild Life (`config/lifeseries/wildlife/trivia_reward_loottable_<version>.json`)
  - Choose snail names and skins, trivia timers, size shifting and much more in Wild Life.
  - I can't mention it all, or we'd be here all day long. You can check the config files yourself to find what is configurable :)

## Commands & Subcommands
Unless specified otherwise (using "*No permissions required.*"), all commands can only be used by opped players (permissionLevel >= 2)

<details open>
<summary>Other series specific commands</summary>

- `/snail` - *These commands are only available when playing Wild Life.*
  - `/snail names get <player>` - Shows you the name of `<player>`'s snail. *No permissions required.*
  - `/snail names set <player> <name>` - Sets the name of `<player>`'s snail to `<name>`.
  - `/snail names reset <player>` - Resets the name of `<player>`'s snail back to `<player>'s Snail`.
  - `/snail names request <name>` - Used when non-admin players want to request their snail name to be set to `<name>`. *No permissions required.*
  - `/snail textures list` - Shows a list of uploaded snail textures.
  - `/snail textures info` - Shows you how to create and upload snail textures.
  - `/snail textures reload` - Reloads the snail textures from the files.
</details>
