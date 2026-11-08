/*
  Ramayana: The Living Wall, artwork manifest.
  List artwork here to replace procedural layers. Keys are chapter ids, then layer names.
  A plain path replaces the layer of that name. An object can add options:
    src     path to .png / .webp / .jpg / .mp4 / .webm (relative to index.html)
    rect    [x, y, width, height] in the 1920x1080 frame (default [-192, -108, 2304, 1296], 20% overscan for parallax)
    alpha   0..1        blend  e.g. 'screen', 'multiply', 'lighter'        bob  gentle float in px
    after   'layerName' adds this image as an EXTRA layer right after that layer instead of replacing it
  See README.md for every chapter's layer names and image prompts.
*/
window.RAMAYANA_ASSETS = {
  // ayodhya: {
  //   sky:     'assets/01-ayodhya/sky.webp',
  //   cityFar: 'assets/01-ayodhya/city-far.webp',
  //   cityMid: 'assets/01-ayodhya/city-mid.webp',
  //   ghats:   'assets/01-ayodhya/ghats.webp',
  //   glaze:   { src: 'assets/01-ayodhya/light-glaze.webp', after: 'water', blend: 'screen', alpha: 0.6 },
  // },
  // deepavali: {
  //   cityMid: 'assets/09-deepavali/city-mid-night.webp',
  //   balcony: 'assets/09-deepavali/balcony.webp',
  // },
};
