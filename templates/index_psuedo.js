//------------------------------------------------------------------------------------------------------------------------------------
// Scrollytelling JavaScript
//------------------------------------------------------------------------------------------------------------------------------------

// ---------Section 0: Make a scrollama--------------- 
// Create a scrollama object.
// ---------------------------------------------------
var myScrollama = scrollama();

// ---------Section 1: Set Heights---------------
//#region
// Set the size of the figure and the height of the steps
// These are set to constants to improve performance on mobile devices, while keeping the code relatively simple.
// ----------------------------------------------
const figureHeight = window.innerHeight * 0.8
const figureMarginTop = (window.innerHeight - figureHeight) / 2
const stepH = Math.floor(window.innerHeight * 1.8);
//#endregion


// ---------Section 2: HTML -> D3--------------- 
//#region
// Save different parts of the page as D3.js objects. We'll use these later for easy restyling. D3.js is used for convenience.
// ---------------------------------------------
var figure = d3.select('figure');
var imgV1 = d3.select('#imgV1');
var imgV2 = d3.select('#imgV2');
var imgV3 = d3.select('#imgV3');

var steps = d3.selectAll('.step');
//#endregion


// ---------Section 3: handleResize()---------------
// Create a function which sets the styling of the various elements exactly as you want it to appear
// This function could increase in complexity as you build responsive scrollytelling webpages. Here, this function
// is relatively simple.
// -------------------------------------------------
function handleResize() {
  
  console.log("handling resize")

  // 1. update height of step elements
  steps.style('height', stepH + 'px');

  // 2. update height, margin, and layering of the figure
  figure
    .style('height', figureHeight + 'px')
    .style('top', figureMarginTop + 'px')

  // 3. tell scrollama to update new element dimensions. Not always necessary, but included just to be safe.
  myScrollama.resize();

}


// ---------Section 4: handleStepChange()---------------
// Create a function to update the figure in response to step-triggers.
// Again, this function could get more complex as your story gets longer or updates in different ways.
// -----------------------------------------------------
function handleStepChange(response) {

  console.log(response)
  switch(response.index) {
    case 0:
      // Set image to first version
      imgV1.style("display", "block")
      imgV2.style("display", "none")
      imgV3.style("display", "none")
      break;

    case 1:
      // Set image to second version
      imgV1.style("display", "none")
      imgV2.style("display", "block")
      imgV3.style("display", "none")
      break;

    case 2:
      // Set image to third version
      imgV1.style("display", "none")
      imgV2.style("display", "none")
      imgV3.style("display", "block")
      break;

    default:
      // do nothing
  }

}


// ---------Section 5: init()--------------- 
// Create a function that will run just once that first makes sure all the elements are sized like you want them,
// and then sets up the scrollama. Finally, add an event listener to detect if the screen size has changed.
// -----------------------------------------
function init() {

  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. Setup the scrollama
  myScrollama.setup({
    step: '.step',
    offset: Math.floor(window.innerHeight) * 0.95 + "px",
    // set to true to see debug horizontal line
    debug: true,
  }).onStepEnter(handleStepChange)
    
  // setup resize event
  window.addEventListener('resize', handleResize);
}


// ---------Section 6: Wrap Up--------------- 
// This is where you'll want to include any other JavaScript that you've created for the webpage, and to run the init() function. 
// ------------------------------------------
  init();
