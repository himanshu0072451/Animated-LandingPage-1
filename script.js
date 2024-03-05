let tl = gsap.timeline();

const Time = () => {
  let a = 0;
  setInterval(function () {
    a += Math.floor(Math.random() * 20);
    let loading = document.querySelector(".loader h1");
    if (a <= 100) {
      loading.innerHTML = `${a}%`;
    } else {
      a = 100;
    }
  }, 150);
};

tl.to(".loader h1", {
  duration: 2,
  delay: 0.5,
  onStart: Time(),
});
tl.to(".loader", {
  y: "-100%",
  duration: 1,
  delay: 0.5,
});

tl.from(".nav img, .nav h5, .nav button", {
  y: -100,
  duration: 1,
  delay: 0.5,
  stagger: 0.2,
  opacity: 0,
});
tl.from(".main h1, .mid-txt span", {
  x: -300,
  duration: 1,
  delay: 1,
  stagger: 0.4,
  opacity: 0,
});
tl.from(".img img, .img2 img, .img3 img", {
  y: 300,
  duration: 1.5,
  delay: 1,
  stagger: 1,
  opacity: 0,
});
tl.from(".img4 img", {
  y: -100,
  duration: 1.5,
  delay: 0.5,
  stagger: 0.4,
  opacity: 0,
});
tl.to(".scroll", {
  y: -20,
  delay: 0.5,
  duration: 0.7,
  opacity: 1,
  yoyo: true,
  repeat: -1,
});
