# Wild Life Trivia Config


## Configuring Tasks

### Config GUI

This is the recommended way to edit trivia questions.

In the [Config](/config/overview), you can find the `Trivia` category under `Season Specific Settings`, where you can edit, add and remove trivia questions and answers.

![img.png](/config_trivia.png)

### Config Files
If you prefer a normal text editor interface over the config GUI, trivia questions can also be changed in the following files, but make sure you follow the JSON syntax:
- `config/lifeseries/wildlife/easy-trivia.json`
- `config/lifeseries/wildlife/hard-trivia.json`
- `config/lifeseries/wildlife/red-trivia.json`

:::info Answer Options
You can add any amount of possible answer options to each trivia question, but only one of them can be marked as the correct answer.
:::

---

## Configuring Trivia Rewards

Trivia Rewards are stored as a minecraft loot table, and can be customized in the config file:
- `config/lifeseries/wildlife/trivia_reward_loottable_<version>.json`

`<version>` is the major minecraft version you are using, for example `1.21.9`.

:::tip
I recommend using a loot table editor, such as the [Misode Loot Table Generator](https://misode.github.io/loot-table), to modify the loot table.
:::

:::danger Important
Make sure you follow the existing syntax of the JSON files, or it will not work.
:::


---

## Trivia Skins

To create your custom trivia bot textures, you must first open the trivia bot model (found in `./config/lifeseries/wildlife/triviaskins/trivia.bbmodel`) in [Blockbench](https://www.blockbench.net).
![img_1.png](/triviaskins_1.png)

Then, in the paint tab, change the trivia bot skin however you want.
![img_2.png](/triviaskins_2.png)

Then, after you paint the skin however you wish, you need to save the skin.
![img_3.png](/triviaskins_3.png)

Change the skin file name to the username of the player it belongs to.
Then, put it in the trivia skins config folder (`./config/lifeseries/wildlife/triviaskins/`) on the server.

:::info Example
So for example, since my minecraft username is Mat0u5, the file would be located at `./config/lifeseries/wildlife/triviaskins/Mat0u5.png`
:::

Then, run `/trivia textures reload`, and it should be added.

## Related Pages

- [Config Overview](/config/overview) - All available settings.
