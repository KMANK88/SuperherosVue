var title = "Superheroes";

var app = new Vue({
  el: '#app',
  data: {
  title: title,
  heroes: undefined,

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
      console.log("received heroes", response.data);
    })
  }
}
});
