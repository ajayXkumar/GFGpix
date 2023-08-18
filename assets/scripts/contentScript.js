
var text1 = document.querySelectorAll('.basic_details_data a')
text1.forEach(function(element) {
  element.style.color = 'white'
});


var textElements = document.querySelectorAll("*:not(script):not(style):not(link):not(meta):not(title)");

// Loop through each text element and change its color to white
textElements.forEach(function(element) {
  element.style.color = "#cfcfcf";   
});

var card = document.querySelectorAll('.score_card')
card.forEach(function(element) {
  element.style.background = 'rgb(43,43,43)'
});
var card2 = document.querySelectorAll('.badges-section')
card2.forEach(function(element) {
  element.style.display= 'none'
});
      
var card3 = document.querySelectorAll('.box canvas')
card3.forEach(function(element) {
  element.style.display= 'none'
});


var card4 = document.querySelectorAll('.course_attended_section')
card4.forEach(function(element) {
  element.style.display= 'none'
});


const problemLinkElement = document.querySelector('.highlightOption');
                    problemLinkElement.style.backgroundcolor = 'black';

const Ele= document.querySelector('.tabs');
 Ele.style.background = 'none';


 // Get all elements with the class name "col"
const colElements = document.querySelectorAll('.col');

// Loop through each "col" element and remove the border
colElements.forEach(col => {
  col.style.border = 'none';
});

// Get all elements with the class name "potd_streak"
const streakElements = document.querySelectorAll('.potd_streak');

// Loop through each "potd_streak" element and remove the top border
streakElements.forEach(element => {
  element.style.borderTop = 'none';
});


// Get all "hr" elements
const hrElements = document.querySelectorAll('hr');

// Loop through each "hr" element and remove the border
hrElements.forEach(hr => {
  hr.style.border = 'none';
});

// Get all <select> elements
const selectElements = document.querySelectorAll('select');

// Loop through each <select> element and change the text color
selectElements.forEach(select => {
  select.style.color = 'rgba(40, 40, 40, 0.9)';
});

// Get all elements with the class name "problemLink"
const problemLinkElements = document.querySelectorAll('.problemLink');

// Loop through each "problemLink" element and remove the text shadow
problemLinkElements.forEach(element => {
  element.style.textShadow = 'none';
});
// Get all <ul> elements within <nav>
const ulElements = document.querySelectorAll('nav ul');

// Loop through each <ul> element and set display to none
ulElements.forEach(ul => {
  ul.style.display = 'none';
});
// Get all elements with the class name "profile_pic"
const profilePicElements = document.querySelectorAll('.profile_pic');

// Loop through each "profile_pic" element and remove the box shadow
profilePicElements.forEach(element => {
  element.style.boxShadow = 'none';
});


const elementToHide = document.querySelector('.problems_header__E09Dq');

// Check if the element is found before trying to hide it
if (elementToHide) {
  // Hide the element by setting its display property to 'none'
  elementToHide.style.backgroundColor = 'black';
}
 
// Function to change the background color to dark
function changeBackgroundColor() {
    document.body.style.background = "white";
    document.body.style.setProperty('background-color', 'rgb(40, 40, 40)', 'important');
  
    var divs = document.getElementsByTagName('div');
    var canvases = document.getElementsByTagName('canvas');
    var tables = document.getElementsByTagName('table');
    
    for (let div of divs) {
        if (!div.classList.contains('nav-wrapper')) {
            div.style.setProperty('background-color', 'transparent', 'important');
          }
    }
    
    for (let canvas of canvases) {
      canvas.style.setProperty('background-color', 'transparent', 'important');
    }
    
    for (let table of tables) {
      table.style.setProperty('background-color', 'transparent', 'important');
    }

  }
  
  if (window.location.href.includes("https://auth.geeksforgeeks.org/user/")) {
    changeBackgroundColor();
  }

  function injectCustomCSS(css) {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }
  
  function changeGraphRectColor() {
    const customCSS = `
      .graph-rect {
        fill: rgb(30,30,30)!important; /* Change the fill color to black */
      }
      .q2{
          fill:#108f41 !important;
         }
      .q1{
            fill:#0a5627 !important;
         }
       .q3{
        fill:#16c95b !important;
       }
       .q4{
        fill:#36e97b !important;
       }
       .q5{
        fill:#70efa0 !important;
       }
       .nav-wrapper
       {
        background-color :rgb(30,30,30) ! important;
       }
});
    
});
    `;
    
    injectCustomCSS(customCSS);
  }
  
  if (window.location.href.includes("https://auth.geeksforgeeks.org/user/")) {
    changeGraphRectColor();
  }
  
  
