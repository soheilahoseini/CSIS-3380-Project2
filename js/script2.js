const ulList = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const ulElement = document.querySelector(`.contact-list`);
var indexPage = 1;
var aElement = '';

createPages(indexPage);
function createPages(indexPage) {
    ul.innerHTML = '';

    //Create 10 li in each page and append it to ul
    for (i = 0; i < 10; i++) {
        ul.appendChild(ulList[(indexPage - 1) * 10 + i]);
    }
    //Create a div for footer buttons in each page
    var divButton = document.createElement('div');
    divButton.setAttribute("class", "pagination");

    //Create 6 buttons in footer
    for (indexPage = 1; indexPage < 6; indexPage++) {
        const liElement = document.createElement('li');
        aElement = document.createElement('a');
        aElement.setAttribute('id', 'page' + indexPage);
        aElement.setAttribute('href', '');
        aElement.innerText = indexPage;
        liElement.appendChild(aElement);
        divButton.appendChild(liElement);
        console.log(aElement.innerText);
    }
    //Append buttons to the end of each page
    ulElement.appendChild(divButton);
}

const aLink = document.querySelector('a');
aLink.onclick=function () {
    console.log(aLink.id);
    switch (aLink.id) {
        case 'page1':
            createPages(0);
            break;
        case 'page2':
            createPages(1);
            break;
        case 'page3':
            createPages(2);
            break;
        case 'page4':
            createPages(3);
            break;
        case 'page5':
            createPages(4);
            break;
        case 'page6':
            createPages(5);
            break;
    }
}


