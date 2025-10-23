# Command Overview

This page provides a basic overview of which commands exist in the Life Series mod.<br>
Each of the following commands has further sub-commands, as detailed in:
- [Global Commands](/commands/global)
- [Season-Specific Commands](/commands/season-specific)

## Permission Levels
TODO
Unless specified with "*No permissions required*", all commands require operator permissions.

Commands marked with "*No permissions required*" can be used by any player.

## Core Commands

### Always Available
These commands work regardless of which season is selected:

- `/lifeseries` - Main mod management command
- `/session` - Manage session timing
- `/lives` - Manage player lives
- `/claimkill` - Claim credit for indirect kills
- `/watcher` - Manage spectator watchers
- `/subin` - Handle player substitutions

### Season-Specific
These commands are only available in specific seasons:

- `/boogeyman` - Available when Boogeyman is enabled
- `/soulmate` - Only in Double Life
- `/task` - Only in Secret Life
- `/health` - Only in Secret Life
- `/wildcard` - Only in Wild Life
- `/superpower` - Only in Wild Life
- `/snail` - Only in Wild Life
- `/hunger` - Only in Wild Life (Hunger wildcard)

## Quick Reference

### Most Common Commands

**Configuration:**
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
