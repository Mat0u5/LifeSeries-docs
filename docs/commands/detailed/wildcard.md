#  `/wildcard` Command

Manage wildcards in Wild Life.

::: info Availability
This command is only available in **Wild Life**.
:::

---

## Information Commands

<div class="command-block">

### `/wildcard list`

Shows a list of all available wildcards.

```
/wildcard list
```

**Permissions:** Operator

</div>

<div class="command-block">

### `/wildcard listActive`

Shows a list of all currently active wildcards.

```
/wildcard listActive
```

**Permissions:** Operator

</div>

---

## Managing Wildcards

<div class="command-block">

### `/wildcard activate`

Activates a specific wildcard.

```
/wildcard activate <wildcard>
```

**Arguments:**
- `<wildcard>` - The wildcard name to activate

::: info List of Wildcards (values for `<wildcard>`)
`size_shifting`, `hunger`, `snails`, `time_dilation`, `trivia`, `mob_swap`, `superpowers`, `callback`
:::

**Permissions:** Operator

::: info
Multiple wildcards can be active at the same time.
:::

</div>

<div class="command-block">

### `/wildcard deactivate`

Deactivates a specific wildcard.

```
/wildcard deactivate <wildcard>
```

**Arguments:**
- `<wildcard>` - The wildcard name to deactivate

**Permissions:** Operator

</div>

<div class="command-block">

### `/wildcard choose`

Opens a GUI to select which wildcard will be used in the session.

```
/wildcard choose
```

**Requirements:** Life Series mod client-side

**Permissions:** Operator

::: tip Visual Selection
This provides a visual interface to browse and select wildcards, making it easier than typing wildcard names.
:::

::: warning Client-side required
This command only works when you have the mod installed client-side.
:::

</div>

---

## Other


<div class="command-block">

### `/wildcard effect`

```
/wildcard effect dots
/wildcard effect makeItWild

```

**Arguments:**
- `dots` - Shows the three dots to everyone that normally only show up when a wildcard is activated.
- `makeItWild` - Shows the "Make It WILD" title to everyone that normally only shows up when callback ends.

**Permissions:** Operator

</div>


## Related Pages

- [Superpower Command](/commands/detailed/superpower) - Managing superpowers wildcard
- [Snail Command](/commands/detailed/snail) - Managing snails wildcard
- [Hunger Command](/commands/detailed/hunger) - Managing hunger wildcard
- [Wild Life Guide](/seasons/wild-life) - Full Wild Life mechanics
- [Config Overview](/config/overview) - Configure wildcard settings

---

::: details Command Permissions Summary

| Command                | Permission Required |
|------------------------|---------------------|
| `/wildcard list`       | Operator            |
| `/wildcard listActive` | Operator            |
| `/wildcard activate`   | Operator            |
| `/wildcard deactivate` | Operator            |
| `/wildcard choose`     | Operator            |
| `/wildcard effect`     | Operator            |
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