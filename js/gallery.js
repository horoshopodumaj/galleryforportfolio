const defaultOptions = {
    linkClass: ".card",
    linkImageClass: ".cardImage",
};

const explosionClassName = "explosion";
const explosionOpenedClassName = "explosion_Opened";
const explosionOpeningClassName = "explosion_Opening";

const explosionSummaryClassName = "explosionSummary";
const explosionControlsClassName = "explosionControls";
const explosionImagesClassName = "explosionImages";

const explosionSummaryContentClassName = "explosionSummaryContent";
const explosionTitleClassName = "explosionTitle";
const explosionDescriptionClassName = "explosionDescription";
const explosionImageClassName = "explosionImage";
const explosionGitClassName = "explosionGit";
const explosionSiteClassName = "explosionSite";
const explosionButtonSiteClassName = "explosionButton";

const explosionCloseClassName = "explosionClose";
const explosionNavsClassName = "explosionNavs";

const explosionNavClassName = "explosionNav";
const explosionNavPrevClassName = "explosionNavPrev";
const explosionNavNextClassName = "explosionNavNext";
const explosionCouterClassName = "explosionCounter";
const explosionNavDisabledClassName = "explosionNavDisabled";

const explosionPrevHiddenImageClassName = "explosionImage_PrevHidden";
const explosionPrevShowingImageClassName = "explosionImage_PrevShowing";
const explosionActiveImageClassName = "explosionImage_Active";
const explosionNextShowingImageClassName = "explosionImage_NextShowing";
const explosionNextHiddenImageClassName = "explosionImage_NextHidden";

class ExplositionGallery {
    constructor(elementNode, options) {
        this.options = {
            ...defaultOptions,
            ...options,
        };
        this.containerNode = elementNode;
        this.linkNodes = elementNode.querySelectorAll(this.options.linkClass);

        this.minWidth = 1023;
        this.minHeight = 600;
        this.padding = 2 * 16;
        this.showingCount = 4;
        this.currentIndex = 0;
        this.size = this.linkNodes.length;

        this.data = [
            {
                src: "/images/gallery/1.jpg",
                title: "Landing Page Layout",
                description: `Layout of the landing site according to the layout for a
                language school. The project uses BEM, scss, postcss. Images
                in the project are inserted from svg-sprite.`,
                git: `https://github.com/horoshopodumaj/britlexLanding`,
                site: `https://britlex-landing.vercel.app/`,
            },
            {
                src: "/images/gallery/2.jpg",
                title: "Landing Page Layout",
                description: `Layout of a landing page for a cosmetics store. The site is
                checked using the BEM methodology.`,
                git: `https://github.com/horoshopodumaj/Ashley-Co/`,
                site: `https://ashley-co.vercel.app/`,
            },
            {
                src: "/images/gallery/3.jpg",
                title: "Reusable Component Library",
                description: `The project was completed as part of a course on modern
                layout. It is a library of reusable components, such as a
                modal window, form elements, a calendar, a histogram, a
                skeleton, and others. The layout is adapted for mobile,
                tablet and desktop devices. The project uses BEM
                methodology, scss preprocessor. Each component is presented
                on a separate page, it is possible to include a dark theme.`,
                git: `https://github.com/horoshopodumaj/HTMLCSS`,
                site: `https://htmlcss-project.vercel.app/`,
            },
            {
                src: "/images/gallery/4.jpg",
                title: "Restaurant Website",
                description: `A restaurant with online order "Bangkok Express". The
                project uses a ready-made layout. The use of javascript in
                the project made it possible to implement: a carousel with
                goods at the top of the site, a ribbon menu, a slider,
                loading goods from the server, dynamic filtering of the list
                of goods. As well as a basket of goods with dynamic
                scrolling positioning, animation, modal window and order
                form. The component architecture makes it easy to expand the
                restaurant, complicate the interface and structure.`,
                git: `https://github.com/horoshopodumaj/jsbasic-20211014_murka8831`,
                site: `https://js-project-brown.vercel.app/`,
            },
            {
                src: "/images/gallery/5.jpg",
                title: "Furniture Store",
                description: `The furniture store's website is written in React. The site
                has the ability to add products to the basket, sort by
                product categories, manage the quantity of goods from the
                basket. When you click on the product image, a modal window
                with a product card appears. The site is not adaptive,
                perhaps not yet.`,
                git: `https://github.com/horoshopodumaj/shop_on_React`,
                site: `https://shop-on-react-shop-qa4x.vercel.app/`,
            },
            {
                src: "/images/gallery/6.jpg",
                title: "Sneaker Store",
                description: `The sneaker store using mockAPI is implemented on React.
                Implemented the addition of goods to the cart, bookmarks.
                Implemented a search for products on the site. The list of
                products, products in the basket, bookmarks is loaded from
                the server. The main page displays products already added to
                the cart and bookmarks. The order has been sent to the
                server, the list of ordered goods is loaded from the server
                and displayed on a separate page. The total amount of goods
                in the basket is displayed on the main page and displayed in
                the basket.`,
                git: `https://github.com/horoshopodumaj/sneakers-shop`,
                site: `https://sneakers-shop-two.vercel.app/`,
            },
            {
                src: "/images/gallery/7.jpg",
                title: "Car Leasing Calculator",
                description: `A car leasing calculator is written in React. In each field, you can enter a value either from the keyboard or using the slider. When selecting a value using the slider, all numbers
                are recalculated dynamically during the movement of the slider. Each field has a maximum and minimum value — the slider restricts the user in selecting data, and when
                entering an incorrect value from the keyboard, it is reset to the nearest correct number (maximum or minimum). A request is generated by the “Apply for” button, which sends
                all the calculator data to the backend. At the moment of clicking on the button, the button is blocked from being able to resend data for the duration of the request to the
                backend, and a preloader is displayed inside the button. Inputs and sliders are blocked for the time of sending`,
                git: `https://github.com/horoshopodumaj/online_calculator`,
                site: `https://online-calculator-ten.vercel.app/`,
            },
            {
                src: "/images/gallery/8.jpg",
                title: "Social Network",
                description: `There will be a social network written in React using the
                Redux library. In the meantime, you can visit my GitHub and
                watch me learn React.`,
                git: `https://github.com/horoshopodumaj/social-network`,
                site: `#`,
            },
        ];

        this.initModal();
        this.events();
    }

    initModal() {
        this.modalContainerNode = document.createElement("div");
        this.modalContainerNode.className = explosionClassName;

        this.modalContainerNode.innerHTML = `
        <div class="${explosionSummaryClassName}">
            <div class="${explosionSummaryContentClassName}">
                <h2 class="${explosionTitleClassName}"></h2>
                <p class="${explosionDescriptionClassName}"></p>
                <div class="project__buttons">
                    <form
                    class="${explosionGitClassName}"
                        target="_blank"
                    >
                        <button class="button project__button">GitHub</button>
                    </form>
                    <form
                    class="${explosionSiteClassName}"
                        target="_blank"
                    >
                        <button class="${explosionButtonSiteClassName}">
                            Live site
                        </button>
                    </form>
                </div>

            </div>
        </div>
        <div class="${explosionControlsClassName}">
            <button class="${explosionCloseClassName}"></button>
            <div class="${explosionNavsClassName}">
                <button class="${explosionNavClassName} ${explosionNavPrevClassName}"></button>
                <div class="${explosionCouterClassName}">1/${this.size}</div>
                <button class="${explosionNavClassName} ${explosionNavNextClassName}"></button>
            </div>
        </div>
        <div class="${explosionImagesClassName}">
            ${Array.from(this.linkNodes)
                .map(
                    (linkNode) => `
                <img src="${linkNode.getAttribute("href")}" class="${explosionImageClassName}" />
            `
                )
                .join("")}
        </div>
        `;

        document.body.appendChild(this.modalContainerNode);

        this.explosionImageNodes = this.modalContainerNode.querySelectorAll(
            `.${explosionImageClassName}`
        );
        this.explosionControlsNode = this.modalContainerNode.querySelector(
            `.${explosionControlsClassName}`
        );
        this.explosionNavPrevNode = this.modalContainerNode.querySelector(
            `.${explosionNavPrevClassName}`
        );
        this.explosionNavNextNode = this.modalContainerNode.querySelector(
            `.${explosionNavNextClassName}`
        );
        this.explosionCounterNode = this.modalContainerNode.querySelector(
            `.${explosionCouterClassName}`
        );
        this.explosionTitleNode = this.modalContainerNode.querySelector(
            `.${explosionTitleClassName}`
        );
        this.explosionDescriptionNode = this.modalContainerNode.querySelector(
            `.${explosionDescriptionClassName}`
        );
        this.explosionGitNode = this.modalContainerNode.querySelector(`.${explosionGitClassName}`);
        this.explosionSiteNode = this.modalContainerNode.querySelector(
            `.${explosionSiteClassName}`
        );
        this.explosionButtonSiteNode = this.modalContainerNode.querySelector(
            `.${explosionButtonSiteClassName}`
        );
        this.explosionSummaryNode = this.modalContainerNode.querySelector(
            `.${explosionSummaryClassName}`
        );
        this.explosionNavsNode = this.modalContainerNode.querySelector(
            `.${explosionNavsClassName}`
        );

        this.explosionSummaryContentNode = this.modalContainerNode.querySelector(
            `.${explosionSummaryContentClassName}`
        );

        this.explosionCloseNode = this.modalContainerNode.querySelector(
            `.${explosionCloseClassName}`
        );
    }

    events() {
        this.throttledResize = throttle(this.resize, 200);
        window.addEventListener("resize", this.throttledResize);
        this.containerNode.addEventListener("click", this.activateGallery);
        this.explosionNavsNode.addEventListener("click", this.switchImage);
        this.explosionCloseNode.addEventListener("click", this.closeGallery);
        window.addEventListener("keyup", this.keyDown);
        window.addEventListener("scroll", this.scrollWindowOpenedModal);
    }

    scrollWindowOpenedModal = () => {
        if (this.modalContainerNode.classList.contains(explosionOpenedClassName)) {
            document.body.style.overflow = "hidden";
        }
    };

    keyDown = (event) => {
        if (this.modalContainerNode.classList.contains(explosionOpenedClassName)) {
            if (event.key == "Escape" || event.key === "Esc" || event.keyCode === 27) {
                this.closeGallery();
            }

            if ((event.key == "ArrowDown" || event.keyCode === 40) && this.currentIndex > 0) {
                this.currentIndex -= 1;
                this.switchChanges(true);
            }

            if (
                (event.key == "ArrowUp" || event.keyCode === 38) &&
                this.currentIndex < this.size - 1
            ) {
                this.currentIndex += 1;
                this.switchChanges(true);
            }
        }
    };

    resize = () => {
        if (this.modalContainerNode.classList.contains(explosionOpenedClassName)) {
            this.setInitSizesToImages();
            this.setGalleryStyles();
        }
    };

    closeGallery = () => {
        this.setInitPositionsToImages();
        this.explosionImageNodes.forEach((imageNode) => {
            imageNode.style.opacity = 1;
        });
        this.explosionSummaryNode.style.width = "0";
        this.explosionControlsNode.style.marginTop = "3000px";

        fadeOut(this.modalContainerNode, () => {
            this.modalContainerNode.classList.remove(explosionOpenedClassName);
        });

        document.body.style.overflow = "";
    };

    switchImage = (event) => {
        event.preventDefault();
        const buttonNode = event.target.closest("button");
        if (!buttonNode) {
            return;
        }

        if (buttonNode.classList.contains(explosionNavPrevClassName) && this.currentIndex > 0) {
            this.currentIndex -= 1;
        }
        if (
            buttonNode.classList.contains(explosionNavNextClassName) &&
            this.currentIndex < this.size - 1
        ) {
            this.currentIndex += 1;
        }

        this.switchChanges(true);
    };

    activateGallery = (event) => {
        event.preventDefault();
        const linkNode = event.target.closest("a");

        if (
            !linkNode ||
            this.modalContainerNode.classList.contains(explosionOpenedClassName) ||
            this.modalContainerNode.classList.contains(explosionOpeningClassName)
        ) {
            return;
        }

        this.currentIndex = Array.from(this.linkNodes).indexOf(linkNode);
        this.modalContainerNode.classList.add(explosionOpeningClassName);

        fadeIn(this.modalContainerNode, () => {
            this.modalContainerNode.classList.remove(explosionOpeningClassName);
            this.modalContainerNode.classList.add(explosionOpenedClassName);
            this.switchChanges();
        });

        this.setInitSizesToImages();
        this.setInitPositionsToImages();
    };

    setInitSizesToImages() {
        this.linkNodes.forEach((linkNode, index) => {
            const data = linkNode.getBoundingClientRect();
            this.explosionImageNodes[index].style.width = data.width + "px";
            this.explosionImageNodes[index].style.height = data.height + "px";
            this.explosionImageNodes[index].style.padding = "40px";
        });
    }

    setInitPositionsToImages() {
        this.linkNodes.forEach((linkNode, index) => {
            const data = linkNode.getBoundingClientRect();
            this.setPositionStyles(this.explosionImageNodes[index], data.left, data.top);
        });
    }

    setPositionStyles(element, x, y) {
        element.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    }

    switchChanges(hasSummaryAnimation) {
        this.setCurrentState();
        this.switchDisabledNav();
        this.changeCounter();
        this.changeSummary(hasSummaryAnimation);
    }

    changeSummary(hasSummaryAnimation) {
        const content = this.data[this.currentIndex];

        if (hasSummaryAnimation) {
            this.explosionSummaryContentNode.style.opacity = 0;
            setTimeout(() => {
                this.explosionTitleNode.innerText = content.title;
                this.explosionDescriptionNode.innerText = content.description;
                this.explosionGitNode.setAttribute("action", `${content.git}`);

                {
                    content.site === "#"
                        ? this.explosionButtonSiteNode.classList.add("disabled")
                        : this.explosionSiteNode.setAttribute("action", `${content.site}`);
                }

                this.explosionSummaryContentNode.style.opacity = 1;
            }, 300);
        } else {
            this.explosionTitleNode.innerText = content.title;
            this.explosionDescriptionNode.innerText = content.description;
            this.explosionGitNode.setAttribute("action", `${content.git}`);
            this.explosionSiteNode.setAttribute("action", `${content.site}`);
            {
                content.site === "#" && this.explosionButtonSiteNode.classList.add("disabled");
            }
        }
    }

    switchDisabledNav() {
        if (this.currentIndex === 0 && !this.explosionNavPrevNode.disabled) {
            this.explosionNavPrevNode.disabled = true;
        }

        if (this.currentIndex > 0 && this.explosionNavPrevNode.disabled) {
            this.explosionNavPrevNode.disabled = false;
        }
        if (this.currentIndex === this.size - 1 && !this.explosionNavNextNode.disabled) {
            this.explosionNavNextNode.disabled = true;
        }
        if (this.currentIndex < this.size - 1 && this.explosionNavNextNode.disabled) {
            this.explosionNavNextNode.disabled = false;
        }
    }

    changeCounter() {
        this.explosionCounterNode.innerText = `${this.currentIndex + 1}/${this.size}`;
    }

    setCurrentState() {
        this.explosionPrevHiddenImageNodes = [];
        this.explosionPrevShowingImageNodes = [];
        this.explosionActiveImageNodes = [];
        this.explosionNextShowingImageNodes = [];
        this.explosionNextHiddenImageNodes = [];

        this.explosionImageNodes.forEach((imageNode, index) => {
            if (index + this.showingCount < this.currentIndex) {
                this.explosionPrevHiddenImageNodes.unshift(imageNode);
            } else if (index < this.currentIndex) {
                this.explosionPrevShowingImageNodes.unshift(imageNode);
            } else if (index === this.currentIndex) {
                this.explosionActiveImageNodes.push(imageNode);
            } else if (index <= this.currentIndex + this.showingCount) {
                this.explosionNextShowingImageNodes.push(imageNode);
            } else {
                this.explosionNextHiddenImageNodes.push(imageNode);
            }
        });

        this.setGalleryStyles();
    }

    setGalleryStyles() {
        const imageWidth = this.linkNodes[0].offsetWidth;
        const imageHeight = this.linkNodes[0].offsetHeight;
        const modalWidth = Math.max(this.minWidth, window.innerWidth);
        const modalHeight = Math.max(this.minHeight, window.innerHeight);

        this.explosionPrevHiddenImageNodes.forEach((node) => {
            this.setImageStyles(node, {
                top: -modalHeight,
                left: 0.29 * modalWidth,
                opacity: 0.1,
                zIndex: 1,
                scale: 0.4,
                border: `1px solid black`,
            });
        });

        this.setImageStyles(this.explosionPrevShowingImageNodes[0], {
            top: modalHeight - imageHeight,
            left: 0.25 * modalWidth,
            opacity: 0.4,
            zIndex: 4,
            scale: 0.75,
            border: `1px solid black`,
        });

        this.setImageStyles(this.explosionPrevShowingImageNodes[1], {
            top: 0.35 * modalHeight,
            left: 0.06 * modalWidth,
            opacity: 0.3,
            zIndex: 3,
            scale: 0.6,
            border: `1px solid black`,
        });

        this.setImageStyles(this.explosionPrevShowingImageNodes[2], {
            top: 0 * modalHeight,
            left: 0.15 * modalWidth,
            opacity: 0.2,
            zIndex: 2,
            scale: 0.5,
            border: `1px solid black`,
        });

        this.setImageStyles(this.explosionPrevShowingImageNodes[3], {
            top: -0.3 * modalHeight,
            left: 0.29 * modalWidth,
            opacity: 0.1,
            zIndex: 1,
            scale: 0.4,
            border: `1px solid black`,
        });

        this.explosionActiveImageNodes.forEach((node) => {
            this.setImageStyles(node, {
                top: (modalHeight - imageHeight) / 2,
                left: (modalWidth - imageWidth) / 2,
                opacity: 1,
                zIndex: 5,
                scale: 1.2,
                border: `1px solid black`,
            });
        });

        this.setImageStyles(this.explosionNextShowingImageNodes[0], {
            top: 0,
            left: 0.52 * modalWidth,
            opacity: 0.4,
            zIndex: 4,
            scale: 0.75,
            border: `1px solid black`,
        });

        this.setImageStyles(this.explosionNextShowingImageNodes[1], {
            top: 0.12 * modalHeight,
            left: 0.72 * modalWidth,
            opacity: 0.3,
            zIndex: 3,
            scale: 0.6,
            border: `1px solid black`,
        });

        this.setImageStyles(this.explosionNextShowingImageNodes[2], {
            top: 0.47 * modalHeight,
            left: 0.67 * modalWidth,
            opacity: 0.2,
            zIndex: 2,
            scale: 0.5,
        });

        this.setImageStyles(this.explosionNextShowingImageNodes[3], {
            top: 0.67 * modalHeight,
            left: 0.53 * modalWidth,
            opacity: 0.1,
            zIndex: 1,
            scale: 0.4,
        });

        this.explosionNextHiddenImageNodes.forEach((node) => {
            this.setImageStyles(node, {
                top: modalHeight,
                left: 0.53 * modalWidth,
                opacity: 0.1,
                zIndex: 1,
                scale: 0.4,
            });
        });

        this.setControlStyles(this.explosionControlsNode, {
            marginTop: (modalHeight - imageHeight * 1.2) / 2,
            height: imageHeight * 1.2,
        });

        this.explosionSummaryNode.style.width = "50%";
    }

    setImageStyles(element, { top, left, opacity, zIndex, scale, border }) {
        if (!element) {
            return;
        }

        element.style.opacity = opacity;
        element.style.transform = `translate3d(${left.toFixed(1)}px, ${top.toFixed(
            1
        )}px, 0) scale(${scale})`;
        element.style.zIndex = zIndex;
        element.style.border = border;
    }

    setControlStyles(element, { marginTop, height }) {
        element.style.marginTop = marginTop + "px";
        element.style.height = height + "px";
    }
}

/**
 * Helpers
 */
function fadeIn(element, callback) {
    animation();

    function animation() {
        let opacity = Number(element.style.opacity);
        if (opacity < 1) {
            opacity = opacity + 0.1;
            element.style.opacity = opacity;
            window.requestAnimationFrame(animation);
            return;
        }

        if (callback) {
            callback();
        }
    }
}

function fadeOut(element, callback) {
    animation();

    function animation() {
        let opacity = Number(element.style.opacity);

        if (opacity > 0) {
            opacity = opacity - 0.04;
            element.style.opacity = opacity;
            window.requestAnimationFrame(animation);
            return;
        }

        if (callback) {
            callback();
        }
    }
}

function throttle(callback, delay = 200) {
    let isWaiting = false;
    let savedArgs = null;
    let savedThis = null;
    return function wrapper(...args) {
        if (isWaiting) {
            savedArgs = args;
            savedThis = this;
            return;
        }

        callback.apply(this, args);

        isWaiting = true;
        setTimeout(() => {
            isWaiting = false;
            if (savedThis) {
                wrapper.apply(savedThis, savedArgs);
                savedThis = null;
                savedArgs = null;
            }
        }, delay);
    };
}

const explosionGallery = new ExplositionGallery(document.querySelector(".gallery"));
