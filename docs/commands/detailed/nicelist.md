#  `/nicelist` Command

Manage the Nice List.

::: info Availability
This command is only available in **Nice Life**.
:::

---

## Information Commands

<div class="command-block">

### `/nicelist list`

Shows the list of all current Nice List members.

```
/nicelist list
```

**Permissions:** Operator

</div>

---

## Managing the Nice List

<div class="command-block">

### `/nicelist end`

Ends the Nice List - skips to the vote results.

```
/nicelist end
```

**Permissions:** Operator

</div>

<div class="command-block">

### `/nicelist add`

Manually adds a player to the Nice List.

```
/nicelist add <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/nicelist remove`

Manually removes a player from the Nice List.

```
/nicelist remove <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>


---

## Related Pages

- [Nice Life](/seasons/nice-life) - About Nice Life
- [Config Overview](/config/overview) - Configure Nice List settings

---

::: details Command Permissions Summary

| Command            | Permission Required |
|--------------------|---------------------|
| `/nicelist list`   | Operator            |
| `/nicelist end`    | Operator            |
| `/nicelist add`    | Operator            |
| `/nicelist remove` | Operator            |
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