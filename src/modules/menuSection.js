import '../img/side_1.jpg';
import '../img/main_1.jpg';
import '../img/main_2.jpg';
import '../img/main_3.jpg';
import '../img/main_4.jpg';
import '../img/dessert_1.jpg';

const menuFun = () => {
  // wrapper
  let menuWrapper = document.createElement('div');
  menuWrapper.setAttribute('id', 'menu-wrapper');
  // starters
  let starters = document.createElement('div');
  starters.setAttribute('id', 'menu-starters');
  starters.innerHTML = "<figure><figcaption>Starters</figcaption></figure>";
  starters.addEventListener('click', () => {
    let mainWrapper = document.querySelector('#main');
    mainWrapper.removeChild(mainWrapper.childNodes[0]);
    let startersList = document.createElement('div');
    startersList.setAttribute('id', 'starters-list');
    startersList.innerHTML = "<figure><img src='./images/side_1.jpg'></img><figcaption>Tabbouleh</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Arabic Salad</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Fried Kibbeh</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Grilled Kibbeh</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Fattoush</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Falafel</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Aubergine Mutabbal</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Hummus</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Hummus with meat</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Cheese Puff pastry rolls</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Spinach pastries</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Chicken wings</figcaption></figure>" +
    "<figure><img src='./images/side_1.jpg'></img><figcaption>Batata Harra</figcaption></figure>";
    mainWrapper.appendChild(startersList);
  });
  // mains
  let mains = document.createElement('div');
  mains.setAttribute('id', 'menu-mains');
  mains.innerHTML = "<figure><figcaption>Mains</figcaption></figure>";
  mains.addEventListener('click', () => {
    let mainWrapper = document.querySelector('#main');
    mainWrapper.removeChild(mainWrapper.childNodes[0]);
    let mainsList = document.createElement('div');
    mainsList.setAttribute('id', 'mains-list');
    mainsList.innerHTML = "<figure><img src='./images/main_1.jpg'></img><figcaption>Fish Fillet (Fridays)</figcaption></figure>" +
    "<figure><img src='./images/main_2.jpg'></img><figcaption>Quzi</figcaption></figure>" +
    "<figure><img src='./images/main_3.jpg'></img><figcaption>Chicken scallop</figcaption></figure>" +
    "<figure><img src='./images/main_4.jpg'></img><figcaption>Chicken quesadilla</figcaption></figure>" +
    "<figure><img src='./images/main_1.jpg'></img><figcaption>Grilled chicken on charcoal</figcaption></figure>" +
    "<figure><img src='./images/main_2.jpg'></img><figcaption>Spicy Kebab with wallnut and Halloumi</figcaption></figure>" +
    "<figure><img src='./images/main_3.jpg'></img><figcaption>Kebab with parsley and onions</figcaption></figure>" +
    "<figure><img src='./images/main_4.jpg'></img><figcaption>Kebab with pistachio</figcaption></figure>" +
    "<figure><img src='./images/main_1.jpg'></img><figcaption>Sheesh Tawooq</figcaption></figure>" +
    "<figure><img src='./images/main_1.jpg'></img><figcaption>Shoqaf</figcaption></figure>" +
    "<figure>?<figcaption>Daily specials</figcaption></figure>";
    mainWrapper.appendChild(mainsList);
  });
  // desserts
  let desserts = document.createElement('div');
  desserts.setAttribute('id', 'menu-desserts');
  desserts.innerHTML = "<figure><figcaption>Desserts</figcaption></figure>";
  desserts.addEventListener('click', () => {
    let mainWrapper = document.querySelector('#main');
    mainWrapper.removeChild(mainWrapper.childNodes[0]);
    let dessertsList = document.createElement('div');
    dessertsList.setAttribute('id', 'desserts-list');
    dessertsList.innerHTML = "<figure><img src='./images/dessert_1.jpg'></img><figcaption>Kunafah with cream</figcaption></figure>" +
    "<figure><img src='./images/dessert_1.jpg'></img><figcaption>Qatayef</figcaption></figure>";
    mainWrapper.appendChild(dessertsList);
  });
  
  // append menu sections to wrapper
  [starters, mains, desserts].forEach( e => {
    e.setAttribute('class', 'menu-section');
    menuWrapper.appendChild(e);
  });
  
  
  return menuWrapper;
  
};

export {menuFun as default};