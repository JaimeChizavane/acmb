<template>
  <div class="content">
    <m-hero/>
    <m-features/>
    <m-choseous/>
  </div>
</template>

<script>
import MHero from "@/components/Home/Hero";
import MFeatures from "@/components/Home/Features";
import MChoseous from "@/components/Home/Choseous";

export default {
  name: "Home",
  components: { MChoseous, MFeatures, MHero }
}
</script>

<style scoped>

</style>