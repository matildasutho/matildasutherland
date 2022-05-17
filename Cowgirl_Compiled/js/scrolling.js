var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* Scrolling.js */
// var bodyWidth, bodyHeight;
/* ----- */

var animScrollToIntervalID;
var animScrollToIntervalTime = 100;
var animScrollToX, animScrollToY;
var animScrollPoint = new Object();

function getClientSize (ret) {
	/* many thanks to quirksmode.org */
	var x,y;
	if (self.innerHeight) // all except Explorer
	{
		x = self.innerWidth;
		y = self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientHeight)
		// Explorer 6 Strict Mode
	{
		x = document.documentElement.clientWidth;
		y = document.documentElement.clientHeight;
	}
	else if (document.body) // other Explorers
	{
		x = document.body.clientWidth;
		y = document.body.clientHeight;
	}
	if (ret) {
		ret.width = x;
		ret.height = y;
		return ret;
	} else {
		return {width: x, height: y};
	}
}

function getScroll (ret) {
	/* many thanks to quirksmode.org */
	var x,y;
	if (self.pageYOffset) { // all except Explorer
		x = self.pageXOffset;
		y = self.pageYOffset;
	}
	else if (document.documentElement && document.documentElement.scrollTop) {
		// Explorer 6 Strict
		x = document.documentElement.scrollLeft;
		y = document.documentElement.scrollTop;
	}
	else if (document.body) { // all other Explorers
		x = document.body.scrollLeft;
		y = document.body.scrollTop;
	}
	if (ret) {
		ret.x = x;
		ret.y = y;
		return ret;
	} else {
		return {x: x, y: y};
	}
}	

function animScrollTo(x, y) {
	animScrollToX = x, animScrollToY = y;
	if (!animScrollToIntervalID) {
		animScrollToIntervalID = window.setInterval(animScrollToHook, animScrollToIntervalTime);
	}
}

function animScrollToHook () {
	getScroll(animScrollPoint);
	var cur_x = animScrollPoint.x;
	var cur_y = animScrollPoint.y;
	var xdone = false, ydone = false;
	var scaler = 0.1; // 0.1;
	var dx = (animScrollToX - cur_x) * scaler;
	var dy = (animScrollToY - cur_y) * scaler;
	
	if (Math.abs(dx) <= scaler && Math.abs(dy) <= scaler) {
		// alert("scrollTo: " + animScrollToX + ", " + animScrollToY + " FINAL");
		window.scrollTo(animScrollToX, animScrollToY);
		window.clearInterval(animScrollToIntervalID);
		animScrollToIntervalID = null;
		// alert("scrolling done");
	} else {
		if (Math.abs(dx) < 1 && (dx != 0)) {
			dx = (dx < 0) ? -1 : 1;
		}
		if (Math.abs(dy) < 1 && (dy != 0)) {
			dy = (dy < 0) ? -1 : 1;
		}
		window.scrollTo(cur_x + Math.round(dx), cur_y + Math.round(dy));
	}
}

function centerOn (x, y) {
	/* scrolls to center on given point */
	var size = getClientSize();
	var bodyWidth = size.width;
	var bodyHeight = size.height;

	var c = document.getElementById('windows-wrap')
	// alert("c:" + c + ", style: " + c.style + ", c.style.left: " + c.style.left)
	var cx = parseInt(c.style.left) || 0;
	var cy = parseInt(c.style.top) || 0;
	var new_cx = x + Math.round(bodyWidth / 2) + 320;
	var new_cy = y + Math.round(bodyHeight / 2) + 320;
	// alert ("c: " + cx + ", " + cy + ", new: " + new_cx + "," + new_cy);
	if (new_cx > cx) {
		c.style.left = new_cx + 'px';
	}
	if (new_cy > cy) {
		c.style.top = new_cy + 'px';
	}
	var sx = x + 80 - Math.round(bodyWidth / 2);
	var sy = y + 40 - Math.round(bodyHeight / 2);

	// window.scrollTo(sx, sy); // FOR TESTING
	// var s = getScroll();
	// trace("getScroll returned", s.x, s.y);
	animScrollTo(sx, sy);
}


}
/*
     FILE ARCHIVED ON 07:27:11 Dec 01, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:33:37 May 16, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 140.023
  exclusion.robots: 0.208
  exclusion.robots.policy: 0.201
  RedisCDXSource: 5.913
  esindex: 0.008
  LoadShardBlock: 117.173 (3)
  PetaboxLoader3.datanode: 94.585 (4)
  CDXLines.iter: 14.371 (3)
  PetaboxLoader3.resolve: 84.823 (2)
  load_resource: 81.948
*/