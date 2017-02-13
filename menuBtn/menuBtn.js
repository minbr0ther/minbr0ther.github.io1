var wrap = document.querySelector(".wrap_cover");
var l1 = document.querySelector(".l1");
var l2 = document.querySelector(".l2");
var l3 = document.querySelector(".l3");

var count = 0;

wrap.addEventListener("click", function(){
  if (count==0) {
  	l1.setAttribute("style","");
  	l2.setAttribute("style","");
  	l3.setAttribute("style","");

	l1.classList.add("oneAnimation");
	l2.classList.add("twoAnimation");
	l3.classList.add("threeAnimation");

	count++;
	}
	else {
	l2.setAttribute("style",
		"animation: moveDown 0.8s forwards; animation-direction:reverse;");
	l1.setAttribute("style",
		"animation: moveUp 0.8s forwards; animation-direction:reverse;");
	l3.setAttribute("style",
		"animation: rotate 0.8s forwards; animation-direction:reverse;");

	count--;
	}
});