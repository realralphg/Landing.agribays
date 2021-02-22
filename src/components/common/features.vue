<template>
  <div :class="sizes" class="q-mt-lg">
      <div class="row q-px-lg">
          <div class="col-md-4 col-sm-12 col-xs-12 q-pa-md">
              <q-card flat class="q-pa-lg bg-primary">
                <div class="">
                    <q-avatar size="70px" font-size="42px" color="secondary" text-color="primary" icon="grading" />
                    <div class="text-secondary text-h6 text-weight-bold q-mt-md my-font">Select Plan</div>
                    <div class="text-body1 text-secondary q-mt-sm my-font-nav">Choose a comfortable plan of your choice, from #300, #500 or #1000 daily... you can even save for several days at once.</div>
                </div>
              </q-card>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12 q-pa-md">
              <q-card flat class="q-pa-lg bg-negative">
                <div class="">
                    <q-avatar size="70px" font-size="42px" color="secondary" text-color="negative" icon="attach_money" />
                    <div class="text-secondary text-h6 text-weight-bold q-mt-md my-font">Save money</div>
                    <div class="text-body1 text-secondary q-mt-sm my-font-nav">After selecting your desired plan, select the number of days you wish to save for on the savings calendar and save each time. Ensure to complete savings before the due date.</div>
                </div>
              </q-card>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12 q-pa-md">
              <q-card flat class="q-pa-lg bg-info">
                <div class="">
                    <q-avatar size="70px" font-size="42px" color="secondary" text-color="info" icon="room_service" />
                    <div class="text-secondary text-h6 text-weight-bold q-mt-md my-font">Get food</div>
                    <div class="text-body1 text-secondary q-mt-sm my-font-nav">Select your desired Food Bag from the list and choose delivery option, Pickup or Home Delivery.</div>
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