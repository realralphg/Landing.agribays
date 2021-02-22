<template>
  <div>
      <Carousel />
      <Features />
      <div class="bg-secondary">
        <Mission />
        <AgroLove />
      
      <!-- <Testimonial />
      <CallTwoAction /> -->
      </div>
  </div>
</template>

<script>
import Carousel from 'components/common/index_carousel'
import Features from 'components/common/features'
import Mission from 'components/common/mission'
import AgroLove from 'components/common/agro_why'
// import Testimonial from 'components/common/testimonial'
// import CallTwoAction from 'components/common/callTwoAction'
export default {
    components: {
        Carousel,
        Features,
        Mission,
        AgroLove,
        // Testimonial,
        // CallTwoAction,
    }
}
</script>

<style>

</style>