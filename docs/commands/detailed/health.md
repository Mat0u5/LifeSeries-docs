#  `/health` Command

Manage player health in Secret Life.

::: info Availability
This command is only available in **Secret Life**.
:::

::: tip Health System
In Secret Life, players have a separate health system from vanilla Minecraft - player hearts cannot be regenerated normally.<br>
Completing tasks grants hearts, while failing tasks costs hearts.
:::

::: warning
In Minecraft, 1 heart is 2 health points.<br>
So when setting someone to, lets say, 20 hearts, you run `/health set <player> 40`
:::

---

## Checking Health

<div class="command-block">

### `/health`

Shows your current health.

```
/health
```

**Permissions:** None required

::: info Unnecessary
This is not really needed, because you have your health bar \:)
:::

</div>

<div class="command-block">

### `/health get`

Shows how much health a specific player has.

```
/health get <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

---

## Modifying Health

<div class="command-block">

### `/health set`

Sets a player's health to a specific amount.

```
/health set <player/s> <amount>
```

**Arguments:**
- `<player/s>` - Target player or players
- `<amount>` - Number of hearts (can include decimals)

**Permissions:** Operator

</div>

<div class="command-block">

### `/health add`

Adds health to a player.

```
/health add <player/s> [amount]
```

**Arguments:**
- `<player/s>` - Target player or players
- `[amount]` - Number of health to add. If not specified, defaults to `1`.

**Permissions:** Operator

</div>

<div class="command-block">

### `/health remove`

Removes health from a player.

```
/health remove <player/s> [amount]
```

**Arguments:**
- `<player/s>` - Target player or players
- `[amount]` - Number of health to remove. If not specified, defaults to `1`.

**Permissions:** Operator

</div>

<div class="command-block">

### `/health reset`

Resets a player's health to the default amount.

```
/health reset <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

::: info Default Health
The default health amount is configured in the Secret Life config.
:::

</div>

<div class="command-block">

### `/health sync`

Synchronizes the health and max health of all players.

```
/health sync
```

**Permissions:** Operator

::: warning When to Use
This is basically never necessary. The mod automatically syncs health.<br>
Only use this if, for example, your health bar count does not match with what you get when running `/health`.
:::

</div>

---

## Related Pages

- [Task Command](/commands/detailed/task) - Managing Secret Life tasks
- [Secret Life Guide](/seasons/secret-life) - Full Secret Life mechanics

---

::: details Command Permissions Summary

| Command          | Permission Required |
|------------------|---------------------|
| `/health`        | None                |
| `/health get`    | Operator            |
| `/health set`    | Operator            |
| `/health add`    | Operator            |
| `/health remove` | Operator            |
| `/health reset`  | Operator            |
| `/health sync`   | Operator            |
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