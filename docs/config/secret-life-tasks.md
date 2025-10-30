# Secret Life Tasks Config

:::warning Config Files Only
For now, Secret Life Tasks and task rewards can only be configured via the config files, and not the in-game GUI.
:::

## Configuring Tasks

Tasks can be customized in the config files:
- `config/lifeseries/secretlife/easy_tasks.json`
- `config/lifeseries/secretlife/hard_tasks.json`
- `config/lifeseries/secretlife/red_tasks.json`

:::danger Important
Make sure you follow the existing syntax of the JSON files, or it will not work.
:::

---

## Configuring Task Rewards

Task Rewards are stored as a minecraft loot table, and can be customized in the config file:
- `config/lifeseries/secretlife/task_reward_loottable_<version>.json`

`<version>` is the major minecraft version you are using, for example `1.21.9`.

:::tip
I recommend using a loot table editor, such as the [Misode Loot Table Generator](https://misode.github.io/loot-table), to modify the loot table.
:::

:::danger Important
Make sure you follow the existing syntax of the JSON files, or it will not work.
:::

## Related Pages

- [Config Overview](/config/overview) - All available settings.
