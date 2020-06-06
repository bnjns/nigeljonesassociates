<template>
  <tr>
    <td class="consultant-image">
      <img :src="consultant.image" alt="" width="180">
    </td>
    <td class="consultant-about">
      <div v-html="about"></div>
      <p>
        You can contact {{ firstName }} on
        <span v-if="consultant.phone">{{ consultant.phone }}</span>
        <span v-if="consultant.phone && consultant.email"> or </span>
        <span v-if="consultant.email">
          <a :href="emailLink">{{ consultant.email }}</a>
        </span>.
      </p>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ConsultantProps } from '@/types/consultants'
import { createMailLink, getFirstName, processAbout } from '@/utils'

@Component
export default class Consultant extends Vue {
  @Prop() readonly consultant!: ConsultantProps

  get firstName(): string {
    return getFirstName(this.consultant)
  }

  get emailLink(): string | undefined {
    return this.consultant.email && createMailLink(this.consultant.email)
  }

  get about(): string {
    return processAbout(this.consultant)
  }
}
</script>

<style lang="scss" scoped>
  tr:not(:last-child) {
    td {
      padding-bottom: 3em;
    }
  }

  .consultant-about {
    padding-left: 1em;

    div {
      margin-bottom: 2em;
    }
  }
</style>
