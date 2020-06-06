<template>
  <div>
    <h1>Contact</h1>
    <p>Nigel Jones Associates Ltd.</p>
    <address>
      <div>
        <font-awesome-icon :icon="icons.address"></font-awesome-icon>
        <span>
          Baie Lazare, Low Road<br/>
          Barrowby,<br/>
          Lincolnshire<br/>
          NG32 1DJ
        </span>
      </div>
      <div>
        <font-awesome-icon :icon="icons.email"></font-awesome-icon>
        <span>
          <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
        </span>
      </div>
      <div>
        <font-awesome-icon :icon="icons.phone"></font-awesome-icon>
        <span>+44 7801 905690</span>
      </div>
      <div>
        <font-awesome-icon :icon="icons.phone"></font-awesome-icon>
        <span>+44 7713 621672</span>
      </div>
    </address>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/pro-solid-svg-icons'

  @Component
  export default class Contact extends Vue {
    private readonly contactEmail = 'nigel.jones@nigeljonesassociates.co.uk'
    private readonly icons = {
      address: faMapMarker,
      email: faEnvelope,
      phone: faPhone
    }
  }
</script>

<style lang="scss" scoped>
  address {
    & > div {
      display: flex;
      align-items: baseline;
      margin: 1em 0;
      line-height: 1.4;
    }

    .svg-inline--fa {
      margin-right: 0.5em;
      text-align: center;
      width: 2em;
    }
  }
</style>
