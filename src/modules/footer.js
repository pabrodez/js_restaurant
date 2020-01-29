const footerFunc = () => {

  let footerWrapper = document.createElement('section');
  footerWrapper.setAttribute('id', 'footer');
  let address = document.createElement('h3');
  address.innerText = "1116 Chester Rd, Stretford, Manchester M32 0HA";
  let contact = document.createElement('h3');
  contact.innerText = "07776 ******";
  let times = document.createElement('table');
  times.innerHTML =
  "<tr><td>Tuesday - Sunday</td><td>4–10pm</td></tr>" +
  "<tr><td>Monday</td><td>Closed</td></tr>";
  
  [address, contact, times].forEach( n => footerWrapper.appendChild(n) );
  
  return footerWrapper;

}

export {footerFunc as default};