const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.style.boxShadow =
        "0 4px 15px rgba(0,0,0,0.15)";
    }
    else{
        navbar.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.1)";
    }

});

// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            const suffix = counter.dataset.suffix || "";

            let count = 0;
            const increment = target / 100;

            function updateCounter(){

                if(count < target){

                    count += increment;
                    counter.innerText =
                    Math.ceil(count) + suffix;

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText =
                    target + suffix;

                }

            }

            updateCounter();
            observer.unobserve(counter);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => {
    observer.observe(counter);
});
