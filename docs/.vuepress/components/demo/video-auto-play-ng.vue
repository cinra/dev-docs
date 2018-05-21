<template>
  <video autoplay :class="$style.video">
    <source src="/dummy.mp4"></video>
  </video>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello this is <Foo-Bar>'
    }
  }
}
</script>

<style module>
.video {
  width: 560px;
  height: 315px;
}
</style>