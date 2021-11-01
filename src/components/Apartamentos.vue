<template>
  <div>
    <router-view></router-view>
  </div>
  <div>
    <div id="text-banner" class="text-center">
      <h1>Desafio Hype <span class="fa fa-building"></span></h1>
      <br />
      <h2 class="text-secondary">Apartamentos</h2>
    </div>
  </div>
  <div id="main">
    <div class="container">
      <div class="row">
        <div class="col-md">
          <div class="card">
            <div class="card-body">
              <h6 class="text-secondary">Cadastre um novo apartamento</h6>
              <form @submit.prevent="create">
                <div class="form-group">
                  <label for="codigo">Código</label>
                  <input
                    type="text"
                    class="form-control"
                    id="codigo"
                    placeholder="0021A"
                    v-model="apartamento.codigo"
                  />
                </div>
                <div class="form-group">
                  <label for="quartos">Número de quartos</label>
                  <input
                    type="number"
                    class="form-control"
                    id="quartos"
                    placeholder="2"
                    v-model="apartamento.quartos"
                  />
                </div>
                <div class="form-group">
                  <label for="banheiros">Número de banheiros</label>
                  <input
                    type="number"
                    class="form-control"
                    id="banheiros"
                    placeholder="1"
                    v-model="apartamento.banheiros"
                  />
                </div>
                <div class="form-group">
                  <label for="suites">Quantidade de suítes</label>
                  <input
                    type="number"
                    class="form-control"
                    id="suites"
                    placeholder="1"
                    v-model="apartamento.suites"
                  />
                </div>
                <div class="form-group">
                  <label for="area">Área total em m<sup>2</sup></label>
                  <input
                    type="number"
                    class="form-control"
                    id="area"
                    placeholder="45"
                    step="0.01"
                    v-model="apartamento.area"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1"
                    >Selecione o Prédio</label
                  >
                  <select
                    v-model="apartamento.predio_id"
                    class="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option
                      v-for="predio in predios"
                      :key="predio.id"
                      :value="predio.id"
                    >
                      {{ predio.nome }}
                    </option>
                  </select>
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Criar</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card">
            <div class="card-body">
              <h6 class="text-secondary">Apartamentos disponíveis</h6>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Quartos</th>
                    <th scope="col">Banheiros</th>
                    <th scope="col">Suítes</th>
                    <th scope="col">Área</th>
                    <th scope="col">Prédio</th>
                    <th scope="col">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="apartamento of apartamentos" :key="apartamento.id">
                    <th scope="row">{{ apartamento.codigo }}</th>
                    <td>{{ apartamento.quartos }}</td>
                    <td>{{ apartamento.banheiros }}</td>
                    <td>{{ apartamento.suites }}</td>
                    <td>{{ apartamento.area }}m<sup>2</sup></td>
                    <td>
                      <li class="list-group-item">
                        <a v-bind:href="'/predio/' + apartamento.Predio.id">{{
                          apartamento.Predio.nome
                        }}</a>
                      </li>
                    </td>
                    <td>
                      <button
                        @click="deletar(apartamento)"
                        class="btn btn-danger"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Apartamentos from "../services/apartamentos.js";
import Predio from "../services/predios.js";

export default {
  name: "Apartamentos",
  data() {
    return {
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
      apartamentos: [],
      predios: [],
      errors: [],
    };
  },

  mounted() {
    this.index();
    this.indexPredios();
  },

  methods: {
    apartamentoCard() {
      this.$emit("add-card", {
        predio: this.apartamento.Predio,
      });
    },

    index() {
      Apartamentos.index().then((res) => {
        this.apartamentos = res.data;
      });
    },

    indexPredios() {
      Predio.index().then((res) => {
        this.predios = res.data;
      });
    },

    create() {
      if (
        this.apartamento.codigo == "" ||
        this.apartamento.quartos <= 0 ||
        this.apartamento.banheiros <= 0 ||
        this.apartamento.suites <= 0 ||
        this.apartamento.area <= 0 ||
        this.apartamento.predio_id == 0
      ) {
        alert("Campos em branco ou invalidos, verifique e tente novamente.");
      } else {
        Apartamentos.store(this.apartamento)
          .then((res) => {
            if (res.request.status == 200) {
              alert(this.apartamento.codigo + " Criado com sucesso");
            }
            this.apartamento = {};
            this.index();
          })
          .catch((err) => {
            this.errors = err.response.data.errors;
            alert("Erro: " + err.response.data.errors);
          });
      }
    },

    deletar(apartamento) {
      if (confirm(`Deseja realmente deletar ${apartamento.codigo}?`)) {
        Apartamentos.delete(apartamento)
          .then((res) => {
            if (res.request.status == 200) {
              alert(this.apartamento.codigo + " Apagado com sucesso");
            }
            this.index();
            this.errors = [];
          })
          .catch((err) => {
            this.errors = err.response.data.errors;
            alert("Erro: " + err.response.data.errors);
          });
      }
    },

    showPredio(predio_id) {
      return Predio.show(predio_id).then((res) => {
        res.data.nome;
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
