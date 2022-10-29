let mouseX, mouseY, posX, posY, clientX, clientY;

document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    body.addEventListener("mousemove", (e) => {
        clientX = e.pageX;
        clientY = e.pageY;

        mouseCoords(e);
        cursor.classList.remove("hidden");
        follower.classList.remove("hidden");
    });

    const cursor = document.getElementById("cursor"),
        follower = document.getElementById("aura"),
        links = document.querySelectorAll(".project__button");

    (mouseX = 0), (mouseY = 0), (posX = 0), (posY = 0);

    function mouseCoords(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    gsap.to({}, 0.01, {
        repeat: -1,
        onRepeat: () => {
            posX += (mouseX - posX) / 5;
            posY += (mouseY - posY) / 5;

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY,
                },
            });
            gsap.set(follower, {
                css: {
                    left: posX - 24,
                    top: posY - 24,
                },
            });
        },
    });

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseover", () => {
            cursor.classList.add("active");
            follower.classList.add("active");
        });
        links[i].addEventListener("mouseout", () => {
            cursor.classList.remove("active");
            follower.classList.remove("active");
        });
    }

    header.addEventListener("mousemove", () => {
        cursor.classList.add("cursor_header");
    });
    header.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor_header");
    });

    body.addEventListener("mouseout", () => {
        cursor.classList.add("hidden");
        follower.classList.add("hidden");
    });
});
