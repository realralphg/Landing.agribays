<template>
  <div :class="sizes">
      <section class="bg-secondary" style="border-radius: 25px;">
        <div :class="sizes">
            <article>
            </article>
        </div>
      </section>
  </div>
</template>

<script>

export default {
  components:{
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