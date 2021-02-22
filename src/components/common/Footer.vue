<template>
  <div class="q-pa-xl">
      <footer>
          <div class="row">
              <div class="col-md-6 col-sm-12 col-xs-12 q-pt-md">
                  <div class="text-body1 typo1 my-font">© 2020 Agrobays. All rights reserved.</div>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12">
                  <div class="row">
                      <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
                          <div class="text-body1 typo1 text-bold my-font">LINKS</div>
                          <div class="text-body1 typo1 q-mt-md cursor-pointer" @click="$router.push({name: 'home'})">Home</div>
                          <div class="text-body1 typo1 q-mt-md cursor-pointer" @click="$router.push({name: 'works'})">How it Works</div>
                          <div class="text-body1 typo1 q-mt-md cursor-pointer" @click="$router.push({name: 'plans'})">Plan</div>
                      </div>
                      <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
                          <div class="text-body1 typo1 text-bold my-font">LEGAL</div>
                          <div class="text-body1 typo1 q-mt-md cursor-pointer" @click="$router.push({name: 'terms'})">Terms and Agreement</div>
                          <div class="text-body1 typo1 q-mt-md cursor-pointer" @click="$router.push({name: 'privacy'})">Privacy Policy</div>
                      </div>
                      <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
                          <div class="text-body1 typo1 text-bold my-font">CONNECT</div>
                          <div class="text-body1 typo1 q-mt-md">support@agrobays.com</div>
                          <div class="text-body1 typo1 q-mt-md">+234 803 535 6090</div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>