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
        inputbox.id = "input" + j;
        inputbox.type = "text";
        inputbox.required = true;
        inputbox.placeholder = "Bingo Space"

        box.append(inputbox);

        row.append(box);

    }
    grid.append(row);
}