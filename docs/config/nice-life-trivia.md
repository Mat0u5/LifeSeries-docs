# Nice Life Trivia Config

:::warning Config Files Only
For now, Nice Life Trivia and trivia rewards can only be configured via the config files, and not the in-game GUI.
:::

## Configuring Tasks

Trivia can be customized in the config files:
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
