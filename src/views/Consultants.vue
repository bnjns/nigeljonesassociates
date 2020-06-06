<template>
  <div>
    <h1>Consultants</h1>
    <p>Both our consultants are highly experienced in the rail freight and transport industries.</p>
    <table style="width: 100%;" aria-describedby="Our consultants">
      <tr class="sr-only">
        <th>Picture</th>
        <th>Details</th>
      </tr>
      <tbody>
      <consultant :consultant="consultant" :key="index" v-for="(consultant, index) in consultants"/>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import consultants from '@/data/consultants'
import Consultant from '@/components/Consultant.vue'

@Component({
  components: {
    Consultant
  }
})
export default class Consultants extends Vue {
  private readonly consultants = consultants
}
</script>

<style lang="scss" scoped>
  table {
    margin: 1em 0;
  }
</style>
