const aboutFun = () => {
  
  // wrapper
  let aboutWrapper = document.createElement('div');
  aboutWrapper.setAttribute('id', 'about-wrapper');
  // chef picture and description
  let chefPic = document.createElement('figure');
  chefPic.setAttribute('id', 'chef-pic');
  chefPic.innerHTML = "<figcaption id='chef-description'>" + 
  "Mauris turpis lectus, ullamcorper non ipsum in, dignissim commodo nibh. Integer nisl erat, condimentum in mattis sed, pretium at neque." +
  "<br><br>" +
  "Quisque commodo at orci non posuere. Vivamus pulvinar ligula at est maximus vehicula. Vivamus quis odio magna. Donec enim dolor, maximus et sem non, vulputate sagittis ante. Donec ut aliquet. " +
  "</figcaption>";
  aboutWrapper.appendChild(chefPic);
  
  return aboutWrapper;
};


export {aboutFun as default};