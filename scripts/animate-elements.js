// animated elements on scroll 

const animatedElements = document.querySelectorAll('.animate-on-scroll');

const animatedElementsTimeline = new ScrollTimeline ( {
    // source: document.scrollingElement,
    // orientation: 'block',
    // => these are the defaults values therfore not needed
    scrollOffsets : [
        {target: animatedElements, edge:"end",threshold: "0"},
        {target: animatedElements, edge:"start",threshold: "1"},
    ],
});

animatedElements.animate (
    {
        transform: [
            "prespective(1000px) rotateX(95deg)", 
            "prespective(1000px) rotate(0)",
        ],
        opacity: ["0","1"],
    },
    {
        duration: 1,
        fill: 'forwards',
        easing: 'ease-in-out',
        timeline: animatedElementsTimeline,
    }
)