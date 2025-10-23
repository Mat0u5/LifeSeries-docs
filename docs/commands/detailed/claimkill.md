#  `/claimkill` Command

Claim credit for indirect kills (traps, environmental kills, etc.).

::: info Availability
This command is only available when you have **selected a series**.
:::

::: tip Why Claim Kills?
The mod only auto-detects direct PvP kills.<br>
So in seasons where kills are rewarded, or when you are the Boogeyman for example, you want to get those rewards from the indirect kills. That's what the `/claimkill` command is for.
:::


<div class="command-block">

### `/claimkill`

Submit a claim for credit on a kill.

```
/claimkill <player>
```

**Arguments:**
- `<player>` - The victim you killed

**Permissions:** None required

::: info **How it works:**
1. You run `/claimkill <victim>`
2. Server admins receive a notification
3. Admin validates by clicking on the link in chat
4. You receive kill credit (Boogeyman cure, Limited Life time, etc.)
:::

</div>

<div class="command-block">

### `/claimkill validate`

Validate a player's kill claim.

```
/claimkill validate <killer> <victim>
```

**Arguments:**
- `<killer>` - Player claiming the kill
- `<victim>` - Player who was killed

**Permissions:** Operator

::: warning Chat Link
Admins automatically receive a clickable link in chat which runs this command, so typing it is unnecessary.
:::

</div>

---

## Quick Reference

**Player workflow:**
```
# Make your kill claim
/claimkill <victim>

# Wait for admin validation
```

**Admin workflow:**
```
# Receive claim notification
# Verify the claim is legitimate
# Click on the link in chat to validate the claim
```

---

## Related Pages

- [Boogeyman Command](/commands/detailed/boogeyman) - Boogeyman system
- [Lives Command](/commands/detailed/lives) - Managing lives

---

::: details Command Permissions Summary

| Command                        | Permission Required |
|--------------------------------|---------------------|
| `/claimkill <player>`          | None                |
| `/claimkill validate`          | Operator            |
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