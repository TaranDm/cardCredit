document.addEventListener("DOMContentLoaded", () => {

    // ======== Slider with double handle

    const priceSlider = document.getElementById('r-slider');

    noUiSlider.create(priceSlider, {
        start: [0, 1500],
        tooltips: true,
        connect: true,
        padding: 0,
        range: {
            'min': 0,
            'max': 1500,
        },
    });
});
