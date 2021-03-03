<template>
  <div id="app">
    <m-header-mobile/>
    <m-header/>
    <router-view/>
    <m-footer/>
    <m-search/>
  </div>
</template>

<style>

</style>
<script>


import MHeaderMobile from "@/components/Layout/Header/HeaderMobile";
import MHeader from "@/components/Layout/Header/Header";
import MFooter from "@/components/Layout/Footer";
import MSearch from "@/components/Layout/Search";

export default {
  components: { MSearch, MFooter, MHeader, MHeaderMobile }
}
</script>