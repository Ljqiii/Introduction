var morecardIsShow = false;
var contentcardIsShow = false;

function showMore() {
    if (contentcardIsShow == true) {
        document.getElementsByTagName("body")[0].style.backgroundColor="rgb(235, 236, 238)";
        document.getElementById("card").style.backgroundColor="#ffffff";
        document.getElementById("contactcard").style.display = "none";
        document.getElementById("experiencecard").style.display = "none";
        document.getElementById("aboutcard").style.display = "none";
        document.getElementById("listmenu").style.display = "block";

        contentcardIsShow = false;
    }
    else {
        if (morecardIsShow == true) {
            document.getElementById("card").setAttribute('style', ' ');
            document.getElementById("more").setAttribute('style', 'width:60px');

            document.getElementById("content").setAttribute('style', 'width:520px');

            document.getElementById("morecard").style.display = "none";
            morecardIsShow = false;
            document.getElementById("moreimg").setAttribute('style', 'transform: rotateY(0deg);');
        }
        else {
            document.getElementById("card").setAttribute('style', 'margin-top:220px');
            document.getElementById("more").setAttribute('style', 'margin-top:220px;width:80px');
            document.getElementById("morecard").style.display = "block";
            document.getElementById("content").setAttribute('style', 'margin-top:20px;width:1070px');
            morecardIsShow = true;

            document.getElementById("moreimg").setAttribute('style', 'transform: rotateY(180deg);');
        }
    }
}

function about() {
    contentcardIsShow = true;
    document.getElementById("listmenu").style.display = "none";
    document.getElementById("aboutcard").style.display = "block";
    document.getElementsByTagName("body")[0].style.backgroundColor="#FFCDD2";
    document.getElementById("card").style.backgroundColor="#FF8A80";


}

function experience() {
    contentcardIsShow = true;

    document.getElementById("listmenu").style.display = "none";
    document.getElementById("experiencecard").style.display = "block";
    document.getElementsByTagName("body")[0].style.backgroundColor="#E1F5FE";
    document.getElementById("card").style.backgroundColor="#80D8FF";

}

function contact() {
    contentcardIsShow = true;

    document.getElementById("listmenu").style.display = "none";
    document.getElementById("contactcard").style.display = "block";
    document.getElementsByTagName("body")[0].style.backgroundColor="#FFF3E0";
    document.getElementById("card").style.backgroundColor="#FFD180";

}


window.onload = function (ev) {
    //showMore();
}


