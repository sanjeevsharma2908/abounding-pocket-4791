
const signIn = document.getElementById("account");
const rightSidebar = document.getElementById("right-sidebar");
const rightOverlay = document.getElementById("right-overlay");
const rightCancel = document.getElementById("right-cancel");

let isOpen = false;

function  sideBarOpen(){
    isOpen=true;
rightOverlay.style.display="block";
rightSidebar.style.width="300px";
rightSidebar.style.overflow="scroll";

}
function sideBarClose(){
    isOpen=false;
    rightOverlay.style.display="none";
    rightSidebar.style.width="0px"
}

signIn.addEventListener("click",()=>{
    if(!isOpen){
        sideBarOpen();
    }
})

rightCancel.addEventListener("click",()=>{
    console.log("sjhhlasdgau")
    isOpen=false;
    if(isOpen){
        sideBarClose();
    }
})