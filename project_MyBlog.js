// right menu push in, out
var menu = document.querySelector("#menu");
var menuBtn = document.querySelector("#menuBtn");
var frontPage = document.querySelector(".frontPage");
var hireMe = document.querySelector(".hireMe");
var hireMeBtn = document.querySelector("#hireMeBtn");
var pushDown = document.querySelector(".pushDown");
var toTopBtn = document.querySelector(".toTopBtn");


menuBtn.addEventListener("click", function(){
	if(menu.style.transform == "translateX(-450px)"){ 
	//메뉴가 보인다면 집어 넣기 
		menu.style.transform = "translateX(450px)";
		frontPage.style.transform = "translateX(0px)";
	}
	else { //메뉴가 안보인다면 튀어나오기 
		menu.style.transform = "translateX(-450px)";
		frontPage.style.transform = "translateX(-200px)";		
	}
});

window.onscroll = function(){ 
	if(menu.style.transform == "translateX(-450px)"){
		//메뉴창이 나와있을때 스크롤 하면 사라진다
		menu.style.transform = "translateX(450px)";
		frontPage.style.transform = "translateX(0px)";
	}
	else if(hireMe.style.transform == "translateY(700px)"){
		//hire me가 보인다면 집어 넣기 
		pushDown.style.transform = "translateY(0px)";
		setTimeout(function(){
			hireMe.style.transform = "translateY(-700px)";
		}, 100);
	}
	else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        toTopBtn.style.transform = "translateY(-100px)";
    }
};

function textTranslation(){ //구현중 170205
	hireMeBtn.style = "transform:translateY(-10px); opacity:0;" 
}

hireMeBtn.addEventListener("click", function(){
	if(hireMe.style.transform == "translateY(700px)"){
		//hire me가 보인다면 집어 넣기 
		pushDown.style.transform = "translateY(0px)";
		setTimeout(function(){
			hireMe.style.transform = "translateY(-700px)";
		}, 490);
	}
	else { //hire me가 안보인다면 튀어나오기
		// textTranslation();
		hireMe.style.transform = "translateY(700px)";
		pushDown.style.transform = "translateY(700px)";
	}
});


//to top button
toTopBtn.addEventListener("click", function(){
	var scroll = (function() {

    var elementPosition = function(a) {
        return function() {
            return a.getBoundingClientRect().top;
        };
    };

    var scrolling = function( elementID ) {
        var el = document.getElementById( elementID ),
            elPos = elementPosition( el ),
            duration = 2500,
            increment = Math.round( Math.abs( elPos() )/40 ),
            time = Math.round( duration/increment ),
            prev = 0,
            E;

        function scroller() {
            E = elPos();

            if (E === prev) {
                return;
            } else {
                prev = E;
            }

            increment = (E > -20 && E < 20) ? ((E > - 5 && E < 5) ? 1 : 5) : increment;

            if (E > 1 || E < -1) {

                if (E < 0) {
                    window.scrollBy( 0,-increment );
                } else {
                    window.scrollBy( 0,increment );
                }

                setTimeout(scroller, time);

            } else {

                el.scrollTo( 0,0 );
            }
        }

        scroller();
    };

    return {
        To: scrolling
    }

})();

/* usage */
scroll.To('header');
});
