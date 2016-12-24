<template>
  <div class="page">
    <h2 class="title">转盘抽奖的前端实现</h2>
    <div class="content">
      <p>转盘抽奖一般用于吸引用户，提升活跃度。上周应产品需求，实现了这个功能。下面的转盘使用随机数模拟中奖结果（可点击抽奖）：</p>
      <div class="exp turn-table-draw">
        <div>
          <canvas ref="wheel" width="662" height="662" :style="{ transform: 'rotate('+ needRotateDeg +'deg)', 'transition-duration' : needRotateDuration+'s'}" @transitionend="doHandlerRotateEnd()"></canvas>
          <canvas ref="pointer" width="158" height="210" @click="doClickLotteryBtn()"></canvas>
        </div>
      </div>
      <p>个人觉得实现的难点有三：一是如何根据奖品的数目绘制转盘背景；二是如何将不同长度的奖品文字绘制在扇区上面，并旋转相应的角度；三是如何计算出中奖之后转盘应该旋转的角度。</p>
      <p>如果这三点实现了的话，再加上用户可抽奖次数控制逻辑、中奖之后奖品的弹窗显示等功能基本上就完成了。</p>
      <p>定义奖品的数据结构：</p>
      <pre><code>prizes: [
      {name: '移动电源', deg: 0}, {name: '¥100元现金券', deg: 0}, {name: '谢谢惠顾', deg: 0},
      {name: 'iphone 6s', deg: 0}, {name: '签字笔', deg: 0}, {name: '再来一次', deg: 0}
  ]</code></pre>
      <p>奖品对象中的deg保存的是当转盘旋转角度为0时（初始状态），如果让指针指向奖品时转盘需要旋转的角度。</p>
      <p>绘制转盘背景：</p>
      <p>绘制黄色外边框及填充圆没什么好说的，注意在边框处有一层大小间隔的白点。绘制白点需要计算出白点的圆心位置：</p>
      <pre><code>// 绘制白点
var pi = Math.PI
var smallRadius = 6 // 小的白点半径
var bigRadius = 8 // 大的白点的半径
var dotRadius = 307 // 白点圆心距转盘圆心的距离
var perDeg = 360 / 18 * (pi / 180) // 总共18个点，perDeg定义出相邻两点间间隔的弧度数
var currDeg = pi / 2 // 从90度开始，转盘圆心位置(331,331)
wheelCtx.fillStyle = '#fff'

for (var k = 0; k < 9; k++) {
  wheelCtx.beginPath()
  wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 + Math.sin(currDeg) * dotRadius, smallRadius, 0, 2 * pi) // 绘制小的白点
  wheelCtx.fill()
  currDeg += perDeg
  wheelCtx.beginPath()
  wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 + Math.sin(currDeg) * dotRadius, bigRadius, 0, 2 * pi) // 绘制大的白点
  wheelCtx.fill()
  currDeg += perDeg
}</code></pre>
      <p>接下来是绘制礼物所在的扇区及礼物文本。从90度的位置开始绘制。因为指针的位置在270度，所以礼物的旋转度数使用以下方法求得：</p>
      <pre><code>// 求得礼物的旋转度数
prize.deg = currDegNum + perDegNum / 2
if (prize.deg > 360) {
  prize.deg = prize.deg - 360
}
if (prize.deg < 270) {
  prize.deg = 270 - prize.deg
} else {
  prize.deg = 360 - (prize.deg - 270)
}</code></pre>
      <p>currDegNum是扇区右边缘的度数，指针指向的是扇区的中心点，所以需要加二分之一的扇区度数。上述方式求得的奖品旋转依次为：150、90、30、330、270、210度。（即初始状态下如果中了"移动电源"，转盘转150+n*360度就可以了）</p>
      <p>绘制奖品的文本是比较麻烦的，因为它们的长度不一。有可能需要分两行显示，如"谢谢惠顾"；也有可能一行显示足矣，如"签字笔"。因此需要求得扇区所能容纳一行文本的宽度是多少，当文本的宽度超过此宽度时，则需要分两行显示。（有一种特殊点的情况，如"iphone 6s"，中间有空格，程序中是从空格处分隔成两行。）</p>
      <p>文本绘制的另外一个问题是如何绘制出旋转一定角度的文本。处理方式是使用绘图环境变换：</p>
      <pre><code>wheelCtx.save()
wheelCtx.translate(331, 331)
wheelCtx.rotate(currDeg + perDeg / 2 + pi / 2)
// draw text...
wheelCtx.restore()</code></pre>
      <p>将绘图环境的原点移动到转盘中心点，并旋转当前扇区的中线度数+90度。</p>
      <p>绘制扇区和文本的完整代码如下：</p>
      <pre><code>var pieStyleArr = [{color: '#b92401', bgColor: '#fff6e5'}, {color: '#590202', bgColor: '#ffd488'}, {color: '#b92401', bgColor: '#fee0d5'}] // 定义每个扇区的字体颜色和填充背景色，当扇区数目大于3时，则从头取
perDeg = 360 / prizes.length * (pi / 180) // 每个扇区的弧度数
var perDegNum = 360 / prizes.length // 每个扇区的度数
var pieRadius = 283 // 扇区的半径
currDeg = pi / 2 // 起始的弧度数
var currDegNum = 90
var pieStyle

wheelCtx.font = 'bold 44px 微软雅黑'
var pieLineWidth = (2 * pi * pieRadius * 0.58) / prizes.length // 每个扇区上所能容纳一行字的宽度
wheelCtx.textAlign = 'center'
wheelCtx.textBaseline = 'middle'

var prizeName
var topText
var bottomText
var splitTextPos
var splitArr
var prize

for (k = 0; k < prizes.length; k++) {
    prize = prizes[k]
    // 绘制扇区
    wheelCtx.beginPath()
    wheelCtx.moveTo(331, 331)
    wheelCtx.arc(331, 331, pieRadius, currDeg, currDeg + perDeg)
    wheelCtx.lineTo(331, 331)
    pieStyle = pieStyleArr[k % 3]
    wheelCtx.fillStyle = pieStyle.bgColor
    wheelCtx.fill()
    wheelCtx.closePath()

    prize.deg = currDegNum + perDegNum / 2 // 求得礼物的旋转度数
    if (prize.deg > 360) {
      prize.deg = prize.deg - 360
    }
    if (prize.deg < 270) {
      prize.deg = 270 - prize.deg
    } else {
      prize.deg = 360 - (prize.deg - 270)
    }
    // 写入文本
    wheelCtx.fillStyle = pieStyle.color
    wheelCtx.save()

    wheelCtx.translate(331, 331)
    wheelCtx.rotate(currDeg + perDeg / 2 + pi / 2)

    prizeName = prizes[k].name
    if (wheelCtx.measureText(prizeName).width > pieLineWidth) { // 处理两行字的情况
      splitArr = prizeName.split(' ')
      if (splitArr.length == 2) { // 有空格间隔
        topText = splitArr[0]
        bottomText = splitArr[1]
      } else {
        splitTextPos = that.getTextSplitPos(prizeName, wheelCtx, pieLineWidth)
        topText = prizeName.substr(0, splitTextPos)
        bottomText = prizeName.substr(splitTextPos)
      }
      wheelCtx.fillText(topText, 0, -pieRadius * 0.72, pieLineWidth)
      wheelCtx.fillText(bottomText, 0, -pieRadius * 0.52, pieLineWidth)
    } else {
      wheelCtx.fillText(prizeName, 0, -pieRadius * 0.65) // 一行字直接绘制在中心点
    }

    wheelCtx.restore()
    currDeg += perDeg
    currDegNum += perDegNum
  }</code></pre>
      <p>获取文本的间隔点位置方法如下：如果文本长度大于3个字符，一行显示就够了；如果两行显示的话，先判断文本是否都是汉字，因为汉字的字宽基本一致，可以直接从中间位置分隔。否则使用measureText计算出来。</p>
      <pre><code>getTextSplitPos: function (text, ctx, lineWidth) { // 计算出文本换行的分割点
  if (text.length <= 3) {
    return text.length
  }
  if (/^[\u4E00-\u9FFF]+$/.test(text)) { // 文本都是汉字，从中间分隔
    return Math.ceil(text.length / 2)
  } else { // 依据字宽计算出分隔点
    var str = text.substr(0, 3)
    for (var i = 3; i < text.length; i++) {
      str = str + text.charAt(i)
      if (ctx.measureText(str).width > lineWidth) {
        return i + 1
      }
    }
  }
  return text.length
}</code></pre>
      <p>关于点击抽奖之后转盘的旋转：其实当点击抽奖按钮之时，中奖结果已经出来了。接下来只是让转盘旋转一定的角度，使指针指向抽中的结果，并在旋转完之后显示结果。</p>
      <p>使用一变量记下当前转盘的旋转角度，转盘抽中之后旋转的角度needRotateDeg以及旋转的时间needRotateDuration如下计算出来：</p>
      <pre><code>var deltDeg = 360 * 3 + that.winningPrize.deg - that.currRotateDeg % 360
that.needRotateDeg = that.currRotateDeg + deltDeg
that.needRotateDuration = 0.75 * (deltDeg / 180)</code></pre>
      <p>上面设定的旋转速率是0.75s/180deg，将上面两个值设定到转盘transform中的rotate和transition-duration中就可以了。(vue中的写法)</p>
      <pre><code>:style="{ transform: 'rotate('+ needRotateDeg +'deg)', 'transition-duration' : needRotateDuration+'s'}"</code></pre>
      <p>关于如何在旋转完之后弹出显示中奖结果，可以监听转盘的transitionend事件。(vue中的写法)</p>
      <pre><code>@transitionend="doHandlerRotateEnd()"</code></pre>
    </div>
    <footer>2016年12月07日</footer>
  </div>
</template>
<script>
  import { Global } from '../../../libs/global'

  module.exports = {
    data: function () {
      return {
        currRotateDeg: 0, // 当前旋转的度数
        needRotateDeg: 0, // 当点击抽奖之后，转盘需要旋转的度数
        needRotateDuration: 5, // 旋转的时间
        inRotating: false, // 是否正在旋转抽奖中
        winningPrize: null, // 当前所中的奖品
        prizes: [
          {name: '移动电源', deg: 0},
          {name: '¥100元现金券', deg: 0},
          {name: '谢谢惠顾', deg: 0},
          {name: 'iphone 6s', deg: 0},
          {name: '签字笔', deg: 0},
          {name: '再来一次', deg: 0}]
      }
    },
    mounted: function () {
      var that = this
      that.$nextTick(function () {
        var codes = document.querySelectorAll('code')
        if (codes.length > 0) {
          for (var k = 0; k < codes.length; k++) {
            hljs.highlightBlock(codes[k])
          }
        }
        // 绘制转盘
        that.drawWheel()
      })
      Global.setArticleNavMenu('working-canvas-turnTableDraw')
    },
    methods: {
      drawWheel: function () {
        var that = this
        var pi = Math.PI
        // 绘制转盘
        var wheelCtx = that.$refs.wheel.getContext('2d')
        wheelCtx.strokeStyle = '#ffb534'
        wheelCtx.lineWidth = 8
        wheelCtx.arc(331, 331, 323, 0, 2 * pi)
        wheelCtx.stroke()

        wheelCtx.beginPath()
        wheelCtx.strokeStyle = '#de910d'
        wheelCtx.fillStyle = '#f8d300'
        wheelCtx.lineWidth = 1
        wheelCtx.arc(331, 331, 319, 0, 2 * pi)
        wheelCtx.stroke()
        wheelCtx.fill()

        wheelCtx.beginPath()
        wheelCtx.strokeStyle = '#d28500'
        wheelCtx.lineWidth = 11
        wheelCtx.arc(331, 331, 289, 0, 2 * pi)
        wheelCtx.stroke()

        // 绘制白点
        var smallRadius = 6
        var bigRadius = 8
        var dotRadius = 307

        var perDeg = 360 / 18 * (pi / 180)
        var currDeg = pi / 2
        wheelCtx.fillStyle = '#fff'
        for (var k = 0; k < 9; k++) {
          wheelCtx.beginPath()
          wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 + Math.sin(currDeg) * dotRadius, smallRadius, 0, 2 * pi)
          wheelCtx.fill()
          currDeg += perDeg
          wheelCtx.beginPath()
          wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 + Math.sin(currDeg) * dotRadius, bigRadius, 0, 2 * pi)
          wheelCtx.fill()
          currDeg += perDeg
        }

        // style list
        var prizes = that.prizes
        var pieStyleArr = [{color: '#b92401', bgColor: '#fff6e5'}, {color: '#590202', bgColor: '#ffd488'}, {color: '#b92401', bgColor: '#fee0d5'}]
        perDeg = 360 / prizes.length * (pi / 180)
        var perDegNum = 360 / prizes.length
        var pieRadius = 283
        currDeg = pi / 2
        var currDegNum = 90
        var pieStyle
        wheelCtx.font = 'bold 44px 微软雅黑'
        var pieLineWidth = (2 * pi * pieRadius * 0.58) / prizes.length
        // console.log('pieLineWidth：' + pieLineWidth)
        wheelCtx.textAlign = 'center'
        wheelCtx.textBaseline = 'middle'

        var prizeName
        var topText
        var bottomText
        var splitTextPos
        var splitArr
        var prize

        for (k = 0; k < prizes.length; k++) {
          prize = prizes[k]
          wheelCtx.beginPath()
          wheelCtx.moveTo(331, 331)
          wheelCtx.arc(331, 331, pieRadius, currDeg, currDeg + perDeg)
          wheelCtx.lineTo(331, 331)
          pieStyle = pieStyleArr[k % 3]
          wheelCtx.fillStyle = pieStyle.bgColor
          wheelCtx.fill()
          wheelCtx.closePath()
          prize.deg = currDegNum + perDegNum / 2 // 记住礼物的旋转度数
          if (prize.deg > 360) {
            prize.deg = prize.deg - 360
          }
          if (prize.deg < 270) {
            prize.deg = 270 - prize.deg
          } else {
            prize.deg = 360 - (prize.deg - 270)
          }
          // 写入文本
          wheelCtx.fillStyle = pieStyle.color
          wheelCtx.save()

          wheelCtx.translate(331, 331)
          // console.log('旋转：' + (currDeg + perDeg / 2))
          wheelCtx.rotate(currDeg + perDeg / 2 + pi / 2)

          prizeName = prizes[k].name
          if (wheelCtx.measureText(prizeName).width > pieLineWidth) { // 处理两行字的情况
            splitArr = prizeName.split(' ')
            if (splitArr.length == 2) { // 有空格间隔
              topText = splitArr[0]
              bottomText = splitArr[1]
            } else {
              splitTextPos = that.getTextSplitPos(prizeName, wheelCtx, pieLineWidth)
              topText = prizeName.substr(0, splitTextPos)
              bottomText = prizeName.substr(splitTextPos)
            }
            // console.log('topText：' + topText + 'bottomText：' + bottomText)
            wheelCtx.fillText(topText, 0, -pieRadius * 0.72, pieLineWidth)
            wheelCtx.fillText(bottomText, 0, -pieRadius * 0.52, pieLineWidth)
          } else {
            // 一行字直接绘制在中心点
            wheelCtx.fillText(prizeName, 0, -pieRadius * 0.65)
          }

          wheelCtx.restore()
          currDeg += perDeg
          currDegNum += perDegNum
        }

        console.dir(prizes)

        // 绘制指针
        var pointerCtx = that.$refs.pointer.getContext('2d')

        pointerCtx.fillStyle = '#ffa406'
        var pointerPanRadius = 79
        var pointerCenter = 210 - pointerPanRadius
        pointerCtx.arc(pointerPanRadius, pointerCenter, pointerPanRadius, 0, 2 * pi)
        pointerCtx.fill()

        pointerCtx.beginPath()
        var pointerHeight = 80
        var pointerWidth = 64
        pointerCtx.fillStyle = '#eb1244'

        pointerCtx.moveTo(pointerPanRadius, 0)
        pointerCtx.lineTo(pointerPanRadius - pointerWidth / 2, pointerHeight)
        pointerCtx.lineTo(pointerPanRadius, pointerHeight)
        pointerCtx.lineTo(pointerPanRadius, 0)
        pointerCtx.closePath()
        pointerCtx.fill()

        pointerCtx.fillStyle = '#b9072f'
        pointerCtx.beginPath()
        pointerCtx.moveTo(pointerPanRadius, 0)
        pointerCtx.lineTo(pointerPanRadius + pointerWidth / 2, pointerHeight)
        pointerCtx.lineTo(pointerPanRadius, pointerHeight)
        pointerCtx.lineTo(pointerPanRadius, 0)
        pointerCtx.closePath()
        pointerCtx.fill()

        pointerCtx.beginPath()
        pointerCtx.fillStyle = '#fa5f75'
        pointerCtx.arc(pointerPanRadius, pointerCenter, pointerPanRadius - 15, 0, 2 * pi)
        pointerCtx.closePath()
        pointerCtx.fill()

        pointerCtx.beginPath()

        var pointerRadial = pointerCtx.createRadialGradient(pointerPanRadius, pointerCenter, 0, pointerPanRadius, pointerCenter, pointerPanRadius - 25)
        pointerRadial.addColorStop(0, '#f5385f')
        pointerRadial.addColorStop(0.75, '#f5385f')
        pointerRadial.addColorStop(0.82, '#eb1244')
        pointerRadial.addColorStop(1, '#eb1244')

        pointerCtx.fillStyle = pointerRadial
        pointerCtx.arc(pointerPanRadius, pointerCenter, pointerPanRadius - 25, 0, 2 * pi)
        pointerCtx.closePath()
        pointerCtx.fill()

        pointerCtx.font = 'bold 36px 微软雅黑'
        pointerCtx.textAlign = 'center'
        pointerCtx.textBaseline = 'middle'
        pointerCtx.fillStyle = '#fff'
        pointerCtx.fillText('点击', pointerPanRadius, pointerCenter - 24)
        pointerCtx.fillText('抽奖', pointerPanRadius, pointerCenter + 16)
      },
      getTextSplitPos: function (text, ctx, lineWidth) { // 计算出文本换行的分割点
        if (text.length <= 3) {
          return text.length
        }
        if (/^[\u4E00-\u9FFF]+$/.test(text)) { // 文本都是汉字，从中间分隔
          return Math.ceil(text.length / 2)
        } else { // 依据字宽计算出分隔点
          var str = text.substr(0, 3)
          for (var i = 3; i < text.length; i++) {
            str = str + text.charAt(i)
            if (ctx.measureText(str).width > lineWidth) {
              return i + 1
            }
          }
        }
        return text.length
      },
      doClickLotteryBtn: function () {
        var that = this
        if (that.inRotating) {
          return Global.tipShow('抽奖中...')
        }

        var prizes = that.prizes
        that.winningPrize = prizes[parseInt(Math.random() * prizes.length)]
        that.inRotating = true
        var deltDeg = 360 * 3 + that.winningPrize.deg - that.currRotateDeg % 360
        that.needRotateDuration = 0.75 * (deltDeg / 180)
        that.needRotateDeg = that.currRotateDeg + deltDeg
        // console.log('needRotateDeg：' + that.needRotateDeg + 'deltDeg：' + deltDeg + 'duration：' + that.needRotateDuration)
        that.currRotateDeg = that.needRotateDeg
      },
      doHandlerRotateEnd: function () { // 转盘旋转结束的处理
        var that = this
        if (that.inRotating) {
          that.inRotating = false
          Global.tipShow('您抽中了：' + that.winningPrize.name)
        }
      }
    }
  }
</script>
