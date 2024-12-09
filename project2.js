const addList = document.getElementById("add");
const text = document.getElementById("text");
const lists = document.getElementById("lists");

addList.addEventListener("click", getToDoList);

function getToDoList() {
    let paragraph = document.createElement('p');
    let checking = document.createElement('input');
    let btn = document.createElement('input');

    lists.appendChild(checking);
    lists.appendChild(paragraph);
    lists.appendChild(btn);

    paragraph.style.fontWeight = "bold";
    paragraph.style.textAlign = "left";
    paragraph.style.marginTop = "18px";
    checking.type = "checkbox";
    checking.style.width = "20px";
    btn.type = "submit";
    btn.value = "delete";
    Object.assign(btn.style, {
        width: "55px",
        height: "20px",
        margin: "20px",
        padding: "0",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "red",
        fontWeight: "bold"
    });

    paragraph.innerHTML = text.value;
    text.value = "";

    checking.onclick = function () {
        paragraph.style.textDecoration = "line-through";
    }
    paragraph.ondblclick = function () {
        paragraph.style.textDecoration = "none";
    }

    btn.onclick = function () {
        lists.removeChild(checking);
        lists.removeChild(paragraph);
        lists.removeChild(btn);
    }
}

