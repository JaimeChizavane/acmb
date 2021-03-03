<template>
  <!-- Search Begin -->
  <div class="search-model">
    <div class="h-100 d-flex align-items-center justify-content-center">
      <div class="search-close-switch" @click.prevent="closeSearch">+</div>
      <form class="search-model-form">
        <input type="text" id="search-input" v-model="search" placeholder="Procurar.....">
      </form>
    </div>
  </div>
  <!-- Search End -->
</template>

<script>
export default {
  name: "m-search",
  data() {
    return {
      search: ''
    }
  },
  methods: {
    closeSearch() {
      window.$('.search-model').fadeOut(400, function () {
        window.$('#search-input').val('');
      });
    }
  }
}
</script>

<style scoped>

</style>