document.addEventListener('DOMContentLoaded', function() {
  
    //Initializing MaterialBox aka Enlarge an IMG
   var materialBoxOptions = {
        inDuration: 3000
    };
   var materialBox = document.querySelectorAll('.materialboxed');
   var materialBoxInitialize = M.Materialbox.init(materialBox, materialBoxOptions);
 

    //Initializing Accordians
    var collapsibles = document.querySelectorAll('.collapsible');
    var collapsibleInitiate = M.Collapsible.init(collapsibles, options);

    //Initializing Modals
    var modalOptions = {
        opacity: .75
    };
    var modal = document.querySelectorAll('.modal');
    var launchModal = M.Modal.init(modal, modalOptions);
  });

//Integer
  let variableNumber = 2;

  //String
  let variableName = "red";

//Turn buttons red
  function changeColor(elementID) {
    document.getElementById(elementID).style.backgroundColor="#ff0000";
    //document.getElementById('coloredButton').remove();
    //console.log("The button was clicked!");
  }

  //Create a new button button
  function createButton() {
    let newButton = document.createElement('a');
    newButton.className = "btn";
    newButton.innerHTML = "Button City, USA";
    newButton.id = "button"+variableNumber;
    variableNumber++;
    newButton.onclick = function() {
        changeColor(newButton.id);
    }
    document.getElementById("contact").appendChild(newButton);
  }

  function toggleDark() {
    document.body.classList.toggle('dark');
}


function multiplyNumber() {
    let x = variableNumber;
    console.log()
}


function changeTextColor(elementID) {
    document.getElementById(elementID).style.color="#555555";
    //document.getElementById('coloredButton').remove();
    //console.log("The button was clicked!");
  }

  function toggleNav() {
    document.getElementById('navWrapper').classList.toggle('active');
    document.getElementById('hamburger').classList.toggle('active');
  }
