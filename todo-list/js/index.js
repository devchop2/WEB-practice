const onClickAdd = () => {
  let addText = document.getElementById("todo-input").value;
  if (!addText) return;

  console.log(`add item:${addText}`);
};
