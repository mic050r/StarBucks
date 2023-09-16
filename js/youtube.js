// YouTube IFrame API를 비동기로 로드합니다.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은
// YouTube IFrame Player API에서 사용하는 이름이므로
// 다르게 지정하면 동작하지 않습니다!
// 또한, 이 함수는 전역(Global)에 등록해야 합니다!
function onYouTubePlayerAPIReady() {
  // 새로운 YouTube 플레이어를 생성하고 설정합니다.
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거 설정
      },
    },
  });
}
