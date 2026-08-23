#  `/task` Command

Manage tasks in Secret Life.

::: info Availability
This command is only available in **Secret Life**.
:::

::: tip What are Tasks?
In Secret Life, players receive secret tasks they must complete during the session. Successfully completing tasks rewards hearts, while failing costs hearts.
:::

---

## Task Management

<div class="command-block">

### `/task succeed`

Marks a player's task as successfully completed.

```
/task succeed <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

::: info
This is usually not necessary to run, the Secret Keeper buttons handle the logic automatically.
:::

</div>

<div class="command-block">

### `/task fail`

Marks a player's task as failed.

```
/task fail <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

::: info
This is usually not necessary to run, the Secret Keeper buttons handle the logic automatically.
:::

</div>

<div class="command-block">

### `/task reroll`

Re-rolls a player's current easy task, giving them a new, hard one.

```
/task reroll <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

::: info
This is usually not necessary to run, the Secret Keeper buttons handle the logic automatically.
:::

::: warning
Only works if the target's current task is an Easy task.
:::

</div>


<div class="command-block">

### `/task resetUsed`

Resets the stored used tasks, allowing for them all to be picked with an equal chance.
Should be run before the first session if testing was done prior (which would have marked some of the tasks as used).

```
/task resetUsed
```

**Permissions:** Operator

</div>

<div class="command-block">

### `/task changeLocations`

Resets the stored button positions.

```
/task changeLocations
```

**Permissions:** Operator

</div>

---

## Information Commands

<div class="command-block">

### `/task get`

Tells you if a player has a task in their inventory.<br>
Shows an additional, clickable message in chat that can show you the task itself.

```
/task get <player>
```

**Arguments:**
- `<player>` - Target player

**Permissions:** Operator

</div>

<div class="command-block">

### `/task clear`

Removes the task book from a player's inventory.

```
/task clear <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

---

## Task Assignment

<div class="command-block">

### `/task randomize`

Assigns a random task to one or more players.

```
/task randomize <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

::: info Session Start
This is run automatically when the session starts.
:::

</div>

<div class="command-block">

### `/task set`

Sets a specific task for a player on their next task assignment.

```
/task set <player/s> <difficulty> <task>
```

**Arguments:**
- `<player/s>` - Target player or players
- `<difficulty>` - Task difficulty: `easy`, `hard`, or `red`
- `<task>` - Task identifier or description

**Examples:**
```
# Set an easy task for Grian
/task set Grian easy "Make someone laugh"

# Set a hard task for Scar
/task set Scar hard "Kill the Wither"
```

**Permissions:** Operator

::: info
This command overwrites the players current task, if they have one in their inventory.<br>
If they don't have a task in their inventory, this command pre-assigns a task to them - meaning they will be given this task when the next randomization happens.
:::

::: tip Config
You should use the config to set custom tasks, not this command. This command is only for one-time changes.<br>
See [Secret Life Tasks Config](/config/secret-life-tasks)
:::

</div>

<div class="command-block">

### `/task append`

Appends additional text to players' tasks.

If they have the task in their inventory, it is appended instantly, otherwise it is queued for the next task roll.

```
/task append <player/s> <string>
```

**Arguments:**
- `<player/s>` - Target player or players
- `<string>` - The text you want to append to everyone's task.

**Permissions:** Operator

</div>

---

## Related Pages

- [Secret Life Guide](/seasons/secret-life) - Full Secret Life mechanics
- [Config Overview](/config/overview) - Configure Boogeyman settings
- [Secret Life Task Config](/config/secret-life-tasks) - Secret Life tasks
- [Health Command](/commands/detailed/health) - Managing hearts in Secret Life

---

::: details Command Permissions Summary

| Command                 | Permission Required |
|-------------------------|---------------------|
| `/task randomize`       | Operator            |
| `/task set`             | Operator            |
| `/task succeed`         | Operator            |
| `/task fail`            | Operator            |
| `/task reroll`          | Operator            |
| `/task get`             | Operator            |
| `/task clear`           | Operator            |
| `/task resetUsed`       | Operator            |
| `/task changeLocations` | Operator            |
| `/task append`          | Operator            |
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