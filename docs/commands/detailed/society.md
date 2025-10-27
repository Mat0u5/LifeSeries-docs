#  Secret Society Commands

Manage the Secret Society system.

::: info Availability
These commands are only available when the **Secret Society has been enabled** in the config.<br>
It is enabled by default in Past Life.<br>
For more information, see the [Secret Society Overview](/features/secret-society).
:::

---

## Admin Commands

### Society Management

<div class="command-block">

### `/society begin`

Starts the Secret Society with a random secret word.

```
/society begin
```

**Permissions:** Operator

::: info Random Word
The word is randomly selected from a list configured in the config file.
:::

</div>

<div class="command-block">

### `/society begin <secret_word>`

Starts the Secret Society with a specific word.

```
/society begin <secret_word>
```

**Arguments:**
- `<secret_word>` - The secret word members will have

**Permissions:** Operator

</div>

<div class="command-block">

### `/society end`

Ends the Secret Society.

```
/society end
```

**Permissions:** Operator

</div>

### Member Management

<div class="command-block">

### `/society members add`

Adds a player to the Secret Society.

```
/society members add <player>
```

**Arguments:**
- `<player>` - Target player

**Permissions:** Operator
:::info Automatically Added
Players are automatically added to the Society when the society starts.<br>
This command is only for manual intervention.
:::
</div>

<div class="command-block">

### `/society members remove`

Removes a player from the Secret Society.

```
/society members remove <player>
```

**Arguments:**
- `<player>` - Target player

**Permissions:** Operator

</div>

<div class="command-block">

### `/society members list`

Shows the current members of the Secret Society.

```
/society members list
```

**Permissions:** Operator

::: warning Spoilers
This reveals who is in the Secret Society! Use carefully if you are playing in the session too.
:::

</div>

---

## Player Commands

<div class="command-block">

### `/initiate`

Used by Society members to initiate a new member.

```
/initiate
```

**Requirements:** Must be a Society member

**Permissions:** None required

</div>

<div class="command-block">

### `/society success`

Report that you successfully completed your Society task.

```
/society success
```

**Requirements:** Must be a Society member

**Permissions:** None required

</div>

<div class="command-block">

### `/society fail`

Report that you failed your Society task.

```
/society fail
```

**Requirements:** Must be a Society member

**Permissions:** None required

</div>

## Configuration

::: tip Society Settings
Configure Secret Society settings in the [config](/config/overview):
- Secret word list
- Member counts
- And more...
:::

---

## Related Pages

- [Secret Society Overview](/features/secret-society) - Detailed info about the Secret Society
- [Config Overview](/config/overview) - Configure Secret Society settings

---

::: details Command Permissions Summary

| Command                        | Permission Required   |
|--------------------------------|-----------------------|
| `/society begin`               | Operator              |
| `/society end`                 | Operator              |
| `/society members add`         | Operator              |
| `/society members remove`      | Operator              |
| `/society members list`        | Operator              |
| `/initiate`                    | None (Society member) |
| `/society success`             | None (Society member) |
| `/society fail`                | None (Society member) |
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