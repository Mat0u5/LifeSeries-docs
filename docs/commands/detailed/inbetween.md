#  `/inbetween` Command

Manage the In-Between in Final Life.

::: info Availability
This command is only available in **Final Life**.
:::

---

## Commands

<div class="command-block">

### `/inbetween enter`

Makes the targets enter the In-Between

```
/inbetween enter
/inbetween enter <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/inbetween exit`

Makes the targets exit the In-Between

```
/inbetween exit
/inbetween exit <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/inbetween deaths`

Controls the number of stored deaths for the In-Between.

```
/inbetween deaths
/inbetween deaths <player/s> set <amount>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>


---

## Related Pages

- [Final Life Guide](/seasons/final-life) - Full Final Life mechanics
- [Config Overview](/config/overview) - Configure hunger wildcard settings

---

::: details Command Permissions Summary

| Command             | Permission Required |
|---------------------|---------------------|
| `/inbetween enter`  | Operator            |
| `/inbetween exit`   | Operator            |
| `/inbetween deaths` | Operator            |
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