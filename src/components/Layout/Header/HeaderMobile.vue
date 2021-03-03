<template>
  <div>
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
        <li><i class="fa fa-clock-o"></i> Aberto: {{ info.working_hours }}</li>
        <li><i class="fa fa-envelope-o"></i> {{ info.email }}</li>
      </ul>
      <div class="offcanvas__phone__num">
        <i class="fa fa-phone"></i>
        <span>{{ info.phone }}</span>
      </div>
      <div class="offcanvas__social">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-google"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
      </div>
    </div>
  </div>
  <!-- Offcanvas Menu End -->
</template>

<script>
import info from '@/data/info.json'

export default {
  name: "m-header-mobile",
  data() {
    return {
      info: info
    }
  }
}
</script>

<style scoped>

</style>