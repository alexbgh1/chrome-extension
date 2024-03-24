import { createBookmark, getTabs } from "./utils/index.js";
import { handleStatus } from "./utils/status.js";

const $buttonSaveBookmarks = document.getElementById("save-open-tabs");
const $buttonCloseAllOtherTabs = document.getElementById("close-all-other-tabs");

const $statusSaveOpenTabs = document.getElementById("status-save-open-tabs");
const $statusCloseAllOtherTabs = document.getElementById("status-close-all-other-tabs");

$buttonSaveBookmarks.addEventListener("click", handleCreateBookmarksClick);
$buttonCloseAllOtherTabs.addEventListener("click", handleCloseAllOtherTabsClick);

async function handleCreateBookmarksClick() {
  let title = prompt("Enter the name of the folder to create");
  if (!title || title.trim() === "" || title.length > 40) {
    alert("The name of the folder must be between 1 and 40 characters");
    return;
  }

  let status = "error";
  try {
    // Creating a bookmark folder
    const bookmarkBar = await createBookmark({ title: title.trim() });
    const tabs = await getTabs();

    // Create a bookmark for each tab
    const bookmarksPromises = tabs.map((tab) => {
      return createBookmark({ parentId: bookmarkBar.id, title: tab.title, url: tab.url });
    });
    await Promise.all(bookmarksPromises);

    status = "success";
  } catch (e) {
    console.error(e);
  } finally {
    handleStatus($statusSaveOpenTabs, $buttonSaveBookmarks, status);
  }
}

async function handleCloseAllOtherTabsClick() {
  let status = "error";
  try {
    const tabs = await getTabs();
    const tabsToRemove = tabs.filter((tab) => !tab.active).map((tab) => tab.id);
    chrome.tabs.remove(tabsToRemove);
    status = "success";
  } catch (e) {
    console.error(e);
  } finally {
    handleStatus($statusCloseAllOtherTabs, $buttonCloseAllOtherTabs, status);
  }
}
