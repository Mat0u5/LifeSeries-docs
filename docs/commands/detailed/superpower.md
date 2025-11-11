#  `/superpower` Command

Manage player superpowers in Wild Life.

::: info Availability
This command is only available in **Wild Life**.
:::

::: tip
You do not need the superpowers wildcard itself to be activated to use this command.
:::

---

## Information Commands

<div class="command-block">

### `/superpower get`

Shows a player's current superpower.

```
/superpower get <player>
```

**Arguments:**
- `<player>` - Target player

**Permissions:** Operator

</div>

---

## Managing Superpowers

<div class="command-block">

### `/superpower set`

Sets a specific superpower for a player.

```
/superpower set <player/s> <power>
```

**Arguments:**
- `<player/s>` - Target player or players
- `<power>` - The superpower to assign
- 
:::tip Available Superpowers
  `time_control`,
  `wind_charge`,
  `astral_projection`,
  `super_punch`,
  `mimicry`,
  `teleportation`,
  `shadow_play`,
  `player_disguise`,
  `animal_disguise`,
  `triple_jump`,
  `invisibility`,
  `superspeed`,
  `necromancy`

  `listening` - only available if [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat) is installed

  `creaking` and `flight` - only available in 1.21.2+
:::

**Permissions:** Operator

</div>

<div class="command-block">

### `/superpower setRandom`

Assigns a random superpower to all online players.

```
/superpower setRandom
```

**Permissions:** Operator

::: tip Session Start
This command is run automatically when the Superpowers wildcard is activated - you do not need to run it manually.
:::

::: warning
This command resets all previous powers - that is, all players will get a brand-new power.
:::

</div>

<div class="command-block">

### `/superpower force`

Forces a player's superpower to be a specific power when the next superpower randomization happens.

```
/superpower force <player/s> <power>
/superpower force <player/s> reset
```

**Arguments:**
- `<player/s>` - Target player or players
- `<power>` - The superpower to assign on next randomization
- `reset` - Removes any forced randomization for that player.

**Permissions:** Operator

::: info Queued Assignment
This doesn't immediately assign the power - it queues it for the next time `/superpower setRandom` is run manually, or automatically when the session starts.
:::

</div>

---

## Resetting Superpowers

<div class="command-block">

### `/superpower reset`

Resets a player's superpowers.

```
/superpower reset <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/superpower skipCooldown`

Skips your superpower cooldown, allowing immediate use.

```
/superpower skipCooldown
```

**Permissions:** Operator

::: tip Testing
Useful for testing superpowers.
:::

</div>

---

## Related Pages

- [Wildcard Command](/commands/detailed/wildcard) - Managing wildcards
- [Wild Life Guide](/seasons/wild-life) - Full Wild Life mechanics
- [Config Overview](/config/overview) - Configure superpower settings

---

::: details Command Permissions Summary

| Command                              | Permission Required |
|--------------------------------------|---------------------|
| `/superpower get`                    | Operator            |
| `/superpower set`                    | Operator            |
| `/superpower setRandom`              | Operator            |
| `/superpower assignForRandomization` | Operator            |
| `/superpower reset`                  | Operator            |
| `/superpower skipCooldown`           | Operator            |
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