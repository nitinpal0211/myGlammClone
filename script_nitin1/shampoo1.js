let shampoodata = [{img:"https://files.myglamm.com/site-images/800x800/Artboard-1-(1).jpg",img1:"https://files.myglamm.com/site-images/200x200/Artboard-2-(1).jpg",img2:"https://files.myglamm.com/site-images/200x200/Artboard-3-(1).jpg",img3:"https://files.myglamm.com/site-images/200x200/Artboard-3-(1).jpg",img4:"https://files.myglamm.com/site-images/200x200/Artboard-4-(1).jpg",title:"MyGlamm SUPERFOODS ONION & MORINGA SHAMPOO - 200ML",use:"For Hair Fall Control",price:"239",cutPrice:"299",rating:"4.5",ratingCount:"344 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/800x800/SHP-(1).jpg",img1:"https://i.ytimg.com/vi/Vecaeizrhzs/hqdefault.jpg",img2:"https://files.myglamm.com/site-images/200x200/SHP-(2).jpg",img3:"https://files.myglamm.com/site-images/200x200/SHP-(3).jpg",img4:"https://files.myglamm.com/site-images/200x200/SHP-(4).jpg",title:"MyGlamm SUPERFOODS CACAO, COCONUT & COFFEE SHAMPOO - 200ML",use:"Anti-Dandruff & Moisturising Hair Cleanser",price:"319",cutPrice:"399",rating:"5",ratingCount:"37 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/800x800/Passion-Fruit--Rosemary-Shampoo.jpg",img1:"https://files.myglamm.com/site-images/200x200/Passion-Fruit--Rosemary-Shampoo-2.jpg",img2:"https://files.myglamm.com/site-images/200x200/Passion-Fruit--Rosemary-Shampoo-3.jpg",img3:"https://files.myglamm.com/site-images/200x200/Passion-Fruit--Rosemary-Shampoo-4.jpg",img4:"https://files.myglamm.com/site-images/200x200/Passion-Fruit--Rosemary-Shampoo-6.jpg",title:"MyGlamm SUPERFOODS PASSION FRUIT & ROSEMARY SHAMPOO 300ML",use:"Nourishing & Cleansing Shampoo with extracts from natural superfoods",price:"449",cutPrice:"499",rating:"5",ratingCount:"13 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/800x800/Passion-Fruit--Rosemary-Shampoo.jpg",img1:"https://files.myglamm.com/site-images/200x200/Passion-Fruit--Rosemary-Shampoo-2.jpg",img2:"https://files.myglamm.com/site-images/200x200/Passion-Fruit--Rosemary-Shampoo-3.jpg",img3:"https://files.myglamm.com/site-images/200x200/Passion-Fruit--Rosemary-Shampoo-4.jpg",img4:"https://files.myglamm.com/site-images/200x200/Passion-Fruit--Rosemary-Shampoo-6.jpg",title:"MyGlamm SUPERFOODS PASSION FRUIT & ROSEMARY SHAMPOO 300ML",use:"Nourishing & Cleansing Shampoo with extracts from natural superfoods",price:"449",cutPrice:"499",rating:"5",ratingCount:"13 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/800x800/Product-1_13.jpg",img1:"https://files.myglamm.com/site-images/200x200/2-1-3-(1).jpg",img2:"https://files.myglamm.com/site-images/200x200/4-1-2.jpg",img3:"https://files.myglamm.com/site-images/200x200/3-1-2.jpg",img4:"https://files.myglamm.com/site-images/200x200/1-1-(1).jpg",title:"MyGlamm SUPERFOODS ONION & MORINGA SHAMPOO - FLAT PRICE",use:"For Hair Fall Control",price:"199",cutPrice:"299",rating:"3.9",ratingCount:"38 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/800x800/SF--Hair-Fall-Control-2.jpg",img1:"https://files.myglamm.com/site-images/200x200/Artboard-1-06.jpg",img2:"https://files.myglamm.com/site-images/200x200/Artboard-1-06.jpg",img3:"https://files.myglamm.com/site-images/200x200/Artboard-1-06.jpg",img4:"https://files.myglamm.com/site-images/200x200/Artboard-1-06.jpg",title:"MyGlamm SUPERFOODS HAIR FALL CONTROL COMBO",use:"Hair Fall Control With Extracts From Natural Superfoods",price:"478",cutPrice:"598",rating:"5",ratingCount:"18 ratings",quantity:1},{img:"https://files.myglamm.com/site-images/800x800/SMP-(1).jpg",img1:"https://i.ytimg.com/vi/QE_V5Vv7VHA/hqdefault.jpg",img2:"https://files.myglamm.com/site-images/200x200/SHP-(1)_1.jpg",img3:"https://files.myglamm.com/site-images/200x200/SHP-(2)_1.jpg",img4:"https://files.myglamm.com/site-images/200x200/SHP-(3)_1.jpg",title:"MyGlamm SUPERFOODS CACAO, COCONUT & COFFEE SHAMPOO WITH SUPERFOODS POUCH",use:"Anti-Dandruff & Moisturising Hair Cleanser",price:"324",cutPrice:"479",rating:"5",ratingCount:"4 ratings",quantity:1}]




//{img:"",img1:"",img2:"",img3:"",img4:"",title:"",use:"",price:"",cutPrice:"",rating:"",ratingCount:"",quantity:1}

import {append,productdetails} from "../componants_nitin1/script1.js"
let container= document.getElementById("container");
append(shampoodata,container);
// productdetails(el);
document.getElementById("home").addEventListener("click",()=>{
    window.location.href="index.html"
})
import { navbar,displayUserName,footer } from "../Components_5/navbar_Sanjay.js";
document.getElementById("navbar").innerHTML=navbar()
document.getElementById("footer").innerHTML=footer()
displayUserName()
let dataFromLs = JSON.parse(localStorage.getItem("userDetails"))||[];
document.getElementById("cart").addEventListener("click",()=>{
    if(dataFromLs.length==0)
    {
        alert("Please login!!")
    }
    else{
        window.location.href="./Rupesh_cart_day5/cart5.html"
    }
    
 })
