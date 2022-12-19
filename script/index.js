let y = document.getElementById("logo-clicked");
y.addEventListener("click",()=>{
location.replace("/index.html")
});

document.getElementById("cart").addEventListener("click",()=>{
    location.replace("/html/cart.html")
})

let selectFilter =document.getElementById("filter-brand");



let apiData =[];
selectFilter.addEventListener("change",()=>{
    let filteredData = apiData.filter((Element)=>{
        if(Element.brand.toLowerCase()===selectFilter.value.toLowerCase()){
            return true;

        }else{
            return false;
        }

    })
    console.log(filteredData);
    displayProducts(filteredData);
    
})


//fetch API for product


let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";

let container = document.getElementById("apiProduct");

fetch(url).then((result)=>{
    return result.json();
}).then((result)=>{
    apiData=result.data;
displayProducts(apiData)
   // console.log(result);
})

let cartData = [];

function displayProducts(data){
    data.forEach((e)=>{
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
        let buyNowBtn=  document.createElement("button");
        buyNowBtn.innerText = "Buy Now";
        let addToCart = document.createElement("button");
        addToCart.innerText = "Add To Cart"
        addToCart.addEventListener("click",()=>{
           
            let isAddedToCart = false;
            for(let i=0;i<cartData.length;i++){
                if(cartData[i].id===e.id){
                    isAddedToCart=true;
                };
            }
            if(isAddedToCart){
                alert("Product is already in the cart!")
            }else{
                cartData.push(e);
                localStorage.setItem("cart-item",JSON.stringify(cartData));
                alert("Product Added To Cart!");
            }

            
        })
        btnDiv.append(buyNowBtn,addToCart);
        productCard.append(avatar,hr,title,discription,price,hr2,btnDiv);
       container.append(productCard);


    })
}