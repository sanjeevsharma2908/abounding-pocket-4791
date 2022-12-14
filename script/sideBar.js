let openSide = document.getElementById("openbtn");
openSide.addEventListener("Click",function(){
        alert("heloo");
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    });

 let toCloseSideBar = document.getElementById("closebtn");
 toCloseSideBar.addEventListener("Click",function () {
         alert("heloo");
         document.getElementById("mySidebar").style.width = "0";
         document.getElementById("main").style.marginLeft = "0";
     }) 
