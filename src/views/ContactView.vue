<template lang="fr">
    <div>
        <div class="container">
  <div class="row header">
    <h2>CONTACTEZ-NOUS &nbsp;</h2>
    <h4>Remplissez le formulaire ci-dessous pour en savoir plus !</h4>
  </div>
  <div class="row body">
    <form action="#">
      <ul>
        
        <li>
          <p class="left">
            <label for="Prenom">Prenom</label>
            <input type="text" name="first_name" placeholder="Insérer le prénom" />
          </p>
          <p class="pull-right">
            <label for="nom">Nom</label>
            <input type="text" name="Nom" placeholder="Insérer le nom" />      
          </p>
        </li>
        
        <li>
          <p>
            <label for="email">email <span class="req">*</span></label>
            <input type="email" name="email" placeholder="Insérer l'adresse mail" />
          </p>
        </li>        
        <li><div class="divider"></div></li>
        <li>
          <label for="Commentaire">Commentaire</label>
          <textarea cols="46" rows="3" name="Commentaire"></textarea>
        </li>
        
        <li>
          <input class="Bouton envoyer" type="submit" value="Envoyer" />
        </li>
        
      </ul>
    </form>  
  </div>
</div>

    </div>
</template>
<script>

export default {
}

</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0px;
}

input[type=text],

textarea,

input[type=email] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-right: 0px;
  margin-left: 0px;
  resize: vertical;
}

label {
  margin-right: 0px;
  margin-left: 0px;
  width: 100%;
}

input[type=submit] {
  background-color: #1255a2;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #1872D9;
}

.container {
  /* Ajouter box-sizing */
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 100%;
  /* redéfinition 400 + 2*20 */
  max-width: 400px;
  margin: 0 auto;
}

h2 {
  color: #ffc800;
  width: 100%;
  text-align: center;
}

li {

  list-style-type: none;
}
</style>