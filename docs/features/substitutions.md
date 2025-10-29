# Substitutions

## Overview

Substitutions allow one player to take over for another, inheriting their lives, inventory, position, etc.

This is useful when a player is not able to attend a session.

:::tip
Use the [`/subin`](/commands/detailed/subin) command to manage the substitutions.
:::

## Info

You can only substitute for players that are not currently in the session.

If the player they are substituting for joins, or if the substituting player leaves, the substitution will end automatically.

When a substitution ends, the info of the substituting player will be saved to the playerdata file of the player they were substituting for.

:::info Example
Grian is substituting for Mumbo, who is offline.
Grian now has Mumbo's lives (lets say he has four lives), inventory, position, etc.
If Grian dies twice (so two lives left), and gets diamond armor before the substitution ends, when Mumbo joins back, he will have two lives left and diamond armor in his inventory.
:::

---

## Related Pages

- [/subin command](/commands/detailed/subin)