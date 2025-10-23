#  `/boogeyman` Command

Manage the Boogeyman curse system.

::: info Availability
This command is only available when the **Boogeyman has been enabled** in the [config](/config/overview).
:::

::: tip What is the Boogeyman?
The Boogeyman is a randomly selected player, that must kill another player during the session to cure themselves, otherwise they will be punished.
:::

---

## Information Commands

<div class="command-block">

### `/boogeyman list`

Shows the list of all current Boogeymen.

```
/boogeyman list
```

**Permissions:** Operator

::: warning Spoilers
This reveals who the Boogeyman is! Use carefully when you are playing in the game as well.
:::

</div>

<div class="command-block">

### `/boogeyman count`

Shows the number of chosen Boogeymen without revealing who they are.

```
/boogeyman count
```

**Permissions:** Operator

::: tip Useful for Admin Players
Perfect for admins who are also playing - you can verify Boogeymen were selected without spoiling who they are.
:::

</div>

---

## Managing Boogeymen

<div class="command-block">

### `/boogeyman chooseRandom`

Randomly selects the Boogeyman/Boogeymen from online players.

```
/boogeyman chooseRandom
```

**Permissions:** Operator

::: warning Existing Boogeymen
This command first removes all existing Boogeymen, and then rolls new ones.
:::

</div>

<div class="command-block">

### `/boogeyman add`

Manually makes a player the Boogeyman.

```
/boogeyman add <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

</div>

<div class="command-block">

### `/boogeyman remove`

Removes the Boogeyman status from a player without penalties.

```
/boogeyman remove <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

::: info Remove vs Fail
- **Remove**: Simply removes status with no effects
- **Fail**: Punishes the player
:::

</div>

<div class="command-block">

### `/boogeyman clear`

Removes all Boogeymen at once.

```
/boogeyman clear
```

**Permissions:** Operator

</div>

---

## Success and Failure

<div class="command-block">

### `/boogeyman cure`

Marks a Boogeyman as successfully completing their curse.

```
/boogeyman cure <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Requirements:** Player must be the Boogeyman

**Permissions:** Operator

::: warning Automatic Curing
The mod automatically cures the Boogeyman when they kill another player directly.<br>
This command is for manual intervention.
:::

</div>

<div class="command-block">

### `/boogeyman fail`

Makes a Boogeyman fail their curse.

```
/boogeyman fail <player/s>
```

**Arguments:**
- `<player/s>` - Target player or players

**Permissions:** Operator

::: warning Automatic Failing
The mod automatically fails the Boogeyman when the session ends without being cured.<br>
This command is for manual intervention.
:::

</div>

<div class="command-block">

### `/boogeyman selfFail`

Allows a Boogeyman to instantly fail their curse.<br>
Useful when someone has to leave the session early for example.

```
/boogeyman selfFail
```

**Requirements:** You must be the Boogeyman

**Permissions:** None required

</div>

---

## Related Pages

- [Config Overview](/config/overview) - Configure Boogeyman settings
- [Claim Kill Command](/commands/detailed/claimkill) - For indirect kills

---

## Notes

::: tip Indirect Kills
If a Boogeyman kills someone with a trap or indirect method, they won't automatically be cured. They should use [`/claimkill`](/commands/detailed/claimkill) to claim credit, which an admin must validate.
:::

::: info Config Settings
You can configure:
- Number of Boogeymen selected
- Force players to be the Boogeyman
- Prevent players from being the Boogeyman
- Kills needed to get cured
- And much more \:)

Check the config files for details.
:::

---

::: details Command Permissions Summary

| Command                   | Permission Required |
|---------------------------|---------------------|
| `/boogeyman list`         | Operator            |
| `/boogeyman count`        | Operator            |
| `/boogeyman chooseRandom` | Operator            |
| `/boogeyman add`          | Operator            |
| `/boogeyman remove`       | Operator            |
| `/boogeyman clear`        | Operator            |
| `/boogeyman cure`         | Operator            |
| `/boogeyman fail`         | Operator            |
| `/boogeyman selfFail`     | None                |
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