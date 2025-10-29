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
