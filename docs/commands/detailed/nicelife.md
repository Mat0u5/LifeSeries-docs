#  `/nicelife` Command

Various commands in Nice Life.

::: info Availability
This command is only available in **Nice Life**.
:::

---

## Commands

<div class="command-block">

### `/nicelife wakeUp`

Used for waking up players manually if something goes wrong.

```
/nicelife wakeUp
/nicelife wakeUp <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/nicelife skipNight`

Used for skipping the night manually and waking everyone up if something goes wrong.

```
/nicelife skipNight
```

**Permissions:** Operator

</div>


## Related Pages

- [Nice Life Guide](/seasons/nice-life) - Full Nice Life mechanics
- [Config Overview](/config/overview) - Configure voting settings

---

::: details Command Permissions Summary

| Command               | Permission Required |
|-----------------------|---------------------|
| `/nicelife wakeUp`    | Operator            |
| `/nicelife skipNight` | Operator            |
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