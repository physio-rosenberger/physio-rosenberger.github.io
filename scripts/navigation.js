////
// Replace the placeholder for the navigation element by the imported 'nav-main' element.
// The placeholder needs to have class "nav-include".
//
function includeNavigation() {
  var placeHolder = document.querySelector('.nav-include');
  if (!placeHolder)
    return;

  //'<nav class="nav-main">',
  //'</nav>'
  var html = [
    '<ul>',
    '<li><a href="index.html">Start</a></li>',
    '<li><a href="treatments.html">Leistungen und Preise</a></li>',
    '<li><a href="contact.html">Kontakt</a></li>',
    '</ul>'
  ].join("\n");

  var nav = document.createElement("nav");
  nav.className = "nav-main";
  nav.innerHTML = html;

  var parent = placeHolder.parentNode;
  parent.insertBefore(nav, placeHolder);
  parent.removeChild(placeHolder);

  return;
}
