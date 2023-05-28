import{u as T}from"./highlight-2e3cec98.js";import{_ as P,m as f,b,c as Y,e as m,l as X}from"./index-4afbb925.js";const M={setup(){T()},data(){return{context:null,centerX:0,centerY:0,ringInnerRadius:150,ringOuterRadius:170,hourTickLen:10,minTickLen:5,lastTime:0,aniId:0,scale:1}},mounted(){const t=this;t.init(),window.addEventListener("resize",t.redraw)},beforeUnmount(){const t=this;t.aniId&&window.cancelAnimationFrame(t.aniId),window.removeEventListener("resize",t.redraw)},methods:{redraw(){const t=this;t.aniId&&window.cancelAnimationFrame(t.aniId),t.init()},setSize(){const t=this,e=t.$refs,o=e.clock,r=e.grid.getBoundingClientRect(),i=r.right-r.left,a=r.bottom-r.top,n=window.devicePixelRatio||1;o.style.width=i+"px",o.style.height=a+"px";const d=i*n,x=a*n;o.width=d,o.height=x,t.centerX=d/2,t.centerY=x/2,t.scale=n,t.ringInnerRadius=150*n,t.ringOuterRadius=170*n,t.hourTickLen=10*n,t.minTickLen=5*n},init(){const t=this,o=t.$refs.clock;t.setSize(),t.context=f(o.getContext("2d")),t.startTimer()},startTimer(){const t=this,e=window.requestAnimationFrame;t.aniId=e(function(){t.drawClock(),t.startTimer()})},drawClock(){const t=this;parseInt(t.lastTime/1e3)!=parseInt(+new Date/1e3)&&(t.drawGrid(),t.drawCentroid(),t.drawRing(),t.drawTicks(),t.drawPoints())},drawGrid(){const e=this.context,o=e.canvas,c=o.width,r=o.height,i=10,a=10;e.clearRect(0,0,c,r),e.save(),e.beginPath(),e.strokeStyle="rgba(0,0,0,0.05)",e.lineWidth=.5;for(let n=i+.5;n<c;n+=i)e.beginPath(),e.moveTo(n,0),e.lineTo(n,r),e.stroke();for(let n=a+.5;n<r;n+=a)e.beginPath(),e.moveTo(0,n),e.lineTo(c,n),e.stroke();e.restore()},drawCentroid(){const t=this,e=t.context;e.save(),e.beginPath(),e.strokeStyle="rgba(0,0,0,0.3)",e.fillStyle="rgba(0,0,0,0.25)",e.arc(t.centerX,t.centerY,10*t.scale,0,2*Math.PI,!0),e.stroke(),e.fill(),e.restore()},drawRing(){const t=this,e=t.context;e.save(),e.beginPath(),e.shadowColor="rgba(0,0,0,0.7)",e.shadowOffsetX=4,e.shadowOffsetY=4,e.shadowBlur=8,e.fillStyle="rgba(0,0,0,0.16)",e.strokeStyle="rgba(0,0,0,0.25)",e.arc(t.centerX,t.centerY,t.ringOuterRadius,0,2*Math.PI,!1),e.stroke(),e.strokeStyle="rgba(0,0,0,0.2)",e.arc(t.centerX,t.centerY,t.ringInnerRadius,0,2*Math.PI,!0),e.fill(),e.beginPath(),e.arc(t.centerX,t.centerY,t.ringInnerRadius,0,2*Math.PI,!0),e.stroke(),e.restore()},drawTicks(){const t=this,e=t.context,o=t.ringInnerRadius-t.hourTickLen,c=t.ringInnerRadius-t.minTickLen,r=Math.PI,i=-(r/2),a=2*r/(4*12);let n=0,d=0,x=0,u=0,s=i,g,h;e.save(),e.lineWidth=1,e.textAlign="center",e.textBaseline="middle",e.font=`normal ${12*t.scale}px 微软雅黑`;for(let l=0;l<48;l++)g=l%4==0?o:c,e.lineWidth=l%4==0?2:1,e.strokeStyle="rgba(0,0,0,0.2)",n=t.centerX+Math.cos(s)*g,d=t.centerY+Math.sin(s)*g,x=t.centerX+Math.cos(s)*t.ringInnerRadius,u=t.centerY+Math.sin(s)*t.ringInnerRadius,e.beginPath(),e.moveTo(n,d),e.lineTo(x,u),e.stroke(),l%4==0&&(h=l/4,h=h==0?12:h,e.fillStyle="#6d6d6d",e.fillText(h,t.centerX+Math.cos(s)*(g-10),t.centerY+Math.sin(s)*(g-10))),s+=a;e.restore()},drawPoints(){const t=this,e=t.context,o=Math.PI,c=new Date,r=c.getHours(),i=c.getMinutes(),a=c.getSeconds(),n=55*t.scale,d=-(o/2)+2*o/12*(r%12),x=85*t.scale,u=-(o/2)+2*o/60*i,s=115*t.scale,g=-(o/2)+2*o/60*a;t.lastTime=c.getTime(),e.save(),e.lineCap="round",e.strokeStyle="#6d6d6d",e.lineWidth=4*t.scale,e.beginPath(),e.moveTo(t.centerX,t.centerY),e.lineTo(t.centerX+n*Math.cos(d),t.centerY+n*Math.sin(d)),e.stroke(),e.lineWidth=3*t.scale,e.beginPath(),e.moveTo(t.centerX,t.centerY),e.lineTo(t.centerX+x*Math.cos(u),t.centerY+x*Math.sin(u)),e.stroke(),e.lineWidth=2*t.scale,e.beginPath(),e.moveTo(t.centerX,t.centerY),e.lineTo(t.centerX+s*Math.cos(g),t.centerY+s*Math.sin(g)),e.stroke();let h=(r<10?"0"+r:r)+" : "+(i<10?"0"+i:i)+" : "+(a<10?"0"+a:a);e.font=`normal ${14*t.scale}px 微软雅黑`,e.textAlign="center",e.textBaseline="middle",e.fillStyle="#6d6d6d",e.lineWidth=1,e.fillText(h,t.centerX,t.centerY+45*t.scale);const l=c.getMonth()+1,p=c.getDate(),k=c.getDay(),w=["日","一","二","三","四","五","六"];h=c.getFullYear()+" / "+(l<10?"0"+l:l)+" / "+(p<10?"0"+p:p)+" 星期"+w[k],e.fillText(h,t.centerX,t.centerY+75*t.scale),e.restore()}}},v={class:"article-container draw-clock-article"},I=m("h2",{class:"article-title"},"使用canvas绘制一面动态的时钟",-1),R={class:"article-content"},y={class:"exp",ref:"grid"},L={ref:"clock",width:"400",height:"400",class:"clock"},E=X(`<h3 class="title">代码如下：</h3><p>data定义：</p><pre><code>data () {
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
}</code></pre><p>初始化部分：</p><pre><code>init () {
    let that = this
    let refs = that.$refs
    let el = refs.clock
    let box = refs.grid
    let rect = box.getBoundingClientRect()
    let w = (rect.right - rect.left) * 0.95
    if (w &lt; 400) {
        el.style.width = w + &#39;px&#39;
        el.style.height = w + &#39;px&#39;
    }
    let canvasWidth = el.getAttribute(&#39;width&#39;)
    let canvasHeight = el.getAttribute(&#39;height&#39;)
    that.centerX = canvasWidth / 2
    that.centerY = canvasHeight / 2
    that.context = el.getContext(&#39;2d&#39;)
    that.startTimer()
}</code></pre><p>绘制整个时钟的方法：</p><pre><code>drawClock () {
    let that = this
    if (parseInt(that.lastTime / 1000) != parseInt((+new Date()) / 1000)) {
        that.drawGrid()
        that.drawCentroid()
        that.drawRing()
        that.drawTicks()
        that.drawPoints()
    }
}</code></pre><p>随着时间重绘：</p><pre><code>startTimer () {
    let that = this
    let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
    requestAnimationFrame(function () {
        that.drawClock()
        that.startTimer()
    })
}</code></pre><p>绘制底层网格：</p><pre><code>drawGrid () {
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
    context.strokeStyle = &#39;rgba(0,0,0,0.05)&#39;
    context.lineWidth = 0.5
    for (let i = stepX + 0.5; i &lt; w; i += stepX) {
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, h)
        context.stroke()
    }

    for (let j = stepY + 0.5; j &lt; h; j += stepY) {
        context.beginPath()
        context.moveTo(0, j)
        context.lineTo(w, j)
        context.stroke()
    }
    context.restore()
}</code></pre><p>绘制中心点：</p><pre><code>drawCentroid () {
    let that = this
    let context = that.context
    context.save()
    context.beginPath()
    context.strokeStyle = &#39;rgba(0,0,0,0.3)&#39;
    context.fillStyle = &#39;rgba(0,0,0,0.25)&#39;
    context.arc(that.centerX, that.centerY, 10, 0, 2 * Math.PI, true)
    context.stroke()
    context.fill()
    context.restore()
}</code></pre><p>绘制圆环：</p><pre><code>drawRing () {
    let that = this
    let context = that.context
    context.save()
    context.beginPath()

    // 外侧的圆
    context.shadowColor = &#39;rgba(0,0,0,0.7)&#39;
    context.shadowOffsetX = 4
    context.shadowOffsetY = 4
    context.shadowBlur = 8
    context.fillStyle = &#39;rgba(0,0,0,0.16)&#39;
    context.strokeStyle = &#39;rgba(0,0,0,0.25)&#39;
    context.arc(that.centerX, that.centerY, that.ringOuterRadius, 0, 2 * Math.PI, false)
    context.stroke()
    // 内侧的圆
    context.strokeStyle = &#39;rgba(0,0,0,0.2)&#39;
    context.arc(that.centerX, that.centerY, that.ringInnerRadius, 0, 2 * Math.PI, true)
    context.fill()
    context.beginPath()
    context.arc(that.centerX, that.centerY, that.ringInnerRadius, 0, 2 * Math.PI, true)
    context.stroke()
    context.restore()
}</code></pre><p>绘制刻度：</p><pre><code>drawTicks () {
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
    context.textAlign = &#39;center&#39;
    context.textBaseline = &#39;middle&#39;
    context.font = &#39;12px 微软雅黑 normal&#39;
    for (let i = 0; i &lt; 48; i++) {
        currTickLen = (i % 4 == 0 ? hourTickRadius : minTickRadius)
        context.lineWidth = (i % 4 == 0 ? 2 : 1)
        context.strokeStyle = &#39;rgba(0,0,0,0.2)&#39;
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
            context.strokeStyle = &#39;rgba(0,0,0,0.5)&#39;
            context.strokeText(num, that.centerX + Math.cos(currEngle) * (currTickLen - 10), that.centerY + Math.sin(currEngle) * (currTickLen - 10))
        }
        currEngle += deltEngle
    }
    context.restore()
}</code></pre><p>绘制指针以及时间文本：</p><pre><code>drawPoints () {
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
    context.lineCap = &#39;round&#39;
    context.strokeStyle = &#39;rgba(0,0,0,0.5)&#39;
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
    let timeStr = (hour &lt; 10 ? &#39;0&#39; + hour : hour) + &#39; : &#39; + (min &lt; 10 ? &#39;0&#39; + min : min) + &#39; : &#39; + (second &lt; 10 ? &#39;0&#39; + second : second)
    context.font = &#39;14px 微软雅黑 normal&#39;
    context.textAlign = &#39;center&#39;
    context.textBaseline = &#39;middle&#39;
    context.strokeStyle = &#39;rgba(0,0,0,0.5)&#39;
    context.lineWidth = 1
    context.strokeText(timeStr, that.centerX, that.centerY + 45)
    let month = currDate.getMonth() + 1
    let date = currDate.getDate()
    let day = currDate.getDay()
    let weekObj = [&#39;日&#39;, &#39;一&#39;, &#39;二&#39;, &#39;三&#39;, &#39;四&#39;, &#39;五&#39;, &#39;六&#39;]
    timeStr = currDate.getFullYear() + &#39; / &#39; + (month &lt; 10 ? &#39;0&#39; + month : month) + &#39; / &#39; + (date &lt; 10 ? &#39;0&#39; + date : date) + &#39; 星期&#39; + weekObj[day]
    context.strokeText(timeStr, that.centerX, that.centerY + 75)
    context.restore()
}</code></pre>`,19),S=m("footer",null,"2016年06月17日",-1);function _(t,e,o,c,r,i){return b(),Y("div",v,[I,m("div",R,[m("div",y,[m("canvas",L,null,512)],512),E]),S])}const C=P(M,[["render",_]]);export{C as default};
