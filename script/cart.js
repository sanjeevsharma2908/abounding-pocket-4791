let total=0;
let cartItem = JSON.parse(localStorage.getItem("cart-item"));
document.getElementById("total-cart-item").innerText= cartItem.length;

let cartPage =document.getElementById("cart-page");



function displayProducts(data){

    cartPage.innerHTML="";

    data.forEach((e,i)=>{
        let productCard = document.createElement("div");

        let avatar = document.createElement("img");
        avatar.setAttribute("src", e.img);
        let hr = document.createElement("hr");
        let title = document.createElement("h2");
        title.innerText = e.brand;
        let discription = document.createElement("p");
        discription.innerText = e.details;
        let price = document.createElement("p");
        price.innerText = e.price;
        let hr2 = document.createElement("hr");
        let btnDiv = document.createElement("div");
        let deleteItem = document.createElement("button");
        deleteItem.innerText = "Delet";
        deleteItem.addEventListener("click",()=>{
           data.splice(i,1);
           localStorage.setItem("cart-item",JSON.stringify(data));
           location.reload();
           cartItem=JSON.parse(localStorage.getItem("cart-item"));
            
        })
        btnDiv.append(deleteItem);
        productCard.append(avatar,hr,title,discription,price,hr2,btnDiv);
       cartPage.append(productCard);
       
       total+=e.price;
    })
    console.log(total);
    document.getElementById("total-cart-value").innerText=total;
}
displayProducts(cartItem);