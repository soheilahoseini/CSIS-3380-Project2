const ulList = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const ulElement = document.querySelector(`.contact-list`);
const divPage = document.querySelector(`.page`);

var aElement = '';
function createPages(indexTemp) {
    var divButton = '';
    // var aElement = '';
    // const divPage = document.querySelector(`.page`);
    // const liList = document.querySelectorAll('li');
    // const ul = document.querySelector('ul');

    ul.innerHTML = '';

    //Create 10 contact in each page and append it to ul
    for (i = 0; i < 10; i++) {
        ul.appendChild(liList[(indexTemp - 1) * 10 + i]);
    }

    //Create a div for footer buttons in each page
    divButton = document.createElement('div');
    divButton.setAttribute("class", "pagination");
    for (index = 1; index <= 6; index++) {
        const liElement = document.createElement('li');
        aElement = document.createElement('a');
        aElement.setAttribute('id', index);
        // aElement.setAttribute('href', '');
        aElement.innerText = index;
        liElement.appendChild(aElement);
        aElement.addEventListener("click", function () {
            createPages(index);
        },false);
        divButton.appendChild(liElement);
    }//End-For
    //Append buttons to the end of each page
    divPage.appendChild(divButton);

    // const alinks = document.querySelectorAll('a');
    // alinks[0].addEventListener("click", function () {
    //     createPages(indexTemp = 1);
    // }, false);//End-AddEventListener

    // alinks[1].addEventListener("click", function () {
    //     createPages(indexTemp = 2);
    // }, false);//End-AddEventListener

}

createPages(1);