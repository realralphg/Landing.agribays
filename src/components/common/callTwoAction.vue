<template>
  <div :class="sizes">
      <div class="">
          <div class="bg-accent q-pa-md">
              <div class="row">
                  <div class="col-md-7 col-sm-12 col-xs-12">
                      <div class="text-h5 text-positive text-weight-bold">Want early access and product updates?</div>
                      <div class="text-body1 text-primary text-light">Sign up to get notified when it’s ready.</div>
                  </div>
                  <div class="col-md-5 col-sm-12 col-xs-12">
                      <div>
                            <div class="row">
                                <div class="col-7 q-mt-sm"><q-input class="" dense outlined v-model="signup" placeholder="Enter your email"/></div>
                                <div class="col-4 q-ml-sm q-mt-sm"><q-btn class="q-px-sm" color="dark" label="Sign up" no-caps /></div>
                                <div class="text-body1 typo1 text-weight-light q-mt-sm"><small>We care about the protection of your data. Read our <u><b>Privacy Policy.</b></u></small></div>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
    sizes () {
      let size = this.$q.screen.name
      if (size == 'md' || size == 'lg' || size == 'xl') {
        return 'q-pa-xl'
      } else return 'q-pa-sm'
    }
  }
}
</script>

<style>

</style>