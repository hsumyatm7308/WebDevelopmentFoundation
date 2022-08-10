


let val;
val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links; //HTMLCollection 

val = document.links[3];  //it will show all <a> tag
val = document.links[3].id;
val = document.links[3].className; // out with string  (by string -  khwal htote loh ma ya)
val = document.links[3].classList; //DOMTokenList - out with Array type 
val = document.links[3].classList[1];  // cause key name is classname (khwal htote loh ya)

val = document.forms; //HTMLCollction (out with array)
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;
val = document.forms[0].action;
val = document.forms[0].method;

val = document.images;
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className[0];
val = document.images[0].classList;
val = document.images[0].alt;
val = document.images[0].src;
val = document.images[0].getAttribute("type"); //ma shi tae attribute ko call tar
val = document.images[0].getAttribute("src");

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute("type");
val = document.scripts[0].getAttribute("src");

val = document.scripts;
val = document.scripts[1];
val = document.scripts[1].src;
val = document.scripts[1].type;
val = document.scripts[1].getAttribute("type");
val = document.scripts[1].getAttribute("src");

console.log(val);

//console.log(val)
//changing styling
// document.getElementById("tasktitle").style.background = "grey";
// document.getElementById("tasktitle").style.color = "#ffff";
// document.getElementById("tasktitle").style.padding = "5px";


//change content
//document.getElementById("tasktitle").innerHTML = "<span style='color:#f4f4f4;'>My Jobs </span>";  // html code ပါထည့္ခ်င္ရင္ သံုး
//document.getElementById("tasktitle").innerText = "<span style='color:#f4f4f4;'>My Tasks </span>";  //span tag and style tag include
//document.getElementById("tasktitle").textContent = "<span style='color:#f4f4f4;'>My List </span>"; //  span tag and style tag include

//call by classname
// let lis = document.getElementsByClassName("list-group-item");
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "blue";
// lis[2].textContent = "Have to visit";


//call by Tag (Element)
// let litag = document.getElementsByTagName('li');
// console.log(litag);
// console.log(litag[0]);
// litag[0].style.color = "red";
// litag[1].textContent = "It's already changed";

//querySelector
// console.log(document.querySelector("#tasktitle"));
// console.log(document.querySelector(".card-action"));
// console.log(document.querySelector("h3"));

// querySelector will call the first one of many (....)
// console.log(document.querySelector("li"));
// console.log(document.querySelector("ul li").style.color = "green");

// console.log(document.querySelector("ul li:nth-child(odd)").style.background = "silver");

// console.log(document.querySelector("ul li:nth-child(even)").style.background = "blue");
// console.log(document.querySelector("ul li:last-of-type").style.color = "green");
// console.log(document.querySelector("ul li:nth-of-type(3)").style.color = "red");

// document.querySelector("ul li:last-of-type").style.background = "red";


// querySelector => className => all 
//  const listitems = document.querySelector("ul").getElementsByClassName("list-group-item");
//  console.log(listitems);

// querySelector => querySelector => first one 
const listitems = document.querySelector("ul").querySelector(".list-group-item");
console.log(listitems);
console.log(typeof listitems);

// HTMLCollection array can't loooping 

// li between ko change tar moh icon ka ma par tot

let arritems = Array.from(listitems);
console.log(arritems);

arritems.forEach(function (arritem, idx) {
    arritems.innerText = `${idx} :Hello`;
})

//queryslector
let its = document.querySelector("ul.list-group li.list-group-item");
console.log(its);

let items = document.querySelectorAll("ul.list-group li.list-group-item") //NodeList
console.log(items);

// items.forEach(function (its,idx) {
//     //console.log(its)
//     its.textContent = "Hello";
//     its.innerText =`${idx}: Hello World`;
// })

const liodds = document.querySelectorAll("li:nth-child(odd)");
// console.log(liodds);
const lievenes = document.querySelectorAll("li:nth-child(even");
console.log(lievenes)

liodds.forEach(function (liodd, idx) {
    // console.log(liodd);
    liodd.style.background = "grey";
})


for (let i = 0; i < lievenes.length; i++) {

    lievenes[i].style.background = "silver";
}



//children
let chl;
const getul = document.querySelector("ul.list-group");
console.log(getul);

const getli = document.querySelector("li.list-group-item:first-child");
console.log(getli);

chl = getul.children //HTML Collection
console.log(chl);
console.log(chl[3]);

getul.children[1].innerText = "Have to eat";
getul.children[1].innerHTML = `Have to read  <a href="#" id="delete-item5" class="delete-me "> <i class="fa-solid fa-trash"></i></a>`


// children to children 

chl = getul.children;
chl = getul.children[1];
chl = getul.children[1].children;
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList;
chl = getul.children[1].children[0].href;
chl = getul.children[1].children[0].getAttribute("href");
// ul      li        a          HTMLCollction
// chl = getul.children[1].children[0].children;

//   ul      li         a           i  
chl = getul.children[1].children[0].children[0];

console.log(chl);


// First Element 
chl = getul.querySelector('li');
chl = getul.firstElementChild;
console.log(chl);

//last Element Child
chl = getul.querySelector("li:last-child");
chl = getul.lastElementChild;
console.log(chl);

//child element count
chl = getul.children.length;
chl = getul.children[0].childElementCount;

chl = getul.children[0].children[0].childElementCount;

console.log(chl);


//Parent Element

const getfirstli = document.querySelector("li.list-group-item:first-child");
console.log(getfirstli);

let par = getfirstli.parentElement;
console.log(par);

//Next Element Sibling
//  list item 1   list item 2  
// let sbl = getfirstli.nextElementSibling;
//      //list item 1   list item 2        list item3
//  sbl = getfirstli.nextElementSibling.nextElementSibling;

sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

console.log(sbl);

//  previous Element Sibling  
let psbl = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(psbl);


//Creat element
const newli = document.createElement("li");


// Add ID 
newli.id = "new-item";

// Add ClassName 
newli.className = "list-group-item";

// slector name kwor char chat 
newli.classList = "list-group-item delete-me"
newli.classList.add("delete-i", "hide-me");


// Add Attribute   = setAttribute (qulifiedName,value);
newli.setAttribute("title", "newitem");


// newli.innerText = "hi";
// newli.textContent = "hey";
//newli.innerHTML = `list-item 6  <a href="#" id="delete-item5" class="delete-me "> <i class="fa-solid fa-trash"></i></a>`;


//creat text node (by appendChild method)
newli.appendChild(document.createTextNode('List 6'));
// newli.innerText = "Save Myanmar";



const newlink = document.createElement("a");

// add href  
newlink.href = "#";

// add id 
newlink.id = "delete-item6";

// add class 
newlink.classList.add("delete-item");


newlink.innerHTML = `<i class="fa-solid fa-trash"></i>`;
// newlink.appendChild(document.createTextNode(`<i class="fa-solid fa-trash"></i>`));
console.log(newlink);

newli.appendChild(document.createTextNode(newli));

document.querySelector("ul.list-group").appendChild(newli);

console.log(newli);
// console.log(newlink);






//replace element
const newtitleh2 = document.createElement("h2");

newtitleh2.id = "tasktitle";

var newcaption = document.createTextNode("All my Lists");
newtitleh2.appendChild(newcaption);

const oldtitleh4 = document.getElementById("tasktitle");
// console.log(oldtitleh4);



// console.log(newtitleh2);

//replaceChild(new,old);
const getcardaction = document.querySelector(".card-action");

getcardaction.replaceChild(newtitleh2, oldtitleh4);


//remove element

const getlis = document.querySelectorAll("li") //Node list can loop

getlis[0].remove();
// getlis[5].remove();

// Remove child Element  
const getfirstul = document.querySelector("ul");

// getfirstul.remove();
// getfirstul.removeChild(getlis[1]);



// Classname vs classlist  
const firstli = document.querySelector("li:first-child");
console.log(firstli);
console.log(firstli.children); //Htmlcollection
console.log(firstli.children[0]);


let firstlink;

firstlink = firstli.children[0];
console.log(firstli.children[0].className);

firstlink.className = "delete-myself";
firstlink.className = " delet-item delete-myself";
firstlink.className = "delete-item delete-me delete-myself";

console.log(firstlink);


// firstlink = firstlink.classList; //Dom token list 
// console.log(firstlink);
// console.log(firstlink[0]);

// firstlink.classList.add("delete-ourselve");
// firstlink.classList.add("delete-myselve");
// firstlink.classList.add("delete-ourselve", "delete-myselve");

// firstlink.className = "delete=item delete-me delete-myself delete-ourselve";
// firstlink.className = "delete=item delete-me delete-myself "; //delete class 

// firstlink.classList.remove("delete-myself");
// firstlink.classList.remove("delete-myself", "delete-ourselve");



// replace(old, new) 
// firstlink.classList.replace("delete-me", "delete-myself");


// if (firstlink.classList.contains("delete-myself")) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

// if (firstlink.className === "delete-item delete-myself") {
//     console.log("yes");
// } else {
//     console.log("no");
// };


//Attribute
let getatt = firstlink.href;
getatt = firstlink.getAttribute("href");
firstlink.setAttribute("href", "https://google.com");

getatt = firstlink.hasAttribute("href");
console.log(getatt);
getatt = firstlink.hasAttribute("title");
console.log(getatt);




const clearbtn = document.querySelector(".clear-tasks");

// clearbtn.addEventListener("click", function (e) {
//     console.log("hey i am woeking");
//     // console.log(e);
//     console.log(e.target);
//     // console.log(this)



//     // this (work only regular function  ) = e.target 
// })

// method 2 
clearbtn.addEventListener("click", myclick);
console.log(clearbtn.className);

function myclick(e) {
    console.log("i am working");

    e.preventDefault();

    console.log(e);
    // console.log(e.target);
    // console.log(this);

    let val;

    // val = e.target.className;
    // val = e.target.classList;
    // val.e.target.id;


    // // event type 
    // val = e.type;
    // console.log(val);


    // coordinate event - relative to the window 
    val = e.clientX;
    val = e.clientY;
    console.log(val)


    //coordinate event -relative to the element
    val = e.offsetX;
    val = e.offsetY;  // button yae nay yar ko pal yu tat
    console.log(val)

}


// mouse evnt
const clbtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const headingh2 = document.querySelector("#tasktitle")

// single click 
// clbtn.addEventListener('click', mouseeventtype);

// double click 
// clbtn.addEventListener("dblclick", mouseeventtype);

// mousedown 
// clbtn.addEventListener("mousedown", mouseeventtype);

// mouseup 
// clbtn.addEventListener("mouseup", mouseeventtype);

// // mouseenter 
// card.addEventListener("mouseenter", mouseeventtype);

// // mouseover 
// card.addEventListener("mouseover", mouseeventtype);

// // mouseleave 
// card.addEventListener("mouseleave", mouseeventtype);

// mouseout
// card.addEventListener("mouseout", mouseeventtype)

// function mouseeventtype(e) {
//     console.log(`Event Type = ${e.type}`);

//     // headingh2.textContent = `MouseX:${e.offsetX} MouseY:${clientX} MouseY:${clientY}`
//     headingh2.textContent = `MouseX: ${e.offsetX} MouseY:${e.offsetY}`;

//     document.body.style.background = `rgba(${e.offsetX},${e.offsetY})`;

// }

// const formel = document.querySelector();










//Event Bubbling
// document.querySelector(".card-title").addEventListener("click", function () {
//     console.log("i am card-title")
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//     console.log("I am card-action")
// });

// document.querySelector('.card').addEventListener('click', function () {
//     console.log('i am card')
// });



// Event Deligation 
// const deleitem = document.querySelector(".delete-item");
// deleitem.addEventListener('click', deleteitem);

// function deleteitem(e) {
//     console.log(' i am delete item');
//     console.log(e.target);
//     e.preventDefault();
// }

// document.body.addEventListener('click', evendeleg)

// function evendeleg(e) {

//     e.preventDefault();
//     // console.log('i am working')
//     // console.log(e.target)

//     // if (e.target.className === "fa-solid fa-trash") {
//     //     console.log('i am trash can')
//     // }

//     //  i         a 
//     // if (e.target.parentElement.className === "delete-me ") {
//     //     console.log('i am trash can')
//     // }

//     // if (e.target.parentElement.className === "delete-me delete-item ") {
//     //     console.log('i am trash can')
//     // }


//     if (e.target.parentElement.classList.contains("delete-me")) {
//         console.log(' hey i am working by classlist')
//     }

//     //  2.jun.2022  kyann tay thi
// }





document.querySelector('.form').addEventListener('submit', function (e) {
    // console.log('i am working');
    e.preventDefault();


    const getnewtask = document.getElementById('task').value;
    // console.log(getnewtask);

    // localStorage.setItem("mytasks", getnewtask)

    let alltasks;

    if (localStorage.getItem("mytasks") === null) {
        alltasks = [];
    } else {
        alltasks = JSON.parse(localStorage.getItem("mytasks"))
    }

    alltasks.push(getnewtask);

    localStorage.setItem('mytasks', JSON.stringify(alltasks))



    console.log(alltasks);

});

// console.log(localStorage.getItem("mytasks"));
// console.log(typeof localStorage.getItem("mytasks"));

// console.log(JSON.parse(localStorage.getItem("mytasks")));
// console.log(typeof JSON.parse(localStorage.getItem("mytasks")))

let getalltasks = localStorage.getItem("mytasks");
getalltasks = JSON.parse(getalltasks);
console.log(getalltasks)

getalltasks.forEach(function (getalltasks) {
    console.log(getalltasks);
})




















