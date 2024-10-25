const menu = [
  {
    id: 1,
    title: "Herkentyűburger",
    category: "street food",
    price: 4000,
    img: "./images/item-1.jpg",
    desc: "Titkos recept alapján készült incsi fincsi habos-babos mézás-mázos hamburger. Plankton nem fér hozzá!",
  },
  {
    id: 2,
    title: "Gulyásleves",
    category: "leves",
    price: 3000,
    img: "./images/item-2.jpeg",
    desc: "Finom és magyar. Pálinkával az igazi.",
  },
  {
    id: 3,
    title: "Töltött paprika",
    category: "fő étel",
    price: 2500,
    img: "./images/item-3.jpg",
    desc: "Cukor nélküli, kenyérrel és krumpli nélkül.",
  },
  {
    id: 4,
    title: "Székely káposzta",
    category: "fő étel",
    price: 2800,
    img: "./images/item-4.jpg",
    desc: "Szőrös a talpad, ingyen van.",
  },
  {
    id: 5,
    title: "Rákóczi túrós",
    category: "desszert",
    price: 2800,
    img: "./images/item-5.jpg",
    desc: "Szabadságharc íze van.",
  },
  {
    id: 6,
    title: "Hatlapos",
    category: "desszert",
    price: 6000,
    img: "./images/item-6.jpg",
    desc: "Hat lapja van. Érdekes?",
  },
];

const sectionCenter = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-container")

//sectionCenterbe létrehozni a teljes étlapot
//menu listán végighaladni
//egy elemből kikérni az adatokat
//legenerálni az ételeket

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu)
  displayMenuButtons()
})


function displayMenuItems(menuItems) {
  let displayMenuItem = []
    menuItems.map(item => {
    displayMenuItem.push(
    `
    <article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>
    `)
  });
  console.log(displayMenuItem)
  sectionCenter.innerHTML = displayMenuItem.join("")
}

function displayMenuButtons(){
  var buttons = ["all"]
  menu.forEach(item => {
    if (!buttons.includes(item.category)){
      buttons.push(item.category)
    }
  })
  
  //console.log(buttons)
  buttons.forEach(b => {
    let button = document.createElement("button")
    button.innerHTML = b
    button.setAttribute('class', 'filter-btn')
    button.setAttribute("id", b)
    button.setAttribute("type", "button")
    btnContainer.appendChild(button)
  })

  var gombok = document.querySelectorAll(".filter-btn")
  gombok.forEach(g => {
    g.onclick = function(){
      //console.log("mükszik?")
      let kat = g.id
      //console.log(kat)
      let cat_menu = []
      menu.forEach(item => {
        if(item.category == kat){
          cat_menu.push(item)
        }
      })
      //console.log(cat_menu)
      if(kat === "all"){
        displayMenuItems(menu)
      }
      else{
        displayMenuItems(cat_menu)
      }
    }
  })











}











