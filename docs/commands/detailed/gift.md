# `/gift` command

::: info Availability
This command is only available in **Secret Life**.
:::

<div class="command-block">

### `/gift`

Give one free heart to another player.

```
/gift <player>
```

**Arguments:**
- `<player>` - Target player

**Permissions:** None required

::: tip Usage limitations
This command can only be run once per session.
:::

</div>

<div class="command-block">

### `/gift reset`

Resets the stored list of gifted hearts, allowing you to gift multiple throughout the session

```
/gift reset <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>


---

## Related Pages

- [Secret Life Guide](/seasons/secret-life) - Full Secret Life mechanics

---

::: details Command Permissions Summary

| Command       | Permission Required |
|---------------|---------------------|
| `/gift`       | None                |
| `/gift reset` | Operator            |
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