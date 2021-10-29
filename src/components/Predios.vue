<template>
  <router-view></router-view>
  <div>
    <div id="text-banner" class="text-center">
      <h1>Desafio Hype <span class="fa fa-building"></span></h1>
      <br />
      <h2 class="text-secondary">Prédios</h2>
    </div>
  </div>
  <div id="main">
    <div class="container">
      <div class="row">
        <div class="col-md">
          <div class="card">
            <div class="card-body">
              <h6 class="text-secondary">Cadastre um novo prédio</h6>
              <form @submit.prevent="create">
                <div class="form-group">
                  <label for="nome">Nome</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nome"
                    placeholder="Hype Tower"
                    v-model="predio.nome"
                  />
                </div>
                <div class="form-group">
                  <label for="sigla">Sigla</label>
                  <input
                    type="text"
                    class="form-control"
                    id="sigla"
                    placeholder="ZP50"
                    v-model="predio.sigla"
                  />
                </div>
                <div class="form-group">
                  <label for="endereco">Endereço</label>
                  <input
                    type="text"
                    class="form-control"
                    id="endereco"
                    placeholder="Rua Hype nº 123"
                    v-model="predio.endereco"
                  />
                </div>
                <div class="form-group">
                  <label for="cidade">Cidade</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cidade"
                    placeholder="Curitiba"
                    v-model="predio.cidade"
                  />
                </div>
                <div class="form-group">
                  <label for="estado">Estado</label>
                  <input
                    type="text"
                    class="form-control"
                    id="estado"
                    placeholder="PR"
                    maxlength="2"
                    v-model="predio.estado"
                  />
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
              <h6 class="text-secondary">Prédios disponíveis</h6>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Apartamentos</th>
                    <th scope="col">Ver mais</th>
                    <th scope="col">Excluir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="predio of predios" :key="predio.id">
                    <th scope="row">{{ predio.nome }}</th>
                    <td>{{ predio.estado }}</td>
                    <td>{{ predio.cidade }}</td>
                    <td>
                      <ul
                        class="list-group"
                        v-for="predio of predio.apartamentos"
                        :key="predio.id"
                      >
                        <li class="list-group-item">
                          <a v-bind:href="'/apartamento/' + predio.id">{{
                            predio.codigo
                          }}</a>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <a
                        v-bind:href="'/predio/' + predio.id"
                        class="fa fa-building btn btn-info"
                      ></a>
                    </td>
                    <td>
                      <i
                        @click="deletar(predio)"
                        class="fa fa-trash btn btn-danger"
                      ></i>
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
import Predio from "../services/predios.js";

export default {
  name: "Predios",
  data() {
    return {
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
      predios: [],
      errors: [],
    };
  },
  mounted() {
    this.index();
  },

  methods: {
    index() {
      Predio.index().then((res) => {
        this.predios = res.data;
      });
    },

    create() {
      if (
        this.predio.nome == "" ||
        this.predio.sigla == "" ||
        this.predio.endereco == "" ||
        this.predio.cidade == "" ||
        this.predio.estado == ""
      ) {
        alert("Campos em branco ou invalidos, verifique e tente novamente.");
      } else {
        Predio.store(this.predio)
          .then((res) => {
            if (res.request.status == 200) {
              alert(this.predio.nome + " Criado com sucesso");
            }
            this.predio = {};
            this.index();
          })
          .catch((err) => {
            this.errors = err.response.data.errors;
            alert("Erro: " + err.response.data.errors);
          });
      }
    },

    deletar(predio) {
      if (confirm(`Deseja realmente deletar ${predio.nome}?`)) {
        Predio.delete(predio)
          .then((res) => {
            if (res.request.status == 200) {
              alert(this.predio.nome + " Apagado com sucesso");
            }
            this.index();
            this.errors = [];
          })
          .catch((err) => {
            this.errors = err.response.data.errors;
            alert(
              "Não foi possível deletar, pois o prédio ainda tem apartamentos cadastrados"
            );
          });
      }
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
  text-decoration-color: none;
}
label {
  margin-top: 10px;
}
td,
th {
  text-align: center;
}
</style>
