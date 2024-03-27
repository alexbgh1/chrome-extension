# Chrome extension

This is a Chrome extension that enables you to save your currently opened tabs as bookmarks, or do a cleanup by closing all other tabs except for the current tab.

![Extension example](/README/dialog.png)

| Action                                           |                              Status                               |
| ------------------------------------------------ | :---------------------------------------------------------------: |
| <p style="cursor:pointer">[Save Open Tabs]</p>   | <img src="https://api-colores.alexbgh.cl/api/16/888888?text=+" /> |
| <p style="cursor:pointer">[Close Other Tabs]</p> | <img src="https://api-colores.alexbgh.cl/api/16/888888?text=+" /> |

## Use case #1

You have 10 tabs opened in your browser, you are probably doing some research and you want to save them all as bookmarks. You can use this extension to save all the tabs in a single click.

| Open Tabs | Bookmarks         |
| --------- | ----------------- |
| Google    | www.google.com    |
| Facebook  | www.facebook.com  |
| Twitter   | www.twitter.com   |
| LinkedIn  | www.linkedin.com  |
| Instagram | www.instagram.com |
| ...       | ...               |

**Folder name:** `Social Media` (You can specify the folder name)

### How to use

1. Click on the extension icon.
2. Click on the `Save Open Tabs` button.
3. Enter the folder name.
4. Done! Your tabs are saved as bookmarks.

## Use case #2

You have 10 tabs opened in your browser, you are probably doing some research, but you want to do a cleanup, except for your current tab.

### How to use

1. Click on the extension icon.
2. Click on the `Close All Other Tabs` button.
3. Done! All other tabs are closed except for the current tab.

### Status

- <img src="https://api-colores.alexbgh.cl/api/8/888888?text=+" /> **Inactive:** No action has been taken
- <img src="https://api-colores.alexbgh.cl/api/8/00FF00?text=+" /> **Suceess:** Everything went well
- <img src="https://api-colores.alexbgh.cl/api/8/FF0000?text=+" /> **Error:** Something went wrong

# Set up for development/local

1. Clone the repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable `Developer mode`
4. Click on `Load unpacked` ("Cargar descromprimida")
5. Select the folder where the repository is located
6. Done! The extension is now installed locally
