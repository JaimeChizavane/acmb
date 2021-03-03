<template>
  <!-- Hero Section Begin -->



  <section class="hero">



    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="img/banner_01.jpg" alt="First slide">
          <div class="carousel-caption d-none d-md-block">
            <div class="hero__text">

              <div class="hero__text__title">
                <!--<span>Bem-Vindo!</span>-->
                <!-- <h2>Bem-Vindo!</h2>-->
                <h2 style="text-shadow: 2px 2px #000000;">AC MicroBanco Ajuda Você a Realizar os Seus Sonhos</h2>
              </div>

            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="img/banner_3.jpg" alt="Second slide">

          <div class="carousel-caption d-none d-md-block">
            <div class="hero__text">
              <div class="transbox">
                <div class="hero__text__title">
                  <!--<span>Bem-Vindo!</span>-->
                  <!--<h2>Solução para o seu negócio!</h2>-->
                  <h2 style="text-shadow: 2px 2px #000000;">Somos Solução Para o Seu Negócio!</h2>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="img/banner_2.png" alt="Third slide">
          <div class="carousel-caption d-none d-md-block">
            <div class="hero__text">
              <div class="transbox">
                <div class="hero__text__title">
                  <!--<span>Bem-Vindo!</span>-->
                  <!--<h2>Somos abragentes!</h2>-->
                  <h2 style="text-shadow: 2px 2px #000000;">Ajudamos a Fortalecer Toda Cadeia de Valor!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
      </a>-->
    </div>


  </section>
  <!-- Hero Section End -->
</template>

<script>
export default {
  name: "m-hero"
}
</script>

<style scoped>

</style>