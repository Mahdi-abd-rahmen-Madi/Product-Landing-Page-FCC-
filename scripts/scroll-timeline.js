import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

// Scroll tracker for the timeline
const scrollTracker = document.querySelector('.scroll-tracker');


const scrollTrackingTimeline = new ScrollTimeline ( {
    source: document.scrollingElement,
    orientation: 'block',
    scrollOffsets : [CSS.percent(0), CSS.percent(100)],
})

scrollTracker.animate(
    {
       transform:["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1000,
        fill: 'forwards',
        easing: 'ease-in-out',
        timeline: scrollTrackingTimeline,
    }
);


