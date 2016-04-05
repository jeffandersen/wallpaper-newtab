# Wallpaper Extension

This sample extension allows you to set a wallpaper on a per-month basis by using a pre-determined naming scheme.

The extension attempts the current month and the previous month before defaulting to the local `images/default.png`.

### How to customize

1. Update the extension name and description in `manifest.json`
2. Edit `js/wallpaper.js` and set line 5 to your hosting location.
3. Upload files in `YYYY/M.png` format (e.g make a folder called `2016`, upload files `1.png` `2.png` ... `12.png`
4. Update the images found in `images/` (extension icons, default wallpaper)

### Local testing

1. Go to `chrome://extensions`
2. Ensure "Developer Mode" is ticked
3. Click `Load unpacked extension`
4. Navigate and select your extension folder (where manifest.json is)
5. Open a new tab

Follow the instructions [found here](https://developer.chrome.com/extensions/packaging) to publish it.
