//#region  variables

const inputField = document.getElementById("todo-input");
const listParent = document.getElementById("todo-parent");

const completeClassName = "span__complete";
const saveFileName = "todo";

//#endregion

//#region input event
const onClickAdd = () => {
  let addText = inputField.value;
  if (!addText) return;

  createNewListItem(addText, false);
  saveData();
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
const createNewListItem = (addText, completeFlag) => {
  let li_tag = document.createElement("li");
  let checkbox = document.createElement("input");
  let spanTag = document.createElement("span");
  let btnTag = document.createElement("button");

  spanTag.textContent = addText;
  spanTag.classList.add("todo__span");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo__item__checkbox");

  if (completeFlag) {
    spanTag.classList.add(completeClassName);
    checkbox.checked = true;
  }
  checkbox.onclick = () => {
    spanTag.classList.toggle(completeClassName);
    saveData();
  };

  btnTag.innerText = "Delete";
  btnTag.classList.add("remove__button");
  btnTag.addEventListener("click", () => {
    li_tag.remove();
    saveData();
  });

  li_tag.appendChild(checkbox);
  li_tag.appendChild(spanTag);
  li_tag.appendChild(btnTag);

  li_tag.className = "todo__list";

  // li_tag.textContent = addText;
  listParent.append(li_tag);
};

const deleteAll = () => {
  const liList = document.querySelectorAll("li");
  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }

  saveData();
};

//#endregion

//#region  save

const initList = () => {
  let json = localStorage.getItem(saveFileName);
  if (!json) return;
  let saveItems = JSON.parse(json);

  for (let i = 0; i < saveItems.length; i++) {
    createNewListItem(saveItems[i].name, saveItems[i].complete);
  }
};

const saveData = () => {
  const liList = listParent.querySelectorAll("li");

  let saveItems = [];
  for (let i = 0; i < liList.length; i++) {
    let spanTag = liList[i].querySelector("span");
    if (!spanTag) continue;

    let completeFlag = spanTag.classList.contains(completeClassName);
    saveItems.push({ name: spanTag.textContent, complete: completeFlag });
  }

  let json = JSON.stringify(saveItems);
  localStorage.setItem(saveFileName, json);

  console.log(saveItems);
};
//#endregion

//#region  golocation & WeatherAPI

const askForLocation = () => {
  navigator.geolocation.getCurrentPosition(weatherSearch);
};

const weatherSearch = (position, error) => {
  console.log(position);
  const positionObj = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };

  const weather = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${positionObj.latitude}&lon=${positionObj.longitude}&appid=f9ed09f6731e5a592c0c6fe1b505acae`
  )
    .then(onLoadWeather)
    .catch(onFailLoadWeather);
};
const onFailLoadWeather = (err) => {
  console.err("exception occurred." + err);
};
const onLoadWeather = (weather) => {
  weather.json().then((json) => {
    console.log(json);
    console.log(`${json.name}, ${json.weather[0].description}`);
  });
};
//#endregion
//#region  Functions
initList();
askForLocation();
//#endregion
