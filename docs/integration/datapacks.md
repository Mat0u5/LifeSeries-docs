# Datapack Support

::: danger In Progress
A LOT more features regarding support for datapacks are planned - this is just a starting point!
:::

## Lives Stuff

### Lives Scoreboard

The Life Series Mod adds a scoreboard objective called `lives` to track the number of lives each player has.

This is the scoreboard that actually stores the lives of each player, and is used by the mod to manage lives.

So running `/scoreboard players add <player> Lives 1` and `/lives reload` (to reload the player colors) is the same as running `/lives add <player> 1`.

### Life Colors Teams

The Life Series Mod uses Minecraft teams to manage player colors based on their number of lives.

More info about this can be found in the [Life System](/features/life-system.md) page.

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

---

## Related Pages

- [Config Overview](/config/overview) - Configure the mod settings
- [Command Overview](/commands/overview) - All the commands this mod adds
- [Feature Overview](/features/overview) - All the features of this mod
