<template>
  <div>
    <div :class="sizes">
        <div class="row q-mt-sm">
            <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
                <div class="q-mt-xl">
                    <div class="text-weight-bold typo1 q-pt-lg my-font" :class="ratio">Save like an Ant,</div>
                    <div class="text-weight-bold text-primary my-font" :class="ratio">Eat like an Elephant</div>
                    <div class="text-body1 typo1 q-mt-md my-font-nav">Amazing how little drops of water make a mighty ocean? Get food every 30days you never knew you were saving for!</div>
                    <div class="q-py-md">
                      <q-btn unelevated outline class="q-px-md q-py-sm" type="a" href="https://app-agrobays.vercel.app" color="primary" no-caps label="Login" />
                      <q-btn unelevated class="q-mx-md q-px-md q-py-sm" type="a" href="https://app-agrobays.vercel.app/#/register" no-caps color="primary" label="Register" />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 q-pt-md">
                <div class="q-pa-sm">
                    <img src="~/assets/hero.svg" style="width:100%;" alt="">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            signup: ''
        }
    },

    computed: {
    sizes () {
      let size = this.$q.screen.name
      if (size == 'md' || size == 'lg' || size == 'xl') {
        return 'q-pa-xl'
      } else return 'q-pa-sm'
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