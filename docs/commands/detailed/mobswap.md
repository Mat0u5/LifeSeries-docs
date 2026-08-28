#  `/mobswap` Command

Manage the Mob Swap wildcard in Wild Life.

::: info Availability
This command is only available in **Wild Life** when the Mob Swap wildcard is active.
:::

---

## Commands

<div class="command-block">

### `/mobswap swap`

This command triggers a new mob swap.

```
/mobswap swap
```

**Permissions:** Operator

</div>


---

## Configuration

::: tip Mob Swap Wildcard Settings
The Mob Swap wildcard behavior can be configured in [the config](/config/overview)

You can customize:
- Number of mobs
- Chance of boss mobs
- How often swaps take place
- And more...
:::

---

## Related Pages

- [Wildcard Command](/commands/detailed/wildcard) - Managing wildcards
- [Wild Life Guide](/seasons/wild-life) - Full Wild Life mechanics
- [Config Overview](/config/overview) - Configure mob swap wildcard settings

---

::: details Command Permissions Summary

| Command         | Permission Required |
|-----------------|---------------------|
| `/mobswap swap` | Operator            |
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