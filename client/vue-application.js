const Home = window.httpVueLoader('./components/Home.vue')
const Rechercher = window.httpVueLoader('./components/Rechercher.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Vente = window.httpVueLoader('./components/Vente.vue')
const Decouverte = window.httpVueLoader('./components/Decouverte.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/rechercher', component: Rechercher },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/decouverte', component: Decouverte },
  { path: '/vente', component: Vente }
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    articles: [],
    panier: {
      createdAt: null,
      updatedAt: null,
      articles: []
    },
    user: {},
    isConnected: false
  },
  async mounted () {
    const res = await axios.get('/api/articles')
    this.articles = res.data
    // const res2 = await axios.get('/api/panier')
    // this.panier = res2.data
    try {
      const res3 = await axios.get('/api/me')
      this.user = res3.data
      this.isConnected = true
    } catch (err) {
      // if (err.response && err.response.statusCode === 401) {
      if (err.response?.status === 401) {
        this.isConnected = false
      } else {
        console.log('error', err)
      }
    }
  },
  methods: {
    async addArticle (article) {
      const res = await axios.post('/api/article', article)
      this.articles.push(res.data)
    },
    async updateArticle (newArticle) {
      await axios.put('/api/article/' + newArticle.id, newArticle)
      const article = this.articles.find(a => a.id === newArticle.id)
      article.name = newArticle.name
      article.description = newArticle.description
      article.image = newArticle.image
      article.price = newArticle.price
    },
    async deleteArticle (articleId) {
      await axios.delete('/api/article/' + articleId)
      const index = this.articles.findIndex(a => a.id === articleId)
      this.articles.splice(index, 1)
    },
    async pay () {
      await axios.post('/api/pay')
      this.panier.articles = []
    },
    async login (user) {
      const res = await axios.post('/api/login', user)
      this.user = res.data
      this.isConnected = true
      this.$router.push('/')
    }
  }
})
