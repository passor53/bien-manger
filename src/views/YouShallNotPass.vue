<template>
    <p>YOU HAVE BEEN GANDALFED<br><a href="https://codepen.io/grohit/"></a></p>
    <p>YOU HAVE BEEN GANDALFED<br><a href="https://codepen.io/grohit/"></a></p>
    <p>YOU HAVE BEEN GANDALFED<br><a href="https://codepen.io/grohit/"></a></p>
    <p>YOU HAVE BEEN GANDALFED<br><a href="https://codepen.io/grohit/"></a></p>
    <p>YOU HAVE BEEN GANDALFED<br><a href="https://codepen.io/grohit/"></a></p>

    <div>
        <iframe id="background-video" width="1350" height="550"
            src="https://www.youtube.com/embed/G1IbRujko-A?start=0&autoplay=1" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"></iframe>
    </div>
</template>
<style scoped>
#background-video {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    position: absolute;
}

* {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #000;
}

a {
    text-decoration: none;
    color: inherit;
    font-size: 24px;
}

p {
    font-weight: 700;
    text-align: center;
    font-size: 40px;
    font-family: Hack, sans-serif;
    text-transform: uppercase;
    background: linear-gradient(90deg, rgb(255, 0, 179), rgb(17, 255, 0), rgb(255, 0, 0));
    letter-spacing: 5px;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-repeat: no-repeat;
    background-size: 80%;
    animation: shine 1s linear infinite;
    position: relative;
    margin-top: 5vh;
}

@keyframes rotateAnim {
    from {
        transform: rotateY(0);
    }

    to {
        transform: rotateY(360deg);
    }
}

@keyframes shine {
    0% {
        background-position-x: -500%;
    }

    100% {
        background-position-x: 500%;
    }
}

p {
    animation: rotateAnim 2s linear infinite;
}
</style>