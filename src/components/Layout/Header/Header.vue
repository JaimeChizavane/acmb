<template>
  <!-- Header Section Begin -->
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <ul class="header__top__widget">
              <li><i class="fa fa-clock-o"></i> Aberto: 08:00 as 15:30</li>
              <li><i class="fa fa-envelope-o"></i> credito@acmicrobanco.co.mz</li>
            </ul>
          </div>
          <div class="col-lg-5">
            <div class="header__top__right">
              <div class="header__top__phone">
                <i class="fa fa-phone"></i>
                <span>(+258) 21316768</span>
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
                <li class="active"><a href="./index.html">Home</a></li>
                <li><a href="./about.html">Sobre Nós</a>
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
                <!-- <a href="#"><i class="fa fa-cart-plus"></i></a>-->
                <a href="#" class="search-switch"><i class="fa fa-search"></i></a>
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
export default {
name: "m-header"
}
</script>

<style scoped>

</style>