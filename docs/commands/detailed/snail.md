#  `/snail` Command

Manage snails in Wild Life.

::: info Availability
This command is only available in **Wild Life** when the Snails wildcard is active.
:::

---

## Snail Names

### Player Commands

<div class="command-block">

### `/snail names get`

Shows the name of a player's snail.

```
/snail names get <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** None required

</div>

<div class="command-block">

### `/snail names request`

Request your snail name to be changed.

```
/snail names request <name>
```

**Arguments:**
- `<name>` - Requested snail name

**Permissions:** None required

::: info Requires Approval
An admin must approve your request by clicking on the link in chat.
:::

</div>

### Admin Commands

<div class="command-block">

### `/snail names set`

Sets the name of a player's snail.

```
/snail names set <player> <name>
```

**Arguments:**
- `<player>` - Target player
- `<name>` - Snail name

**Permissions:** Operator

</div>

<div class="command-block">

### `/snail names reset`

Resets a player's snail name back to the default format.

```
/snail names reset <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

::: info Default Name
The default name format is `<player>'s Snail`.
:::

</div>

---

## Snail Textures

<div class="command-block">

### `/snail textures list`

Shows a list of uploaded snail textures.

```
/snail textures list
```

**Permissions:** Operator

</div>

<div class="command-block">

### `/snail textures info`

Shows information on how to create and add snail textures.

```
/snail textures info
```

**Permissions:** Operator

::: tip Custom Textures
This command provides instructions for creating custom snail skins to personalize each player's snail.
:::

</div>

<div class="command-block">

### `/snail textures reload`

Reloads the snail textures from the config files.

```
/snail textures reload
```

**Permissions:** Operator

::: info When to Use
Use this after adding / editing snail texture files to apply them without restarting the server.
:::

</div>

---

## Related Pages

- [Wildcard Command](/commands/detailed/wildcard) - Managing wildcards
- [Wild Life Guide](/guide/seasons/wild-life) - Full Wild Life mechanics

---

::: details Command Permissions Summary

| Command                  | Permission Required |
|--------------------------|---------------------|
| `/snail names get`       | None                |
| `/snail names request`   | None                |
| `/snail names set`       | Operator            |
| `/snail names reset`     | Operator            |
| `/snail textures list`   | Operator            |
| `/snail textures info`   | Operator            |
| `/snail textures reload` | Operator            |
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