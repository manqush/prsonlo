
let BoxOpin=document.querySelectorAll(".BoxCousOpin");
let BigHighe=0;

function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

for (let i = 0; i < BoxOpin.length; i++) {
    if (BigHighe<BoxOpin[i].clientHeight) {
        BigHighe=BoxOpin[i].clientHeight;
    }
}

for (let i = 0; i < BoxOpin.length; i++) {
    let AddCss=BoxOpin[i];

    css(AddCss, {
        'height': BigHighe+'px'
    });
}

// main mobile controller

// close menu on mobile and open
try {



    let afterAnimationTime=0.6;

    // open btn link
    let OpenMenu=document.querySelector('.linkOpenHeader');

    // btn close in menu
    let colseMenu=document.querySelector('.closeMobileMenu');
    
    // class parent menu
    let ParentMenu=document.querySelector('.MobileLeftFixtMenu');

    // class child menu
    let ChildMenu=document.querySelector('.menuLeftFix');

    // close btn link
    colseMenu.addEventListener('click',()=>{
        // add animation
         ParentMenu.classList.toggle('animate__fadeOut');
        ChildMenu.classList.toggle('animate__lightSpeedOutLeft');

        // after complete animation
        setTimeout(()=>{
            ParentMenu.classList.toggle('MobileLeftFixtMenuClose');
            ChildMenu.classList.toggle('closeMobileMenuClose');

            // remove class animation of library
            ParentMenu.classList.toggle('animate__fadeOut');
            ChildMenu.classList.toggle('animate__lightSpeedOutLeft');
            
        },afterAnimationTime * 1000)
    });




    OpenMenu.addEventListener('click',()=>{

        ParentMenu.classList.toggle('MobileLeftFixtMenuClose');
        ChildMenu.classList.toggle('closeMobileMenuClose');
        // add animation
         ParentMenu.classList.toggle('animate__fadeIn');
         ChildMenu.classList.toggle('animate__fadeInLeft');

        // after complete animation
        setTimeout(()=>{
            
            ParentMenu.classList.toggle('animate__fadeIn');
            ChildMenu.classList.toggle('animate__fadeInLeft');
            
        },afterAnimationTime * 1000);
    });
} catch (error) {
    
}

