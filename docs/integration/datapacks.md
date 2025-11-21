# Datapack Support

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
- `/give @a[scores={Lives=1}] diamond_sword` - Gives a diamond sword to all red players
- `/clear @a[scores={Lives=0}]` - Clears the inventory of all dead players
- `/title @r[scores={Lives=1..2} title "You are the impostor"` - Shows the title to a random player with between 1 and 2 lives
- `/boogeyman add @a[scores={Lives=4..}]` - Makes everyone with 4 or more lives a boogeyman

## Accessible Mod Information

### Soulmate tracking

In Double Life, all soulmates are given a tag, `soulmate_<index>`, where the index is determined by sorting all players by UUID and assigning consecutive numbers to each pair (starting from 1).

### Boogeymen

All Boogeymen are given the `boogeyman` tag.
Cured Boogeymen are given the `boogeyman_cured` tag.
Failed Boogeymen are given the `boogeyman_failed` tag.

:::info
This is purely to reflect the mod's values, modifying will not change any behavior.
:::

### Secret Society

All Secret Society Members are given the `society_member` tag.

:::info
This is purely to reflect the mod's values, modifying will not change any behavior.
:::

### Active Wildcards

The `Wildcards` scoreboard has a score for each wildcard. `1` if activated, otherwise `0`.

:::info
This is purely to reflect the mod's values, modifying will not change any behavior.
:::

### Player Superpowers

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

### Player Task Difficulty

The `TaskDifficulty` scoreboard has a score for every player, corresponding to the task difficulty (see below)

| Task | Score |
|------|-------|
| NONE | 0     |
| EASY | 1     |
| HARD | 2     |
| RED  | 3     |

### Session Info

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

## Events

In the [config](/config/overview), you can find the Events tab, which has event entries.

Every event entry has a button and a text field.

The button controls whether the original event still happens (`ALLOW`), or whether it gets cancelled (`OVERRIDE`)

![img.png](/events.png)

:::info
Notice that some events cannot be canceled.
:::

The text field is the command that is run with the event.

Each event also has different info which you can access in the command. e.g. `$(Player)` is the player in the event.

You can run normal commands, or if you want something more complex, you can run functions (via a command), in which case the event info will be treated as function macros.

### Examples

#### PvP rewards

![img.png](/events_pvp.png)

:::info
Since this can be done with a single command, we do not need to use functions.

When hovering over the event name, we see that `$(Killer)` and `$(Victim)` are available to us, meaning we can use them in the command.
:::


#### Losing no lives upon death

![img.png](/events_death.png)

:::info
`OVERRIDE` signifies that the original event - Player Death Punishment - was cancelled. Meaning that no one loses any lives for dying.

Notice that the command field is empty, which is fully valid too - no extra commands are ran.
:::

#### Custom Boogeyman cure reward

Let's look at something more complicated.

![img.png](/events_boogey_cure.png)

:::info
Again, we're cancelling the original event (which has no effect on anything anyway since there's no default cure reward :>)

We're running `/function example:cure`, and along with our `$(Player)` macro, the mod automatically runs this as `/function example:cure {Player:"<playerName>"}`


```
# Inside the example function

$lives add $(Player) 1
$give $(Player) diamond 8

scoreboard objectives add Temp dummy
scoreboard players set Boogeymen Temp 0
execute as @a[tag=boogeyman,tag=!boogeyman_cured,tag=!boogeyman_failed] run scoreboard players add Boogeymen Temp 1

tellraw @a [{"text":"There are "}, {"score": {"name": "Boogeymen", "objective": "Temp"}}, {"text":" Boogeymen remaining."}]

scoreboard objectives remove Temp
```

So this makes it so that every time a boogeyman is cured, they are:
1) Awarded 1 life
2) Given 8 diamonds
3) A message is sent out to all players saying `There are X Boogeymen remaining`.

*This is just a proof of concept of what can be done.*
:::

---

## Related Pages

- [Config Overview](/config/overview) - Configure the mod settings
- [Command Overview](/commands/overview) - All the commands this mod adds
- [Feature Overview](/features/overview) - All the features of this mod
