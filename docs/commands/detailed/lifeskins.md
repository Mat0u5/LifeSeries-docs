# `/lifeskins` command

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