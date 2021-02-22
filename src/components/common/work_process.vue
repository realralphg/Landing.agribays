<template>
  <div :class="sizes">
      <section class="bg-secondary" style="border-radius: 25px;">
        <div :class="sizes">
            <div class="text-h6 text-bolder text-primary text-center my-font">HOW IT WORKS</div>
            <article class="row">
                <div class="col-md-9 col-sm-12 col-xs-12 q-mx-auto">
                  <timeline />
                </div>
            </article>
        </div>
      </section>
  </div>
</template>

<script>
import timeline from 'components/common/timeline'

export default {
  components:{
      timeline
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