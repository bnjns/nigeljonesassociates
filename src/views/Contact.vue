<template>
  <div>
    <h1>Contact Us</h1>
    <p>If you would like us to get in touch you can find the relevant contact details below.</p>
    <b-card-group deck>
      <b-card :header="contact.name" :key="index" header-text-variant="" v-for="(contact, index) in contacts">
        <b-card-text>
          <h4>Email Address</h4>
          <p>
            <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
          </p>
          <h4>Phone</h4>
          <p>{{ contact.phone }}</p>
          <h4>Post</h4>
          <p :key="line" v-for="line in contact.address">{{ line }}</p>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ContactDetails } from '@/types/contact'
import consultants from '@/data/consultants'

@Component
export default class Contact extends Vue {
  private readonly contacts: ContactDetails[] = consultants
}
</script>

<style lang="scss" scoped>
  .card {
    .card-text {
      h4 {
        color: #000;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 15px;
        font-weight: 700;
        margin: 0 0 1em 0;
        text-align: left;

        &:not(:first-child) {
          margin-top: 1.5em;
        }

        &:before, &:after {
          display: none !important;
        }
      }

      p {
        margin: 0 !important;
      }
    }
  }

  ::v-deep .card-header {
    font-weight: bold;
  }
</style>
