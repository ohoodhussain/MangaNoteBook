
// Get the drawing area from the HTML file
// Store the drawing area element in a variable called canvaArea

const canvaArea = document.getElementById("canvaArea");
// Retrieve the 2D drawing context of the canvas
// and store it in the twodDrwing variable
const twodDrwing = canvaArea.getContext('2d');
// Initialize a boolean variable to track if drawing is happening
let isDrawing= false;
// Add a mousedown event listener to the canvas area
// to start drawing when the mouse is clicked inside the canvas
canvaArea.addEventListener('mousedown',(event) => {
    // Set isDrawing to true, indicating that drawing can start
    isDrawing = true;
   // Retrieve the horizontal and vertical positions of the mouse click
    // relative to the canvas area using offsetX and offsetY properties
    const { offsetX, offsetY } = event;
    // Begin a new drawing path at the mouse click position(where the)
    twodDrwing.beginPath();
    //this tell us the moviement of the path
    twodDrwing.moveTo(offsetX, offsetY);
})
// Add a mousemove event listener to the canvas area
// to draw when the mouse is moved with the button clicked
canvaArea.addEventListener('mousemove', (event)=>{
        // If isDrawing is false, i.e., the mouse button is not clicked, return

    if (!isDrawing) return;
    const {offsetX, offsetY} = event;
    // Draw a line from the previous position to the current position
    twodDrwing.lineTo(offsetX, offsetY);
    //make the line visible
    twodDrwing.stroke();
})

canvaArea.addEventListener('mouseup',()=>{
    isDrawing = false;
})