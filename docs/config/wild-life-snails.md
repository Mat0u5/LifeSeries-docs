# Wild Life Snails Config

## Snail Names

Snail names can be customized with the `/snail names` command.

More info can be found on the [/snail command](/commands/detailed/snail) page.

## Snail Skins

To create your custom snail textures, you must first open the snail model (found in `./config/lifeseries/wildlife/snailskins/snail.bbmodel`) in [Blockbench](https://www.blockbench.net).
![img_1.png](/snailskins_1.png)

After that, you should hide the parachute and propeller layers, as they just get in the way and are usually not visible anyway.
![img_2.png](/snailskins_2.png)

Then, in the paint tab, change the snail skin however you want.
![img_3.png](/snailskins_3.png)

Then, after you paint the skin however you wish, you need to save the skin.
![img_4.png](/snailskins_4.png)

Change the skin file name to the username of the player it belongs to.
Then, put it in the snail skins config folder (`./config/lifeseries/wildlife/snailskins/`) on the server. 

:::info Example
So for example, since my minecraft username is Mat0u5, the file would be located at `./config/lifeseries/wildlife/snailskins/Mat0u5.png`
:::

Then, run `/snail textures reload`, and it should be added.


---

## Related Pages

- [Config Overview](/config/overview) - All available settings.
