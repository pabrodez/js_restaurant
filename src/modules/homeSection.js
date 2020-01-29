const homeFun = () => {
  
  // wrapper
  let homeWrapper = document.createElement('div');
  homeWrapper.setAttribute('id', 'home-wrapper');
  // review quotes and header
  homeWrapper.innerHTML = "<blockquote><p>A strong meze game</p></blockquote>" +
  "<header><h1>Welcome<br>to<br>Samir's</h1></header>" +
  "<blockquote><p>the only place in Manchester – let alone Stretford - cooking up both Middle Eastern classics and typical Syrian dishes</p>" +
  "<span>~Manchester Confidential</span></blockquote>";
  
  return homeWrapper;
};

export {homeFun as default};