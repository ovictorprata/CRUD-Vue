var app = new Vue({
  el: "#app",
  data: {
    message: "Olá Vue!",
    tasks: [],
    modoAdicionar: false,
    adicionar: {
      title: "",
      project: "",
      dueTo: null
    }
  },
  methods: {
    getTasks() {
      fetch("http://localhost:3000/tasks")
        .then((response) => response.json())
        .then((tarefasJson) => {
          console.log(tarefasJson);
          this.tasks = tarefasJson;
        });
    },
    add() {
      // this.modoAdicionar = true;
      fetch(`http://localhost:3000/tasks`, {method:'POST', headers:{'Content-Type': 'application/json'}, 
      body: JSON.stringify(this.adicionar)},  )
    },
    remover(id){
      fetch(`http://localhost:3000/tasks/${id}`, {method:'DELETE'} )
    }
  },
  created() {
    console.log("created");
    this.getTasks();
  },
  mounted() {
    console.log("montend");
  },
});