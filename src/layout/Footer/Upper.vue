<template>
  <div id="footer--upper">
    <b-container>
      <b-row>
        <b-col lg="4">
          <contact/>
        </b-col>
        <b-col lg="4">
          <about/>
        </b-col>
        <b-col lg="4">
          <legal/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import About from '@/layout/Footer/About.vue'
import Contact from '@/layout/Footer/Contact.vue'
import Legal from '@/layout/Footer/Legal.vue'

@Component({
  components: {
    About,
    Contact,
    Legal
  }
})
export default class Upper extends Vue {}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/vars";

  #footer--upper {
    background: $colour_blue_verydark;
    color: #CCC;
    font-size: 13px;
    padding: 1em 0;
    text-align: left;

    ::v-deep h1 {
      color: #2b6fa9;
      font-size: 18px;
      text-align: inherit;
      margin: 1em 0;
    }

    ::v-deep a {
      color: inherit;
    }

    ::v-deep p {
      margin-bottom: 10px;
      text-align: inherit;
    }
  }
</style>
