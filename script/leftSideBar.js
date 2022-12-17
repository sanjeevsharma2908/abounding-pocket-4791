
 let menuOpen = false;

//  to open the side bar
 function openMenu(){
   menuOpen=true;
   overlay.style.display="block"
   sidebar.style.width="300px"
   sidebar.style.overflow = "scroll";
   
   }
 
//  to close the side bar
 function closeMenu(){
   menuOpen=false;
   overlay.style.display="none";
   sidebar.style.width="0px" ;

}


// targetting to the left side bar

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay   = document.getElementById("overlay");
const cancel = document.getElementById("cancel");



hamburger.addEventListener("click", ()=>{
  // console.log("opening");
   if(!menuOpen){
       openMenu()
   }
})

 cancel.addEventListener("click",()=>{
    if(menuOpen){
        closeMenu()
    }
 })