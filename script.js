function GenerateJSON() {
    let array = [];

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            let value = document.querySelector("#row" + i + " #box" + j + " input").value
            array.push({"name": value});
        }
    }

    let result = JSON.stringify(array, null, 4);
    
    let resultbox = document.getElementById("result");
    resultbox.value = result;
}

async function CopyJSON() {
    let button = document.getElementById("copy");
    let valuebox = document.getElementById("result");

    valuebox.select();
    valuebox.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(valuebox.value);

    button.textContent = "Copied!";

    setTimeout(() => {
        button.textContent = "Copy";
    }, 2000);
    
}

function ShowGrid() {
    let grid = document.getElementById("grid");

    let gridcolor = "light";

    for (let i = 1; i <= 5; i++) {

        let row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;

        for (let j = 1; j <= 5; j++) {

            let box = document.createElement("div");
            box.className = "box";
            box.id = "box" + j;
            
            if (gridcolor == "light") {
                gridcolor = "dark";
                box.style.backgroundColor = "rgb(62, 68, 76)";
            }
            else {
                gridcolor = "light";
                box.style.backgroundColor = "rgb(87, 97, 107)";
            }

            let inputbox = document.createElement("input");
            inputbox.className = "inputbox";
            inputbox.type = "text";
            inputbox.placeholder = "..."

            box.append(inputbox);

            row.append(box);

        }
        grid.append(row);
    }
}

let generatebutton = document.getElementById("generate");
generatebutton.addEventListener("click", GenerateJSON);

let copybutton = document.getElementById("copy");
copybutton.addEventListener("click", CopyJSON);

ShowGrid();