# Ramayana: The Living Wall

Live site: https://deepanshu996.github.io/ramayana-living-wall/

Open the link in Google Chrome, press F for fullscreen, and it loops forever. To run offline, download this repository (Code > Download ZIP), unzip, and open `index.html`.


A living, looping mural of the Ramayana for a Diwali wall. About 4.5 minutes per loop, plays forever, silent by default, works fully offline.

## Start it on your Mac

1. Unzip `ramayana-living-wall.zip` anywhere (the Desktop is fine). Keep `index.html` and the `assets` folder together.
2. Double-click `index.html` to open it in Google Chrome (recommended; Safari also works).
3. Drag the window onto the projector or TV, then press **F** for fullscreen.

It shows "Preparing the mural" for a few seconds, then starts playing and loops automatically.

## Party checklist

- Keep the Mac awake: open Terminal, run `caffeinate -d`, and leave that window open. The page also asks the browser to keep the screen on.
- Keep the Mac plugged into power.
- Turn on Do Not Disturb so notifications do not pop up on the wall.
- Projector or wall not 16:9? Press **C** to fill the screen instead of fitting it.
- If playback stutters, press **Q** to step down the render quality. It also lowers itself automatically if frames drop.

## Controls

Move the mouse to show the control bar. It hides itself again after a few seconds.

| Key | Action |
|---|---|
| Space | Pause or play |
| Left / Right arrow | Previous or next chapter |
| 1 to 9 | Jump to a chapter |
| F | Fullscreen |
| T | Chapter titles on or off |
| M | Optional tanpura drone (off by default) |
| Q | Render quality: 1280, 1920, 2560 or 3840 px wide |
| C | Fit or fill the screen |
| B | Painted gold border on or off |
| S | Preview at 4x speed |
| H | Shortcut panel |

Start-up options, added to the end of the address bar: `index.html?chapter=9` (start at the finale), `?captions=0`, `?frame=0`, `?quality=1920`, `?fit=cover`. Combine them with `&`, for example `index.html?captions=0&fit=cover`.

## Chapters

| # | Chapter | Length | Arrives by |
|---|---|---|---|
| 1 | Ayodhya at dawn | 26 s | golden bloom out of the Diwali finale |
| 2 | Sita Swayamvar | 30 s | mist pan |
| 3 | Vanvas | 28 s | mist pan |
| 4 | Sita Haran | 32 s | mist pan |
| 5 | Hanuman's Leap | 26 s | rise through the clouds |
| 6 | Ashoka Vatika | 28 s | mist pan |
| 7 | Ram Setu | 28 s | radial golden veil |
| 8 | Battle of Lanka | 32 s | mist pan |
| 9 | Return to Ayodhya, Deepavali | 44 s | radial golden veil |

## Adding AI artwork later

Every chapter is painted in named depth layers. Any layer you list in `assets/manifest.js` is replaced by your image, and the camera parallax still moves it. The animated effects in the other layers (fire, water, petals, diyas, embers) keep playing on top.

1. Save the image in the chapter's folder, for example `assets/01-ayodhya/city-mid.webp`.
2. Uncomment and edit the matching line in `assets/manifest.js`.
3. Reload the page.

Image format: WebP or PNG, 4608 x 2592 px. That is a 16:9 frame with 20% extra margin for camera movement (2304 x 1296 is enough for a 1080p projector). Every layer except the sky needs a transparent background. Keep the horizon about 65% of the way down so it matches the current layout.

Options per entry: `{ src, rect: [x, y, w, h], alpha, blend, bob, after }`. Using `after: 'layerName'` adds an extra image layer instead of replacing one. MP4 or WebM loops also work as layers.

Replacing a layer replaces everything that layer draws. For example `cityMid` in Ayodhya also draws the river reflection and the flags, so those go with it. Layers marked with * contain animated characters and are best left as they are unless you supply a video loop.

### Layer names by chapter (back to front)

- `ayodhya`: sky, clouds, hills, cityFar, river, cityMid, water, boats, ghats, birds, motes, toran
- `swayamvar`: hall, light, pillarsFar, lamps, floor, crowd, dais, heroes*, petals, pillarsNear, drapes
- `vanvas`: sky, far, rays, mid, peacock, ground, dapple, deer, heroes*, near, motes, leaves
- `haran`: sky, storm, horizon, trees, clearing, darken, lights, actors*, vimana*, jatayu*, fg, leaves
- `leap`: sky, towers, lanka, flat, mahendra, ocean, hanuman*, near, spray
- `ashoka`: sky, clouds, lanka, garden, pond, tree, blossoms, figures*, fireflies, petals, fg
- `setu`: sky, lanka, sea, bridge*, shore, heroes*, rock, hanuman*, embers, fronds
- `yuddha`: sky, storm, fortress, plumes, armies, dust, ground, ravana*, arrows, rama*, ash, smoke
- `deepavali`: sky, fireworks, hills, cityFar, farWin, farLamps, river, cityMid, midWin, reflections, vimana*, midLamps, water, lanterns, ghats, ghatLamps, balcony, bigDiyas, petals, toran

Best first replacements: the sky and the far and mid scenery of each chapter (sky, cityFar, cityMid, hall, far, mid, trees, garden, tree, fortress, lanka). They give the biggest jump in richness while all the animation stays.

## Image-generation prompts

Start every prompt with the same style line so the chapters match:

> epic Indian mythological painting, Rajput and Pahari miniature tradition reimagined as a cinematic matte painting, rich midnight blue, warm gold, amber, saffron and deep crimson, soft volumetric light, intricate ornament, painterly brushwork, museum quality, no text, no watermark, 16:9

For every layer except the sky, add: *isolated on a transparent background* (or generate on flat chroma green and remove it).

**Ayodhya at dawn**
- sky: dawn sky over a holy river, indigo fading to rose and gold, sun just above the horizon right of center, long thin pink clouds
- cityFar: distant golden city of Ayodhya in morning haze, temple shikharas and onion domes, soft pink atmospheric perspective
- cityMid: grand royal palace of Ayodhya on a riverbank, tall central temple spire, gold domes, carved jharokhas, saffron flags, sunlit stone, stone embankment along the bottom edge
- ghats: stone ghat steps descending to the river at the left and right edges, small shrines, banyan tree at left, palms at right

**Sita Swayamvar**
- hall: interior of a Mithila royal hall, multi-foil cusped arches, jali screens, great central arched window glowing gold, crimson silk swags, gold filigree on deep red walls
- pillarsFar and pillarsNear: ornate carved sandstone pillars with gold bands and bracket capitals
- crowd: rows of seated crowned kings on tiered platforms, silhouetted against warm light

**Vanvas**
- sky: luminous misty forest light, pale gold glowing through a gap in the canopy
- far: tall pale sal tree trunks dissolving into mist
- mid: ancient banyan with hanging aerial roots, dark green canopy, a horizontal branch at right
- near: huge dark tree trunks framing both edges, ferns along the bottom

**Sita Haran**
- sky: ominous dusk turning into blood red storm clouds
- trees: dark forest masses at left and right with an open clearing in the middle
- clearing: a humble thatched hermitage hut with lamplight at the door, forest floor

**Hanuman's Leap**
- sky: towering sunset cumulus clouds over an endless ocean, golden light from the right
- ocean: vast ocean seen from just above the waves, deep teal with gold reflections (a seamless MP4 loop works well here)

**Ashoka Vatika**
- sky: full moon in a deep blue night sky with silver-edged clouds
- lanka: golden palace towers of Lanka on a hill, lit windows, moonlit gold
- garden: moonlit royal garden, cypress silhouettes, pavilion, palms, lotus pond
- tree: a great ashoka tree with drooping leaves and orange-red blossoms, stone bench beneath it

**Ram Setu**
- sky: twilight over the southern sea, last orange glow at the horizon, early stars
- lanka: distant island of Lanka on the horizon with tiny golden lights

**Battle of Lanka**
- sky: crimson battle sky with smoke and drifting embers
- fortress: the burning golden fortress of Lanka on a hill at right
- armies: distant silhouetted armies with banners facing each other across a dusty plain

**Return to Ayodhya, Deepavali**
- sky: moonless Amavasya night sky full of stars
- cityMid: the same Ayodhya palace skyline at night, deep indigo, every parapet lined with oil lamps, warm windows
- balcony: carved stone balcony parapet across the bottom of the frame, draped with marigold garlands

Keep each image's composition close to the current layout (skyline on the same horizon, palace in the center) so the animated diyas, flags and reflections line up with it.

## Files

```
ramayana-living-wall/
  index.html        the whole animation (open this)
  README.md         this guide
  assets/
    manifest.js     list your artwork here
    01-ayodhya/ ... 09-deepavali/   chapter artwork folders
```

Tested in Chromium. Recommended browser: Google Chrome on macOS.
