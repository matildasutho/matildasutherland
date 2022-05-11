const shoeDisappear = [
    { opacity: '1' , transform: 'rotate(0deg)' },
    { opacity: '0' , transform: 'rotate(15deg)' }
  ];
  
  const shoeTiming = {
    duration: 2000,
    iterations: 1,
  }

  const shoe = document.querySelector(".disappear");
  
  shoe.addEventListener('click', () => {
    shoe.animate(shoeDisappear, shoeTiming);
  });


  // NEEDS WORK >
function gateAppear() {
  var tree = document.getElementByClassName("disappear");
  


  tree.addEventListener("click", () => {
    var popup = document.getElementById("gate");
    setTimeout(function() {
      popup.className = "";
    }, 2000)

  });
}



