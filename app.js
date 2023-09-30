const src = [
  "ressources/first.jpeg",
  "ressources/second.jpeg",
  "ressources/third.jpeg",
];


ScrollTrigger.create({
  trigger: '.sections',
  pin: '.tooltip',
  start: 'top 20%',
  end: 'bottom 80%',
  onEnter: () => {
    gsap.set('.tooltip', { right: '%' });
  },
  onLeave: () => {
    gsap.set('.tooltip', { right: '0%' });
  },
  onEnterBack: () => {
    gsap.set('.tooltip', { right: '0%' });
  },
  onLeaveBack: () => {
    gsap.set('.tooltip', { right: '0%' });
  },
});


const sections = document.querySelectorAll('.section')

sections.forEach((section, index) => {

  // console.log(index);
  ScrollTrigger.create({
    trigger: section,
    start: 'top center',
    end: "bottom center",
    onEnter: () => {
      gsap.set('.tooltip-img', {
        attr: {src: src[index]}
      })

    },
    onEnterBack: () => {
      gsap.set('.tooltip-img', {
        attr: {src: src[index]}
      })

    }
  })

})