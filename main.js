'use strict';

        // section 1
const sectionOne = document.getElementById('section-one-grid');
const sectionOneCards = [
    { icon: "./assets/icons/icono_1.png", text: "En organic plus somos cada vez más conscientes de lo perjudicial de los químicos y compuestos de la mayoría de los cosméticos. Es por eso que hemos decidido ofrecerte a ti y al medio ambiente productos orgánicos libres de sulfatos, parabenos y siliconas. <br> Se parte de lo natural y organic repara de manera natural el deterioro del cabello y consigue que vuelva a ser suave y sedoso con organic plus." },
    { icon: "./assets/icons/icono_2.png", text: "Somos amantes de la calidad destacando la eficacia de nuestras formulas órganicas brindando excelentes resultados desde la primera aplicación." },
    { icon: "./assets/icons/icono_3.png", text: "Tamaños ideales para una duración óptima con productos elaborados con los m'as altos estándares de calidad, con precios irresistibles para cualquier presupuesto." },
]
sectionOneCards.forEach(card=>{
    sectionOne.innerHTML += `
    <div class="grid__item">
        <div class="card cardColumn">
            <div class="card__media">
                <img src=${card.icon} alt="" />
            </div>
            <div class="card__content">
                <p>${card.text}</p>
            </div>
        </div>
    </div>
    `
})




        // section 2
const sectionTwo = document.getElementById('section-two-grid');
const sectionTwoCards = [
    { slideDirection: 'right', image: "./assets/images/products/producto_1.png", title: 'Shampoo', text: "Nuestro shampoo organic plus coco y oliva es un sistema desintoxicante que fortacele, protege y desintoxica el cabello por medio de agentes limpiadores que dejan la hebra libre de impurezas, con una mezcla de aceite de coco y oliva, proteínas y vitaminas QUE AYUDAN A REPARAR INCLUSO LA HEBRA MÁS SEVERAMENTE DAÑADA y reseca impregnándola de una hidratación profunda y fortaleciéndolo de raíz a punta. <br>" },
    { slideDirection: 'right', image: "./assets/images/products/producto_2.png", title: 'Acondicionador', text: "Nuestro acondicionador organic plus de coco y oliva, como su nombre lo indica, tiene la misión de acondicionar el cabello, liberando aceites y proteínas esenciales que devuelvan la vitalidad y firmeza a la hebra, complementándose perfectamente con nuestro shampoo organic coco y oliva, garantizando una cabellera hermosa y saludable." },    
    { slideDirection: 'left', image: "./assets/images/products/producto_3.png", title: 'Mascarilla', text: "Nuestra mascarilla organic plus coco y oliva posee agentes acondicionadores que suavizan la fibra capilar preservando las proteínas naturales del folículo, ayudando a detener la caída, estímular el crecimiento, regenerar la hebra y nutrir profundamente el cabello." },
    { slideDirection: 'right', image: "./assets/images/products/producto_4.png", title: 'Botox', text: "Nuestro botox organic plus posee la mezcla perfecta entre elementos súper reparadores y vitaminas que además de acondicionar y humectar el cabello, lo dejan totalmente suave y sedoso devolviéndole su brillo natural." },
    { slideDirection: 'left', image: "./assets/images/products/producto_5.png", title: 'Leave-in', text: "Nuestro leave-in organic plus es el producto ideal para definir y cuidar tu cabello ya que cuenta con protector térmico y elementos naturales que ayudan a proteger la hebra de las inclemencias del clima y la polución ambientas manteniendo una apariencia sedosa y definida." },

]



let slideDirection = 'right';

sectionTwoCards.forEach((card, index)=>{
    let direction = index%2===0 ? 'flexend' : 'row__reverse flexstart'; 
    let justify = index%2!==0 ? 'flexend' : 'flexstart'; 
    let padding_left = index===2 ? 'padding_left' : '';   
    let third = index===2 ? 'third' : '';   

    sectionTwo.innerHTML += `
    <div class="grid__item">
        <div class="card ${direction}">
            <div class="card__media ${justify} ${slideDirection}">
                <img class='section-two__image ${third}' src="${card.image}" alt="">
            </div>
            <div class="card__content ${padding_left}">
                <h3>${card.title}</h3>
                <p>${card.text}</p>
            </div>
        </div>
    </div>
    `;

    slideDirection === 'right' ? slideDirection='left': slideDirection='right';
            console.log(slideDirection)
})






            // scroll animations
const cards_one = document.querySelectorAll('.section-one .card');


const animateSectionOne = (entries, observer)=>{
    entries.forEach(entrie=>{
        if(entrie.isIntersecting){
            entrie.target.classList.add("fade-in-translate-right");
        }
        
    })
}
const observer = new IntersectionObserver(animateSectionOne, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
});

cards_one.forEach(element=>{
    observer.observe(element);
})




const cards_two_images = document.querySelectorAll('.section-two .card .card__media');

const animateSectionTwo = (entries, observer)=>{
    entries.forEach(entrie=>{
        if(entrie.isIntersecting){
            entrie.target.classList.add(`slide-${slideDirection}`);
    }
    })
}
const observerTwo = new IntersectionObserver(animateSectionTwo, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
});


cards_two_images.forEach(element=>{
    observerTwo.observe(element);
})






const fixedButton = document.querySelector('.sticky');
const header = document.querySelector('header');

const showFixedButton = (entries, observer)=>{
    entries.forEach(entrie=>{
        fixedButton.style.opacity = entrie.isIntersecting ?'0' : '1';  
    })
}
const observerFixedButton = new IntersectionObserver(showFixedButton, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.0,
});

observerFixedButton.observe(header);



//change button color
const fixedButtonButton = document.querySelector('.sticky-button');

const changeFixedButtonColor = (entries, observer)=>{
    entries.forEach(entrie=>{
        fixedButtonButton.style.backgroundColor =  entrie.isIntersecting ? 'rgba(162, 193, 43,1)' : '#ED4B76';  
    })
}
const observerFixedButtonColor = new IntersectionObserver(changeFixedButtonColor, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.0,
});

observerFixedButtonColor.observe(sectionOne);



            //section three
    const sectionThree = document.querySelector('.section-three');

    const disappearButtonAtTheEnd = (entries, observer)=>{
    entries.forEach(entrie=>{
        fixedButtonButton.style.opacity =  entrie.isIntersecting ? '0' : '1';  
    })
}
const observerFixedButtonDisappear = new IntersectionObserver(disappearButtonAtTheEnd, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.6,
});

observerFixedButtonDisappear.observe(sectionThree);




//change header Image
const headerImage = document.querySelector('.hero__background img');
 
headerImage.src = window.innerWidth < 600 ? './assets/images/header_vertical.png' : './assets/images/header.png' ;
window.addEventListener('resize', ()=>{
    headerImage.src = window.innerWidth < 600 ? './assets/images/header_vertical.png' : './assets/images/header.png' ;
})



//slider
const slider = document.querySelector('.slider');
const sliderItem = document.querySelectorAll('.slider__item');
const slideLeft = document.querySelector('.slide.slide-left');
const slideRight = document.querySelector('.slide.slide-right');

let counter = 0;

slideRight.addEventListener('click', ()=>{
    counter++;
    if(counter === sliderItem.length) counter=0;     
    sliderItem.forEach(item=>{
        item.style.transform = `translateX(${-100*counter}%)`;
        console.log(counter)
    })
})
slideLeft.addEventListener('click', ()=>{
    counter--;
    if(counter<0) counter=sliderItem.length-1;     
    sliderItem.forEach(item=>{
        item.style.transform = `translateX(-${100*counter}%)`;
    })
    console.log(counter)
})






// slideLeft.addEventListener('click', ()=>{
//     sliderItem.forEach(item=>{
//         item.style.transform = `translateX(-${100*counter}%)`;
//     })
//     counter++;
//     if(counter === sliderItem.length) counter=0;     
// })
