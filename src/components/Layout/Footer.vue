<template>
  <!-- Footer Section Begin -->
  <footer class="footer set-bg" data-setbg="img/footer-bg.jpg">
    <div class="container">
      <div class="footer__contact">
        <div class="row">
          <div class="col-lg-3 col-md-4">
            <div class="footer__contact__title">
              <h2>INSTITUCIONAL</h2>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div class="footer__contact__title">
              <h2 style="text-align:center">PRODUTOS</h2>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="footer__contact__title">
              <h2 style="text-align:right">CONTACTOS</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="row">

        <div class="col-lg-3 col-md-2">
          <div class="footer__widget">
            <h5>Sobre Nós</h5>
            <ul>
              <li><a href="about.html#section1"><i class="fa fa-chevron-circle-right" style="color:white;"></i> A Nossa
                História</a></li>
              <li><a href="about.html#section2"><i class="fa fa-chevron-circle-right" style="color:white;"></i> Missão e
                Visão</a></li>
              <li><a href="estrutura.html"><i class="fa fa-chevron-circle-right" style="color:white;"></i> Estrutura
                Governança</a></li>
              <li><a href="relatorio.html"><i class="fa fa-chevron-circle-right" style="color:white;"></i>
                Relatórios</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div class="footer__widget">
            <h5 style="text-align:left">Crédito Consumo</h5>
            <ul>
              <li><a href="creditopessoalrapido.html"><i class="fa fa-chevron-circle-right" style="color:white;"></i>
                Crédito Pessoal Rápido</a></li>
              <li><a href="creditoautomovel.html"><i class="fa fa-chevron-circle-right" style="color:white;"></i>
                Crédito Automóvel</a></li>
              <li><a href="creditoalarautomovel.html"><i class="fa fa-chevron-circle-right" style="color:white;"></i>
                Crédito Pessoal Lar Recheio</a></li>
              <li><a href="creditohabitacao.html"><i class="fa fa-chevron-circle-right" style="color:white;"></i>
                Crédito Habitação</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div class="footer__brand">
            <h5>Crédito Empresa</h5>
            <ul>
              <li><a href="creditoarural.html"><i class="fa fa-chevron-circle-right" style="color:white;"></i>Crédito
                Rural Agropecuária</a></li>
              <li><a href="creditopme.html"><i class="fa fa-chevron-circle-right" style="color:white;"></i>Crédito PME-
                Rural Comércio </a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3">
          <div class="footer__about" style="text-align:right">
            <div class="footer__logo">
              <a href="index.html"><img src="img/footer-logo.png" alt=""></a>
            </div>
            <p style="text-align:right">Questão? Consulte a sua duvida em nossa linha do cliente:<br>
              <b>(+258) 824731609/844867035</b></p>
            <div class="footer__social">
              <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="google"><i class="fa fa-google"></i></a>
              <a href="#" class="skype"><i class="fa fa-skype"></i></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
      <div class="footer__copyright__text">
        <p>Copyright &copy;{{ year }} All rights reserved | Was designed with <i class="fa fa-heart"
                                                                                 aria-hidden="true"></i> by <a href="#"
                                                                                                               target="_blank">eKutivaSolutions</a>
        </p>
      </div>
      <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
    </div>
  </footer>
  <!-- Footer Section End -->
</template>

<script>
export default {
  name: "m-footer",
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>
.footer{
  background-image: url('~@/assets/img/footer-bg.jpg');
}
</style>