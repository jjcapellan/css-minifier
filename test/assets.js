const cssText = `
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html {
    scroll-behavior: smooth;
}

/*
* Body Minification
*
*
*/
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --width: calc(100vw - 250px);
    font-family: "Montserrat", "Gill Sans", "Gill Sans MT", Calibri,
        "Trebuchet MS", sans-serif;
    color: white;
}

::selection {
    background: #a640f5;
}

p, a, h1, h2, h3, h4, h5, h6, article {
    user-select: none;
}

/* a style */
a {
    color: white;
}

::-webkit-scrollbar{
    width: 10px;
    z-index: 1000;
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #9900ba;
    border-radius: 44px;
    z-index: 1000;
}

.navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0d1117;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 5px 0 5px #00000063, 10px 0 10px #0000004d,
        20px 0 20px #0000004d;
    z-index: 999;
    transition: .5s ease-in-out;
}

.navigation.active {
    width: 250px;
}

.navigation h1 {
    position: relative;
    font-size: 30px;
    text-transform: uppercase;
    padding: 15px;
    cursor: pointer;
}

.navigation h1::before,
.navigation h1::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 5px;
    height: 25px;
}

.navigation h1::after {
    top: inherit;
    left: inherit;
    right: 0;
    bottom: 0;
}

.navigation h1 div {
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 5px;
    background: #fff;
}

.navigation h1 div:nth-child(2) {
    top: inherit;
    left: inherit;
    bottom: 0;
    right: 0;
}

.navigation ul {
    width: 90%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 10px;
}

.navigation ul li {
    position: relative;
    list-style: none;
    width: 200px;
    margin: 5px 0;
}

.navigation ul li a {
    position: relative;
    overflow: hidden;
    z-index: 1;
    display: block;
    padding: 15px 30px;
    background: #161b22;
    text-align: center;
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 10px;
    box-shadow: 3px 3px 5px black, -3px -3px 5px #ffffff25;
}

.navigation ul li a::before,
.navigation ul li a::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 50%;
    background: #29374b;
    z-index: -1;
    transition: 0.5s ease-in-out;
}

.navigation ul li a::after {
    top: inherit;
    bottom: 0;
    left: inherit;
    right: -100%;
}

.navigation ul li a:hover::before,
.navigation ul li a.active::before {
    left: 0;
}

.navigation ul li a:hover::after,
.navigation ul li a.active::after {
    right: 0;
}

.container {
    position: relative;
    width: var(--width);
    margin-left: 250px;
    min-height: 100vh;
    background: #161b22;
    overflow-x: hidden;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
}

.layer {
    position: absolute;
    width: var(--width);
    min-height: 100vh;
    margin-left: 100%;
    overflow-x: hidden;
    transition: .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    box-shadow: 0 0 5px rgba(0, 0, 0, .5),
        0 0 10px rgba(0, 0, 0, .5),
        0 0 20px rgba(0, 0, 0, .5);
}

.layer .main {
    width: var(--width);
    height: 100vh;
}

.layer.active {
    margin-left: 0;
    transition-delay: .7s;
}

@media (max-width: 768px) {
    .navigation {
        width: 0;
    }

    .container {
        width: 100%;
        margin-left: 0;
    }

    .layer {
        width: 100%;
    }

    .layer.active {
        margin-left: 0;
    }

    .hamburger {
        display: flex;
    }

    .hamburger.active~.container .layer.active {
        margin-left: 250px;
    }

    .layer .main {
        width: 100vw;
        height: 100vh;
    }

    .about_container {
        position: relative;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        min-height: 50vh;
        width: 300vw;
        margin-left: 0;
        transition: 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    .about_container.one {
        margin-left: 0;
    }
    
    .about_container.two {
        margin-left: -100vw;
    }
    
    .about_container.three {
        margin-left: -200vw;
    }

    .tip {
        margin-left: 0;
    }
}`;

export { cssText };

