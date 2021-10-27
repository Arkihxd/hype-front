<template>
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
              <form>
                <div class="form-group">
                  <label for="codigo">Codigo</label>
                  <input
                    type="text"
                    class="form-control"
                    id="codigo"
                    placeholder="0021A"
                  />
                </div>
                 <div class="form-group">
                  <label for="quartos">Numero de quartos</label>
                  <input
                    type="number"
                    class="form-control"
                    id="quartos"
                    placeholder="2"
                  />
                </div>
                 <div class="form-group">
                  <label for="banheiros">Numero de banheiros</label>
                  <input
                    type="number"
                    class="form-control"
                    id="banheiros"
                    placeholder="1"
                  />
                </div>
                 <div class="form-group">
                  <label for="suites">Quantidade de suites</label>
                  <input
                    type="number"
                    class="form-control"
                    id="suites"
                    placeholder="1"
                  />
                </div>
                <div class="form-group">
                  <label for="area">Area total em (m2)</label>
                  <input
                    type="number"
                    class="form-control"
                    id="area"
                    placeholder="45"
                  />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Selecione o Prédio</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
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
             <h6 class="text-secondary">Apartamentos disponíveis</h6>
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

