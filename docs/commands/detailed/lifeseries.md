#  `/lifeseries` Command

The main command for managing the Life Series mod.

::: tip Quick Access
This command is **always available**, regardless of whether a series has been selected.
:::


---

## Series Selection Commands

<div class="command-block">

### `/lifeseries chooseSeries`

Opens an interactive GUI menu to select a Life Series season.

```
/lifeseries chooseSeries
```

**Requirements:** Life Series mod client-side

**Permissions:** Operator

::: warning Client-side required
This command only works when you have the mod installed client-side.<br>
You can use the `/lifeseries setSeries` command if you do not (see below).
:::

</div>

<div class="command-block">

### `/lifeseries setSeries`

Sets the current Life Series season using a command.

```
/lifeseries setSeries <series>
/lifeseries setSeries <series> confirm
```

**Arguments:**
- `<series>` - The season to select (see table below)
- `confirm` - Optional flag to override existing series selection

**Available Series:**

| Season                    | `<series>`   |
|---------------------------|--------------|
| Third Life                | `thirdlife`  |
| Last Life                 | `lastlife`   |
| Double Life               | `doublelife` |
| Limited Life              | `limitedlife` |
| Secret Life               | `secretlife` |
| Wild Life                 | `wildlife`   |
| Past Life                 | `pastlife`   |
| Real Life  (April Fools)  | `reallife`   |
| Simple Life (April Fools) | `simplelife` |

**Examples:**
```
# Select Secret Life
/lifeseries setSeries secretlife

# Change to Wild Life (overriding current selection)
/lifeseries setSeries wildlife confirm
```

**Permissions:** Operator

::: info Using `confirm`
The `confirm` flag is **required** when you have already selected a season.<br>
This is done to prevent accidental season changes - (and losing data, such as lives).
:::

</div>

---

## Information Commands

Quick commands to check your current setup and mod details.

<div class="command-block">

### `/lifeseries getSeries`

Displays which Life Series season is currently active.

```
/lifeseries getSeries
```

**Permissions:** None required

</div>

<div class="command-block">

### `/lifeseries version`

Shows the installed version of the Life Series mod.

```
/lifeseries version
```

**Permissions:** None required

</div>

<div class="command-block">

### `/lifeseries credits`

Displays mod credits.

```
/lifeseries credits
```

**Permissions:** None required

</div>

---

## Config Commands

<div class="command-block">

### `/lifeseries config`

Opens the mod's config GUI.

```
/lifeseries config
```

**Requirements:** Life Series mod client-side

**Permissions:** None required

::: info Permissions
Even though anyone can use this command, those **without operator permissions** will only be able to modify the client-side config, meaning that they will not be able to alter gameplay in any way.<br>
You must have operator permissions to access the server-side config.
:::

::: warning Client-side required
This command only works when you have the mod installed client-side.
:::

::: tip Manual Editing Config
You can also edit config files directly in `config/lifeseries/`
:::

</div>

<div class="command-block">

### `/lifeseries reload`

Reloads all Life Series config files.

```
/lifeseries reload
```

**Alternative:** You can also use `/reload` (vanilla Minecraft command)

**Permissions:** Operator

</div>

---

## Mod Control Commands

<div class="command-block">

### `/lifeseries disable`

Temporarily disables all Life Series mod functionality.

```
/lifeseries disable
```

**Permissions:** Operator

::: info Note
This disables almost all features without removing the mod. Use `/lifeseries enable` to turn them back on.
:::

</div>

<div class="command-block">

### `/lifeseries enable`

Re-enables the Life Series mod functionality if it was previously disabled with `/lifeseries disable`.

```
/lifeseries enable
```

**Permissions:** Operator

</div>


---

## Related Pages

- [Selecting a Series Guide](/guide/selecting-series) - Detailed walkthrough
- [Config Overview](/config/overview) - All available settings
- [Troubleshooting](/advanced/troubleshooting) - Common issues and fixes

---

::: details Command Permissions Summary
| Command | Permission Required |
|---------|-------------------|
| `/lifeseries getSeries` | None |
| `/lifeseries version` | None |
| `/lifeseries credits` | None |
| `/lifeseries config` | Variable |
| `/lifeseries chooseSeries` | Operator |
| `/lifeseries setSeries` | Operator |
| `/lifeseries disable` | Operator |
| `/lifeseries enable` | Operator |
| `/lifeseries reload` | Operator |
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