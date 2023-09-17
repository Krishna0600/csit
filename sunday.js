$(document).ready(function () {
    var slides = $(".slide");
    var dots = $(".dot");
    var index = 0;

    $("#left-arrow").click(function () {
        index += (-1);
        changedslide();
    });

    $("#right-arrow").click(function () {
        index += 1;
        changedslide();
    });

    changedslide();

    function changedslide() {

        if (index > slides.length - 1)
            index = 0;

        if (index < 0)
            index = slides.length - 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i].classList.remove("active");
        }

        slides[index].style.display = "block";
        dots[index].classList.add("active");
    }
});