#  Developer Commands


## Side Title


<div class="command-block">

### `/title <targets> side`

Allows you to show text where the players have their session timer (bottom right corner of the screen)

```
/title <targets> side <title>
```

**Permissions:** Operator

::: warning Client-side required
This command only works for targets with the mod installed client-side.
:::

</div>


## `/envcolor` Command.


<div class="command-block">

### `/envcolor <type> modify`

Allows you to modify the color of the environment - fog color, sky color and cloud color.

```
/envcolor <type> modify <add/set> <red> <green> <blue>
```

**Arguments:**
- `<type>` - Which environment color is targeted - one of `fog`, `sky` or `cloud`.
- `<add/set>` - Whether the color is added to the default color, or whether it completely overwrites it. One of `add` or `set`.
- `<red>` - Integer value, range `-255` to `255`.
- `<green>` - Integer value, range `-255` to `255`.
- `<blue>` - Integer value, range `-255` to `255`.

**Permissions:** Operator

::: warning Client-side required
This command only works for targets with the mod installed client-side.
:::

</div>

<div class="command-block">

### `/envcolor <type> reset`

Resets the environment color to default.

```
/envcolor <type> reset
```

**Arguments:**
- `<type>` - Which environment color is targeted - one of `fog`, `sky` or `cloud`.

**Permissions:** Operator

::: warning Client-side required
This command only works for targets with the mod installed client-side.
:::

</div>

---

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