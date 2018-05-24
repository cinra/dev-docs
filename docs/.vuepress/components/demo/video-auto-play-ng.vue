<template>
  <section :class="$style.section">
    <video autoplay :class="$style.video">
      <source src="/dummy.mp4"></video>
    </video>
  </section>
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
.section {
  text-align: center;
}
.video {
  width: 560px;
  height: 315px;
}
</style>