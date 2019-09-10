/* FOR RESPONSIVE HEADER */
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* CHANGES THE HEIGHT OF EACH IMAGE, DEPENDING ON THE WIDTH OF THE WINDOW */

var loopThroughAndEditImageProperties = function(imageHeightParameter, imageMarginParameter) {
    var staticImageName = "mh-responsive-image-";

    for (var i = 1; i < 8; i++) {
        var dynamicImageName = staticImageName + i;
        document.getElementById(dynamicImageName).height = imageHeightParameter;
        document.getElementById(dynamicImageName).style = imageMarginParameter;
    }
}

var resizeImages = function() {            
    var imageHeight;
    var imageMargin;

    if (window.innerWidth < 1000) {
        imageHeight = 180;
        document.getElementById("mh-image-container").style = "max-width: 565px;";
         
        var imageMargin = "margin: 5px 5px 5px 5px;";

        loopThroughAndEditImageProperties(imageHeight, imageMargin);
    } else {
        imageHeight = 310;
        document.getElementById("mh-image-container").style = "max-width: 965px;";

        imageMargin = "margin: 10px 5px 10px 5px;";

        loopThroughAndEditImageProperties(imageHeight, imageMargin);           
    }
}

window.onload = resizeImages;
window.onresize = resizeImages;