#  `/vote` Command

Nice List voting in Nice Life.

::: info Availability
This command is only available in **Nice Life** when someone is on the Nice List.
:::

---

## Commands

<div class="command-block">

### `/vote`

Used by the Nice List players to vote for a player to get a life.

```
/vote
```

**Requirements:** Must be a Nice List player.

**Permissions:** None required

</div>

<div class="command-block">

### `/vote forceNext`

Forces the vote type for the next night.

```
/vote forceNext <type>
```

**Arguments:**
- `<type>` - The vote type. One of `none`, `nicelist` or `naughtylist`.


**Permissions:** Operator

</div>


---

## Configuration

::: tip Voting Config
The voting behavior can be configured in [the config](/config/overview)

You can customize:
- Nice list / Naughty list chance
- Amount of players on the nice list
- Amount of players on the naughty list
- Whether reds can be on the naughty list
- And more...
:::

---

## Related Pages

- [Nice Life Guide](/seasons/nice-life) - Full Nice Life mechanics
- [Config Overview](/config/overview) - Configure voting settings

---

::: details Command Permissions Summary

| Command           | Permission Required |
|-------------------|---------------------|
| `/vote`           | None                |
| `/vote forceNext` | None                |
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