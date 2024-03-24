import { STATUS_CLASSES, DELAY_BUTTON_DISABLED } from "../constants/index.js";

const handleStatus = async (element, btnAttached = null, status) => {
  // element: HTMLElement, Button
  // status: string

  const classListToAdd = STATUS_CLASSES[status] ? STATUS_CLASSES[status] : STATUS_CLASSES["error"];

  // Remove every className except: "status"
  element.classList.value.split(" ").forEach((className) => {
    if (className !== "status") element.classList.remove(className);
  });

  // Add class to element
  element.classList.add(classListToAdd);

  btnAttached && (btnAttached.disabled = true);

  // Wait <DELAY_BUTTON_DISABLED> seconds to remove class
  await new Promise((resolve) => {
    setTimeout(() => {
      element.classList.remove(classListToAdd);
      resolve();
    }, DELAY_BUTTON_DISABLED);
  });

  btnAttached && (btnAttached.disabled = false);
};

export { handleStatus };
