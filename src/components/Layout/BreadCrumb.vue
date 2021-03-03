<template>
  <!-- Breadcrumb End -->
  <div class="breadcrumb-option set-bg" :style="style">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>{{ title }}</h2>
            <div class="breadcrumb__links">
              <a href="./index.html"><i class="fa fa-home"></i> Home</a>
              <span style="font-size: 18px">{{ title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb Begin -->
</template>

<script>
export default {
  name: "m-bread-crumb",
  computed: {
    style() {
      return "background-image: url('img/" + this.bg_image + "');"
    }
  },
  data() {
    return {
      title: this.$route.meta.title,
      bg_image: this.$route.meta.image
    }
  }
}
</script>