# Nice Life Trivia Config

## Configuring Tasks

### Config GUI

This is the recommended way to edit trivia questions.

In the [Config](/config/overview), you can find the `Trivia` category under `Season Specific Settings`, where you can edit, add and remove trivia questions and answers.

![img.png](/config_trivia.png)

### Config Files
If you prefer a normal text editor interface over the config GUI, trivia questions can also be changed in the following files, but make sure you follow the JSON syntax:
- `config/lifeseries/nicelife/trivia.json`

:::info Answer Options
You can add any amount of possible answer options to each trivia question, but only one of them can be marked as the correct answer.
:::

---

## Configuring Trivia Rewards

Trivia Rewards are stored as a minecraft loot table, and can be customized in the config file:
- `config/lifeseries/nicelife/trivia_reward_loottable_<version>.json`

`<version>` is the major minecraft version you are using, for example `1.21.9`.

:::tip
I recommend using a loot table editor, such as the [Misode Loot Table Generator](https://misode.github.io/loot-table), to modify the loot table.
:::

:::danger Important
Make sure you follow the existing syntax of the JSON files, or it will not work.
:::

## Related Pages

- [Config Overview](/config/overview) - All available settings.
