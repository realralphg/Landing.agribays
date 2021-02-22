<template>
  <div class="q-mt-lg">
      <div class="row">
          <div class="col-md-4 col-sm-12 col-xs-12 q-pa-md">
              <q-card bordered flat class="q-pa-lg">
                <div class="">
                    <q-avatar size="70px" font-size="42px" color="primary" text-color="secondary" icon="grading" />
                    <div class="text-dark text-h6 text-weight-bold q-mt-md my-font">₦300 Plan</div>
                    <div class="text-body1 text-dark q-mt-sm my-font-nav">Choose a comfortable plan of ₦300 per which would sum up to ₦9,000 of 30 days saving. A food bag worth ₦9,000 with various food items would be delivered to you.</div>
                </div>
              </q-card>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12 q-pa-md">
              <q-card bordered flat class="q-pa-lg">
                <div class="">
                    <q-avatar size="70px" font-size="42px" color="primary" text-color="secondary" icon="grading" />
                    <div class="text-dark text-h6 text-weight-bold q-mt-md my-font">₦500 Plan</div>
                    <div class="text-body1 text-dark q-mt-sm my-font-nav">Choose a comfortable plan of ₦500 per which would sum up to ₦15,000 of 30 days saving. A food bag worth ₦15,000 with various food items would be delivered to you.</div>
                </div>
              </q-card>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12 q-pa-md">
              <q-card bordered flat class="q-pa-lg">
                <div class="">
                    <q-avatar size="70px" font-size="42px" color="primary" text-color="secondary" icon="grading" />
                    <div class="text-dark text-h6 text-weight-bold q-mt-md my-font">₦1000 Plan</div>
                    <div class="text-body1 text-dark q-mt-sm my-font-nav">Choose a comfortable plan of ₦1000 per which would sum up to ₦30,000 of 30 days saving. A food bag worth ₦30,000 with various food items would be delivered to you.</div>
                </div>
              </q-card>
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
        return 'q-pa-lg'
      } else return 'q-pa-xs'
    },

    ration () {
      let size = this.$q.screen.name
      if (size == 'md' || size == 'lg' || size == 'xl') {
        return 'q-pa-lg'
      } else return 'q-pa-xs'
    }
  }
}
</script>

<style>

</style>