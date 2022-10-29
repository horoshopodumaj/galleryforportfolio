const langArr = {
    home: {
        ru: "Главная",
        en: "Home",
    },
    about: {
        ru: "Обо мне",
        en: "About me",
    },
    projects: {
        ru: "Мои проекты",
        en: "My projects",
    },
    contact: {
        ru: "Мои контакты",
        en: "Contact me",
    },

    hi: {
        ru: "Привет, меня зовут",
        en: "Hi, my name is",
    },
    name: {
        ru: "Муртазина Диана",
        en: "Diana Murtazina",
    },

    aboutme: {
        ru: "Обо мне",
        en: "About me",
    },
    aboutmetext: {
        ru: `Привет, меня зовут Муртазина Диана и я front-end разработчик.<br /> Мои навыки:
        <br />- HTML,
        <br />- CSS (SCSS, БЭМ, flex, grid),
        <br />- JavaScript,
        <br />- jQuery,
        <br />- React.
        `,
        en: `Hi, my name is Diana Murtazina and I am a
        front-end developer.<br />
        My skills: <br />- HTML, <br />- CSS (SCSS, BEM,
        flex, grid), <br />- JavaScript, <br />- jQuery,
        <br />- React.`,
    },

    myprojects: {
        ru: "Мои проекты",
        en: "My projects",
    },

    landing: {
        ru: "Верстка лендинга",
        en: "Landing page layout",
    },

    landingtext: {
        ru: `Верстка лендинга для языковой школы. 
        Сайт сверстан с применением методологии БЭМ, scss, postcss. Изображения в проекте вставляются из svg спрайта.`,
        en: `Layout of the landing site according to
        the layout for a language school. The
        project uses BEM, scss, postcss. Images in the project are inserted from svg-sprite.`,
    },
    shop: {
        ru: "Верстка лендинга",
        en: "Landing Page Layout",
    },

    shoptext: {
        ru: `Верстка лендинга для магазина косметики. Сайт сверстан с применением методологии БЭМ.`,
        en: `Layout of a landing page for a cosmetics
        store. The site is checked using the BEM
        methodology.`,
    },

    sneaker: {
        ru: "Магазин кроссовок",
        en: "Sneaker Store",
    },

    sneakertext: {
        ru: `Магазин кроссовок с использованием mockAPI реализован на React. Реализовано добавление товара в корзину, закладки. Реализован поиск товаров по сайту. Список товаров, товары в корзине, закладки загружается с сервера. На главной странице отображены товары уже добавленные в корзину и закладки.
        Реализована отправка заказа на сервер, список заказанных товаров подгружается с сервера и отображается на отдельной странице. 
         Общая сумма товаров в корзине выведена на главную страницу и отображается в корзине.`,
        en: `The sneaker store using mockAPI is implemented on React. Implemented the addition of goods to the cart, bookmarks. Implemented a search for products on the site. The list of products, products in the basket, bookmarks is loaded from the server. The main page displays products already added to the cart and bookmarks.
        The order has been sent to the server, the list of ordered goods is loaded from the server and displayed on a separate page.
        The total amount of goods in the basket is displayed on the main page and displayed in the basket.`,
    },

    reus: {
        ru: "Библиотека переиспользуемых компонентов",
        en: "Reusable Component Library",
    },

    reustext: {
        ru: `Проект был выполнен в рамках курса по современной верстке.
        Это библиотека переиспользуемых компонентов, таких как:
        модальное окно, элементы форм, календарь, гистограмма, скелетон и другие.
        Дизайн сайта адаптивен. В проекте использована методология БЭМ, scss. Каждый компонент
        представлен на своей странице. Есть возможность сменить тему на темную.`,
        en: `The project was completed as part of a
        course on modern layout. It is a library
        of reusable components, such as a modal
        window, form elements, a calendar, a
        histogram, a skeleton, and others. The
        layout is adapted for mobile, tablet and
        desktop devices. The project uses BEM
        methodology, scss preprocessor. Each
        component is presented on a separate
        page, it is possible to include a dark
        theme.`,
    },

    restaurant: {
        ru: "Сайт ресторана",
        en: "Restaurant Website",
    },

    restauranttext: {
        ru: `Ресторан с онлайн-заказом "Bangkok Express". Проект сделан по 
        готовой верстке. С помощью javascript были реализованы: карусель товаров
        в верхней части сайта, ленточное меню, слайдер, подгрузка товаров с сервера, 
        динамическая фильтрация списка товаров. А также корзина товаров с динамическим 
        позиционированием при прокрутке, анимацией, модальным окном и формой заказа. 
        Компонентная архитектура позволяет легко расширять ресторан, усложнять интерфейс и структуру.`,
        en: `A restaurant with online order "Bangkok
        Express". The project uses a ready-made
        layout. The use of javascript in the
        project made it possible to implement: a
        carousel with goods at the top of the
        site, a ribbon menu, a slider, loading
        goods from the server, dynamic filtering
        of the list of goods. As well as a
        basket of goods with dynamic scrolling
        positioning, animation, modal window and
        order form. The component architecture
        makes it easy to expand the restaurant,
        complicate the interface and structure.`,
    },

    contactme: {
        ru: "Связаться со мной",
        en: "Contact me",
    },

    opportunities: {
        ru: `В настоящее время я ищу возможности, вы можете написать мне с предложением работы
        или просто поговорить. Я отвечу на ваше письмо.`,
        en: `I'm currently looking for opportunities, my inbox is
        always open whether for hiring me or just to talk.
        I'll answer your email!`,
    },

    writeforme: {
        ru: "Моя почта здесь",
        en: "Let's get in touch",
    },

    reactproject: {
        ru: "Социальная сеть",
        en: "Social Network",
    },

    reactprojecttext: {
        ru: "Здесь будет социальная сеть, написанная на React с применением библиотеки Redux. А пока вы можете посетить мой GitHub и посмотреть за тем, как я изучаю  React.",
        en: "There will be a social network written in React using the Redux library. In the meantime, you can visit my GitHub and watch me learn React.",
    },

    mebel: {
        ru: "Мебельный магазин",
        en: "Furniture Store",
    },

    mebeltext: {
        ru: "Сайт мебельного магазина написан на React. На сайте есть возможность добавления товаров в корзину, сортировка по категориям товаров, управление количеством товара из корзины. При нажатии на картинку товара появляется модальное окно с карточкой товара. Сайт не адаптивный, возможно пока.",
        en: "The furniture store's website is written in React. The site has the ability to add products to the basket, sort by product categories, manage the quantity of goods from the basket. When you click on the product image, a modal window with a product card appears. The site is not adaptive, perhaps not yet.",
    },

    leasing: {
        ru: "Калькулятор лизинга автомобилей",
        en: "Car Leasing Calculator ",
    },

    leasingText: {
        ru: "Калькулятор лизинга автомобилей написан на React. В каждое поле можно ввести значение как с клавиатуры, так и с помощью ползунка. При выборе значения с помощью ползунка, все числа пересчитываются динамически в процессе движения ползунка. У каждого поля есть максимальное и минимальное значение — ползунок ограничивает пользователя в выборе данных, а при вводе некорректного значения с клавиатуры, оно сбрасывается к ближайшему корректному числу (максимуму или минимуму). По кнопке “Оформить заявку”  формировается запрос, который отправляет все данные калькулятора на бэкенд. В момент клика по кнопке кнопка блокируется от возможности повторной отправки данных на время выполнения запроса к бэкенду, а внутри кнопки отображаться прелоадер. Инпуты и слайдеры на время отправки блокируются.",
        en: "A car leasing calculator is written in React. In each field, you can enter a value either from the keyboard or using the slider. When selecting a value using the slider, all numbers are recalculated dynamically during the movement of the slider. Each field has a maximum and minimum value — the slider restricts the user in selecting data, and when entering an incorrect value from the keyboard, it is reset to the nearest correct number (maximum or minimum). A request is generated by the “Apply for” button, which sends all the calculator data to the backend. At the moment of clicking on the button, the button is blocked from being able to resend data for the duration of the request to the backend, and a preloader is displayed inside the button. Inputs and sliders are blocked for the time of sending.",
    },
};
