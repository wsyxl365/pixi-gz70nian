
let timeline = new TimelineMax({
  paused: true
});
let alloyTouchs;
// let minScroll = -app.stage.width + w;
let minScroll = -7353;
if (w < h) {
  minScroll = -17390;
}
let count = 0;
function initTouch() {
  const max = (w > h) ? w : h;
  let scrollDis = app.stage.height - max;
  alloyTouchs = new AlloyTouch({
    touch: "body",//反馈触摸的dom
    property: "translateY",  //被运动的属性
    min: -app.stage.height + max, //不必需,运动属性的最小值 所有的舞台宽度在加上h
    property: "translateY",  //被运动的属性
    step: 45,//用于校正到step的整数倍
    sensitivity: 0.65,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
    maxSpeed: 1,
    max: 0, //不必需,滚动属性的最大值
    bindSelf: false,
    value: 0,
    change: function (value) {
      let progress = -value / scrollDis;
      progress = progress < 0 ? 0 : progress;
      progress = progress > 1 ? 1 : progress;
      app.stage.position['y'] = value;

      timeline.seek(progress);

      console.log(progress)


      if(progress>0.96){
        $('.canvas-btns').fadeIn();
      }else{
        $('.canvas-btns').fadeOut();
      }

      // 播放背景音乐
      playAudio(progress);
    }
  })
}