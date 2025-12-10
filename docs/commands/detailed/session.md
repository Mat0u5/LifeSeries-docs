#  `/session` Command

Manage session timing and control session state.

See [Session](/features/session) for more info about sessions.

::: info Availability
This command is only available when you have **selected a series**.
:::

---

## Session Control Commands

<div class="command-block">

### `/session start`

Starts the session timer.

```
/session start
```

**Requirements:** A timer must be set using `/session timer set` before starting

**Permissions:** Operator

::: tip What happens when a session starts?
- Session timer begins counting down
- Session-specific features activate (Boogeyman selection, tasks, wildcards, etc.)
:::

</div>

<div class="command-block">

### `/session stop`

Stops the current session.

```
/session stop
```

**Permissions:** Operator

::: info
The session stops automatically when the session timer runs out.
:::

::: warning
Stopping a session cannot be undone. Make sure you want to end the session before using this command.
:::

</div>

<div class="command-block">

### `/session pause`

Pauses or unpauses the session timer.

```
/session pause
```

**Permissions:** Operator

::: info Toggle Command
This command toggles between paused and unpaused states. Run it once to pause, run it again to unpause.
:::

</div>

<div class="command-block">

### `/session pause queue`

Automatically pauses and unpauses the session timer at specific times.

```
/session pause queue <time> <duration>
```

**Arguments:**
- `<time>` - When the session pauses in hours, minutes, and/or seconds format
- `<duration>` - Duration (how long the session will remain paused) in hours, minutes, and/or seconds format

**Permissions:** Operator

```
# Example:
/session pause queue 1h 10m
# Will cause the session to pause at the 1 hour mark for 10 minutes.
```

</div>

---

## Timer Management Commands

<div class="command-block">

### `/session timer set`

Sets the session duration to a specific time.

```
/session timer set <time>
```

**Arguments:**
- `<time>` - Duration in hours, minutes, and/or seconds format

::: info Time Format Examples
- `30m` - 30 minutes
- `1h` - 1 hour
- `1h45m` - 1 hour and 45 minutes
- `2h35m20s` - 2 hours, 35 minutes, and 20 seconds
- `90s` - 90 seconds
:::

**Permissions:** Operator

</div>

<div class="command-block">

### `/session timer add`

Adds time to the current session length.

```
/session timer add <time>
```

**Arguments:**
- `<time>` - Amount of time to add (same format as `set`)

**Permissions:** Operator

</div>

<div class="command-block">

### `/session timer remove`

Removes time from the current session length.

```
/session timer remove <time>
```

**Arguments:**
- `<time>` - Amount of time to remove (same format as `set`)

**Permissions:** Operator

</div>

<div class="command-block">

### `/session timer fastforward`

Skips forward in time during an active session.

```
/session timer fastforward <time>
```

**Arguments:**
- `<time>` - Amount of time to skip forward (same format as `set`)

**Permissions:** Operator

</div>

<div class="command-block">

### `/session timer remaining`

Displays how much time is left in the current session.

```
/session timer remaining
```

**Permissions:** None required

</div>

<div class="command-block">

### `/session timer showDisplay`

Toggles a permanent session timer display in your actionbar.

```
/session timer showDisplay
```

**Permissions:** None required

::: tip Personal Display
This display is personal to you and doesn't affect other players. Each player can toggle their own timer display.
:::

</div>

## Related Pages

- [Selecting a Season](/guide/selecting-season) - You must select a season first

---

::: details Command Permissions Summary

| Command                         | Permission Required |
|---------------------------------|---------------------|
| `/session start`                | Operator            |
| `/session stop`                 | Operator            |
| `/session pause`                | Operator            |
| `/session timer set`            | Operator            |
| `/session timer add`            | Operator            |
| `/session timer remove`         | Operator            |
| `/session timer fastforward`    | Operator            |
| `/session timer remaining`      | None                |
| `/session timer showDisplay`    | None                |
:::

<style scoped>
.command-block {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.command-block h3 {
  margin-top: 0;
  color: var(--vp-c-brand-1);
  font-family: var(--vp-font-family-mono);
}

.command-block > *:last-child {
  margin-bottom: 0;
}
</style>