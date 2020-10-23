// let active page section links stay highlighted to indicate position
// only activates when link to section is pressed
let links = document.querySelectorAll('.nav');
for(let i=0; i<links.length; i++){ 
  links[i].addEventListener('click', function() {  
    for(let j=0; j<links.length; j++)  
      links[j].classList.remove('active'); 
    this.classList.add('active');  
  });
}

// adding simple smooth scroll effect to anchor linked sections
// mostly  cited from javascriptkit.com, for scrollIntoView function
let sectionslinks = document.querySelectorAll('a[href^="#"]') 
for (let sectionlink of sectionslinks) { 
    sectionlink.addEventListener('click', (j)=> {  
        let toscrollto = sectionlink.getAttribute('href')
        let target = document.querySelector(toscrollto) 
        target.scrollIntoView({  
            behavior: 'smooth',  
            block: 'start'  
        })
        history.pushState(null, null, toscrollto)  
        j.preventDefault()
    })
}


//attempted to create fade in effect for the main text (id #landingtext), not working, copied from external sources
let element = document.getElementById('landingtext');
element.addEventListener('click', function() {
    element.style.opacity = "0";
    element.style.filter  = 'alpha(opacity=1)'; 
})

