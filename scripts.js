console.log('yo')

var home2 ="<div id='home2' class='animated slideOutDown'><img src='./images/logo2.png' id='home_logo' ></img><div class=\"webCircle\">W</div><div class=\"fbCircle\">F</div><div class=\"mailCircle\">E</div><p id='link_nfc'>www.nfcimplus.com</p><p id='link_fb'>facebook.com/nfcimplus</p><p id='link_email'>hello@nfcimplus.com</p></div>"
var first ="<div id='home2' class='animated slideInDown'><div id= \"crossfade\"><img class = \"cone\" src = \"./images/slide15.jpg\"><img class = \"ctwo\" src = \"./images/slide2.jpg\"><img class = \"cthree\" src = \"./images/slide3.gif\"><img class = \"cfour\" src = \"./images/slide4.jpg\"></div><div id='top_banner' class=\"navigation\"><ul><li><a href=\"/\">Worship</a></li><li><a href=\"#\">About</a><ul><li><a href=\"\" id='nails'>About IM+</a></li><li><a href=\"/massage\">Message</a></li><li><ul><li><a href=\"#\">Level 3 - 1</a></li><li><a href=\"#\">Level 3 - 2</a></li><li><a href=\"#\">Level 3 - 3</a></li><li><a href=\"#\">Level 3 - 4</a></li><li><a href=\"#\">Level 3 - 5</a></li></ul></ul></li><li><a href=\"/about\">Discipleship</a></li><li><a href=\"/menu\">Serving</a></li><li><a href=\"/gallery\">Contact</a></li></ul></div></div>"

function home(){
    $('#content').empty();
    $('#content').append(home2);
     setTimeout(function() {
        $('#content').append(first);
    }, 800);    
}


