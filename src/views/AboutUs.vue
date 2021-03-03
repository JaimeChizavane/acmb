<template>
  <div>
    <m-bread-crumb/>

    <!-- About Us Section Begin -->
    <section class="about spad" id="section1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title about-title">
              <u><h2>A Nossa História</h2></u>
              <br/>
              <br/>
              <p style="text-align:justify">
                O AC MicroBanco Lda, Fundada em 5 de Maio 2012, autorizada e supervisionada pelo Banco de Mocambique é
                especializada na prestação de serviços de crédito.
                Emergiu da vontade e conhecimentos de um grupo de profissionais com vasta experiência nas mais variadas
                áreas de trabalho.
                <br/>
                <br/>
                É objectivo do AC MicroBanco Lda, contribuir para o crescimento sustentado tanto das empresas como dos
                particulares, através da procura e partilha de soluções ajustadas à dinâmica de cada um dos seus
                clientes.
                <br/>
                <br/>
                Para que possa oferecer aos seus clientes melhores soluções do mercado, potenciando os empreendores
                rurais para um crescimento sustentado com a máxima segurança, através de um serviço personalizado e
                eficiente, o AC MicroBanco, Lda trabalha em parceria com Fundo Internacional para o Desenvolvimento
                Agrícola (FIDA).
                <br/>
                <br/>
                Localizada ao Sul de Moçambique, sua área de abrangência, o AC MicroBanco, Lda se destaca pela força e
                tradição de relacionamento com pessoas físicas, uma marca com atuação regional, focada no
                desenvolvimento local, no relacionamento e na interação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about spad" id="section2">
      <div class="container">
        <div class="row">

          <div class="col-lg-6 col-md-6 col-sm-6">

            <div class="about__item">
              <u><h5 style="text-align:center">Missão</h5></u>
              <p style="text-align:justify">Ser reconhecido como a melhor e mais eficiente Instituiçao de Microfinanças
                e como ferramenta de geraçao de emprego e renda sustentavel.</p>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="about__item">
              <u><h5 style="text-align:center">Visão</h5></u>
              <p style="text-align:justify">Prestar serviços financeiros as populações de baixa e média renda, com
                agilidade e competência, visando a criação de valor aos sócios e a sociedade.</p>
            </div>
          </div>


          <div class="about__feature">

            <div class="col-lg-12">
              <div class="about__pic">
                <br><br>
                <img src="img/about/about-pic-01.jpg" alt="">
                <br><br><br>
              </div>
            </div>

            <div class="section-title about-title">
              <u><h2>Valores</h2></u>
            </div>

            <div class="row mb-5">

              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="about__feature__item">
                  <img src="img/about/af-1.png" alt="">
                  <h5>Transparência</h5>
                  <p style="text-align:justify">Ser transparente nas relações internas e externas.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="about__feature__item">
                  <img src="img/about/af-2.png" alt="">
                  <h5>Prontidão</h5>
                  <p style="text-align:justify">Vitalidade e aprendizagem contínua.</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="about__feature__item">
                  <img src="img/about/af-3.png" alt="">
                  <h5>Proximidade</h5>
                  <p style="text-align:justify">Uma equipa de profissionais disponíveis para o atender.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MBreadCrumb from "@/components/Layout/BreadCrumb";

export default {
  name: "AboutUs",
  components: { MBreadCrumb }
}
</script>

<style scoped>

</style>