#  `/lives` Command

Manage and check player life counts.

See [Life System](/features/life-system) for more info about lives.

::: info Availability
This command is only available when you have **selected a series**.
:::

::: warning Limited Life Difference
In **Limited Life**, all `<amount>` parameters use **time** instead of life counts.
Time format examples: `16h`, `8h`, `5h2m1s`, `3h30m`, `1h1s`, `10s`
:::

---

## Checking Lives

<div class="command-block">

### `/lives`

Shows your current life count.

```
/lives
```

**Permissions:** None required

</div>

<div class="command-block">

### `/lives get`

Shows how many lives a specific player has.

```
/lives get <player>
/lives get *
```

**Arguments:**
- `<player>` - Target player
- `*` - Shows the lives of all players, including offline players.

**Permissions:** Operator

</div>

---

## Modifying Lives

<div class="command-block">

### `/lives set`

Sets a player's lives to a specific amount.

```
/lives set <player/s> <amount>
```

**Arguments:**
- `<player/s>` - Target player or players
- `<amount>` - Number of lives to set

**Permissions:** Operator

</div>

<div class="command-block">

### `/lives add`

Adds lives to a player.

```
/lives add <player/s> [amount]
```

**Arguments:**
- `<player/s>` - Target player or players
- `[amount]` - Number of lives to add. If not specified, defaults to `1`.

**Permissions:** Operator

</div>

<div class="command-block">

### `/lives remove`

Removes lives from a player.

```
/lives remove <player/s> [amount]
```

**Arguments:**
- `<player/s>` - Target player or players
- `[amount]` - Number of lives to remove. If not specified, defaults to `1`.

**Permissions:** Operator

::: warning Death Mechanics
Removing a player's last life will trigger death mechanics (spectator mode, etc.).
:::

</div>

---

## Resetting Lives

<div class="command-block">

### `/lives reset`

Resets a specific player's lives to the default amount.

```
/lives reset <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

::: info Default Lives
The default life count is configured per-series in the config.
:::

</div>

<div class="command-block">

### `/lives resetAll`

Resets all players' lives to the default amount.

```
/lives resetAll
```

**Permissions:** Operator

::: info Offline Players
This resets lives for **all online and offline players**, not just currently online ones.
:::

</div>

---

## System Commands

<div class="command-block">

### `/lives reload`

Reloads the team colors of all players based on their current lives.

```
/lives reload
```

**Permissions:** Operator

::: warning When to Use
This is basically never necessary. The mod automatically handles team color updates.<br>
Only use this if you notice visual inconsistencies.
:::

</div>

---

## Season-Specific Commands

<div class="command-block">

### `/lives rollLives` (Last Life Only)

Randomly assigns lives to players based on the config.

```
/lives rollLives
/lives rollLives <player/s>
```

**Arguments:**
- `<player/s>` - Optional: Roll lives only for a specific player or players

**Availability:** Last Life only

**Permissions:** Operator

::: info Random Lives
The random life count is based on config values. Default is 2-6 lives.
:::

</div>

---

## Related Pages

- [Config Overview](/config/overview) - Configure default lives per series
- [Give Life Command](/commands/detailed/givelife) - Player-to-player life transfer

---

::: details Command Permissions Summary

| Command              | Permission Required |
|----------------------|---------------------|
| `/lives`             | None                |
| `/lives get`         | Operator            |
| `/lives set`         | Operator            |
| `/lives add`         | Operator            |
| `/lives remove`      | Operator            |
| `/lives reset`       | Operator            |
| `/lives resetAll`    | Operator            |
| `/lives reload`      | Operator            |
| `/lives rollLives`   | Operator            |
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