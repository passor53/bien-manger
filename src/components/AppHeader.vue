<template>
    <header class="header">
        <nav role="navigation">
            <div id="menuToggle">
                <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    -->
                <input type="checkbox" />

                <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    -->
                <span></span>
                <span></span>
                <span></span>

                <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    -->
                <ul id="menu">
                    <a href="/">
                        <li>Accueil</li>
                    </a>
                    <a href="/login">
                        <li>Connection</li>
                    </a>
                    <a href="/recipes">
                        <li>Recettes</li>
                    </a>
                    <a href="/menu">
                        <li>Menu</li>
                    </a>
                    <a href="/tip">
                        <li>Astuces</li>
                    </a>
                    <a href="/about">
                        <li>A propos</li>
                    </a>
                </ul>
            </div>
        </nav>
        <div class="bpseudo">
            <img class="logo-user" alt="Logo utilisateur" src="../assets/icone-utilisateur.svg" />
            <Router-Link class="buttonConnect" to="/login">Se connecter</Router-Link>
        </div>
    </header>

</template>
<script>
export default {
    name: "AppHeader",
    computed: {
        pseudo() {
            return process.env.VUE_APP_KEY
        }
    }
}
</script>
    

<style scoped>
#block-header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100vw;
    height: 15vh;
}

img {
    max-width: 14vw;
    max-height: 10vh;
    margin-right: 0.5em;
}

.bpseudo {
    display: flex;
    flex-direction: row;
    align-items: center;

}

img.logo-user {
    max-width: 14vw;
    max-height: 6vh;

}

p {
    color: black;
    text-align: center;
}

.header {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-size: 100% 100%;
    background-image: url(../assets/header.png);
    background-repeat: no-repeat;
}

#menuToggle {
    display: block;
    position: relative;
    top: 0;
    padding-left: 2vw;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
}

#menuToggle a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
}


#menuToggle input {
    display: block;
    width: 34px;
    height: 25px;
    position: absolute;

    cursor: pointer;

    opacity: 0;
    /* hide this */
    z-index: 2;
    /* and place it over the hamburger */

    -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: rgb(32, 32, 32);
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        opacity 0.55s ease;
}

#menuToggle span:first-child {
    transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked~span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked~span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked~span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
    position: absolute;
    width: 340px;
    margin: -100px;
    padding: 50px;
    padding-top: 125px;

    background: whitesmoke;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
    border-radius: 0 0 15px 0;
    border: 1px solid black;
}

#menu li {
    padding: 10px 0;
    font-size: 22px;
}

#menu li:hover {
    text-decoration: underline;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked~ul {
    transform: none;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #C3d898
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.buttonConnect {
    height: 2em;
    display: inline-block;
    padding: 0.15em 1.2em;
    border: 0.1em solid #000000;
    margin-right: 0.5em;
    border-radius: 1em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 300em;
    color: #000000;
    text-align: center;
    transition: all 0.2s;
}

.buttonConnect:hover {
    color: #ffffff;
    background-color: #000000;
    text-decoration: underline;
}

.logo-user {
    border: solid 1px none;
    height: 15vh;
}

.logo-site {
    border: solid 1px none;
    width: 33vw;
    height: 15vh;
}
</style>
