# 自動再生できない例

## video

```html
<video autoplay>
  <source src="xxxxx"></source> // 音声含むデータ
</video>
```

<demo-video-auto-play-ng/>

## Youtube (iframe API)

```js
// Loaded -> https://www.youtube.com/iframe_api

// myVideo.mute()
myVideo.playVideo()
```

<demo-youtube-auto-play-ng/>