
//Dust Particles Simulation by bionicoz based on
//Basic Particle Animation
//Author: Brandon John-Freso

//intro typing var i and j

var data = [
    {
      AboutDevTypeText: "<span>Welcome to Concrete Cowgirl, a speck of dust in the neoCowgirl universe. A haunt for renegade hardware enthusiasts and software dilettantes alike.<br> <br>In order to experience this place wholly you must let your guard down. This involves allowing popups for the duration of your stay (this setting is most probably located in preferences > security and privacy in your browser or device).<br> <br>I also invite you to explore the bountiful manipulations already at your fingertips. This ecosystem will respond to curious mouse clicks. <br> <br>The trick is knowing when to engage, and when to saddle up and simply<br> <br>Enjoy The Ride</span><br/>"
}
  ];
  
  var allElements = document.getElementsByClassName("typeing");
  for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var devTypeText = currentElementIdContent;
  
    // type code
    var i = 0, isTag, text;
    (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 80);
    })();
  }


    const spur = document.getElementById("link-to-ride"); //click spur to let the hat in
    const popup = document.getElementById("hat-wrap");
    const hat = document.getElementById("hat");

    spur.addEventListener("click", () => {
    popup.className = "";
    popup.style.animation = "4s regFade linear";
    hat.style.animation = "5s movehat linear;";
    });

    //after the hat, click hat to get the moon
    const hatMove = document.getElementById("hat");
    const moonRise = document.getElementById("moonrise");
    const moonScroll = document.getElementById("moon");
    const moonType = document.getElementById("MoonTypeText");

    
    hat.addEventListener("click", () => {
    hat.style.animation = "10s fadein reverse";
    hatMove.style.animation = "8s throwAway linear";
    moonRise.className = "";
    moonRise.style.animation = "6s regFade linear";
    moonScroll.style.animation = "60s scrolltext linear";
    });
    //enter breakfast, exit moontype
    const risingMoon = document.getElementById("rising-moon");
    const eatBreakfast = document.getElementById("breakfast-wrap");
    //const coffee = document.getElementById("coffee");
    //const poems = document.getElementById("poems");
    //const glitch = document.getElementById("glitch");
    //const crunchy = document.getElementById("crunchy");
    //const chip = document.getElementById("chip");

    risingMoon.addEventListener("click", () => {
        eatBreakfast.style.animation = "1s regFade linear";
        eatBreakfast.className = "";
        eatBreakfast.style.zIndex = "23";

    });

    let funcArr = [
        function() {
            window.open("smaller/r.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=400,height=400");
            window.open("smaller/e.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=350,height=350");
            window.open("smaller/l2.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=300,height=300");
            window.open("smaller/l.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=250,height=250");
            window.open("smaller/a.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=200,height=200");
            window.open("smaller/m.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=150,height=150");
            window.open("smaller/s.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=100,height=100");
        },
    
    ];
    
    let k = 0;
    
    window.onload = function() {
        //SOMETHING IS WRONG HERE WITH THE DEFINING OF THE ELEMENT
        crunchy.onclick = function() {
            funcArr[k++ % funcArr.length](); // first call function and then, increment the value of k
        }
    }