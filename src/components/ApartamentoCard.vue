<template>
  <div>
    <router-view ></router-view>
  </div>
  <div >
    <div id="text-banner" class="text-center">
      <h1>Desafio Hype <span class="fa fa-building"></span></h1>
      <br />
      <h2 class="text-secondary">Apartamento</h2>
    </div>
  </div>
  <div id="main" >
    <div class="container" v-if="apartamento">
      <div class="row">
        <div class="col-md"></div>
        <div class="col-md" >
          <div class="card" >
            <div class="card-body card-header" >
              <h5 class="card-title">{{ apartamento.codigo }}</h5>
              <p class="card-text">
                {{ apartamento.Predio.cidade }} -
                {{ apartamento.Predio.estado }}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Localização</strong>
                <p>
                  {{ apartamento.Predio.nome }}:
                  {{ apartamento.Predio.endereco }}
                </p>
              </li>
              <li class="list-group-item">{{ apartamento.quartos }} Quarto(s)</li>
              <li class="list-group-item">
                {{ apartamento.banheiros }} Banheiro(s)
              </li>
              <li class="list-group-item">{{ apartamento.suites }} Suíte(s)</li>
              <li class="list-group-item">
                {{ apartamento.area }} m<sup>2</sup>
              </li>
            </ul>
            <div class="card-body card-header">
              <a href="/apartamentos" class="card-link btn btn-outline-dark"
                >Ver outros apartamentos</a
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
import Apartamento from "../services/apartamentos.js";

export default {
  name: "Apartamentos",
  data() {
    return {
      busca_id: 0,
      apartamento: {
        codigo: "",
        quartos: 0,
        banheiros: 0,
        suites: 0,
        area: 0,
        predio_id: 0,
        Predio: {
          id: 0,
          nome: "",
          sigla: "",
          endereco: "",
          cidade: "",
          estado: "",
        },
      },
    };
  },
  mounted() {
    this.busca_id = this.$route.params.id;
    this.showApartamento(this.busca_id)
  },
  methods: {
    showApartamento(id) {
      Apartamento.show(id).then((res) => {
        this.apartamento = res.data;
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
