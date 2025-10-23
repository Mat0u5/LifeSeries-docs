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

### Season-Specific
These commands are only available in specific seasons:

- [`/soulmate`](/commands/detailed/soulmate) - Only in Double Life
- [`/task`](/commands/detailed/task) - Only in Secret Life
- [`/health`](/commands/detailed/health) - Only in Secret Life
- [`/wildcard`](/commands/detailed/wildcard) - Only in Wild Life
- [`/superpower`](/commands/detailed/superpower) - Only in Wild Life
- [`/snail`](/commands/detailed/snail) - Only in Wild Life
- [`/hunger`](/commands/detailed/hunger) - Only in Wild Life (Hunger wildcard)

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
