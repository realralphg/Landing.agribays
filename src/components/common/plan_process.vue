<template>
  <div :class="sizes">
      <section class="bg-secondary" style="border-radius: 25px;">
        <div :class="sizes">
            <div class="text-h6 text-bolder text-primary text-center my-font">Here are the plans</div>
            <article>
                <planCards />
            </article>
        </div>
      </section>
  </div>
</template>

<script>
import planCards from 'components/common/plan_cards'

export default {
  components:{
      planCards
  },

  computed: {
    sizes () {
      let size = this.$q.screen.name
      if (size == 'md' || size == 'lg' || size == 'xl') {
        return 'q-pa-xl'
      } else return 'q-pa-md'
    },

    ratio () {
      let size = this.$q.screen.name
      if (size == 'md' || size == 'lg' || size == 'xl') {
        return 'text-h3'
      } else return 'text-h4'
    }
  }

}
</script>

<style>

</style>