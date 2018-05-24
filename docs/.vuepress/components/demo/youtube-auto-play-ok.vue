<template>
  <section :class="$style.section">
    <div id="youtube"></div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      player: '',
      options: {
        videoId: 'K-GOb_N2rII',
        playerVars: {
          autoplay: 0,
          enablejsapi:1,
        },
        width: 560,
        height: 315,
        events: {}
      }
    }
  },
  mounted () {
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    document.body.appendChild(script)

    this.bind()
  },
  methods: {
    bind () {
      if(typeof YT == 'undefined' || typeof YT.Player == 'undefined') {
        window.onYouTubeIframeAPIReady = () => {
          this.init()
        }
        return
      }

      this.init()
    },
    init () {
      this.options.events.onReady = () => {
        this.onPlayerReady()
      }

      this.player = new YT.Player('youtube', this.options);
    },
    onPlayerReady () {
      this.player.mute()
      this.player.playVideo()
    }
  }
}
</script>

<style module>
.section {
  text-align: center;
}
</style>