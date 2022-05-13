//scroll top!
document.getElementById('gray_hat').onclick = function(){
    document.documentElement.scrollTop = 0;
    document.documentElement.scrollLeft = 2000;
}
document.getElementById('rising-moon').onclick = function(){
    document.documentElement.scrollTop = 0;
    document.documentElement.scrollLeft = 4000;
}
document.getElementById('leave-breakfast').onclick = function(){
    document.documentElement.scrollTop = 0;
    document.documentElement.scrollLeft = 6000;
}


//not working
const risingMoon = document.getElementById('moon').removeClass('moon');
const grayHat = document.getElementById('gray_hat');
const moonText = document.getElementById('AboutDevTypeText').removeClass('moon_type');
    grayHat.addEventListener("click", () => {
        risingMoon.addClass('moon');
        moonText.addClass('moon_type');
    });


    