// let active page section links stay highlighted to indicate position
// only activates when link to section is pressed
let links = document.querySelectorAll('.nav'); //select all elements inside the navbar into an array
for(let i=0; i<links.length; i++){  //  loop the array of links
  links[i].addEventListener('click', function() {  // add event that listens to users click to all links at once (instead of adding the event in html)
    for(let j=0; j<links.length; j++)  // loop the array of links 
      links[j].classList.remove('active'); 
    this.classList.add('active');  //setting active links when clicked to the .active display in css, which highlights the link and stays that way
  });
}



// adding simple smooth scroll effect to anchor linked sections
// mostly  cited from javascriptkit.com, for scrollIntoView function
let sectionslinks = document.querySelectorAll('a[href^="#"]')  // select and create array of anchor links
for (let sectionlink of sectionslinks) { 
    sectionlink.addEventListener('click', (j)=> {  // add event listener to each sectionlink in sectionlinks array using es6 arrow function
        let toscrollto = sectionlink.getAttribute('href')
        let target = document.querySelector(toscrollto)  // select the href link in anchor links to go to
        target.scrollIntoView({  // using scrollintoview function
            behavior: 'smooth',  // for smooth scroll animation
            block: 'start'  //specifying to scroll to the beginning of the section
        })
        history.pushState(null, null, toscrollto)  // appends to the browser current url href, with no interruption to the scrollnig smooth animation, instead of location.hash javascript property which disables animation
        j.preventDefault()
    })
}


//attempted to create fade in effect for the main text (id #landingtext), not working, copied from external sources
let element = document.getElementById('landingtext');
element.addEventListener('click', function() {
    element.style.opacity = "0";
    element.style.filter  = 'alpha(opacity=1)'; 
})

//attempt to create collapsible divs doesnt work
let butttops = document.querySelectorAll('button')  
for (let butttop of butttops) { 
    butttop.addEventListener('click', (m)=> {  
        let openup = butttop.getAttribute('href')
        let target = document.querySelectorAll('.openbutton')  
        target.style.display = "block"
        history.pushState(null, null, openup)  
        m.preventDefault()
    })
}