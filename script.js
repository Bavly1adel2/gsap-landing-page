const text = document.querySelector('.text p')

text.innerHTML = text.innerHTML.split("")
    .map((char ,i)=>`<span style="transform:rotate(${i*10}deg)">${char}</span>`)
    .join("")


let num1 = document.querySelector('.num1')

let num2 = document.querySelector('.num2')

let num3 = document.querySelector('.num3')

const CounterUpAnimation = (number,start,end,duration)=>{
let startTimeStamp = null
    const step = (timestamp)=>{
    if(!startTimeStamp){
        startTimeStamp = timestamp
    }
    let prograss = Math.min((timestamp - startTimeStamp) / duration,1)
        number.innerHTML= Math.floor(prograss * (end-start) + start) + 'k+'

        if(prograss <1){
            window.requestAnimationFrame(step)
        }
    }
    window.requestAnimationFrame(step)
}
setTimeout(()=>{
    CounterUpAnimation(num1,0,100,5000)
    CounterUpAnimation(num2,0,32,2000)
    CounterUpAnimation(num3,0,50, 3000)

},500)

const navbar = document.querySelector('.nav-bar')

gsap.from(navbar.children,{
    duration:1.4,
    delay:.7,
    y:50,
    stagger:{
        amount:.5
    }
})

gsap.from('.side-one h1',{
    x:200,
    skewX:65,
    opacity:0,
    duration: 2.5,
    delay: 1,
    stagger:{
        amount:.5,
    }
})
gsap.from('.skew',{
    opacity:0,
    duration: 2.5,
    delay: 2,
    stagger:{
        amount:.5,
    }
})

gsap.from('.statistic',{
    delay:2,
    autoAlpha:0,
    stagger:.10

})
gsap.fromTo('.circle-text',{
    opacity:0,
    scale:0,
    rotate:400
},{
    duration:5,
    delay:2,
    opacity:1,
    scale: 1, rotation:10
})