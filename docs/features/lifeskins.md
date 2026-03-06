# Life Skins

:::info Original Creator
Life Skins were originally published by [DianacraftGaming](https://modrinth.com/mod/lifeskins) as an addon for the Life Series mod.

With permission, the functionality was implemented by me into the main mod.
:::

Life Skins add a way to automatically change your skin based on the number of lives you're on, without having to relog or relaunch the game.

## File Structure

All Life Skins are stored in the `config/lifeseries/lifeskins/` folder.

To add new skins for a player, let's say `Grian`, you must make a folder with the player's username in the lifeskins folder - `config/lifeseries/lifeskins/Grian/`.

Then, add any player skins you wish inside the `Grian` folder, making sure you name them in the following way: `<life_count>.png`.

So, for example if I have three different skins for 3, 2 and 1 life, I'll add them to the folder and name them `3.png`, `2.png` and `1.png`.

:::tip
You can also add skins for zero lives and unassigned lives, `0.png` and `null.png`, respectively.
:::

:::tip
You don't have to add skins for all life counts, the mod will automatically choose the skin with the closest number of lives that is less, or equal to the number of lives the player has.

If the mod cannot assign a skin file to you, it will revert to your original skin

For example, if I only add `4.png` and `2.png`, the following skin assignments will happen:
 - 5+ Lives -> `4.png`
 - 4 Lives -> `4.png`
 - 3 Lives -> `2.png`
 - 2 Lives -> `2.png`
 - 1 Life -> Original Skin
 - 0 Lives -> Original Skin
:::

:::info Limited Life
In Limited life, the number of lives will be in seconds, so if i want to add a skin for 16+ hours, it will be `57600.png`
:::

:::tip Slim Skins
Adding `_slim` behind any skin file name will cause that skin to be loaded in its slim variant, for example `1_slim.png`.
:::


## [Life Skins Command](/commands/detailed/lifeskins)

Once you add any skins, you have to run the `/lifeskins reload` command, to reload them in game.

You can also run `/lifeskins list`, to list all the loaded skins, confirming your folder structure is correct.


## Related Pages

- [Config Overview](/config/overview) - Configure the mod settings
- [Life Skins Command](/commands/detailed/lifeskins) - Life Skins Command
