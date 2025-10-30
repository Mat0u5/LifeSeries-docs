#  `/soulmate` Command

Manage soulmate pairs in Double Life.

::: info Availability
This command is only available in **Double Life**.
:::

::: tip What are Soulmates?
In Double Life, players are paired into soulmates. Soulmates share their health - when one takes damage, both lose health. When one dies, both die.
:::

---

## Information Commands

<div class="command-block">

### `/soulmate get`

Shows who a player's soulmate is.

```
/soulmate get <player>
```

**Arguments:**
- `<player>` - Target player

**Permissions:** Operator

</div>

<div class="command-block">

### `/soulmate list`

Shows all soulmate pairs in the series.

```
/soulmate list
```

**Permissions:** Operator

::: info Offline Players
This command shows online players with their name as normal, but offline players show as their UUID instead of their name - because that's how they are stored.
:::

</div>

---

## Managing Soulmates

<div class="command-block">

### `/soulmate set`

Manually sets two players as soulmates.

```
/soulmate set <player1> <player2>
```

**Arguments:**
- `<player1>` - First player
- `<player2>` - Second player

**Permissions:** Operator

::: info
Setting a player's soulmate automatically works both ways - you only need to run this command for one of the players.
:::

</div>

<div class="command-block">

### `/soulmate rollRandom`

Randomly assigns soulmate pairs from online players.

```
/soulmate rollRandom
```

**Permissions:** Operator

::: tip Session Start
This command automatically runs when the session starts.
:::

::: info
This not change any existing pairs. If you want to fully re-roll all pairs, run the `/soulmate resetAll` command before this one.
:::

</div>

---

## Resetting Soulmates

<div class="command-block">

### `/soulmate reset`

Resets a specific player's soulmate pairing.

```
/soulmate reset <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

::: info
This fully breaks the pairing - this command only needs to be run for one of the soulmates.
:::

</div>

<div class="command-block">

### `/soulmate resetAll`

Resets all soulmate pairings.

```
/soulmate resetAll
```

**Permissions:** Operator

::: info
This removes ALL soulmate pairs. Even pairings of players that are offline.
:::

</div>

---

## Related Pages

- [Double Life Guide](/guide/seasons/double-life) - Full Double Life mechanics
- [Lives Command](/commands/detailed/lives) - Managing lives

---

::: details Command Permissions Summary

| Command                        | Permission Required |
|--------------------------------|---------------------|
| `/soulmate get`                | Operator            |
| `/soulmate list`               | Operator            |
| `/soulmate set`                | Operator            |
| `/soulmate rollRandom`         | Operator            |
| `/soulmate reset`              | Operator            |
| `/soulmate resetAll`           | Operator            |
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