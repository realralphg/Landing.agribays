<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components: {
  },

  data () {
    return {
    }
  },

  computed: {
  }
}
</script>

<style>
.typo1 {
  color: #64748B
}

@font-face {
  font-family: Gilroy-SemiBold;
  src: url(../css/font/Gilroy-SemiBold.woff);
}
 @font-face {
  font-family: Gilroy-Regular;
  src: url(../css/font/Gilroy-Regular.ttf);
}
 @font-face {
  font-family: Gilroy-Medium;
  src: url(../css/font/Gilroy-Medium.ttf);
}

.my-font {
  font-family: 'Gilroy-SemiBold';
}
.my-font-nav {
  font-family: 'Gilroy-Regular';
}
</style>
