# `/lifeskins` command

:::info Life Skins
You can learn more about Life Skins [on this page](/features/lifeskins)
:::

## Life Skins Management

<div class="command-block">

### `/lifeskins reload`

Reloads the skin files from the disk.

```
/lifeskins reload
```

**Permissions:** Operator

</div>

<div class="command-block">

### `/lifeskins info`

Shows a link to the wiki about the Life Skins.

```
/lifeskins info
```

**Permissions:** Operator

</div>

<div class="command-block">


### `/lifeskins list`

Shows a list of all loaded Life Skins.

```
/lifeskins list
```

**Permissions:** Operator

</div>

## Profile Modify Commands

<div class="command-block">

### `/lifeskins modify skin`

Modifies the skin of an online player.

```
/lifeskins modify skin set <player> <username>
/lifeskins modify skin reset <player>
```

**Arguments:**
- `<player>` - Target player
- `<username>` - The username of new skin owner

**Permissions:** Operator

</div>

<div class="command-block">

### `/lifeskins modify username`

Modifies the username of an online player.
::: info
This will change how the player appears in the tab list, in chat, the display name above their head, in command suggestions, ...
:::

```
/lifeskins modify username set <player> <username>
/lifeskins modify username reset <player>
```

**Arguments:**
- `<player>` - Target player
- `<username>` - The new username

**Permissions:** Operator

</div>
<div class="command-block">

### `/lifeskins modify nickname`

Modifies the nickname of an online player.
::: info
This will change how the player appears in the tab list and in chat.

It will NOT modify the display name above their head, nor their name in command suggestions.
:::

```
/lifeskins modify nickname set <player> <nickname>
/lifeskins modify nickname reset <player>
```

**Arguments:**
- `<player>` - Target player
- `<nickname>` - The new nickname

**Permissions:** Operator

</div>


---

::: details Command Permissions Summary

| Command                      | Permission Required |
|------------------------------|---------------------|
| `/lifeskins info`            | Operator            |
| `/lifeskins reload`          | Operator            |
| `/lifeskins list`            | Operator            |
| `/lifeskins modify skin`     | Operator            |
| `/lifeskins modify username` | Operator            |
| `/lifeskins modify nickname` | Operator            |

:::

---
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