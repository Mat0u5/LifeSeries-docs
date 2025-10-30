#  `/example` Command

A short command description.

::: info Availability
This command is **always available**, regardless of whether a series has been selected.
:::

---

## Category


<div class="command-block">

### `/command one`

Command one description.

```
/command one
```

**Permissions:** None required

::: warning Client-side required
This command only works when you have the mod installed client-side.
:::

</div>


<div class="command-block">

### `/command two`

Command two description.

```
/command two <enabled>
/command two info
```

**Arguments:**
- `<enabled>` - Whether to enable or disable, One of `true` or `false`
- `info` - Shows info about the command

**Examples:**
```
# Arg1 explained - enables the command
/command two enable

# Arg2 explained - shows info
/command two info
```

**Requirements:** Life Series mod client-side

**Permissions:** Operator

::: warning Client-side required
This command only works when you have the mod installed client-side.
:::

</div>

---

## Related Pages

- [Selecting a Season](/guide/selecting-season) - A guide to selecting a season
- [Config Overview](/config/overview) - All available settings

---

::: details Command Permissions Summary

| Command        | Permission Required |
|----------------|---------------------|
| `/command one` | None                |
| `/command two` | Operator            |
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