#  `/subin` Command

Manage player substitutions when someone needs to be replaced (So when you have a replacement for an offline player).

::: tip What are Substitutions?
Substitutions allow one player to take over for another, inheriting their lives, inventory, position, etc. This is useful when a player is not able to attend a session.
:::

---

## Information Commands

<div class="command-block">

### `/subin list`

Shows all active player substitutions.

```
/subin list
```

**Permissions:** Operator

</div>

---

## Managing Substitutions

<div class="command-block">

### `/subin add`

Substitutes one player for another.

```
/subin add <player> <subinfor>
```

**Arguments:**
- `<player>` - The new player joining (substitute)
- `<subinfor>` - The username of the player being replaced

**Permissions:** Operator

::: info
The player you are subbing in for does NOT need to be online.
:::

</div>

<div class="command-block">

### `/subin remove`

Ends a player's substitution.

```
/subin remove <player>
```

**Arguments:**
- `<player>` - The substitute player

**Permissions:** Operator

::: info
Removing a substitution restores the original player's data.
:::

</div>

---

## Important Notes

::: warning Data Transfer
- Substitution transfers ALL progress from the original player
- The original player's data is essentially "given" to the substitute
- So this means that the player that is substituting can modify the inventory, lives, position,... of the offline player.
:::

---

## Related Pages

//TODO subin page

---

::: details Command Permissions Summary

| Command                        | Permission Required |
|--------------------------------|---------------------|
| `/subin list`                  | Operator            |
| `/subin add`                   | Operator            |
| `/subin remove`                | Operator            |
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