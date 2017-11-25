// when a heading is clicked, the appropriate section appears and the text color changes
function clickHeading(elem, headingName) {
    var selected = document.getElementsByClassName('selected');
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.remove('selected');
    }
    elem.classList.add('selected');

    var content = document.getElementsByClassName('content-container');
    var contentDiv = content.item(0);
    var oldClass = contentDiv.classList.item(1);
    
    contentDiv.classList.remove(oldClass);
    contentDiv.classList.add(headingName);
}