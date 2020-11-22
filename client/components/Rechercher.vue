<template>
  <div>
    <head>
	<meta charset="utf-8">
	  <title>Geek'Tems - Inscription</title>
	  <link rel="stylesheet" href="inscription.css"/>
	  <link rel="stylesheet" href="index.css" />
	  <link rel="icon" href="image/petite-icon.ico" />
	  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Crete+Round">
  </head>
    <body>
	<div id="main">
    <form @submit.prevent="createUser()" class="formulaire">
			<table class="flex">
					<tr>
						<td align="right">
							<br>
							<label for="search">Faites votre recherche:</label>
						</td>
						<td>
							<br>
							<input v-model="text" placeholder="Cherchez votre items">
						</td>
					</tr>
          <br>
          <br>
			</table>
      <br>
      <button type="submit" class="button" >Rechercher</button>
      <br>
		</form>
  </div>

	<footer>
		<div class="wrapper">

			<div id = "wrap-reseaux">

			<div > <img src = "image/facebook.png" class = "reseaux"> </div>
			<div > <img src = "image/Twitter.png" class = "reseaux"> </div>
			<div > <img src = "image/Instagram.png" class = "reseaux" > </div>
			<div > <img src = "image/Linkedin.png" class = "reseaux"> </div>
			</div>


			<h1>Geek'Tems<span class="rouge">.</span></h1>

			<div id="propos">
				<p>A propos de Geek'Tems :</p>
				<br><a href="contact.html">- Nous contacter</a><br>
				<br><a href="equipe.html">- Qui sommes-nous ?</a><br>
			</div>

			<div class="copyright">Copyright 2020. Tous droits réservés.</div>
		</div>
	</footer>
</body>
</template>

<script>
module.exports = {
  props: {
    articles: { type: Array, default: [] },
    panier: { type: Object },
    isConnected: { type: Boolean }
  },
  data () {
    return {
    }
  },
  async mounted () {
  },
  methods: {
    find (articleId) {
      return this.articles.find(article => article.id === articleId)
    },
    pay () {
      this.$emit('pay')
    }
  }
}
</script>

<style scoped>
</style>
