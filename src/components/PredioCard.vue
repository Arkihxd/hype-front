<template>
  <div>
    <router-view></router-view>
  </div>
  <div>
    <div id="text-banner" class="text-center">
      <h1>Desafio Hype <span class="fa fa-building"></span></h1>
      <br />
      <h2 class="text-secondary">Predio</h2>
    </div>
  </div>
  <div id="main">
    <div class="container" v-if="predio">
      <div class="row">
        <div class="col-md"></div>
        <div class="col-md">
          <div class="card">
            <div class="card-body card-header">
              <h5 class="card-title">{{ predio.nome }}</h5>
              <p class="card-text">
                {{ predio.sigla }}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Localização</strong>
                <p>
                  {{ predio.endereco }}, {{ predio.cidade }} -
                  {{ predio.estado }}
                </p>
              </li>
              <li class="list-group-item text-center">
                <strong>Apartamentos</strong>
              </li>
              <ul
                class="list-group-item text-center"
                v-for="predio of predio.apartamentos"
                :key="predio.id">
                <li class="list-group-item">
                  <a v-bind:href="'/apartamento/' + predio.id">{{
                    predio.codigo
                  }}</a>
                </li>
              </ul>
            </ul>
            <div class="card-body card-header">
              <a href="/predios" class="card-link btn btn-outline-dark"
                >Ver outros predios</a
              >
            </div>
          </div>
        </div>
        <div class="col-md"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Predio from "../services/predios.js";

export default {
  name: "Apartamentos",
  data() {
    return {
      busca_id: 0,
      predio: {
        nome: "",
        sigla: "",
        endereco: "",
        cidade: "",
        estado: "",
        apartamentos: {
          codigo: "",
          quartos: 0,
          banheiros: 0,
          suites: 0,
          area: 0,
          predio_id: 0,
        },
      },
    };
  },
  mounted() {
    this.busca_id = this.$route.params.id;
    this.showPredio(this.busca_id);
  },
  methods: {
    showPredio(id) {
      Predio.show(id).then((res) => {
        this.predio = res.data;
      });
    },
  },
};
</script>

<style>
#text-banner {
  margin-top: 70px;
  margin-bottom: 30px;
}
#main {
  background-color: #f1f1f1;
  padding-top: 30px;
  padding-bottom: 30px;
}
a {
  color: inherit;
  text-decoration: none;
}
label {
  margin-top: 10px;
}
td,
th {
  text-align: center;
}
</style>
