# Command Overview

This page provides a basic overview of which commands exist in the Life Series mod.<br>
Each of the following commands has further sub-commands, as detailed in:
- [Global Commands](/commands/global)
- [Season-Specific Commands](/commands/season-specific)

## Core Commands

### Always Available
These commands work regardless of which season is selected:

- [`/lifeseries`](/commands/detailed/lifeseries) - Main mod management command
- [`/session`](/commands/detailed/session) - Manage session timing
- [`/lives`](/commands/detailed/lives) - Manage player lives
- [`/claimkill`](/commands/detailed/claimkill) - Claim credit for indirect kills
- [`/watcher`](/commands/detailed/watcher) - Manage spectator watchers
- [`/subin`](/commands/detailed/subin) - Handle player substitutions
- [`/boogeyman`](/commands/detailed/boogeyman) - Boogeyman manager
- [`/givelife`](/commands/detailed/givelife) - Give lives to others

### Season-Specific
These commands are only available in specific seasons:

#### Double Life:
- [`/soulmate`](/commands/detailed/soulmate)
#### Secret Life:
- [`/task`](/commands/detailed/task)
- [`/health`](/commands/detailed/health)
- [`/gift`](/commands/detailed/gift)
#### Wild Life:
- [`/wildcard`](/commands/detailed/wildcard)
- [`/superpower`](/commands/detailed/superpower)
- [`/snail`](/commands/detailed/snail)
- [`/hunger`](/commands/detailed/hunger)

## Quick Reference

### Most Common Commands

**Setting and configuring a series:**
```
/lifeseries chooseSeries
/lifeseries config
/lifeseries reload
```

**Starting a session:**
```
/session timer set <time>
/session start
```

**Checking and managing lives:**
```
/lives
/lives get <player>
/lives set <player> <lives>
```

## Getting Help

For detailed information about each command, visit their individual documentation pages:

- [Global Commands](/commands/global)
- [Season-Specific Commands](/commands/season-specific)
