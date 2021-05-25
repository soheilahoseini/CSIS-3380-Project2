const divPage = document.querySelector(`.page`);


function createPages(indexPage) {
    const liList = document.querySelectorAll('li');
    const ul = document.querySelector('ul');
    ul.innerHTML = '';

    //Create 10 contact in each page and append it to ul
    var indexTemp = (indexPage - 1) * 10;
    for (i = 0; i < 10; i++) {
        ul.appendChild(liList[indexTemp + i]);
    }
}

// Create a function for our paginate 
function paginate() {
    var divButton = '';
    var aElement = '';

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
        divButton.appendChild(liElement);
    }
    //Append buttons to the end of each page
    divPage.appendChild(divButton);
}


const aLinks = document.querySelectorAll('.pagination li a');
for (var j = 0; j < aLinks.length; j++) {
    const aLink = aLinks[j];
    aLink.addEventListener("click", function () {
        switch (aLink.innerText) {
            case '1':
                createPages(1);
                paginate();
                break;
            case '2':
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
    }, false);
}

createPages(1);
paginate();

