import{_ as p,m as T,p as m,h as k,o as A,e,q as o}from"./index-DAung_sQ.js";const S={data(){return{textRotateTimer:null,currRotateAngle:0,rotateSpeed:1,lastTime:0}},mounted(){const l=this;l.$nextTick(()=>{l.drawStrokedText(),l.drawFilledText(),l.drawStrokedFilledText(),l.textRotateTimer=requestAnimationFrame(l.drawCircleText)})},methods:{drawStrokedText(){const t=this.$refs.c1,n=t.getContext("2d"),r=t.width,s=t.height;n.textAlign="center",n.textBaseline="middle",n.strokeStyle="#f96",n.font="80px 宋体",n.shadowColor="rgba(0,0,0,0.6)",n.shadowOffsetX=5,n.shadowOffsetY=5,n.shadowBlur=8,n.strokeText("HTML5",r/2,s/2)},drawFilledText(){const t=this.$refs.c2,n=t.getContext("2d"),r=t.width,s=t.height;n.textAlign="center",n.textBaseline="middle",n.fillStyle="#f96",n.font="80px 宋体",n.shadowColor="rgba(0,0,0,0.6)",n.shadowOffsetX=5,n.shadowOffsetY=5,n.shadowBlur=8,n.fillText("HTML5",r/2,s/2)},drawStrokedFilledText(){const t=this.$refs.c3,n=t.getContext("2d"),r=t.width,s=t.height;n.textAlign="center",n.textBaseline="middle",n.fillStyle="#f96",n.strokeStyle="#f96",n.font="80px 宋体",n.shadowColor="rgba(0,0,0,0.6)",n.shadowOffsetX=5,n.shadowOffsetY=5,n.shadowBlur=8,n.strokeText("HTML5",r/2,s/2),n.fillText("HTML5",r/2,s/2)},drawCircleText(){const l=this,t=l.$refs.c4;if(!t)return;const n=t.getContext("2d"),r=t.width,s=t.height,g=r/2,x=s/2;n.fillStyle="#f96",n.strokeStyle="#f96",n.font="32px 微软雅黑",n.textAlign="center",n.textBaseline="middle",n.clearRect(0,0,r,s);const d="ABCDEFGHIJKLNMOPQRSTUVWXYZ",h=r/2-22,w=2*Math.PI/d.length;let i=0,u=0,f="";const c=Date.now();l.lastTime!=0&&(u=l.currRotateAngle+l.rotateSpeed*(c-l.lastTime)/1e3),l.lastTime=c,l.currRotateAngle=u;for(let a=0;a<d.length;a++)f=d.charAt(a),i=(.5-a)*w+u,n.save(),n.beginPath(),n.translate(g+Math.cos(i)*h,x-Math.sin(i)*h),n.rotate(Math.PI/2-i),n.fillText(f,0,0),n.strokeText(f,0,0),n.restore();requestAnimationFrame(l.drawCircleText)}},beforeUnmount(){const l=this;l.textRotateTimer&&cancelAnimationFrame(l.textRotateTimer)}},C={class:"_article-content readingNotes-canvas-03"},M={class:"exp"},v={ref:"c1",width:"300",height:"150"},y={class:"exp"},B={ref:"c2",width:"300",height:"150"},b={class:"exp"},$={ref:"c3",width:"300",height:"150"},H={class:"exp"},L={class:"circle",ref:"c4",width:"300",height:"300"};function O(l,t,n,r,s,g){const x=k("MyArticle");return A(),T(x,{title:"Canvas学习笔记之三：文本",date:"2016年06月25日"},{default:m(()=>[e("div",C,[t[0]||(t[0]=e("h3",{class:"title"},"概述",-1)),t[1]||(t[1]=e("p",null,"Canvas绘图环境提供的与文本有关的方法：",-1)),t[2]||(t[2]=e("p",null,[e("strong",null,"1、strokeText(text, x, y, maxWidth)"),o("：文本的描边；")],-1)),t[3]||(t[3]=e("p",null,[e("strong",null,"2、fillText(text, x, y, maxWidth)"),o("：文本的填充；")],-1)),t[4]||(t[4]=e("p",null,[e("strong",null,"3、measureText(text)"),o("：计算文本所占据的宽度。")],-1)),t[5]||(t[5]=e("p",null,[o("与文本有关的属性： "),e("strong",null,"font"),o("、 "),e("strong",null,"textAlign"),o("、 "),e("strong",null,"textBaseline")],-1)),t[6]||(t[6]=e("h3",{class:"title"},"文本的描边与填充",-1)),t[7]||(t[7]=e("p",null,"文本的描边（带阴影）：",-1)),e("div",M,[e("canvas",v,null,512)]),t[8]||(t[8]=e("pre",null,[e("code",null,`drawStrokedText () {
    let that = this
    let el = that.$refs.c1
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.strokeStyle = '#f96'
    context.font = '80px 宋体'

    // 增加阴影
    context.shadowColor = 'rgba(0,0,0,0.6)'
    context.shadowOffsetX = 5
    context.shadowOffsetY = 5
    context.shadowBlur = 8

    context.strokeText('HTML5', w / 2, h / 2)
}`)],-1)),t[9]||(t[9]=e("p",null,"文本的填充（带阴影）：",-1)),e("div",y,[e("canvas",B,null,512)]),t[10]||(t[10]=e("pre",null,[e("code",null,`context.fillStyle = '#f96'
context.fillText('HTML5', w / 2, h / 2)`)],-1)),t[11]||(t[11]=e("p",null,"填充和描边：",-1)),e("div",b,[e("canvas",$,null,512)]),t[12]||(t[12]=e("pre",null,[e("code",null,`context.strokeStyle = '#f96'
context.fillStyle = '#f96'
context.strokeText('HTML5', w / 2, h / 2)
context.fillText('HTML5', w / 2, h / 2)`)],-1)),t[13]||(t[13]=e("p",null,[e("strong",null,"strokeText()和fillText()方法可以通过可选的第四参数来指定文本的最大宽度。")],-1)),t[14]||(t[14]=e("h3",{class:"title"},"字型属性font设置",-1)),t[15]||(t[15]=e("p",null,"font的各个分量：",-1)),t[16]||(t[16]=e("p",null,[e("strong",null,"1、font-style"),o("：可取值normal、italic（斜体字）、oblique（倾斜的字）")],-1)),t[17]||(t[17]=e("p",null,[e("strong",null,"2、font-variant"),o("：可取值normal、small-caps（设置小型大写字母显示，所有小写字母均会被转换为大写，但是字体会显的略小一点）")],-1)),t[18]||(t[18]=e("p",null,[e("strong",null,"3、font-weight"),o("：可取值normal、bold、bolder、lighter、100、200、300...900（normal相当于数值400，bold相当于数值700）")],-1)),t[19]||(t[19]=e("p",null,[e("strong",null,"4、font-size"),o("：可取值xx-small、x-small、medium、large、x-large、xx-large、smaller、larger、length与%")],-1)),t[20]||(t[20]=e("p",null,[e("strong",null,"5、line-height"),o("：浏览器强制设置为normal")],-1)),t[21]||(t[21]=e("p",null,[e("strong",null,"6、font-family"),o("：字体集名称")],-1)),t[22]||(t[22]=e("h3",{class:"title"},"文本的定位",-1)),t[23]||(t[23]=e("p",null,[e("strong",null,"textAlign可以取的值有：start、center、end、left、right"),o("，当canvas元素的dir属性是ltr时，left的效果与start相同，right的效果与end一致；当canvas元素的dir属性是rtl时，left的效果与end相同，right的效果与start一致。")],-1)),t[24]||(t[24]=e("p",null,[e("strong",null,"textBaseline可以取的值有：top、bottom、middle、alphabetic、ideographic、hanging"),o("，默认属性是alphabetic。")],-1)),t[25]||(t[25]=e("p",null,[e("strong",null,"measureText(str)"),o("：此方法可以度量文本的宽度。虽然是不够精确的。")],-1)),t[26]||(t[26]=e("h3",{class:"title"},"在圆弧周围绘制文本",-1)),e("div",H,[e("canvas",L,null,512)]),t[27]||(t[27]=e("pre",null,[e("code",null,`drawCircleText () {
    let that = this
    let el = that.$refs.c4
    let context = el.getContext('2d')
    let w = el.width
    let h = el.height
    let centerX = w / 2
    let centerY = h / 2

    context.fillStyle = '#f96'
    context.strokeStyle = '#f96'
    context.font = '32px 微软雅黑'
    context.textAlign = 'center'
    context.textBaseline = 'middle'

    let textStr = 'ABCDEFGHIJKLNMOPQRSTUVWXYZ'
    let radius = w / 2 - 22
    let angleDelt = (2 * Math.PI) / textStr.length
    let currAngle = 0
    let currChar = ''

    for (let k = 0; k < textStr.length; k++) {
        currChar = textStr.charAt(k)
        currAngle = (0.5 - k) * angleDelt
        context.save()
        context.beginPath()
        context.translate(centerX + Math.cos(currAngle) * radius, centerY - Math.sin(currAngle) * radius)
        context.rotate(Math.PI / 2 - currAngle)
        context.fillText(currChar, 0, 0)
        context.strokeText(currChar, 0, 0)
        context.restore()
    }
}`)],-1))])]),_:1})}const F=p(S,[["render",O]]);export{F as default};
