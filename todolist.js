function addItemToListBottom (){
    const newLI = document.createElement("li");
    newLI.className = "list-group-item";
    const inputValue = document.querySelector(".form-control").value;
    const text = document.createTextNode(inputValue);
    newLI.appendChild(text);

    const checkbox = document.createElement("input");
    checkbox.className = "form-check-input me-1";
    checkbox.type = "checkbox";
    newLI.insertBefore(checkbox, newLI.firstChild);

    if (inputValue === '') {
        alert("Please enter a to do item");
      } else {
        document.querySelector(".list-group").appendChild(newLI);
      }
      document.querySelector(".form-control").value = "";
      
};

document.querySelector("button").addEventListener("click", addItemToListBottom);


function removeItem(event) {
  if (event.target.type === "checkbox") {
    const li = event.target.parentNode;
    li.remove();
  }
}

document.querySelector(".list-group").addEventListener("click", removeItem);