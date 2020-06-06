<template>
  <div id="app">
    <app-menu/>
    <main>
      <app-parallax/>
      <b-container id="content">
        <router-view/>
      </b-container>
    </main>
    <app-footer/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { AppFooter, AppMenu, AppParallax } from '@/layout'

  @Component({
    components: {
      AppMenu,
      AppParallax,
      AppFooter
    }
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  @import "assets/css/app";

  #app {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 1;
    align-items: stretch;
    width: 100%;

  }

  main {
    box-sizing: border-box;
    flex: 1;
    margin-top: $menuHeight;

    #content {
      box-sizing: border-box;
      padding: 40px 0.5em 40px;

      h1 {
        color: $colour_blue_dark;
        font-size: 40px;
        font-weight: 400;
        margin-bottom: 1em;
        text-align: center;

        &:before, &:after {
          background: $colour_blue_dark;
          content: "";
          display: inline-block;
          height: 2px;
          margin: 0 0.7em;
          vertical-align: middle;
          width: 0.7em;
        }
      }

      p {
        margin: 0 0 2em;
      }
    }
  }
</style>
