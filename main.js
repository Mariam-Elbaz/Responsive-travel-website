// navbar icon
document.querySelector('.sidebar i').addEventListener('click',()=>{
    if(window.innerWidth <= 768){
        let menue = document.querySelector('nav .menue');

        menue.style.display = (menue.style.display === 'flex')? 'none': 'flex' ;


        // menue.style.transform = (menue.style.transform === 'translateX(100%)')?
        //  'translateX(0)': 'translateX(100%)' ;


        let landing = document.querySelector('.landing');

        menue.style.display = (menue.style.display === 'flex')?
        landing.style.opacity = '.05':
        landing.style.opacity = '1';
    } 
});



// stories slider 
let dots = document.querySelectorAll('.dot');
let storiesSlider = document.querySelector('.stories-slider');
let storyCard = document.querySelector('.story-card');

dots.forEach((dot, i) =>{
    dot.addEventListener('click', ()=>{

        // update active dot
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        // move slider
        let step = i *(storyCard.offsetWidth + 80);
        storiesSlider.style.transform = `translateX(-${step}px)`;

    })
})