var site_list = [];

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  var links = document.querySelectorAll('a[href*="rt.com"]');
  // links.push(document.querySelectorAll('a[href*="breitbart.com"]'));
  for (var i=0; i<links.length; i++){
    links[i].style.border = "2px solid red";
  }
});
