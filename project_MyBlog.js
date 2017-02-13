// right menu push in, out
var menu = document.querySelector("#menu");
var menuBtn = document.querySelector(".wrap_cover");
var frontPage = document.querySelector(".frontPage");
var hireMe = document.querySelector(".hireMe");
var hireMeBtn = document.querySelector("#hireMeBtn");
var pushDown = document.querySelector(".pushDown");
var toTopBtn = document.querySelector(".toTopBtn");
var articlePage = document.querySelector(".articlePage");
var bodyWithoutHeader = document.querySelectorAll(".bodyWithoutHeader");
var hireMePlusHeader = document.querySelector(".hireMePlusHeader");
var closeBtn = document.querySelector("#closeBtn");



var previousScroll = 0;

window.onscroll = function(){ 
    if(menu.style.transform == "translateX(-450px)"){
        //메뉴창이 나와있을때 스크롤 하면 사라진다
        menu.style.transform = "translateX(450px)";
        frontPage.style.transform = "translateX(0px)";
        articlePage.style.transform = "translateX(0px)";

        //메뉴버튼 원래대로 돌리기
        l2.setAttribute("style",
            "animation: moveDown 0.8s forwards; animation-direction:reverse;");
        l1.setAttribute("style",
            "animation: moveUp 0.8s forwards; animation-direction:reverse;");
        l3.setAttribute("style",
            "animation: rotate 0.8s forwards; animation-direction:reverse;");
        count--;
    }
    else if(hireMePlusHeader.style.transform == "translateY(700px)"){
        //hire me가 보인다면 집어 넣기 
        hireMePlusHeader.style.transform = "translateY(0px)";

        textChange(hireMeBtn,closeBtn);
    }
    else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //스크롤 바가 바닥을 치면 toTopBtn 올라옴   
        toTopBtn.style.transform = "translateY(-140px)";
    }
    else { //스크롤 UP or DOWN 이벤트
       var currentScroll = window.scrollY;
       if (currentScroll > previousScroll){ //Up
           if (currentScroll>160) { 
            hireMePlusHeader.style.transform = "translateY(-84px)";
           }
           toTopBtn.style.transform = "translateY(0px)";
       }
       else { //down
           hireMePlusHeader.style.transform = "translateY(0px)";
       }
       previousScroll = currentScroll;
       toTopBtn.style.transform = "translateY(0px)";
    }
};






menuBtn.addEventListener("click", function(){
	if(menu.style.transform == "translateX(-450px)"){ 
	//메뉴가 보인다면 집어 넣기 
		menu.style.transform = "translateX(450px)";
		frontPage.style.transform = "translateX(0px)";
		articlePage.style.transform = "translateX(0px)";
	}
	else { //메뉴가 안보인다면 튀어나오기 
		menu.style.transform = "translateX(-450px)";
		frontPage.style.transform = "translateX(-200px)";	
		articlePage.style.transform = "translateX(-200px)";		
	}
});






function textChange(showBtn,hiddenBtn) {
        hiddenBtn.classList.add("fadeOutUp");
        showBtn.classList.remove("hidden");
        showBtn.classList.add("fadeInUp");
        hiddenBtn.classList.add("hidden");
        setTimeout(function(){
            hiddenBtn.classList.remove("fadeInUp");   
            hiddenBtn.classList.remove("fadeOutUp");        
        }, 1000);
}

hireMeBtn.addEventListener("click", function(){
        //hire me 보이게 하기
		hireMePlusHeader.style.transform = "translateY(700px)";

        hireMeBtn.classList.remove("fadeInDown");

        textChange(closeBtn,hireMeBtn);
});

closeBtn.addEventListener("click", function(){
        //hire me가 보인다면 집어 넣기 
        hireMePlusHeader.style.transform = "translateY(0px)";

        textChange(hireMeBtn,closeBtn);
});






//to top button
toTopBtn.addEventListener("click", function(){
	toTopBtn.style.transform = "translateY(0px)";

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
scroll.To('margin');
});
