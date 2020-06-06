<template>
  <div id="footer--lower">
    <p>&copy; Nigel Jones Associates Limited {{ currentYear }}. All rights reserved.</p>

    <p class="extra">
      <span>Registered in England and Wales.</span>
      <span>Company Number: 9660161</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Lower extends Vue {
  private currentYear = new Date().getFullYear()
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/vars";

  #footer--lower {
    background: $colour_blue_veryverydark;
    color: #999;
    font-size: 15px;
    padding: 2.5em 0;
    text-align: center;

    .extra {
      color: #777;
      font-size: 13px;

      span {
        display: block;
      }
    }
  }

  /*div {
    background: rgba(0, 0, 0, 0.2);
    background: $colour_blue_veryverydark;
    color: #999;
    font-size: 15px;
    padding: 2.5em 0;

    .extra {
      color: #777;
      font-size: 13px;
    }
  }*/
</style>
