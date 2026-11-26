# In-Between Config

## Memories

In `config/lifeseries/finallife/memories`, you will find an entry for each player that has logged in.

Here, you can modify the image they will see in the windows on each death, as well as the sound that will play during that time.

:::tip Files
I recommend using a high quality image, preferably a 4K one, to prevent being able to see any blurriness in the windows.

Images get zoomed in to fit the windows, so I'd recommend taking the screenshot further away from your subject.

You do not need to add the echo to the sounds, that will be added automatically in-game when they are played.
:::


Supported image formats: PNG, JPG, JPEG

Supported sound formats: OGG

:::warning Sound Files
Uploaded sounds must be MONO, not STEREO, otherwise they will not have directionality.
:::

All files are limited to 16 MiB, as they need to be sent to the players over the network.

## In-Between structure

You can modify the structure that is spawned in the In-Between, as well as placements of features and points of interest.

In-Between structures must be 48x48x48 blocks and have the following name format: `lifeseries:in_between_<x>_<y>_<z>`, where `x`, `y` and `z` refer to the relative placement of the cells next to each other (in the 48x48x48 grid).

A "Cell" is what I refer to one 48x48x48 structure, the origin cell must be 0_0_0.

For example, the default structure cells are:
`lifeseries:in_between_default_0_0_0`, `lifeseries:in_between_default_0_0_1`, `lifeseries:in_between_default_0_0_2`, `lifeseries:in_between_default_0_0_3`, `lifeseries:in_between_default_0_0_4`, `lifeseries:in_between_default_0_-1_4`


### Structure Data

Points of interest are marked with structure blocks in the data format, available ones include:
`spawn` - spawn position, use `spawn <yaw>` to face a different direction.
`choice 1`, `choice 2` ... centers of each choice ring.
		`choice 1 <x> <y> <z>` - moves the choice ring precisely in space.
`path 1`, `path 2`, ... - path waypoints, connected by straight lines.
`window 1`, `window 2`, ... - bottom center block of a memory window.
		`window 1 <x> <y> <z>` - moves window in space.
		`window 1 north/south/east/west` - the way the window is facing.

This might be all a bit confusing, I would recommend loading the default structures and seeing how they look to get an idea for how this all works.