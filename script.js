/*This is the script for the creation and change of the squares */
/*Iniatial Screen grid and painter with variables*/
var gridSize = 16;
let heightWidth = (640/gridSize);
addRows(gridSize);
gridPainter();

/*This function adds 'n' number of rows*/
function addRows (rowsNumber){
    for (let i = 1; i < (rowsNumber+1); i++){
        /* Creates a row */
        console.log(i +"vs"+rowsNumber)
        const squaresRows = document.createElement("div");
        squaresRows.classList.add(("rowSquare") + i);
        squaresRows.style.display = "flex";
        squaresRows.setAttribute("style","height:"+heightWidth+"px");
        grid.appendChild(squaresRows); 
        console.log("Row #"+" "+i +" "+"Created.");

        /*Creates elements for a row*/
        for (let j = 1; j < (rowsNumber+1); j++){
            const squaresElements = document.createElement("div");
            squaresElements.classList.add(("Square")+i+ j);
            squaresElements.textContent = ("");
            squaresElements.setAttribute("style","width:"+heightWidth+"px","height"+heightWidth+"px");
            squaresRows.appendChild(squaresElements); 
        }
    } 
}

/*Runs when button is clicked*/
const selectSize = document.querySelectorAll("button");
selectSize.forEach((button) => {
    button.addEventListener("click", ()=>{
        /*removing previous grid*/
        var deleteDiv = document.getElementById("grid");
        while(deleteDiv.firstChild){
            deleteDiv.removeChild(deleteDiv.firstChild);
        }
        /*Gets new grid size from user input*/
        let userSizeSelection = parseInt(prompt("Please enter a grid size:(Maximun 640)"));
        console.log("New grid size:" + " " + userSizeSelection);
        gridSize = userSizeSelection;

        /*removing previous grid*/
        var deleteDiv = document.getElementById("grid");
        while(deleteDiv.firstChild){
            deleteDiv.removeChild(deleteDiv.firstChild);
        }

        /*Re runs the functions to generate and be able to paint*/
        heightWidth = (640/gridSize);
        addRows(gridSize);
        gridPainter();
    })
});

/*This function detects mouse over square and changes them to white*/
function gridPainter(){
const selectSquares = document.querySelectorAll('[class^="Square"');

selectSquares.forEach((div) => {
    div.addEventListener("mouseover", () =>{
        console.log("Mouse in (over)");
        console.log(div.className);
        document.getElementsByClassName(div.className)[0].style.backgroundColor = 'white';
    });
});
}