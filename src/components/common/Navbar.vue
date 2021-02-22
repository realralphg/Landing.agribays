<template>
  <q-header class="q-pt-sm my-font" :class="sizes" :style="colorvar" >
    <q-toolbar class="text-black">
      <img src="~/assets/logo.png" class="cursor-pointer" style="width: 150px;" @click="$router.push({name: 'home'})" alt="">

      <q-space />
      <q-btn flat label="Home" :to="{ name: 'home' }" no-caps size="md" class="gt-sm q-mx-sm text-weight-regular" />
      <q-btn flat label="How it works" :to="{ name: 'works' }" no-caps size="md" class="gt-sm q-mx-sm text-weight-regular" />
      <q-btn flat label="Plan" :to="{ name: 'plans' }" no-caps size="md" class="gt-sm q-mx-sm text-weight-regular" />
      <q-space />
      <q-btn outline color="primary" type="a" href="https://app-agrobays.vercel.app" class="gt-sm q-mx-sm" no-caps label="Login" />
      <q-btn unelevated color="primary" type="a" href="https://app-agrobays.vercel.app/#/register" text-color="white" class="gt-sm q-ml-sm" no-caps label="Register" />
      <div class="q-pa-sm lt-md">
        <q-btn flat round dense icon="menu" class="q-mr-sm">
          <q-menu>
            <q-list>
                <q-item clickable v-close-popup>
                <q-item-section>
                    <q-item-label><q-btn stretch flat label="Home" :to="{ name: 'home' }" no-caps size="md" class="q-mx-sm text-weight-regular" /></q-item-label>
                </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                <q-item-section>
                    <q-item-label><q-btn stretch flat label="How it works" :to="{ name: 'works' }" no-caps size="md" class="q-mx-sm text-weight-regular" /></q-item-label>
                </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label><q-btn stretch flat label="Plan" :to="{ name: 'plans' }" no-caps size="md" class="q-mx-sm text-weight-regular" /></q-item-label>
                </q-item-section>
                </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label><q-btn outline color="primary" type="a" href="https://app-agrobays.vercel.app" text-color="primary" no-caps label="Login"/></q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label><q-btn unelevated color="primary" type="a" href="https://app-agrobays.vercel.app/#/register" text-color="white" no-caps label="Register" /></q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        </div>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  computed: {
    sizes () {
      let size = this.$q.screen.name
      if (size == 'md' || size == 'lg' || size == 'xl') {
        return 'q-px-xl '
      } else return ''
    },

    colorvar () {
      let size = this.$q.screen.name
      if (size == 'md' || size == 'lg' || size == 'xl') {
        return 'background-color: #ffffff'
      } else return 'background-color: #fff'
    },
  }
}
</script>