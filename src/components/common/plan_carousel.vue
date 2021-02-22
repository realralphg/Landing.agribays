<template>
  <div :class="sizes">
    <section>
        <q-card flat class="rounded-borders bg-primary text-white" style="border-radius: 30px;">
            <div class="row">
                <div class="col-md-7 q-mx-auto text-center col-sm-12 col-xs-12" :class="sizes">
                    <div :class="ratio" class="q-mt-xl text-bold my-font">
                        What are our plans?
                    </div>
                    <div class="text-body1 q-mt-lg my-font-nav text-white">
                        Let's take your feeding to a higher level!<br> Healthy eating routine just got easier with Agrobays. You can ensure that your family and relatives are part of a planned food saving scheme which in turn ensures that good and affordable food items are delivered every 30days.
                    </div>
                </div>
            </div>
        </q-card>
    </section>
  </div>
</template>

<script>
export default {
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