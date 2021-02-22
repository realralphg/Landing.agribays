<template>
  <div :class="sizes">
      <section class="text-h5 text-bold text-primary text-center my-font">Why Save with us</section>
      <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12 q-pt-xl">
              <div class="q-mt-xl">
                  <img src="~/assets/hero2.svg" class="" style="width: 100%;" alt="">
              </div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12" :class="sizes">
              <div class="q-mt-xl">
                  <q-list>
                      <q-item>
                        <q-item-section top avatar>
                        <q-avatar rounded color="primary" text-color="secondary" icon="done" />
                        </q-item-section>

                        <q-item-section>
                        <q-item-label class="text-body1 typo1 my-font-nav">Our platform is user friendly, efficient and super reliable </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-mt-md">
                        <q-item-section top avatar>
                        <q-avatar rounded color="primary" text-color="secondary" icon="done" />
                        </q-item-section>

                        <q-item-section>
                        <q-item-label class="text-body1 typo1 my-font-nav">You get to choose your most convenient saving plan so you can save as little as you can afford to like you aren't saving at all.</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-mt-md">
                        <q-item-section top avatar>
                        <q-avatar rounded color="primary" text-color="secondary" icon="done" />
                        </q-item-section>

                        <q-item-section>
                        <q-item-label class="text-body1 typo1 my-font-nav">We get the best deals from our various chains of wholesalers so you can get your food bag at very competitive prices.</q-item-label>
                        </q-item-section>
                    </q-item>
                     <q-item class="q-mt-md">
                        <q-item-section top avatar>
                        <q-avatar rounded color="primary" text-color="secondary" icon="done" />
                        </q-item-section>

                        <q-item-section>
                        <q-item-label class="text-body1 typo1 my-font-nav">You have a variety of food combinations to choose from every 30days.</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-mt-md">
                        <q-item-section top avatar>
                        <q-avatar rounded color="primary" text-color="secondary" icon="done" />
                        </q-item-section>

                        <q-item-section>
                        <q-item-label class="text-body1 typo1 my-font-nav">You will eventually eat healthier and happier.</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item class="q-mt-md">
                        <q-item-section top avatar>
                        <q-avatar rounded color="primary" text-color="secondary" icon="done" />
                        </q-item-section>

                        <q-item-section>
                        <q-item-label class="text-body1 typo1 my-font-nav">You can even save up for food bags for your friends, families or relatives</q-item-label>
                        </q-item-section>
                    </q-item>
                  </q-list>
              </div>
              <!-- <div class="q-mt-lg">
                  <div>
                      <div class="row">
                          <div class="col-2"><q-icon name="local_shipping" color="primary" style="font-size: 3em;" /></div>
                          <div class="col-10 q-pt-sm">
                              <div class="text-body1 text-weight-medium text-dark">Food Delivery</div>
                              <div class="text-body1 typo1">Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum turpis morbi adipiscing suspendisse. Nibh pretium nunc varius morbi.</div>
                          </div>
                      </div>
                      <div class="row q-mt-md">
                          <div class="col-2"><q-icon name="monetization_on" color="primary" style="font-size: 3em;" /></div>
                          <div class="col-10 q-pt-sm">
                              <div class="text-body1 text-weight-medium text-dark">Saving Plan</div>
                              <div class="text-body1 typo1">Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum turpis morbi adipiscing suspendisse. Nibh pretium nunc varius morbi.</div>
                          </div>
                      </div>
                      <div class="row q-mt-md">
                          <div class="col-2"><q-icon name="published_with_changes" color="primary" style="font-size: 3em;" /></div>
                          <div class="col-10 q-pt-sm">
                              <div class="text-body1 text-weight-medium text-dark">Delivery Change</div>
                              <div class="text-body1 typo1">Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum turpis morbi adipiscing suspendisse. Nibh pretium nunc varius morbi.</div>
                          </div>
                      </div>
                      <div class="row q-mt-md">
                          <div class="col-2"><q-icon name="query_builder" color="primary" style="font-size: 3em;" /></div>
                          <div class="col-10 q-pt-sm">
                              <div class="text-body1 text-weight-medium text-dark">Timely Delivery</div>
                              <div class="text-body1 typo1">Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum turpis morbi adipiscing suspendisse. Nibh pretium nunc varius morbi.</div>
                          </div>
                      </div>
                  </div>
              </div> -->
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
      } else return 'q-pa-md'
    }
  }
}
</script>

<style>

</style>