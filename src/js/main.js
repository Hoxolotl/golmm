  

//Dragging elements
  function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Get the element by id
    const element = document.getElementById("p1");

    console.log(element);
    // Add the ondragstart event listener
    element.addEventListener("dragstart", dragstartHandler);
  });

//Dropping elements
  function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }


  function dropHandler(ev) {
    ev.preventDefault();

    
    // Get the id of the target and add the moved element to the target's DOM
    let data = ev.dataTransfer.getData("text/plain");

    ev.target.appendChild(document.getElementById(data));

    console.log(ev);

    if ( data == '<p id="p1" draggable="true"></p>'){
      console.log("IT WAS TRUE");
      changeText('You dragged a thing! <p id="p1" draggable="true">Grab another!</p>');
    }
    else {
      console.log("MEH");
      changeText("You dragged a thing!");
    }
    
    

  }

//Changing text
  function changeText(newText){
    //change the display text
    document.getElementById("p3").innerHTML = newText;
  }