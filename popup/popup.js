import { STATUS_CLASSES, DELAY_BUTTON_DISABLED } from "./constants/index.js";
import { createBookmark, getTabs } from "./utils/index.js";

const $buttonSaveBookmarks = document.getElementById("save-open-tabs");
const $buttonCloseAllOtherTabs = document.getElementById("close-all-other-tabs");

const $statusSaveOpenTabs = document.getElementById("status-save-open-tabs");
const $statusCloseAllOtherTabs = document.getElementById("status-close-all-other-tabs");

$buttonSaveBookmarks.addEventListener("click", handleCreateBookmarksClick);
$buttonCloseAllOtherTabs.addEventListener("click", handleCloseAllOtherTabsClick);

async function handleCreateBookmarksClick() {
  const title = prompt("Enter the name of the folder to create");
  if (!title) {
    return;
  }

  let status = "error";
  try {
    const bookmarkBar = await createBookmark({ title });
    const tabs = await getTabs();

    tabs.map((tab) => {
      console.log(createBookmark({ parentId: bookmarkBar.id, title: tab.title, url: tab.url }));
      createBookmark({ parentId: bookmarkBar.id, title: tab.title, url: tab.url });
    });

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

const handleStatus = async (element, btnAttached = null, status) => {
  // element: HTMLElement, Button
  // status: string

  const classListToAdd = STATUS_CLASSES[status] ? STATUS_CLASSES[status] : STATUS_CLASSES["error"];
  console.log(classListToAdd);

  // Remove every className except: "status"
  element.classList.value.split(" ").forEach((className) => {
    if (className !== "status") element.classList.remove(className);
  });

  // Add class to element
  element.classList.add(classListToAdd);

  btnAttached && (btnAttached.disabled = true);

  // Wait 1.5 seconds to remove class
  await new Promise((resolve) => {
    setTimeout(() => {
      element.classList.remove(classListToAdd);
      resolve();
    }, DELAY_BUTTON_DISABLED);
  });

  btnAttached && (btnAttached.disabled = false);
};
