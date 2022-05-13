//moon typing
var data = [
    {
      AboutDevTypeText: "<span>The Cowgirl rises with the moon, ready to spend the night lurking in the shadows.</span><br/>"
 }
   ];
      
  var allElements = document.getElementsByClassName("moon_type");
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
      setTimeout(type, 200);
    })();
}
