<template>
  <b-container fluid>
    <b-navbar data-qa-id="mainMenu" fixed="top" toggleable="lg" type="light" variant="light">
      <b-container>
        <!-- Brand -->
        <b-navbar-brand :to="{ name: 'home' }">
          <img src="/images/nja/nav-header.png" alt="Nigel Jones Associates Logo">
        </b-navbar-brand>

        <!--  Toggler  -->
        <b-navbar-toggle target="menu--main"></b-navbar-toggle>

        <b-collapse id="menu--main" is-nav>
          <!--  Menu  -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-for="item in menu" :key="item.link" :to="{ name: item.link }">
              {{ item.text }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </b-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import mainMenu from '@/data/menu'

  @Component
  export default class MainMenu extends Vue {
    private readonly menu = mainMenu
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/vars";

  .bg-light {
    background: #fff !important;
  }

  nav {
    border-bottom: 2px solid $colour_blue_dark;
    height: $menuHeight;
    font-size: 14px;
    padding: 0;

    & > .container {
      height: 100%;
      padding: 0;
    }

    .navbar-brand {
      padding: 8px 8px;

      img {
        height: 32px;
      }
    }

    ul, li {
      margin: 0;
    }

    #menu--main {
      align-self: stretch;
    }

    .navbar-nav {
      align-self: stretch;

      ::v-deep .nav-item {
        display: table;
        height: 100%;

        .nav-link {
          display: table-cell;
          vertical-align: middle;

          &, &:visited {
            color: $colour_blue_light;
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        &:hover {
          background: $colour_grey;
        }

        .nav-link.router-link-exact-active {
          background: $colour_blue_light;
          color: #FFF;
          text-shadow: 0 1px 0 rgba(0, 0, 0, .25);
          box-shadow: inset 0 3px 9px rgba(0, 0, 0, .075);
        }
      }
    }
  }
</style>
