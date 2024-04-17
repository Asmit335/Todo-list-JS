let inputofContent = document.getElementById("input")
let listValue = document.querySelector(".listContainer")


function showToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;

    const toastcontainer = document.getElementById("toastcontainer");
    toastcontainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toastcontainer.removeChild(toast);
        }, 300);
    }, 3000);
}

function handleAddBtn() {

    if (!inputofContent.value) {
        showToast("Please enter Todo Content.");
        return;
    }

    let li = document.createElement("li")
    li.innerHTML = inputofContent.value
    listValue.appendChild(li)

    let span = document.createElement("span")
    span.innerHTML = "\u00d7"

    li.appendChild(span)

    inputofContent.value = ""
    console.log("clicked");
}