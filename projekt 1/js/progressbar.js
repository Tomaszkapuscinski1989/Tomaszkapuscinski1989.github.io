import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scroll = document.querySelector(".progressbar");

const scrollTracker = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})

scroll.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1,
        timeline: scrollTracker,
    }
);
/* ----------------------------------------------*/
