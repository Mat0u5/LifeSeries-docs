# Secret Life

## Overview

Secret Life is the fifth season of the Life Series.


In Secret Life, players are given secret tasks to complete during each session. Completing these tasks rewards you with hearts, while failing can punish you.

In Secret Life, players start with 30 hearts (which is also the maximum amount of hearts), and they do not regenerate health by traditional means. The only way to regain hearts is by completing tasks and by being gifted a heart.

Once per session, each player can freely gift one heart to another player, with no cost to your own hearts using the `/gift <player>` command.


## Tasks

:::tip Configurable Tasks
You can set your own tasks by following [this guide](/config/secret-life-tasks)
:::

Every session, players will be given a task to do. Players have time until the end of the session to complete their tasks, or else they automatically fail.

Completing tasks gives you hearts (or items, if you are at the max of 30 hearts) as rewards.

Failing a task can either do nothing or it can punish you by taking away your hearts, depending on the type of the task.

The way to submit/ re-roll / fail your task is by going to the Secret Keeper, a special location on the map with three buttons, one for succeeding a task, one for re-rolling it, and one for failing a task.
<br><br>
Easy Tasks - Default task for non-red players. If you succeed, you gain 10 hearts. If you fail, you get nothing. Easy tasks can be re-rolled for a Hard task.

Hard Tasks - If you succeed, you gain 20 hearts. If you fail, you lose 10 hearts. Cannot be re-rolled.

Red Tasks - Given to red players, these tasks involve hurting or killing other players. If you complete this task, you gain 5 hearts. If you fail, you lose 2.5 hearts. Once you complete / fail a Red task, you will be given a new one - so Red players always have a task to do. If a Red player kills another player, they are automatically awarded +10 hearts, and these, similarly to gifted hearts, can bypass the 30 max heart limit.

### Task Selection

Understanding how tasks are selected is crucial for an admin running the series.

Any time a task is assigned, it is stored at the end of a file that contains a list of all used tasks, to prevent it being chosen again.
If no unused tasks remain, the first half of the used tasks file is reset, allowing you to get them again.

This can potentially cause issues if you have a low number of created tasks, or if you were testing tasks before the session.

:::info Example Issues
Let's say you have 20 created tasks.
Before the session, you decide that you want to test things out with 5 players (thus five tasks are added to the used tasks file).

-> You have 15 unused tasks.

Therefore, during the session itself, if more than 15 players join, you could **potentially get a duplicate task.**
:::

To fix this, you can run `/task resetUsed`, which resets all used tasks. This of course resets any info from which tasks were used in previous sessions as well, so it has to be used carefully.

To view which tasks are marked as used, if any, you can check the Task Manager in the [Config](/config/overview). Used tasks will have a [USED] marker next to them.

## Lives
All players are given 3 lives at the beginning of the first session.

:::info Life Colors
- Green = 3 lives
- Yellow = 2 lives
- Red = 1 life (hostile)
  :::

Green and Yellow players are not allowed to *initiate combat*, unless in self defence from a Red that *initiated combat* against you.

Once you become a Red, you become hostile = you can freely *initiate combat* on anyone.

:::info Initiate Combat
Initiate Combat = causing any unlawful act, such as: attacking, griefing, stealing, trapping,...<br>
Combat stops once both parties flee or once a peace agreement is reached.
:::

---

## Related Pages

- [Selecting a Season](/guide/selecting-season) - A guide to selecting a season
- [Config Overview](/config/overview) - Configure the mod settings
- [Feature Overview](/features/overview) - More info about all the features of the mod
