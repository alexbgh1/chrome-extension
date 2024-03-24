import { createBookmark, getTabs } from "./utils/index.js";

const $buttonSaveBookmarks = document.getElementById("save-open-tabs");
const $buttonCloseAllOtherTabs = document.getElementById("close-all-other-tabs");

$buttonSaveBookmarks.addEventListener("click", handleCreateBookmarksClick);
$buttonCloseAllOtherTabs.addEventListener("click", handleCloseAllOtherTabsClick);

async function handleCreateBookmarksClick() {
  const title = prompt("Enter the name of the folder to create");
  if (!title) return;

  const bookmarkBar = await createBookmark({ title });
  const tabs = await getTabs();

  tabs.map((tab) => {
    createBookmark({ parentId: bookmarkBar.id, title: tab.title, url: tab.url });
  });
}

async function handleCloseAllOtherTabsClick() {
  const tabs = await getTabs();
  const tabsToRemove = tabs.filter((tab) => !tab.active).map((tab) => tab.id);
  chrome.tabs.remove(tabsToRemove);
}
