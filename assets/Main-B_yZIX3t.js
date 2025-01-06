import{_ as P,m as f,i as p,j as b,f as Y,o as X,d as e}from"./index-h-_S0RxM.js";const M={data(){return{context:null,centerX:0,centerY:0,ringInnerRadius:150,ringOuterRadius:170,hourTickLen:10,minTickLen:5,lastTime:0,aniId:0,scale:1}},mounted(){const n=this;n.init(),window.addEventListener("resize",n.redraw)},beforeUnmount(){const n=this;n.aniId&&window.cancelAnimationFrame(n.aniId),window.removeEventListener("resize",n.redraw)},methods:{redraw(){const n=this;n.aniId&&window.cancelAnimationFrame(n.aniId),n.init()},setSize(){const n=this,t=n.$refs,r=t.clock,i=t.grid.getBoundingClientRect(),c=i.right-i.left,s=i.bottom-i.top,o=window.devicePixelRatio||1;r.style.width=c+"px",r.style.height=s+"px";const u=c*o,x=s*o;r.width=u,r.height=x,n.centerX=u/2,n.centerY=x/2,n.scale=o,n.ringInnerRadius=150*o,n.ringOuterRadius=170*o,n.hourTickLen=10*o,n.minTickLen=5*o},init(){const n=this,r=n.$refs.clock;n.setSize(),n.context=f(r.getContext("2d")),n.startTimer()},startTimer(){const n=this,t=window.requestAnimationFrame;n.aniId=t(function(){n.drawClock(),n.startTimer()})},drawClock(){const n=this;parseInt(n.lastTime/1e3)!=parseInt(+new Date/1e3)&&(n.drawGrid(),n.drawCentroid(),n.drawRing(),n.drawTicks(),n.drawPoints())},drawGrid(){const t=this.context,r=t.canvas,a=r.width,i=r.height,c=10,s=10;t.clearRect(0,0,a,i),t.save(),t.beginPath(),t.strokeStyle="rgba(0,0,0,0.05)",t.lineWidth=.5;for(let o=c+.5;o<a;o+=c)t.beginPath(),t.moveTo(o,0),t.lineTo(o,i),t.stroke();for(let o=s+.5;o<i;o+=s)t.beginPath(),t.moveTo(0,o),t.lineTo(a,o),t.stroke();t.restore()},drawCentroid(){const n=this,t=n.context;t.save(),t.beginPath(),t.strokeStyle="rgba(0,0,0,0.3)",t.fillStyle="rgba(0,0,0,0.25)",t.arc(n.centerX,n.centerY,10*n.scale,0,2*Math.PI,!0),t.stroke(),t.fill(),t.restore()},drawRing(){const n=this,t=n.context;t.save(),t.beginPath(),t.shadowColor="rgba(0,0,0,0.7)",t.shadowOffsetX=4,t.shadowOffsetY=4,t.shadowBlur=8,t.fillStyle="rgba(0,0,0,0.16)",t.strokeStyle="rgba(0,0,0,0.25)",t.arc(n.centerX,n.centerY,n.ringOuterRadius,0,2*Math.PI,!1),t.stroke(),t.strokeStyle="rgba(0,0,0,0.2)",t.arc(n.centerX,n.centerY,n.ringInnerRadius,0,2*Math.PI,!0),t.fill(),t.beginPath(),t.arc(n.centerX,n.centerY,n.ringInnerRadius,0,2*Math.PI,!0),t.stroke(),t.restore()},drawTicks(){const n=this,t=n.context,r=n.ringInnerRadius-n.hourTickLen,a=n.ringInnerRadius-n.minTickLen,i=Math.PI,c=-(i/2),s=2*i/(4*12);let o=0,u=0,x=0,m=0,l=c,g,d;t.save(),t.lineWidth=1,t.textAlign="center",t.textBaseline="middle",t.font=`normal ${12*n.scale}px 微软雅黑`;for(let h=0;h<48;h++)g=h%4==0?r:a,t.lineWidth=h%4==0?2:1,t.strokeStyle="rgba(0,0,0,0.2)",o=n.centerX+Math.cos(l)*g,u=n.centerY+Math.sin(l)*g,x=n.centerX+Math.cos(l)*n.ringInnerRadius,m=n.centerY+Math.sin(l)*n.ringInnerRadius,t.beginPath(),t.moveTo(o,u),t.lineTo(x,m),t.stroke(),h%4==0&&(d=h/4,d=d==0?12:d,t.fillStyle="#6d6d6d",t.fillText(d,n.centerX+Math.cos(l)*(g-10),n.centerY+Math.sin(l)*(g-10))),l+=s;t.restore()},drawPoints(){const n=this,t=n.context,r=Math.PI,a=new Date,i=a.getHours(),c=a.getMinutes(),s=a.getSeconds(),o=55*n.scale,u=-(r/2)+2*r/12*(i%12),x=85*n.scale,m=-(r/2)+2*r/60*c,l=115*n.scale,g=-(r/2)+2*r/60*s;n.lastTime=a.getTime(),t.save(),t.lineCap="round",t.strokeStyle="#6d6d6d",t.lineWidth=4*n.scale,t.beginPath(),t.moveTo(n.centerX,n.centerY),t.lineTo(n.centerX+o*Math.cos(u),n.centerY+o*Math.sin(u)),t.stroke(),t.lineWidth=3*n.scale,t.beginPath(),t.moveTo(n.centerX,n.centerY),t.lineTo(n.centerX+x*Math.cos(m),n.centerY+x*Math.sin(m)),t.stroke(),t.lineWidth=2*n.scale,t.beginPath(),t.moveTo(n.centerX,n.centerY),t.lineTo(n.centerX+l*Math.cos(g),n.centerY+l*Math.sin(g)),t.stroke();let d=(i<10?"0"+i:i)+" : "+(c<10?"0"+c:c)+" : "+(s<10?"0"+s:s);t.font=`normal ${14*n.scale}px 微软雅黑`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="#6d6d6d",t.lineWidth=1,t.fillText(d,n.centerX,n.centerY+45*n.scale);const h=a.getMonth()+1,k=a.getDate(),w=a.getDay(),T=["日","一","二","三","四","五","六"];d=a.getFullYear()+" / "+(h<10?"0"+h:h)+" / "+(k<10?"0"+k:k)+" 星期"+T[w],t.fillText(d,n.centerX,n.centerY+75*n.scale),t.restore()}}},v={class:"_article-content"},I={class:"exp",ref:"grid"},R={ref:"clock",width:"400",height:"400",class:"clock"};function y(n,t,r,a,i,c){const s=Y("MyArticle");return X(),p(s,{class:"draw-clock-article",title:"使用canvas绘制一面动态的时钟",date:"2016年06月17日"},{default:b(()=>[e("div",v,[e("div",I,[e("canvas",R,null,512)],512),t[0]||(t[0]=e("h3",{class:"title"},"代码如下：",-1)),t[1]||(t[1]=e("p",null,"data定义：",-1)),t[2]||(t[2]=e("pre",null,[e("code",null,`data () {
    return {
        context: null,
        centerX: 0, // 中心点
        centerY: 0,
        ringInnerRadius: 150, // 内圆环半径
        ringOuterRadius: 170, // 外圆环半径
        hourTickLen: 10, // 大刻度长度
        minTickLen: 5, // 小刻度长度
        lastTime: 0 // 上次的时间
    }
}`)],-1)),t[3]||(t[3]=e("p",null,"初始化部分：",-1)),t[4]||(t[4]=e("pre",null,[e("code",null,`init () {
    let that = this
    let refs = that.$refs
    let el = refs.clock
    let box = refs.grid
    let rect = box.getBoundingClientRect()
    let w = (rect.right - rect.left) * 0.95
    if (w < 400) {
        el.style.width = w + 'px'
        el.style.height = w + 'px'
    }
    let canvasWidth = el.getAttribute('width')
    let canvasHeight = el.getAttribute('height')
    that.centerX = canvasWidth / 2
    that.centerY = canvasHeight / 2
    that.context = el.getContext('2d')
    that.startTimer()
}`)],-1)),t[5]||(t[5]=e("p",null,"绘制整个时钟的方法：",-1)),t[6]||(t[6]=e("pre",null,[e("code",null,`drawClock () {
    let that = this
    if (parseInt(that.lastTime / 1000) != parseInt((+new Date()) / 1000)) {
        that.drawGrid()
        that.drawCentroid()
        that.drawRing()
        that.drawTicks()
        that.drawPoints()
    }
}`)],-1)),t[7]||(t[7]=e("p",null,"随着时间重绘：",-1)),t[8]||(t[8]=e("pre",null,[e("code",null,`startTimer () {
    let that = this
    let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
    requestAnimationFrame(function () {
        that.drawClock()
        that.startTimer()
    })
}`)],-1)),t[9]||(t[9]=e("p",null,"绘制底层网格：",-1)),t[10]||(t[10]=e("pre",null,[e("code",null,`drawGrid () {
    let that = this
    let context = that.context
    let el = context.canvas
    let w = el.width
    let h = el.height
    let stepX = 10
    let stepY = 10

    context.clearRect(0, 0, w, h)
    context.save()
    context.beginPath()
    context.strokeStyle = 'rgba(0,0,0,0.05)'
    context.lineWidth = 0.5
    for (let i = stepX + 0.5; i < w; i += stepX) {
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, h)
        context.stroke()
    }

    for (let j = stepY + 0.5; j < h; j += stepY) {
        context.beginPath()
        context.moveTo(0, j)
        context.lineTo(w, j)
        context.stroke()
    }
    context.restore()
}`)],-1)),t[11]||(t[11]=e("p",null,"绘制中心点：",-1)),t[12]||(t[12]=e("pre",null,[e("code",null,`drawCentroid () {
    let that = this
    let context = that.context
    context.save()
    context.beginPath()
    context.strokeStyle = 'rgba(0,0,0,0.3)'
    context.fillStyle = 'rgba(0,0,0,0.25)'
    context.arc(that.centerX, that.centerY, 10, 0, 2 * Math.PI, true)
    context.stroke()
    context.fill()
    context.restore()
}`)],-1)),t[13]||(t[13]=e("p",null,"绘制圆环：",-1)),t[14]||(t[14]=e("pre",null,[e("code",null,`drawRing () {
    let that = this
    let context = that.context
    context.save()
    context.beginPath()

    // 外侧的圆
    context.shadowColor = 'rgba(0,0,0,0.7)'
    context.shadowOffsetX = 4
    context.shadowOffsetY = 4
    context.shadowBlur = 8
    context.fillStyle = 'rgba(0,0,0,0.16)'
    context.strokeStyle = 'rgba(0,0,0,0.25)'
    context.arc(that.centerX, that.centerY, that.ringOuterRadius, 0, 2 * Math.PI, false)
    context.stroke()
    // 内侧的圆
    context.strokeStyle = 'rgba(0,0,0,0.2)'
    context.arc(that.centerX, that.centerY, that.ringInnerRadius, 0, 2 * Math.PI, true)
    context.fill()
    context.beginPath()
    context.arc(that.centerX, that.centerY, that.ringInnerRadius, 0, 2 * Math.PI, true)
    context.stroke()
    context.restore()
}`)],-1)),t[15]||(t[15]=e("p",null,"绘制刻度：",-1)),t[16]||(t[16]=e("pre",null,[e("code",null,`drawTicks () {
    let that = this
    let context = that.context
    let hourTickRadius = that.ringInnerRadius - that.hourTickLen
    let minTickRadius = that.ringInnerRadius - that.minTickLen
    let pi = Math.PI
    let startEngle = -(pi / 2)
    let deltEngle = 2 * pi / (4 * 12)
    let startPointX = 0
    let startPointY = 0
    let endPointX = 0
    let endPointY = 0
    let currEngle = startEngle
    let currTickLen
    let num

    context.save()
    context.lineWidth = 1
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.font = '12px 微软雅黑 normal'
    for (let i = 0; i < 48; i++) {
        currTickLen = (i % 4 == 0 ? hourTickRadius : minTickRadius)
        context.lineWidth = (i % 4 == 0 ? 2 : 1)
        context.strokeStyle = 'rgba(0,0,0,0.2)'
        startPointX = that.centerX + Math.cos(currEngle) * currTickLen
        startPointY = that.centerY + Math.sin(currEngle) * currTickLen
        endPointX = that.centerX + Math.cos(currEngle) * that.ringInnerRadius
        endPointY = that.centerY + Math.sin(currEngle) * that.ringInnerRadius
        context.beginPath()
        context.moveTo(startPointX, startPointY)
        context.lineTo(endPointX, endPointY)
        context.stroke()
        if (i % 4 == 0) { // 绘制数字
            num = i / 4
            num = (num == 0 ? 12 : num)
            context.strokeStyle = 'rgba(0,0,0,0.5)'
            context.strokeText(num, that.centerX + Math.cos(currEngle) * (currTickLen - 10), that.centerY + Math.sin(currEngle) * (currTickLen - 10))
        }
        currEngle += deltEngle
    }
    context.restore()
}`)],-1)),t[17]||(t[17]=e("p",null,"绘制指针以及时间文本：",-1)),t[18]||(t[18]=e("pre",null,[e("code",null,`drawPoints () {
    let that = this
    let context = that.context
    let pi = Math.PI
    let currDate = new Date()
    let hour = currDate.getHours()
    let min = currDate.getMinutes()
    let second = currDate.getSeconds()
    let hourPointLen = 55
    let hourEngle = -(pi / 2) + (2 * pi / 12) * (hour % 12)
    let minPointLen = 85
    let minEngle = -(pi / 2) + (2 * pi / 60) * min
    let secondPointLen = 115
    let secondEngle = -(pi / 2) + (2 * pi / 60) * second
    that.lastTime = currDate.getTime()
    context.save()
    context.lineCap = 'round'
    context.strokeStyle = 'rgba(0,0,0,0.5)'
    // 小时的指针
    context.lineWidth = 4
    context.beginPath()
    context.moveTo(that.centerX, that.centerY)
    context.lineTo(that.centerX + hourPointLen * Math.cos(hourEngle), that.centerY + hourPointLen * Math.sin(hourEngle))
    context.stroke()

    // 分钟的指针
    context.lineWidth = 3
    context.beginPath()
    context.moveTo(that.centerX, that.centerY)
    context.lineTo(that.centerX + minPointLen * Math.cos(minEngle), that.centerY + minPointLen * Math.sin(minEngle))
    context.stroke()

    // 秒的指针
    context.lineWidth = 2
    context.beginPath()
    context.moveTo(that.centerX, that.centerY)
    context.lineTo(that.centerX + secondPointLen * Math.cos(secondEngle), that.centerY + secondPointLen * Math.sin(secondEngle))
    context.stroke()

    // 当前时间文本
    let timeStr = (hour < 10 ? '0' + hour : hour) + ' : ' + (min < 10 ? '0' + min : min) + ' : ' + (second < 10 ? '0' + second : second)
    context.font = '14px 微软雅黑 normal'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.strokeStyle = 'rgba(0,0,0,0.5)'
    context.lineWidth = 1
    context.strokeText(timeStr, that.centerX, that.centerY + 45)
    let month = currDate.getMonth() + 1
    let date = currDate.getDate()
    let day = currDate.getDay()
    let weekObj = ['日', '一', '二', '三', '四', '五', '六']
    timeStr = currDate.getFullYear() + ' / ' + (month < 10 ? '0' + month : month) + ' / ' + (date < 10 ? '0' + date : date) + ' 星期' + weekObj[day]
    context.strokeText(timeStr, that.centerX, that.centerY + 75)
    context.restore()
}`)],-1))])]),_:1})}const E=P(M,[["render",y]]);export{E as default};
