document.addEventListener("DOMContentLoaded", function() {
    let words = document.querySelectorAll('.word');

    words.forEach((word)=>{
        let letters = word.textContent.split("");
        word.textContent="";
        letters.forEach((letter)=>{
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    let changeText = ()=>{
        let currentWord = words[currentWordIndex];
        let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter,i)=>{
            setTimeout(()=>{
                letter.className = "letter out";
            },i * 80);
        });
        nextWord.style.opacity="1";
        Array.from(nextWord.children).forEach((letter,i)=>{
            letter.className = "letter behind";
            setTimeout(()=> {
                letter.className = "letter in";
            },340 + i * 80);
        });
        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    changeText();
    setInterval(changeText,3000);
});


// circle skills//
const circles =  document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = parseInt(elem.getAttribute("data-dots")); // Parse as integer
    var marked = parseInt(elem.getAttribute("data-percent")); // Parse as integer
    var percent = Math.floor(dots * marked / 100); // Corrected typo here
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`; // Fixed string interpolation
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points'); // Corrected variable name
    for(let i = 0; i < percent; i++){
        pointsMarked[i].classList.add('marked')
    }
});

//mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');

//active menu//
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


//sticky navbar///
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky" ,window.scrollY > 50)
})

// toggle icon navbar//
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


window.onclick = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}



//parallax///////////////////////////

const observer = IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scrll-scale");
scrollScale.forEach((el)=>observer(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer(el));

/////////////////EMAIL///////////////////////////////////

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Email sent successfully');
            form.reset(); // Clear the form
        } else {
            alert('Failed to send email');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Failed to send email');
    });
});
 document.getElementById('menu-icon').addEventListener('click', function() {
    var navlist = document.querySelector('.navlist');
    navlist.style.display = navlist.style.display === 'flex' ? 'none' : 'flex';
 }); 
 
 function myFunction(x) {
    x.classList.toggle("change");
  }