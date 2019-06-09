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
    '<li><a href="Leistungen.html">Leistungen und Preise</a></li>',
    '<li><a href="Schwerpunkte.html">Schwerpunkte</a></li>',
    '<li><a href="Praxis.html">Meine Praxis</a></li>',
    '<li><a href="UeberMich.html">Über mich</a></li>',
    '<li><a href="Kontakt.html">Kontakt</a></li>',
    '<li><a href="Informationen.html">Informationen</a></li>',
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
