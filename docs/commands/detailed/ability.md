#  `/ability` Command

Manage abilities in Final Life.

::: info Availability
This command is only available in **Final Life**.
:::

---

::: info List of Abilities (values for `<ability>`)
`air_jump`, `blast_resistance`, `dash`, `extra_reach`, `feather_falling`, `fire_resistance`, `haste`, `health_vision`, `knockback_resistance`, `more_drops`, `projectile_protection`, `resistance`, `saturation`, `second_wind`, `shield_bash`, `smaller`, `speed`
:::

## Commands

<div class="command-block">

### `/ability add`

Adds an ability to targets.

```
/ability add <player/s> <ability>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/ability remove`

Removes an ability from targets.

```
/ability remove <player/s> <ability>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/ability clear`

Removes all abilities from targets.

```
/ability clear <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/ability get`

Shows current abilities.

```
/ability get
/ability get <player>
```

**Arguments:**
- `<player>` - Target player

**Permissions:** Operator

</div>



---

## Related Pages

- [Final Life Guide](/seasons/final-life) - Full Final Life mechanics
- [Config Overview](/config/overview) - Configure hunger wildcard settings

---

::: details Command Permissions Summary

| Command           | Permission Required |
|-------------------|---------------------|
| `/ability add`    | Operator            |
| `/ability remove` | Operator            |
| `/ability clear`  | Operator            |
| `/ability get`    | Operator            |
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