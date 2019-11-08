// list obtained from Snopes https://www.snopes.com/news/2016/01/14/fake-news-sites
var site_list = ['rt.com',
'breitbart.com',
'nationalreport.net',
'worldnewsdailyreport.com',
'huzlers.com',
'empirenews.net',
'stuppid.com',

];

// search for these domains, inc if they are pre-fixed by a . for subdomain
// look for country-specific versions of these sites

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  var links = document.querySelectorAll('a[href*="rt.com"]');
  // links.push(document.querySelectorAll('a[href*="breitbart.com"]'));
  for (var i=0; i<links.length; i++){
    links[i].style.border = "2px solid red";
  }
});
