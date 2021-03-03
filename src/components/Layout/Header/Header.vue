<template>
  <!-- Header Section Begin -->
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <ul class="header__top__widget">
              <li><i class="fa fa-clock-o"></i> Aberto: {{ info.working_hours }}</li>
              <li><i class="fa fa-envelope-o"></i>{{ info.email }}</li>
            </ul>
          </div>
          <div class="col-lg-5">
            <div class="header__top__right">
              <div class="header__top__phone">
                <i class="fa fa-phone"></i>
                <span>{{ info.phone }}</span>
              </div>
              <div class="header__top__social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-google"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="container1">


      <div class="col-lg-4">
        <div class="header__logo">
          <a href="./index.html"><img src="img/logo300-blue.png" alt=""></a>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="header__nav">
            <nav class="header__menu">
              <ul>
                <li>
                  <router-link :to="{name: 'Home'}" active-class="active">Home</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'About'}">Sobre Nós</router-link>
                  <ul class="dropdown">
                    <li><a href="about.html#section1">História</a></li>
                    <li><a href="about.html#section2">Missão </a></li>
                    <li><a href="about.html#section2">Visão </a></li>
                    <li><a href="estrutura.html">Estrutura</a></li>
                    <li><a href="relatorio.html">Relatórios</a></li>
                  </ul>
                </li>
                <li><a href="#">Crédito</a>
                  <ul class="dropdown">
                    <li><a href="particulares.html">Particulares</a></li>
                    <li><a href="empresas.html">Empresas</a></li>

                  </ul>
                </li>
                <li><a href="contacto.html">Onde Estamos</a></li>
              </ul>
            </nav>
            <div class="header__nav__widget">

              <a href="#" class="primary-btn">Simular</a>
              <div class="header__nav__widget__btn">
                <!--                 <a href="#"><i class="fa fa-cart-plus"></i></a>-->
                <a href="#" @click.prevent="openSearch" class="search-switch ml-4"><i class="fa fa-search"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="canvas__open">
        <span class="fa fa-bars"></span>
      </div>
    </div>
  </header>
  <!-- Header Section End -->
</template>

<script>
import info from '@/data/info.json'

export default {
  name: "m-header",
  methods: {
    openSearch() {
      window.$('.search-model').fadeIn(400);
    }
  },
  data() {
    return {
      info: info
    }
  }
}
</script>

<style scoped>

</style>