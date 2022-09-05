<template lang="">
    <div class="meplogin">
        <img class="logo-mini" alt="Logo du Site" src="../assets/Bien-Manger.jpg"/>
        <form method="post" action="traitement.php">
            <p> 
             <label for="pseudo">Votre Pseudo :</label><!-- Donne un libelé au champ ci dessous (on ajoute aussi l'attribut [id="pseudo"] à la balise input !!!) -->
            <input type="text" v-model="pseudo" id="pseudo"  /> <!-- créer un champ de texte en donnant aussi un nom à ce champ (id sert à faire la jonction avec le libellé [label]. l'attribut maxlenght permet de limiter le nombre de caractère saisie dans le champ. L'attribut value permet de pré-remplir le champ. Oon peut aussi utiliser la valeur "placeholder="Roger" ce qui permet d'écrire un exemple dans le champ.-->
            </p>
        </form>

        <form method="post" action="traitement.php">
			<p>
			<label for="email">Votre email :</label>
			<input type="email" v-model="email" id="email" />
			</p>
        </form>

        <form method="post" action="traitement.php">
            <p>
            <label for="password">Mot de passe :</label>
            <input type="password" v-model="Mot_de_passe" id="password" />
            </p>
            <input type="submit" value="Envoyer" />
        </form> 

    </div>
</template>
<script>
export default {

}
</script>
<style>
.meplogin {
    padding-top: 5vh;
}

.logo-mini {
    padding-bottom: 5vh;

}
</style>