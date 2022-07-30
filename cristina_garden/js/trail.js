
  
  let index = 0;
  
  let x = 0;
  let y = 0;
  
  function getMouseCoords(e) {
    var e = e || window.event;
    x = e.clientX;
    y = e.clientY;
    document.getElementById('coord').innerHTML = e.clientX + ' ' +
      e.clientY + ' ' + e.screenX + ' ' + e.screenY;
  }
  
  setInterval(() => {
    var img = document.createElement('img');
    img.src = 'carrier/rock.png';
    img.style.position = "absolute";
    img.style.left = x;
    img.style.top = y;
    document.getElementById('body-container').append(img);
    }, 1000);
  
  var followCursor = (function() {
    var s = document.createElement('img');
    s.src = 'carrier/rock.png';
    s.style.position = "absolute";
    s.style.left = x;
    s.style.top = y;

    var t = document.createElement('img');
    t.src = 'carrier/rock.png';
    t.style.position = "absolute";
    t.style.left = x;
    t.style.top = y;
  
    return {
      init: function() {
        document.body.appendChild(s);
      },
      
  
      run: function(e) {
        var e = e || window.event;
        s.style.left = (e.clientX - 5) + 'px';
        s.style.top = (e.clientY - 5) + 'px';
        getMouseCoords(e);
      }
    };
  }());
  
  window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
  }