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
                title: "Spider plant",
                description: "Pet friendly",
            },
            {
                src: "/images/gallery/2.jpg",
                title: "Pilea Peperomioides",
                description: "Ideal for beginners",
            },
            {
                src: "/images/gallery/3.jpg",
                title: "Swiss Cheese Plant",
                description: "Toxic to pets",
            },
            {
                src: "/images/gallery/4.jpg",
                title: "The Unkillables plant bundle",
                description: "Outdoor plant",
            },
            {
                src: "/images/gallery/5.jpg",
                title: "Pineapple plant",
                description: "Indoor plant",
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
    }

    events() {
        this.containerNode.addEventListener("click", this.activateGallery);
    }

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

    switchChanges() {
        // установить фото на нужные места
        // установить состояния кнопок
        // изменить счетчик
        // установить/изменить описание

        this.setCurrentState();
        this.switchDisabledNav();
        this.changeCounter();
        this.changeSummary();
    }

    changeSummary() {
        const content = this.data[this.currentIndex];
        this.explosionTitleNode.innerText = content.title;
        this.explosionDescriptionNode.innerText = content.description;
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
            });
        });

        this.setImageStyles(this.explosionPrevShowingImageNodes[0], {
            top: modalHeight - imageHeight,
            left: 0.25 * modalWidth,
            opacity: 0.4,
            zIndex: 4,
            scale: 0.75,
        });

        this.setImageStyles(this.explosionPrevShowingImageNodes[1], {
            top: 0.35 * modalHeight,
            left: 0.06 * modalWidth,
            opacity: 0.3,
            zIndex: 3,
            scale: 0.6,
        });

        this.setImageStyles(this.explosionPrevShowingImageNodes[2], {
            top: 0 * modalHeight,
            left: 0.15 * modalWidth,
            opacity: 0.2,
            zIndex: 2,
            scale: 0.5,
        });

        this.setImageStyles(this.explosionPrevShowingImageNodes[3], {
            top: -0.3 * modalHeight,
            left: 0.29 * modalWidth,
            opacity: 0.1,
            zIndex: 1,
            scale: 0.4,
        });

        this.explosionActiveImageNodes.forEach((node) => {
            this.setImageStyles(node, {
                top: (modalHeight - imageHeight) / 2,
                left: (modalWidth - imageWidth) / 2,
                opacity: 1,
                zIndex: 5,
                scale: 1.2,
            });
        });

        this.setImageStyles(this.explosionNextShowingImageNodes[0], {
            top: 0,
            left: 0.52 * modalWidth,
            opacity: 0.4,
            zIndex: 4,
            scale: 0.75,
        });

        this.setImageStyles(this.explosionNextShowingImageNodes[1], {
            top: 0.12 * modalHeight,
            left: 0.72 * modalWidth,
            opacity: 0.3,
            zIndex: 3,
            scale: 0.6,
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
    }

    setImageStyles(element, { top, left, opacity, zIndex, scale }) {
        if (!element) {
            return;
        }

        element.style.opacity = opacity;
        element.style.transform = `translate3d(${left.toFixed(1)}px, ${top.toFixed(
            1
        )}px, 0) scale(${scale})`;
        element.style.zIndex = zIndex;
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
