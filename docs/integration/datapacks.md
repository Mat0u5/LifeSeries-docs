# Datapack Support

::: danger In Progress
A LOT more features regarding support for datapacks are planned - this is just a starting point!
:::

## Lives Stuff

### Lives Scoreboard

The Life Series Mod adds a scoreboard objective called `lives` to track the number of lives each player has.

This is the scoreboard that actually stores the lives of each player, and is used by the mod to manage lives.

So running `/scoreboard players add <player> Lives 1` and `/lives reload` (to reload the player colors) is the same as running `/lives add <player> 1`.

### Customizable Life Colors and Amount Boundaries

:::warning INFO
All the following can be modified simply through the config.

Life team colors, life team names, life team boundaries, team can kill boundaries, team gain life boundaries.

More info about this can be found in the [Life System](/features/life-system.md) page.
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

:::info Deprecated
This can be modified through the Config.
:::

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

### Custom Lives System

You can fully disable the built-in lives system of the mod with the `lives_system_disabled` config option, then you can fully replace the system with you custom implementation of lives. 

Note that this disables literally everything. The lives command, default lives, dying removing a life, ... all do not work for example.

### Player selection based on lives

Since the lives are a scoreboard, you can use selectors like `@a[scores={Lives=1}]` in your commands to select players with a certain number of lives.

Examples:
- `/give @a[scores={Lives=0}]` - Clears the inventory of all dead players
- `/title @r[scores={Lives=1..2} title "You are the impostor"` - Shows the title to a random player with between 1 and 2 lives
- `/boogeyman add @a[scores={Lives=4..}]` - Makes everyone with 4 or more lives a boogeyman


## Soulmate tracking

In Double Life, all soulmates are given a tag, `soulmate_<index>`, where the index is determined by sorting all players by UUID and assigning consecutive numbers to each pair (starting from 1).

## Boogeymen

All Boogeymen are given the `boogeyman` tag.

:::info
This is purely to reflect the mod's values, modifying will not change any behavior.
:::

## Secret Society

All Secret Society Members are given the `society_member` tag.

:::info
This is purely to reflect the mod's values, modifying will not change any behavior.
:::

## Active Wildcards

The `Wildcards` scoreboard has a score for each wildcard. `1` if activated, otherwise `0`.

:::info
This is purely to reflect the mod's values, modifying will not change any behavior.
:::

## Player Superpowers

The `PlayerSuperpowers` scoreboard has a score for every player, corresponding to the superpower index (see below).

| Superpower        | Index |
|-------------------|-------|
| NULL              | 0     |
| TIME_CONTROL      | 1     |
| CREAKING          | 2     |
| WIND_CHARGE       | 3     |
| ASTRAL_PROJECTION | 4     |
| SUPER_PUNCH       | 5     |
| MIMICRY           | 6     |
| TELEPORTATION     | 7     |
| LISTENING         | 8     |
| SHADOW_PLAY       | 9     | 
| FLIGHT            | 10    | 
| PLAYER_DISGUISE   | 11    | 
| ANIMAL_DISGUISE   | 12    | 
| TRIPLE_JUMP       | 13    | 
| INVISIBILITY      | 14    | 
| SUPERSPEED        | 15    | 
| NECROMANCY        | 16    | 


:::info
This is purely to reflect the mod's values, modifying will not change any behavior.
:::

## Player Task Difficulty

The `TaskDifficulty` scoreboard has a score for every player, corresponding to the task difficulty (see below)

| Task | Score |
|------|-------|
| NONE | 0     |
| EASY | 1     |
| HARD | 2     |
| RED  | 3     |

## Player Task Difficulty

The `Session` scoreboard has the following scores:
- Length: Session length (in ticks)
- PassedTime: Passed session time (in ticks)
- Status: Session status (see below)

| Session Status | Score |
|----------------|-------|
| UNASSIGNED     | 0     |
| NOT_STARTED    | 1     |
| STARTED        | 2     |
| PAUSED         | 3     |
| FINISHED       | 4     |

---

## Related Pages

- [Config Overview](/config/overview) - Configure the mod settings
- [Command Overview](/commands/overview) - All the commands this mod adds
- [Feature Overview](/features/overview) - All the features of this mod
