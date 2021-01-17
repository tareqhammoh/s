
//get slider informaion |


var silderImage = Array.from(document.querySelectorAll('.slider-container img'));
//var silderplit = Array.from(document.querySelectorAll('ul'));

//slid number string element
 var slidnumberelemnt = document.getElementById('slide-number');

 //prev next

var prev = document.getElementById('prev');
var next = document.getElementById('next');


// number of img
var slidecount =silderImage.length;


//set Current slide

var currentslid = 1;
//handel click

next.onclick=nextslid;
prev.onclick=prevslide;

/// create element ul


var paginelement = document.createElement('ul');

//set id

paginelement .setAttribute('id','pagul');


//loop to craet li in ul


    for (var i = 1 ; i<=slidecount;i++){

            var pagli = document.createElement('li');
          //set id
          //custom attribute
          pagli .setAttribute('data-index',i);


          pagli.appendChild(document.createTextNode(i));



          paginelement.appendChild(pagli);



    }

//add ul to the page
var ind =document.getElementById('indicator');
ind.appendChild(paginelement);

var silderplit = Array.from(document.querySelectorAll('ul li'));









 var paginationcaretui = document.getElementById('pagul');

check();



//function next slied

        function nextslid() {
                if(currentslid <slidecount){
                currentslid++;
                check()


                }else{


                currentslid =1;
                check();

                }

        }




//function preiv slied

      function prevslide() {

              if(currentslid >1){
                currentslid--;
                check()

              }else {

                if (currentslid <2){

                currentslid=4;
                check();

                }

              }

           

      }

function check() {

 slidnumberelemnt.textContent='slide #'+(currentslid)+'of'+(slidecount);
 removact();

silderImage[currentslid-1].classList.add('active');
 paginationcaretui.children[currentslid-1].classList.add('active');





}

function removact() {

 silderImage.forEach(function (img) {
  img.classList.remove('active')});


 silderplit.forEach(function (img) {

  img.classList.remove('active');

 })





}