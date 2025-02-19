
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


