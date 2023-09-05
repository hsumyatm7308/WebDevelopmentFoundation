let val;

val = document;
val = document.doctype;
val = document.head;
val = document.URL;


val = document.links;//HTML Collection

 val = document.links[0];
// val = document.links[3];
// val = document.links[3].id;
// val = document.links[5].id;

// val = document.links[3].class;//undefined

 val = document.links[3].className;//delete-item my-item
 val = document.links[3].classList;//DOMTokenList
 val = document.links[3].classList[0];//delete-item
 val = document.links[3].classList[1];//my-item

 val = document.forms;//HTMLCollection
 val = document.forms[0];
 val = document.forms[0].id;
 val = document.forms[0].className;
 val = document.forms[0].classList;
 val = document.forms[0].classList[0];//form
 val = document.forms[0].action;//file:///Users/theinthanhein/Desktop/wdfbatch9/hay
 val = document.forms[0].method;//get


 val = document.images;//HTMLCollection
 val = document.images[0];
 val = document.images[0].id;
 val = document.images[0].className;//loading
 val = document.images[0].classList;//DOMTokenLis
 val = document.images[0].classList[0];//loading
 val = document.images[0].src;//https://i.gifer.com/ZKZg.gif
 val = document.images[0].alt;//loader

 val = document.scripts;//HTMLCollection
 val = document.scripts[0];
 val = document.scripts[0].src;
 val = document.scripts[0].type;


//console.log(val);

// = Change Style

   document.getElementById('tasktitle').style.backgroundColor = 'green';
   document.getElementById('tasktitle').style.color = '#fff';
   document.getElementById('tasktitle').style.paddind = "5px";

// Change Content

document.getElementById('tasktitle').textContent = "My List";
document.getElementById('tasktitle').innerText = "My Tasks";
document.getElementById('tasktitle').innerHTML = "<span style='color:yellow;'>My Jobs</span>";


//=> Call by Class Name

const lis =document.getElementsByClassName('list-group-item');//HTMLCollection
console.log(lis);
console.log(lis[2]);
// lis[2].style.color = "blue";
// //lis[2].textContent = "Have to visit";
// //lis[2].innerText = "Have to cook";
// lis[2].innerHTML = 'Have to read <a href="#" id="delete-item2" class="delete-item"><i class="fas fa-trash-alt"></i></a></li>  '



// => Over Time 

// => Call by Tag Name (Element)

const litags = document.getElementsByTagName('li'); //html collection
console.log(litags);
console.log(litags[3]);
// litags[3].style.color = "red";
// litags[3].innerHTML = 'Have to cook <a href="#" id="delete-item4" class="delete-item myitem" ><i class="fas fa-trash-alt" ></i></a> '
console.log(litags);

//Query selector

console.log(document.querySelector("#tasktitle"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h3"));

console.log(document.querySelector('li')); //only first li
console.log(document.querySelector('list-group-item')); //only first li

//document.querySelector('li').style.color = "blue";
//document.querySelector('ul li').style.color = "violet";
// document.querySelector('ul li:nth-child(odd)').style.backgroundColor = "green";
// document.querySelector('ul li:nth-child(even)').style.backgroundColor = "silver";
// document.querySelector('ul li:nth-child(odd)').style.backgroundColor = "pink";
// document.querySelector('ul li:last-child').style.backgroundColor = "yellow";
// document.querySelector('ul li:last-of-type').style.backgroundColor = "black";
// document.querySelector('ul li:nth-of-type(4)').style.backgroundColor = "red";

//Query selector All

console.log(document.querySelectorAll("#tasktitle")); //Node List
console.log(document.querySelectorAll("#tasktitle")[0]); 

console.log(document.querySelectorAll("li"));  //Node List
console.log(document.querySelectorAll(".list-group-item"));  //Node List

const itms = document.querySelectorAll('li');
console.log(itms); //NodeList
console.log(itms[1]);


const listitems = document.querySelector('ul') .getElementsByClassName("list-group-item");//HTMLCollection(5)
console.log(listitems);
console.log(typeof listitems);
console.log(listitems[1]);


const arritems = Array.from(listitems);
console.log(arritems);

//arritems.forEach(function(arritem,idx){

   // console.log(arritem);

   // arritem.textContent = "Hello";

   // arritem.textContent = `${idx} = Hello`;

   // arritem.textContent = `${++idx} = Hello`;
//});

const listitms = document.querySelectorAll('ul.list-group li.list-group-item');//Nodelist
console.log(listitms);
console.log(typeof listitms);
console.log(listitms[4]);

 // listitms.forEach(function(listitm,idx){

 //   //console.log(listitm);

 //   listitm.innerText = "Hello World";

 //   listitm.innerText = `${idx} = Hello World`;

 //   listitm.innerText = `${++idx} = Hello World`;
//});

const lisodds = document.querySelectorAll('li:nth-child(odd)');
//console.log(lisodds);
const lisevens = document.querySelectorAll('li:nth-child(even)');
//console.log(lisevens);

lisodds.forEach(function(lisodd){
   lisodd.style.backgroundColor = "gray";
});


// lisevens.forEach(function(liseven){
//    liseven.style.backgroundColor = "red";
// })

 for(let i=0 ; i < lisevens.length;i++){
   console.log(i);
   lisevens[i].style.backgroundColor = "silver";
 }

 //Parent to Children

  var getli = document.querySelector('ul li');
      getli = document.querySelector('li.list-group-item');
      getli = document.querySelector('li.list-group-item:first-child');
 console.log(getli);


  let chl;
  const getul = document.querySelector('ul.list-group');
  //console.log(getul);

  chl = getul.children;//HTML Collection
  console.log(chl);
  console.log(chl[2]);

  chl[1].textContent ="Have to go";
  getul.children[3].innerText = "Have to Cook";
  chl[4].innerHTML = 'Have to read <a href="#" id="delete-item2" class="delete-item"><i class="fas fa-trash-alt"></i></a></li>  '

  
  //=>Parent to Children to Children
  
  chl = getul.children;//HTMl Collection
  chl = getul.children[0];
  chl = getul.children[0].children;////HTMl Collection

         //ul      li          a
  chl = getul.children[0].children[0];
  chl = getul.children[0].children[0].id;
  chl = getul.children[0].children[0].className;
  chl = getul.children[0].children[0].classList;
  chl = getul.children[0].children[0].classList[0];
  chl = getul.children[0].children[0].href;

  chl = getul.children[0].children[0].children;//HTML Collection

    //     ul      li          a            i
  chl = getul.children[0].children[0].children[0];

  console.log(chl);

  chl = getul.children.length;//5
  chl = getul.childElementCount;//5

  chl = getul.children[0].childElementCount;//1
   chl = getul.children[0].children[0].childElementCount;//1

  console.log(chl);

  //Child to Parent Element

  const getfirstli = document.querySelector('li.list-group-item:first-child');
  //console.log(getfirstli);
                     // li         ul
 let getparent = getfirstli.parentElement;
     getparent = getfirstli.parentElement.parentElement;
              //   li          ul        div.card-action    div.card
     getparent = getfirstli.parentElement.parentElement.parentElement;

  console.log(getparent);


//Next Element Sibling

  let getsilbing = getfirstli;
      getsilbing = getfirstli.nextElementSibling;
      getsilbing = getfirstli.nextElementSibling.nextElementSibling;
      getsilbing = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
      getsilbing = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
      getsilbing = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

console.log(getsilbing);

//Previous Element Sibling
            //  li item 1       li item 2        li item 3          li item2
  getsilbing = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
  console.log(getsilbing);




//Create Element

  const newli = document.createElement('li');

  //Add ID
   newli.id ="new - item";

  //Add Class
   newli.className = "list-group-item"
   newli.className = "delete-me"
   newli.className = "list-group-item delete-me"


   newli.classList.add("delete-i");
   newli.classList.add("delete-you");
   newli.classList.add("delete-we","delete-your","delete-us");

   //Add Attribute
   //setAttribute(qulified name,value)

   newli.setAttribute('title','newitem');

   //newli.textContent = 'hay';
   //newli.innerText = 'hi';
   //newli.innerHTML = 'List item 6 <a href="#" id="delete-item6" class="delete-item"><i class="fas fa-trash-alt"></i></a></li> '


    // const newtext = document.createTextNode("Hello World");
    // newli.appendChild(newtext);

    newli.appendChild(document.createTextNode("Hello Thiland"));


  console.log(newli);

  const newlink =document.createElement('a');

  //Add href
  newlink.href = "#";


  //Add Id
  newlink.id = "delete-item6";


  //Add Class
  //newlink.className = "delete-item";
  newlink.classList.add("delete-item");

   console.log(newlink);

   const newitalic = document.createElement('i');
   newitalic.className = "fas fa-trash-alt";
   newitalic.classList.add('fas','fa-trash-alt');
   //console.log(newitalic);

   newlink.appendChild(newitalic);
   //console.log(newlink);

   newli.appendChild(newlink);
   console.log(newli);

   document.querySelector('ul.list-group').appendChild(newli);

   //Replace Element
   //replaceChild(new,old)

   const newtitleh2 = document.createElement("h2");
   newtitleh2.id = "tasktitle";

   const newcaption = document.createTextNode("All My List");
   newtitleh2.appendChild(newcaption);
   //cosole.log(newtitleh2);

   const oldtitleh4 = document.getElementById("tasktitle");
   //console.log(oldtitleh4);

   const getcardaction = document.querySelector('.card-action');
   getcardaction.replaceChild(newtitleh2,oldtitleh4);



  // const newestli = document.createElement('li');
  // newestli.textContent = "Hello Thiland";
  // const newtxt = document.createTextNode("Hello Myanmar");
  // newestli.appendChild(newtxt);
  // console.log(newestli);


   // => Remove  Element (self)

   const getlis = document.querySelectorAll('li');//Node List
   // console.log(getlis);
   // console.log(getlis[0]);

   // getlis[0].remove();
   // getlis[3].remove();

   // console.log(getlis);//6

   //=>Remove Child Element

   const getfirstul = document.querySelector('ul');
   //console.log(getfirstul);
   //getfirstul.remove();

   // getfirstul.removeChild(getlis[0]);
   // getfirstul.removeChild(getlis[5]);
   // getfirstul.removeChild(getlis[1]);


//Attribute

   const firstli = document.querySelector('li');
   //console.log(firstli);

   const firstlichild = firstli.children[0];
   //console.log(firstlichild);
   //console.log(firstlichild.id);
  // console.log(firstlichild.href);//route#
   //console.log(firstlichild.getAttribute('href'));#
   console.log(firstlichild.title);//iamtitle
   console.log(firstlichild.alt);//undefined
   console.log(firstlichild.getAttribute('alt'));//iamalt

   //firstlichild.href = "https://google.com";
   firstlichild.setAttribute('href','https://linkedin.com');

   var hasatt = firstlichild.hasAttribute('href');
   console.log(hasatt);//true
   hasatt = firstlichild.hasAttribute('hay');
   console.log(hasatt);//false

// className vs classList

   // console.log(firstlichild.className); //delete-item

   // // firstlichild.className = "delete-myself";
   // // firstlichild.className = "delete-item delete-myself";
    firstlichild.className = "delete-item delete-myself delete-ourself";
    console.log(firstlichild.className);

   //  console.log(firstlichild.classList);//DOMTokenList
   //  console.log(firstlichild.classList[0]);//delete-item
   //  console.log(firstlichild.classList[1]);//undefined

   //  firstlichild.classList.add('delete-myself');
   //  firstlichild.classList.add('delete-ourself');
   //  console.log(firstlichild.classList);

   //  firstlichild.classList.remove('delete-myself');
   //  firstlichild.classList.remove('delete-myself','delete-item');


   //  console.log(firstlichild.classList);

   //Check Class Name

   //console.log(firstlichild.className);

    if(firstlichild.className === 'delete-item delete-myself delete-ourself'){
      console.log("Yes");
    }else{
      console.log("No");
    }

    console.log(firstlichild.classList);//DOMTokenList

   if(firstlichild.classList.contains('delete-myself')){
    console.log("Yes");
   }else{
    console.log("No");
   }


// =>addEventListener("eventtype",callfunction());

   const clearbtn = document.querySelector('.clear-tasks');

   //clearbtn.addEventListener('click',function(e){
       
       //console.log("hay i am working");

      // console.log(clearbtn);

    //console.log(e);
    //console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);

    //console.log(this);// if u want direct element !! just use by regular function
  // });



  //  Method 2

    //  clearbtn.addEventListener("click",myclick);

     function myclick(e){
    //   console.log("hay i am working");
     
      // console.log(e);
      // console.log(e.target);
        // console.log(e.target.id);
        // console.log(e.target.className);
    //    console.log(this);
        // e.target.innerText = "Im finidhed";

        //relative to window 
        const clientx = e.clientX;
        const clienty = e.clientY;
        console.log(clientx,clienty);

        //relative to element
        const offsetx = e.offsetX;
        const offsety = e.offsetY;
        console.log(offsetx,offsety);

      e.preventDefault();

     };

//Mouse Event

const clbtn = document.querySelector('.clear-tasks');

//Single Click
// clbtn.addEventListener('click',mouseeventtype)

//Double Click
// clbtn.addEventListener('dblclick',mouseeventtype)

//mousedown
// clbtn.addEventListener('mousedown',mouseeventtype)

//mouseup
// clbtn.addEventListener('mouseup',mouseeventtype)

const card = document.querySelector('.card');

//mouse enter
// card.addEventListener('mouseenter',mouseeventtype);

//mouse over
// card.addEventListener('mouseover',mouseeventtype)

//mouse leave
// card.addEventListener('mouseleave',mouseeventtype)

//mouse out
// card.addEventListener('mouseout',mouseeventtype)

//mouse move
// card.addEventListener('mousemove',mouseeventtype)

    
const headingh2 = document.querySelector('h2');

function mouseeventtype(e){
    // console.log('i am working');

    // console.log(`Event Type = ${e.type}`);

    // headingh2.textContent = `MouseX: ${e.clientX} MouseY: ${e.clientY}`;
    headingh2.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.offsetX},0.5)`;
}

//submit

const getform = document.querySelector('form');

// getform.addEventListener('submit',inputeventtype);

// function inputeventtype(e){
//     console.log(`Event Type = ${e.type}`);

//     e.preventDefault();
// }

//Input Event

const getinput = document.querySelector('#task');

//Key Down
// getinput.addEventListener('keydown',inputeventtype);

//Key Press
// getinput.addEventListener('keypress',inputeventtype);

//Key Up
// getinput.addEventListener('keyup',inputeventtype);

//Input
// getinput.addEventListener('input',inputeventtype);


//Focus
// getinput.addEventListener('focus',inputeventtype);

//Blur
getinput.addEventListener('blur',inputeventtype);

function inputeventtype(e){
  console.log(`Event Type = ${e.type}`);
  // console.log(getinput);
  // console.log(e);
  // console.log(e.target);
  // console.log(this);
  // console.log(e.target.value);
  // console.log(this.value);
  console.log(getinput.value);
}






// 24.8.2023
// 28.8.2023
// 29.8.2023
// 30.8.2023
// 31.8.2023