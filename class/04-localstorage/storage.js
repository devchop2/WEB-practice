const saveFunc = () => {
  localStorage.setItem("key", "value");
  let value = localStorage.getItem("key");
  console.log(`value:${value}`);
  localStorage.removeItem("key");
};
