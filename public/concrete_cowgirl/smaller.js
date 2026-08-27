let funcArr = [
  function () {
    window.open(
      "/concrete_cowgirl/smallER/r.html",
      "_blank",
      "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=400,height=400",
    );
    window.open(
      "/concrete_cowgirl/smallER/e.html",
      "_blank",
      "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=350,height=350",
    );
    window.open(
      "/concrete_cowgirl/smallER/l2.html",
      "_blank",
      "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=300,height=300",
    );
    window.open(
      "/concrete_cowgirl/smallER/l.html",
      "_blank",
      "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=250,height=250",
    );
    window.open(
      "/concrete_cowgirl/smallER/a.html",
      "_blank",
      "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=200,height=200",
    );
    window.open(
      "/concrete_cowgirl/smallER/m.html",
      "_blank",
      "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=150,height=150",
    );
    window.open(
      "/concrete_cowgirl/smallER/s.html",
      "_blank",
      "toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=100,height=100",
    );
  },
];

let i = 0;
let btn = document.getElementById("smaller");

window.onload = function () {
  btn.onclick = function () {
    funcArr[i++ % funcArr.length](); // first call function and then, increment the value of i
  };
};
