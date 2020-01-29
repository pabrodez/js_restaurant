const headFunc = () => {
  // wrapper
  let headerWrapper = document.createElement('section')
  headerWrapper.setAttribute('id', 'header');
  // title and subtitle
  let headerTitle = document.createElement('h1');
  headerTitle.innerHTML = "Samir's<br><span id='subheading'>Middle Eastern Cuisine</span>"
  // bottom arrow
  let arrow = document.createElement('div');
  arrow.setAttribute('id', 'arrow');
  
  // nav tab
  let navBar = document.createElement('nav');
  // links
  let homeLink = document.createElement('a');
  homeLink.innerText = "Home";
  homeLink.setAttribute('id', 'home-link');
  let menuLink = document.createElement('a');
  menuLink.innerText = "Menu";
  menuLink.setAttribute('id', 'menu-link');
  let aboutLink = document.createElement('a');
  aboutLink.innerText = "About";
  aboutLink.setAttribute('id', 'about-link');
  [homeLink, menuLink, aboutLink].forEach( a =>  navBar.appendChild(a));
  
  [headerTitle, navBar, arrow].forEach( a =>  headerWrapper.appendChild(a));
  
  return headerWrapper;
};

export {headFunc as default};