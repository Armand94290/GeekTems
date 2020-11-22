<template>
  <div>
    <head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="inscription.css" />
	<link rel="stylesheet" href="index.css" />
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Crete+Round">
	<link rel="icon" href="image/petite-icon.ico"/>
	<title>Geek'Tems - Connexion</title>
</head>

<body>
	<section>
		<h1 align="center">Connexion</h1>
		<form method="POST" action="" class="formulaire">
			<table class="flex">
					<tr>
						<td align="right">
							<br>
							<label for="mail">Adresse mail:</label>
						</td>
						<td>
							<br>
							<input type="email" placeholder="Votre adresse email" id="email" name="emailconnect" required/>
						</td>
					</tr>
					<tr>
						<td align="right">
							<br>
							<label for="mdp">Mot de passe:</label>
						</td>
						<td>
							<br>
							<input type="password" placeholder="Votre mot de passe" name="mdpconnect" id="mdp" required/>
						</td>
					</tr>
			</table>
			<br><br>
			
			<br>
			<a class="button center" href="index.html"> Connexion </a>
			<br>
		</form>
		<div class="Pasdecompte"  id="noborder">
			<h3 align="center">Pas de compte ?</h3><br>
      <router-link style="text-decoration:none" class="button2" to='/register'>Créer un compte</router-link>
		</div>
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
				<br><p>- Nous contacter</p><br>
				<br><p>- Qui sommes-nous ?</p><br>
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
    async loginUser() {
      this.$emit('login', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
</style>
