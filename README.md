# AdBlock Detection Script

This is a JavaScript script designed to detect the presence of an **adblocker** on a user's browser. If an adblocker is detected, it prompts the user with a message to disable their adblocker in order to continue.

## Features

- **AdBlock Detection**: Detects whether an adblocker is preventing the loading of an advertisement.
- **Iframe-based Ad Loading**: Attempts to load an ad from a specified URL inside an iframe.
- **Message Display**: If an adblocker is detected, a message is shown asking the user to disable their adblocker.
- **Export AdBlocker Status**: Logs the adblocker status (`'yes'` or `'no'`) to the console and exposes it as a global variable (`window.adBlocker`).

## How to Use

1. **Copy and paste the script** into the `<script>` section of your HTML file.
2. The script will attempt to load an advertisement inside an iframe from the URL provided in the `adUrl` variable.
3. If the ad is blocked by an adblocker, a message will appear asking the user to **disable their adblocker** to continue using the site.
4. The adblocker status (`'yes'` or `'no'`) is logged to the console and saved in the global variable `window.adBlocker`.

## Example HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AdBlock Detection</title>
</head>
<body>
  <h1>Welcome to the site</h1>
  
  <script>
    // Copy and paste the script here
  </script>
</body>
</html>
