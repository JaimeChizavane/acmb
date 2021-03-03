<template>
  <!-- Offcanvas Menu Begin -->
  <div class="offcanvas-menu-overlay"></div>
  <div class="offcanvas-menu-wrapper">
    <div class="offcanvas__widget">
      <a href="#"><i class="fa fa-cart-plus"></i></a>
      <a href="#" class="search-switch"><i class="fa fa-search"></i></a>
      <a href="#" class="primary-btn">Simular</a>
    </div>
    <div class="offcanvas__logo">
      <a href="./index.html"><img src="img/logo.png" alt=""></a>
    </div>
    <div id="mobile-menu-wrap"></div>
    <ul class="offcanvas__widget__add">
      <li><i class="fa fa-clock-o"></i> Aberto: 08:00 as 15:30</li>
      <li><i class="fa fa-envelope-o"></i> credito@acmicrobanco.co.mz</li>
    </ul>
    <div class="offcanvas__phone__num">
      <i class="fa fa-phone"></i>
      <span>(+258) 21316768</span>
    </div>
    <div class="offcanvas__social">
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-google"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
    </div>
  </div>
  <!-- Offcanvas Menu End -->
</template>

<script>
export default {
  name: "m-header-mobile"
}
</script>

<style scoped>

</style>