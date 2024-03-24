async function createBookmark({ parentId = null, title = null, url = null }) {
  // {parentId: string | null,
  // title: string | null,
  // url: string | null}
  // RETURN: Promise<BookmarkTreeNode>

  if (parentId === null && title === null && url === null) {
    throw new Error("(Creating Bookmark) At least one parameter must be different from null");
  }

  // Create params object with non-null parameters
  const params = {};
  if (parentId !== null) params.parentId = parentId;
  if (title !== null) params.title = title;
  if (url !== null) params.url = url;

  //? https://developer.chrome.com/docs/extensions/reference/api/bookmarks?hl=es-419
  return await chrome.bookmarks.create(params);
}

async function getTabs(query = {}) {
  /*
     query:  
     {
      active: boolean,
      currentWindow: boolean,
     }
     RETURN: Promise<Array<Tab>>
      */

  //? https://developer.chrome.com/docs/extensions/reference/tabs/#method-query
  return await chrome.tabs.query(query);
}

export { createBookmark, getTabs };
