#  `/trivia` Command

Manage the Trivia wildcard in Nice Life.

::: info Availability
This command is only available in **Nice Life**.
:::

---

## Commands

<div class="command-block">

### `/trivia assign`

This command allows you to pre-assign the trivia question for the following night.

```
/trivia assign <question>
/trivia assign reset
```

**Arguments:**
- `<question>` - The trivia question you want to assign - command suggestions show all possibilities

- `reset` - Resets any pre-assigned trivia, so it will be random again

**Permissions:** Operator

:::info
You can only assign existing trivia (those in the files).
:::

</div>

---

## Configuration

::: tip Custom Trivia Questions
You can add custom trivia questions, read more in [Nice Life Trivia](/config/nice-life-trivia)
:::

---

## Related Pages

- [Nice Life Guide](/seasons/nice-life) - Full Nice Life mechanics
- [Nice Life Trivia](/config/nice-life-trivia) - Custom trivia questions
- [Config Overview](/config/overview) - Configure settings

---

::: details Command Permissions Summary

| Command              | Permission Required |
|----------------------|---------------------|
| `/trivia assign`     | Operator            |
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