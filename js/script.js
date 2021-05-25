
const liList = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const ulElement = document.querySelector(`.contact-list`);
const divPage=document.querySelector(`.page`);
// var indexPage = 1;
var divButton = '';
var aElement = '';



function createPages(indexPage) {
    ul.innerHTML = '';

    //Create 10 li in each page and append it to ul
    var indexTemp=(indexPage-1)*10;
    for (i = 0; i < 10; i++) {
        ul.appendChild(liList[indexTemp+ i]);
    }
}

// Create a function for our paginate 
function paginate() {

    //Create a div for footer buttons in each page
    divButton = document.createElement('div');
    divButton.setAttribute("class", "pagination");
    for (index = 1; index <= 6; index++) {
        const liElement = document.createElement('li');
        aElement = document.createElement('a');
        // aElement.setAttribute('id', 'page' + index);
        aElement.setAttribute('id', index);
        aElement.setAttribute('href', '');
        aElement.innerText = index;
        liElement.appendChild(aElement);
        divButton.appendChild(liElement);
        console.log(aElement.innerText);
    }
    //Append buttons to the end of each page
    divPage.appendChild(divButton);
}


createPages(1);
paginate();
//onclick for each button
const aLinks = document.querySelectorAll('.pagination li a');

// const aLink = aLinks[0];
// aLink.addEventListener("click", function () {
//     createPages(1);
//     paginate();
// }, false);

for (var j = 0; j < aLinks.length; j++) {
    const aLink = aLinks[j];
    aLink.addEventListener("click", function () {
        switch (aLink.innerText) {           
            case '1':
                // alert('1');
                createPages(1);
                paginate();
                break;
            case '2':
                // alert('2');
                createPages(2);
                paginate();
                break;
            case '3':
                createPages(3);
                paginate();
                break;
            case '4':
                createPages(4);
                paginate();
                break;
            case '5':
                createPages(5);
                paginate();
                break;
            case '6':
                createPages(6);
                paginate();
                break;
        }
    },false);
}

