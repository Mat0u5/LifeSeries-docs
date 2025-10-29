# Life System

## Overview

The Life System is a core feature of the Life Series mod.

Players start with a given number of lives, and lose one life upon death. When a player loses all their lives, they die, and are put into spectator mode.

:::tip
Use the [`/lives`](/commands/detailed/lives) command to manage lives of any player.
:::

## Life Colors

:::info Life Colors based on lives
- Dark Green = 4+ lives
- Green = 3 lives
- Yellow = 2 lives
- Red = 1 life
- Gray = Dead
  :::

## Customizability

Some aspects of the Life System can be customized in the [Config](/config/overview).

Such as:
- Default number of lives in each season
- Whether players drop their items upon losing their final death
- Tab list showing amount of lives
- Life colors
- And more!


### Customizable Life Colors and Amount Boundaries
:::danger NOTE
This is not a fully finished feature - hence it requiring the usage of commands, and although it works, it will be improved in the future (like with a GUI or something like that).
:::

Life colors use vanilla Teams to set the colors based on amount of lives - teams names have the `lives_x` format, where `x` is the boundary between another team.

By default, there are 6 teams: 
- `lives_null` - Not Assigned
- `lives_0` - Dead
- `lives_1` - Red
- `lives_2` - Yellow
- `lives_3` - Green
- `lives_4` - Dark Green

#### Customizable Life Colors

You can customize the color of teams just like any other team in Minecraft, using the `/team modify <team> color <color>` command.

So for example, the `/team modify lives_4 color blue` command will make players with 4+ lives have blue names.

#### Customizable Amount Boundaries

While the four default boundaries are hardcoded in the mod, and cannot be changed, you can add more boundaries by creating new teams with the `lives_x` format.

Players will be assigned to the team with the highest boundary that is less than or equal to their current amount of lives.

For example, if you create a team called `lives_6`, all players with 6, 7, 8, ... lives will be assigned to that team, and the `lives_4` team will only be for players with 4 and 5 lives.

Example:
```
# Add a team for players with 6 or more lives with the display name "Blue"
/team add lives_6 "Blue"

# Change the color of that team to blue
/team modify lives_6 color blue
```

---

## Related Pages

- [Config Overview](/config/overview) - Configure the mod settings
- [/lives command](/commands/detailed/lives)