<template>
  <div>
    <div id="text-banner" class="text-center">
      <h1>Desafio Hype <span class="fa fa-building"></span></h1>
      <br />
      <h6 class="text-secondary">sim zap</h6>
    </div>
  </div>
  <div id="main">
    <div class="container">
      <div class="row">
        <div class="col-md">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="nome">Nome</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nome"
                    placeholder="Hype Tower"
                  />
                </div>
                 <div class="form-group">
                  <label for="sigla">Sigla</label>
                  <input
                    type="text"
                    class="form-control"
                    id="sigla"
                    placeholder="ZP50"
                  />
                </div>
                 <div class="form-group">
                  <label for="endereco">Endereço</label>
                  <input
                    type="text"
                    class="form-control"
                    id="endereco"
                    placeholder="Rua Hype nº 123"
                  />
                </div>
                 <div class="form-group">
                  <label for="cidade">Cidade</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cidade"
                    placeholder="Curitiba"
                  />
                </div>
                <div class="form-group">
                  <label for="cidade">Cidade</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cidade"
                    placeholder="Curitiba"
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
                  />
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Criar</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md">
          <div class="card">
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
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

export default {
  name: "App",
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
</style>
