#  `/watcher` Command

::: tip What are the Watchers?
Watchers are players who spectate the series without participating in it.

They are unaffected by most season mechanics, for example: They don't have lives, cannot become soulmates, ...

For more info, see the [Watcher Overview](/features/watchers).
:::

---

## Information Commands

<div class="command-block">

### `/watcher info`

Shows information about what Watchers are and their role.

```
/watcher info
```

**Permissions:** Operator

</div>

<div class="command-block">

### `/watcher list`

Displays a list of all current Watchers.

```
/watcher list
```

**Permissions:** Operator

</div>

---

## Managing Watchers

<div class="command-block">

### `/watcher add`

Adds a player to the Watchers.

```
/watcher add <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/watcher remove`

Removes a player from the Watchers.

```
/watcher remove <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

---

## Related Pages

- [Watcher Overview](/features/watchers) - Detailed info about the Wwatchers
- [Config Overview](/config/overview) - Configure Watcher behavior

---

::: details Command Permissions Summary

| Command                        | Permission Required |
|--------------------------------|---------------------|
| `/watcher info`                | Operator            |
| `/watcher list`                | Operator            |
| `/watcher add`                 | Operator            |
| `/watcher remove`              | Operator            |
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