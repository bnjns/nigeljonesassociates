<template>
  <div id="error">
    <div id="error--header">
      <div id="error--header--num">404</div>
      <div id="error--header-title">
        <h1>Page not found</h1>
        <h2>We couldn't find that</h2>
      </div>
    </div>
    <div id="error--text">
      <p>
        The page you requested couldn't be found. It's possible that it's been moved but please check the URL and try
        again.
      </p>
      <p>
        Alternatively, you can go to the <router-link :to="{ name: 'home' }">home page</router-link> and try navigating
        to it.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {}
</script>

<style lang="scss" scoped>
  #error {
    @media(min-width: 768px) {
      margin: 0 auto;
      width: 700px;
    }

    #error--header {
      display: table;
      margin-top: 2em;

      #error--header--num {
        box-sizing: border-box;
        color: #666;
        display: table-cell;
        font-size: 45px;
        text-align: right;
        padding-right: 0.4em;
        position: relative;
        vertical-align: middle;
        width: 3em;

        &:after {
          background: #666;
          content: "";
          display: block;
          position: absolute;
          height: 100%;
          right: 0;
          top: 0;
          width: 3px;
        }
      }

      #error--header-title {
        display: table-cell;
        padding-left: 2em;

        h1, h2 {
          font-weight: 300;
          line-height: 1;
          margin: 0 0 0.3em;
          text-align: left;
        }
        h1 {
          font-size: 30px;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.35);

          &:before, &:after {
            display: none !important;
          }
        }
        h2 {
          font-size: 20px;
        }
      }

      @media(max-width: 768px) and (min-width: 400px) {
        #error--header--num  {
          width: 30%;
        }
      }

      @media(min-width: 768px) {
        #error--header--num {
          font-size: 65px;
        }
        #error--header-title {
          h1 {
            font-size: 50px;
          }
          h2 {
            font-size: 25px;
          }
        }
      }
    }

    #error--text {
      margin: 2em auto;
    }
  }
</style>
