gsap.registerPlugin(ScrollTrigger),
gsap.registerPlugin(MotionPathPlugin),

console.log("ScrollTrigger", ScrollTrigger)


/////////////////////////////////// Profile In /////////////////////////////////////

const picrewPath = [
  { left: '17%', top: 80 },
]

const picrewTL = gsap.timeline({
	scrollTrigger: {
	trigger: ".top-container",
	scrub: 2,
	start: 150,
	},
})

picrewTL.to(".profile", {
	motionPath: {
		path: picrewPath,
		autoRotate: false,
	},
	duration: 1,
  ease: Power1.easeInOut,
});

/////////////////////////////////// Profile Shift /////////////////////////////////////

const picrewPath2 = [
	{ left: '-10%', top: 80 },
  ]
  
  const picrewTL2 = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 1300,
	  },
  })
  
  picrewTL2.to(".profile", {
	  motionPath: {
		  path: picrewPath2,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

/////////////////////////////////// Profile Out /////////////////////////////////////

const picrewPath3 = [
	{ opacity: 0 },
  ]
  
  const picrewTL3 = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".middle-continer",
	  scrub: 2,
	  start: 2000,
	  },
  })
  
  picrewTL3.to(".profile", {
	  motionPath: {
		  path: picrewPath3,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

/////////////////////////////////// Skills in /////////////////////////////////////

const skillsPath = [
	{ left: '35%', top: 120 },
  ]
  
  const skillsTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 1500,
	  },
  })
  
  skillsTL.to(".skills", {
	  motionPath: {
		  path: skillsPath,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

  /////////////////////////////////// Skills Out /////////////////////////////////////

const skillsPath2 = [
	{ opacity: 0 },
  ]
  
  const skillsTL2 = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".middle-continer",
	  scrub: 2,
	  start: 2000,
	  },
  })
  
  skillsTL2.to(".skills", {
	  motionPath: {
		  path: skillsPath2,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

  /////////////////////////////////// Contact In /////////////////////////////////////

const contactPath = [
	{ left: '30%', top: 80 },
  ]
  
  const contactTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".bottom-container",
	  scrub: 2,
	  start: 1600,
	  },
  })
  
  contactTL.to(".contact-me", {
	  motionPath: {
		  path: contactPath,
		  autoRotate: false,
	  },
	  duration: 1,
  });

   /////////////////////////////////// Footer In /////////////////////////////////////

const footerPath = [
	{ left: '30%', top: 100 },
  ]
  
  const footerTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 1600,
	  },
  })
  
  footerTL.to(".botom-container", {
	  motionPath: {
		  path: footerPath,
		  autoRotate: false,
	  },
	  duration: 1,
  });

  /////////////////////////////////// The8 In /////////////////////////////////////

const the8Path = [
	{ opacity: 1 },
  ]
  
  const the8TL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 700,
	  },
  })
  
  the8TL.to("#the8", {
	  motionPath: {
		  path: the8Path,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

  /////////////////////////////////// Skye In /////////////////////////////////////

const skyePath = [
	{ opacity: 1 },
  ]
  
  const skyeTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 1300,
	  },
  })
  
  skyeTL.to("#skye", {
	  motionPath: {
		  path: skyePath,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

/////////////////////////////////// Water In /////////////////////////////////////

const waterPath = [
	{ opacity: 1 },
  ]
  
  const waterTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 1800,
	  },
  })
  
  waterTL.to("#underwater", {
	  motionPath: {
		  path: waterPath,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

/////////////////////////////////// Gemini In /////////////////////////////////////

const geminiPath = [
	{ opacity: 1 },
  ]
  
  const geminiTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 2600,
	  },
  })
  
  geminiTL.to("#gemini", {
	  motionPath: {
		  path: geminiPath,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

/////////////////////////////////// Skater In /////////////////////////////////////

const skaterPath = [
	{ opacity: 1 },
  ]
  
  const skaterTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 3300,
	  },
  })
  
  skaterTL.to("#skater", {
	  motionPath: {
		  path: skaterPath,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

/////////////////////////////////// Aries In /////////////////////////////////////

const ariesPath = [
	{ opacity: 1 },
  ]
  
  const ariesTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 4100,
	  },
  })
  
  ariesTL.to("#aries", {
	  motionPath: {
		  path: ariesPath,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

 