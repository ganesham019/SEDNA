const navbarSection = document.querySelector("#navbar");
const header = document.querySelector("#header");
const nav = document.querySelector("nav");
window.onscroll = function (e) {
    const ScrollHeight = window.scrollY;
    if (ScrollHeight > navbarSection.clientHeight) {
        header.classList.add("header_theme");
        nav.classList.add("pd--small");
    } else {
        header.classList.remove("header_theme");
        nav.classList.remove("pd--small");
    }
};

// get Device
// Device Ipad
const device = document.querySelector(".animate--device-one");
const deviceTwo = document.querySelector(".animate--device-two");
const deviceThree = document.querySelector(".animate--device-three");
const diamond = document.querySelector(".diamond_des");

const option = {
    root: null,
    rootMargin: "100px",
    threshold: 1,
}
const mobileOption = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1,
}
const desktopOption = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1,
}
const diamondOption = {
    root: null,
    rootMargin: "100px",
    threshold: 0.1,
}

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--fadein');
        }
    })
}

const mobileCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--bottom_fadein');
        }
    })
}
const desktopCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--left_fadein');
        }
    })
}
const diamondCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate--bottom_fadein');
        }
    })
}
// Create a Observer
const Observer = new IntersectionObserver(callback, Option);
const MobileObserver = new IntersectionObserver(mobileCallback, mobileOption);
const DesktopObserver = new IntersectionObserver(desktopCallback, desktopOption);
const DiamondObserver = new IntersectionObserver(diamondCallback, diamondOption);

Observer.observe(device);
MobileObserver.observe(deviceTwo);
DesktopObserver.observe(deviceThree);
DiamondObserver.observe(diamond);




