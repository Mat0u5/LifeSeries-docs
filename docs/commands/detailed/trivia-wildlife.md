#  `/trivia` Command

Manage the Trivia wildcard in Wild Life.

::: info Availability
This command is only available in **Wild Life**.
:::

---

## Commands

<div class="command-block">

### `/trivia assign`

This command allows you to pre-assign what someone's trivia question will be.

```
/trivia assign <player/s> <difficulty> <question>
/trivia assign <player/s> reset
```

**Arguments:**
- `<player/s>` - Target player or players
- `<difficulty>` - The task difficulty - `easy`, `normal` or `hard`
- `<question>` - The trivia question you want to assign - command suggestions show all possibilities

- `reset` - Resets any pre-assigned trivia, so it will be random again

**Permissions:** Operator

:::info
You can only assign existing trivia (those in the files).
:::

</div>

<div class="command-block">

### `/trivia bot`

Spawns the trivia bot for a player/s

```
/trivia bot spawnFor <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/trivia punishment`

Sets / clears the trivia punishment for players.

```
/trivia bot clear <player/s>
/trivia bot set <player/s> <punishment>
```

**Arguments:**
- `<player/s>` - Target player or players
- `<punishment>` - one of: `random`, `slippery_ground`, `hunger`, `beeswarm`, `moonjump`, `robotic_voice`, `binding_armor`, `ravager`, `hearts`, `infestation`, `gigantification`

**Permissions:** Operator

</div>


---

## Configuration

::: tip Custom Trivia Questions
You can add custom trivia questions, read more in [Wild Life Trivia](/config/wild-life-trivia)
:::

---

## Related Pages

- [Wildcard Command](/commands/detailed/wildcard) - Managing wildcards
- [Wild Life Guide](/seasons/wild-life) - Full Wild Life mechanics
- [Wild Life Trivia](/config/wild-life-trivia) - Custom trivia questions
- [Config Overview](/config/overview) - Configure settings

---

::: details Command Permissions Summary

| Command              | Permission Required |
|----------------------|---------------------|
| `/trivia assign`     | Operator            |
| `/trivia bot`        | Operator            |
| `/trivia punishment` | Operator            |
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