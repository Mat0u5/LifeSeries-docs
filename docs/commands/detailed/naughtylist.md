#  `/naughtylist` Command

Manage the Naughty List.

::: info Availability
This command is only available in **Nice Life**.
:::

---

## Information Commands

<div class="command-block">

### `/naughtylist list`

Shows the list of all current Naughty List members.

```
/naughtylist list
```

**Permissions:** Operator

</div>

---

## Managing the Naughty List

<div class="command-block">

### `/naughtylist end`

Ends the Naughty List.

```
/naughtylist end
```

**Permissions:** Operator

</div>

<div class="command-block">

### `/naughtylist add`

Manually adds a player to the Naughty List.

```
/naughtylist add <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/naughtylist remove`

Manually removes a player from the Naughty List.

```
/naughtylist remove <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>


---

## Related Pages

- [Nice Life](/seasons/nice-life) - About Nice Life
- [Config Overview](/config/overview) - Configure Naughty List settings

---

::: details Command Permissions Summary

| Command            | Permission Required |
|--------------------|---------------------|
| `/naughtylist list`   | Operator            |
| `/naughtylist end`    | Operator            |
| `/naughtylist add`    | Operator            |
| `/naughtylist remove` | Operator            |
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