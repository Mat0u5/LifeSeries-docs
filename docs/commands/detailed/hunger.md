#  `/hunger` Command

Manage the Hunger wildcard in Wild Life.

::: info Availability
This command is only available in **Wild Life** when the Hunger wildcard is active.
:::

---

## Commands

<div class="command-block">

### `/hunger randomizeFood`

Randomizes food properties in the Hunger wildcard.

```
/hunger randomizeFood
```

**Permissions:** Operator

::: info Effect
This randomizes which foods give food/saturation and the effects they give.
:::

</div>


---

## Configuration

::: tip Hunger Wildcard Settings
The Hunger wildcard behavior can be configured in [the config](/config/overview)

You can customize:
- Average effect length
- Average hunger and saturation foods give
- How often food randomizes automatically
- And more...
:::

---

## Related Pages

- [Wildcard Command](/commands/detailed/wildcard) - Managing wildcards
- [Wild Life Guide](/seasons/wild-life) - Full Wild Life mechanics
- [Config Overview](/config/overview) - Configure hunger wildcard settings

---

::: details Command Permissions Summary

| Command                        | Permission Required |
|--------------------------------|---------------------|
| `/hunger randomizeFood`        | Operator            |
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