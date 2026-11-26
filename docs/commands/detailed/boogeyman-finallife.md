#  `/boogeyman finalLife` Command

Manage the Final Life Boogeyman.

::: info Availability
This command is only available in **Final Life**.
:::


---

## Commands

<div class="command-block">

### `/boogeyman finalLife add`

Adds a player as the boogeyman.

```
/boogeyman finalLife add <player>
```

**Arguments:**
- `<player>` - Target player, does not need to be online

**Permissions:** Operator

</div>

<div class="command-block">

### `/boogeyman finalLife remove`

Removes a player as the boogeyman.

```
/boogeyman finalLife remove <player>
```

**Arguments:**
- `<player>` - Target player, does not need to be online

**Permissions:** Operator

</div>

<div class="command-block">

### `/boogeyman finalLife list`

Shows a list of all current boogeymen.

```
/boogeyman finalLife list
```

**Permissions:** Operator

</div>

<div class="command-block">

### `/boogeyman finalLife clear`

Clears all boogeymen.

```
/boogeyman finalLife clear
```

**Permissions:** Operator

</div>

---

## Related Pages

- [Final Life Guide](/seasons/final-life) - Full Final Life mechanics
- [Config Overview](/config/overview) - Configure hunger wildcard settings

---

::: details Command Permissions Summary

| Command             | Permission Required |
|---------------------|---------------------|
| `/boogeyman finalLife`  | Operator            |
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