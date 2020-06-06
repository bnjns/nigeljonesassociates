<template>
  <footer>
    <footer-upper/>
    <footer-lower/>
  </footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import FooterLower from './Lower.vue'
  import FooterUpper from './Upper.vue'

  @Component({
    components: {
      FooterUpper,
      FooterLower
    }
  })
  export default class Footer extends Vue {}
</script>
