<template>
  <div>
    <section id="main">
		<div class="wrapper">
			<h2>Trouvez vos Items<br><strong>Dont vous rêvez</strong></h2>
		</div>
	</section>
    <article v-for="article in articles" :key="article.id">
      <div class="article-img">
        <div :style="{ backgroundImage: 'url(' + article.image + ')' }">
        </div>
      </div>
      <div class="article-content" v-if="editingArticle.id !== article.id">
        <div class="article-title">
          <h2>{{ article.name }} - {{ article.price }}€</h2>
          <div>
          <button @click="deleteArticle(article.id)">Supprimer</button>
          <button @click="editArticle(article)">Modifier</button>
          </div>
        </div>
        <p>{{ article.description }}</p>
      </div>
      <div class="article-content" v-else>
        <div class="article-title">
          <h2><input type="text" v-model="editingArticle.name"> - <input type="number" v-model="editingArticle.price"></h2>
          <div>
            <button @click="sendEditArticle()">Valider</button>
            <button @click="abortEditArticle()">Annuler</button>
          </div>
        </div>
        <p><textarea v-model="editingArticle.description"></textarea></p>
        <input type="text" v-model="editingArticle.image" placeholder="Lien vers l'image">
      </div>
    </article>
    <form @submit.prevent="addArticle">
      <h2>Nouveau produit à ajouter</h2>
      <input type="text" v-model="newArticle.name" placeholder="Nom du produit" required>
      <input type="number" v-model="newArticle.price" placeholder="Prix" required>
      <textarea type="text" v-model="newArticle.description" required></textarea>
      <input type="text" v-model="newArticle.image" placeholder="Lien vers l'image">
      <button type="submit">Ajouter</button>
    </form>
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
	<script src="/vue-application.js"></script>
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
      newArticle: {
        name: '',
        description: '',
        image: '',
        price: 0
      },
      editingArticle: {
        id: -1,
        name: '',
        description: '',
        image: '',
        price: 0
      }
    }
  },
  methods: {
    addArticle () {
      this.$emit('add-article', this.newArticle)
    },
    deleteArticle (articleId) {
      this.$emit('delete-article', articleId)
    },
    editArticle (article) {
      this.editingArticle.id = article.id
      this.editingArticle.name = article.name
      this.editingArticle.description = article.description
      this.editingArticle.image = article.image
      this.editingArticle.price = article.price
    },
    sendEditArticle () {
      this.$emit('update-article', this.editingArticle)
      this.abortEditArticle()
    },
    abortEditArticle () {
      this.editingArticle = {
        id: -1,
        name: '',
        description: '',
        image: '',
        price: 0
      }
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
}

.article-img {
  flex: 1;
}

.article-img div {
  width: 100px;
  height: 100px;
  background-size: cover;
}

.article-content {
  flex: 3;
}

.article-title {
  display: flex;
  justify-content: space-between;
}

textarea {
  width: 100%;
}
</style>
