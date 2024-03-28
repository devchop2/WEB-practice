//#region  variables

const inputField = document.getElementById("todo-input");
const listParent = document.getElementById("todo-parent");

//#endregion

//#region input event
const onClickAdd = () => {
  let addText = inputField.value;
  if (!addText) return;

  createNewListItem(addText);
  inputField.value = "";
};

const onInputKey = () => {
  if (event.keyCode == 13) {
    // if input enter key
    onClickAdd();
  }
};

//#endregion

//#region manage list items
const createNewListItem = (addText) => {
  let li_tag = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let spanTag = document.createElement("span");
  spanTag.textContent = addText;

  li_tag.appendChild(checkbox);
  li_tag.appendChild(spanTag);
  li_tag.className = "sample";
  console.log(li_tag);

  // li_tag.textContent = addText;
  listParent.append(li_tag);
};
//#endregion
