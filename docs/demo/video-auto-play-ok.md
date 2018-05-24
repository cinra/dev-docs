# 自動再生できる例

- 動画内、音声トラックが含まれる場合、初期ミュート状態である事

## video

```html
<video muted autoplay>
  <source src="xxxxx"></source>
</video>
```

<demo-video-auto-play-ok/>

## Youtube (iframe API)

```js
// Loaded -> https://www.youtube.com/iframe_api

myVideo.mute()
myVideo.playVideo()
```

<demo-youtube-auto-play-ok/>