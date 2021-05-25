const ulList = document.querySelectorAll('li');
var ulListLength=ulList.length;
const ul = document.querySelector('ul');
const ulElement = document.querySelector(`.contact-list`);
const divPage = document.querySelector(`.page`);
var aElement = '';
//Create a div for footer buttons in each page
var divButton = document.createElement('div');
divButton.setAttribute("class", "pagination");
var falg = true;

function createPages(indexPage) {
    divButton.innerHTML='';
    const ul = document.querySelector('ul');
    // const ulElement = document.querySelector(`.contact-list`);
    ul.innerHTML = '';

    //Create 10 li in each page and append it to ul
    for (i = 0; i <= 10; i++) {
        const ul = document.querySelector('ul');
        if ((indexPage - 1) * 10 + i < ulListLength) {
            ul.appendChild(ulList[(indexPage - 1) * 10 + i]);
        }//End-If
    }//End-For


    //Create 6 buttons in footer
    for (indexPage = 1; indexPage <= 6; indexPage++) {
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');
        aElement.setAttribute('id', 'page' + indexPage);
        aElement.innerText = indexPage;
        liElement.appendChild(aElement);
        divButton.appendChild(liElement);
        aElement.addEventListener("click", function () {
            switch (aElement.innerText) {
                case '1':
                    createPages(1);
                    break;
                case '2':
                    createPages(2);
                    break;
                case '3':
                    createPages(3);
                    break;
                case '4':
                    createPages(4);
                    break;
                case '5':
                    createPages(5);
                    break;
                case '6':
                    createPages(6);
                    break;
            }//End-Switch
        }, false);//End-Event-Listener
    }//End-For


    //Append buttons to the end of each page
    if (falg) {
        divPage.appendChild(divButton);
        falg = false;
    }
}//End-createpage();

createPages(1);