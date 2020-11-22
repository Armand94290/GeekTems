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
	<section>
		<h1 align="center">Créer votre compte Geek'Tems</h1>
		<form @submit.prevent="createUser()" class="formulaire">
			<table class="flex">
					<tr>
						<td align="right">
							<br>
							<label for="email">Adresse mail:</label>
						</td>
						<td>
							<br>
							<input v-model="email" placeholder="Votre adresse mail">
						</td>
					</tr>
					<tr>
						<td align="right">
							<br>
							<label for="mdp">Mot de passe:</label>
						</td>
						<td>
							<br>
							<input type="password" v-model="password" placeholder="Votre mot de passe">
						</td>
					</tr>
          <br>
          <br>
			</table>
      <br>
      <button type="submit" class="button" >Je m'inscris</button>
      <br>
		</form>

	</section>

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
  </div>
</template>

<script>
module.exports = {
  props: {
    articles: { type: Array, default: [] },
    panier: { type: Object }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  async mounted () {
  },
  methods: {
    async createUser() {
      await axios.post('/api/register', {
        email: this.email,
        password: this.password
      })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
