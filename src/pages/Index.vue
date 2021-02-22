<template>
  <q-page>
    <Navbar/>
    <dHome v-if="theroute == 'home'"  />
    <dWork v-if="theroute == 'works'"  />
    <dPlan v-if="theroute == 'plans'"  />
    <dterms v-if="theroute == 'terms'"  />
    <dprivacy v-if="theroute == 'privacy'"  />
    <dLogin v-if="theroute == 'login'"  />
    <dRegister v-if="theroute == 'register'"  />
    <Footer />
  </q-page>
</template>

<script>
import dHome from 'components/home'
import dWork from 'components/works'
import dPlan from 'components/plan'
import dterms from 'components/terms'
import dprivacy from 'components/privacy'
import dLogin from 'components/login'
import Navbar from 'components/common/Navbar'
import dRegister from 'components/register'
import Footer from 'components/common/Footer'
export default {
  components: {
    dHome,
    dWork,
    dLogin,
    dRegister,
    Navbar,
    Footer,
    dPlan,
    dterms,
    dprivacy
  },

  computed: {
    theroute(){return this.$route.name},
  }
}
</script>
