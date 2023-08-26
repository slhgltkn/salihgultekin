document.addEventListener("DOMContentLoaded", function () {
    const rectangles = document.querySelectorAll(".rectanglesol");
    const contentSections = document.querySelectorAll(".content > div");

    let activeRectangle = null;

    rectangles.forEach((rectangle, index) => {
        rectangle.addEventListener("click", () => {
            contentSections[index].scrollIntoView({ behavior: "smooth" });
        });

        rectangle.addEventListener("mouseenter", () => {
            if (rectangle !== activeRectangle) {
                rectangle.style.backgroundColor = "grey";
            }
        });

        rectangle.addEventListener("mouseleave", () => {
            if (rectangle !== activeRectangle) {
                rectangle.style.backgroundColor = "rgba(58, 58, 58, 0.329)";
            }
        });
    });

    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const targetRectangle = document.querySelector(
                    `.rectanglesol[data-target="${entry.target.id}"]`
                );
                if (targetRectangle !== activeRectangle) {
                    if (activeRectangle) {
                        activeRectangle.style.backgroundColor = "rgba(58, 58, 58, 0.329)";
                    }
                    targetRectangle.style.backgroundColor = "#f64d28";
                    activeRectangle = targetRectangle;
                }
            }
        });
    }, options);

    contentSections.forEach((section) => {
        observer.observe(section);
    });
});
