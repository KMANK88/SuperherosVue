var title = "Superheroes";
var appUrl = "/api";
var app = new Vue({
  el: '#app',
  data: {
  title: title,
  heroes: undefined,
  postTitle: "List a SuperHero",
  name: undefined,
  superpower: undefined,
  img: undefined,

  },
  created: function(){
    this.fetchData()
  },
methods: {
  fetchData: function(){
    var self = this;
    $.ajax({

      method: "GET",
      url:"/api"
    }).done(function(response){
      self.heroes = response.data;
      console.log("received heroes", self.heroes);
    })
    },
  postHero: function(){
    var self = this;
    var newSuperHero = {
      name:this.name,
      superpower: this.superpower,
      img: this.img,
    };
    console.log(newSuperHero)

    $.ajax({
      url: '/api',
      method: 'POST',
      data: newSuperHero
    }).done(function(response){
      console.log(response.data,"Hero created")
    })
  }
}
});
