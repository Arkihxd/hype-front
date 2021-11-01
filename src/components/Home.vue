<template>
  <div>
    <router-view></router-view>
  </div>
  <div>
    <div id="text-banner" class="text-center">
      <h1>Desafio Hype <span class="fa fa-building"></span></h1>
      <br />
      <h2 class="text-secondary">Seja bem vindo!</h2>
    </div>
  </div>
  <div id="main">
    <div class="container">
      <div class="row">
        <p class="h3 text-center">Projeto desenvolvido para o desafio Hype</p>
        <br />
        <p class="h5 text-center text-secondary mb-3">
          Escolha uma opção abaixo ou navegue pelo menu no topo da página
        </p>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md text-right">
          <a type="button" class="btn btn-secondary btn-lg" href="/predios"
            >Prédios</a
          >
        </div>
        <div class="col-md text-right">
          <a type="button" class="btn btn-secondary btn-lg" href="/apartamentos"
            >Apartamentos</a
          >
        </div>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md"></div>
      </div>
      <div class="row mt-5">
        <p class="h3 text-center">
          Link para os reposítorios públicos no GitHub
        </p>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md text-center">
          <a
            class="fa fa-github fa-5x"
            href="https://github.com/Arkihxd/hype-front"
            target="_blank"
          ></a>
          <p class="h5 text-secondary">Front-end</p>
        </div>
        <div class="col-md text-center">
          <a
            class="fa fa-github fa-5x"
            href="https://github.com/Arkihxd/hype-client"
            target="_blank"
          ></a>
          <p class="h5 text-secondary">Back-end</p>
        </div>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md"></div>
      </div>
      <div class="row mt-5">
        <p class="h3 text-center">Tecnologias usadas</p>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md text-center"></div>
        <div class="col-md">
          <p class="h3">Front-end</p>
          <p class="h5 text-secondary">Vue.js</p>
          <p class="h5 text-secondary">Bootstrap</p>
          <p class="h5 text-secondary">Font Awesome</p>
        </div>
        <div class="col-md">
          <p class="h3">Back-end</p>
          <p class="h5 text-secondary">Node.js</p>
          <p class="h5 text-secondary">Express.js</p>
          <p class="h5 text-secondary">PostgreSQL</p>
          <p class="h5 text-secondary">Sequelize ORM</p>
        </div>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md"></div>
      </div>
    </div>
  </div>
</template>
