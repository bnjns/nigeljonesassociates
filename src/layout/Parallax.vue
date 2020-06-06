<template>
  <div id="parallax" v-show="show">
    <b-container>
      <b-row>
        <b-col cols="12" id="parallax--logo" lg="4" md="5">
          <img src="/images/nja/header.png" alt="Nigel Jones Associates Logo">
        </b-col>
        <b-col cols="12" id="parallax--headers" lg="8" md="7">
          <h1>Strategies for Rail Freight</h1>

          <h2>Advising the rail freight industry</h2>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Parallax extends Vue {
  get show(): boolean {
    return this.$route.name === 'home'
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/vars";

  #parallax {
    background: $colour_blue_dark url('/images/nja/parallax.jpg') no-repeat fixed;
    background-size: 100% 100%;
    color: #fff;
    padding: 40px 0;
    text-align: center;

    #parallax--headers {
      h1 {
        color: #FFF;
        font-size: 30px;
        margin-top: 1.2em;
        text-align: inherit;
        text-shadow: 1px 1px 5px rgba(0, 0, 0, .35);
      }

      h2 {
        color: $colour_blue_dark;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 25px;
        margin-top: 0.5em;
        text-align: inherit;
      }
    }

    @media(min-width: 768px) {
      padding: 70px 0;

      #parallax--headers {
        padding-left: 0;
        text-align: left;

        h1 {
          font-size: 35px;
          margin-top: 30px;
        }

        h2 {
          margin-top: 0.5em;
        }
      }
    }

    @media(min-width: 1000px) {
      #parallax--headers {
        h1 {
          font-size: 50px;
          margin-top: 25px;
        }

        h2 {
          font-size: 30px;
          margin-top: 0;
        }
      }
    }
  }
</style>
