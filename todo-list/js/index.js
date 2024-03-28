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
  let spanTag = document.createElement("span");

  spanTag.textContent = addText;

  checkbox.type = "checkbox";
  checkbox.className = "todo__item__checkbox";
  checkbox.onclick = () => {
    spanTag.classList.toggle("span__complete");
  };

  li_tag.appendChild(checkbox);
  li_tag.appendChild(spanTag);
  li_tag.className = "todo__list";
  console.log(li_tag);

  // li_tag.textContent = addText;
  listParent.append(li_tag);
};
//#endregion
