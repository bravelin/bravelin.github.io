import{_ as r,q as s,s as i,h as a,o as c,e as t}from"./index-5cTkXVTa.js";const x={};function l(d,n){const e=a("MyArticle");return c(),s(e,{title:"一些可用的Canvas绘图代码片段",date:"2022年12月17日"},{default:i(()=>n[0]||(n[0]=[t("div",{class:"_article-content"},[t("h3",{class:"title"},"按一定间距绘制字符串"),t("p",null,"传入以下参数：ctx是canvas上下文对象；str：String，绘制的文本；space：Number，间隔值；x,y是绘制文本的中心点位置。"),t("pre",null,[t("code",null,`function drawSpaceText (ctx, str, space, x, y) {
    const strArr = str.split('')
    const textWidth = ctx.measureText(str).width + (strArr.length - 1) * space
    const startX = x - (textWidth / 2)
    const singleCharWidth = ctx.measureText(str[0]).width
    for (let i = 0; i < strArr.length; i++) {
        ctx.fillText(strArr[i], startX + (singleCharWidth + space) * i + (singleCharWidth / 2), y)
    }
}`)]),t("h3",{class:"title"},"绘制多行文本，超出宽度限制则换行绘制"),t("p",null,"传入以下参数：ctx是canvas上下文对象；str：String，绘制的文本；x,y是绘制文本的起始点位置，width：Number是行宽，gap：Number是行之间的间隔，isIndent表示是否需要首行缩进。"),t("pre",null,[t("code",null,`function drawMultiLineText (ctx, str, x, y, width, gap, isIndent = false) {
    const textWidth = ctx.measureText(str).width
    const singleCharWidth = ctx.measureText(str.slice(0, 1)).width
    if (textWidth < width) {
        ctx.fillText(str, x, y)
        return false
    } else {
        const strArr = str.split('')
        let breakIndex = 0
        if (isIndent) {
            width = width - 2 * singleCharWidth
        }
        for (let i = 1; i < strArr.length; i++) {
            if (ctx.measureText(str.slice(0, i)).width > width) {
                breakIndex = i
                break
            }
        }
        const firstStr = str.slice(0, breakIndex)
        const secondStr = str.slice(breakIndex)
        if (isIndent) {
            ctx.fillText(firstStr, x + 2 * singleCharWidth, y)
        } else {
            ctx.fillText(firstStr, x, y)
        }
        ctx.fillText(secondStr, x, y + gap)
        return true
    }
}`)]),t("h3",{class:"title"},"绘制圆角矩形"),t("p",null,"传入以下参数：ctx是canvas上下文对象；radius：Number表示圆角半径，x,y表示绘制矩形的起始位置，w,h分别表示矩形的宽度和高度。"),t("pre",null,[t("code",null,`function drawRadiusRect (ctx, radius, x, y, w, h) {
    ctx.beginPath()
    ctx.moveTo(radius + x, y)
    ctx.lineTo(x + w - radius, y)
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius)
    ctx.lineTo(x + w, y + h - radius)
    ctx.quadraticCurveTo(w + x, y + h, w + x - radius, y + h)
    ctx.lineTo(x + radius, y + h)
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
}`)])],-1)])),_:1})}const o=r(x,[["render",l]]);export{o as default};
