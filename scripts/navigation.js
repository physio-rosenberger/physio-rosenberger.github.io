////
// Replace the placeholder for the navigation element by the imported 'nav-main' element.
// The placeholder needs to have class "nav-include".
//
function includeNavigation() {
  var placeHolder = document.querySelector('.nav-include');
  if (!placeHolder)
    return;
  var navImport = document.querySelector('link[rel="import"]')
  if (!navImport || ! navImport.import)
    return;
  var navElement = navImport.import.querySelector('.nav-main')
  if (!navElement)
    return;
  var parent = placeHolder.parentNode;
  var navClone = document.importNode(navElement, true);
  parent.insertBefore(navClone, placeHolder);
  parent.removeChild(placeHolder);
}
