import{_ as r,s as o,x as s,i as a,o as l,f as n}from"./index-Dav9PDu2.js";const c={};function i(p,e){const t=a("MyArticle");return l(),o(t,{class:"draw-clock-article",title:"Web端对接AI大模型接口",date:"2025年03月05日"},{default:s(()=>e[0]||(e[0]=[n("div",{class:"_article-content"},[n("p",null,"以对接siliconflow上的DeepSeek-R1文本对话请求接口为例，先定义消息列表与abortControll全局变量："),n("pre",null,[n("code",null,`const messageDatas = [] // 消息列表
let abortController = null // 终止对话之用`)]),n("p",null,"发送提问的处理："),n("pre",null,[n("code",null,`const doSend = (question) => {
    messageDatas.push({
        role: 'user',
        content: question
    })
    abortController = new AbortController()
    const signal = abortController.signal
    saveCurrMessageDatas() // 保存当前消息列表
    askQuestion(messageDatas, signal).then(response => {
        const decoder = new TextDecoder('utf-8')
        let buffer = []
        const reader = response.body.getReader()
        return readData(reader, decoder, buffer)
    }).catch(error => { // 处理错误
        if (error.name === 'AbortError') {
            abortController = null
            const lastMsg = messageDatas[messageDatas.length - 1]
            lastMsg.isFinished = true
            saveCurrMessageDatas()
        }
    })
}`)]),n("p",null,"askQuestion定义如下："),n("pre",null,[n("code",null,`const config = { // 相关配置
    baseUrl: 'https://api.siliconflow.cn/v1/chat/completions',
    model: 'deepseek-ai/DeepSeek-R1',
    apiKey: 'sk-********',
    maxTokens: 8192, // 1~16384
    temperature: 0.7, // 0~2.0
    topK: 50, // 0~100
    topP: 0.95, //0.1~1.0
    frequencyPenalty: 0 // -2.0~2.0
}
export function askQuestion (msgList, signal) {
    const payload = {
        messages: msgList.map(item => {
            return {
                role: item.role,
                content: item.content
            }
        }),
        model: config.model,
        stream: true,
        max_tokens: config.maxTokens,
        temperature: config.temperature,
        top_k: config.topK,
        top_p: config.topP,
        frequency_penalty: config.frequencyPenalty
    }
    return fetch(config.baseUrl, {
        signal,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + config.apiKey
        },
        mode: 'cors',
        body: JSON.stringify(payload)
    })
}`)]),n("p",null,"处理大模型流式推送的消息："),n("pre",null,[n("code",null,`const readData = (reader, decoder, buffer) => {
    return reader.read().then(({ done, value }) => {
        if (done) {
            const lastMsg = messageDatas[messageDatas.length - 1]
            lastMsg.isFinished = true
            isInGenerating = false
            abortController = null
            saveCurrMessageDatas()
            return buffer
        }
        const chunk = decoder.decode(value, { stream: true })
        const chunkDatas = parseMultiJson(chunk)
        const lastMsg = messageDatas[messageDatas.length - 1]
        chunkDatas.forEach(item => {
            item.choices.forEach(choice => {
                if (choice.delta.content) { // 正式回应内容
                    lastMsg.content += choice.delta.content
                } else if (choice.delta.reasoning_content) { // 思考内容
                    lastMsg.thinkContent += choice.delta.reasoning_content
                }
            })
        })
        buffer.push(...chunkDatas)
        messageListEl.value.doScrollBottom()
        return readData(reader, decoder, buffer)
    })
}`)]),n("p",null,"处理方法parseMultiJson定义如下："),n("pre",null,[n("code",null,`export function parseMultiJson (jsonStr) {
    const jsonArr = []
    let startIndex = 0
    let endIndex = 0

    while (startIndex < jsonStr.length) {
        // 找到一个JSON对象的开始位置
        startIndex = jsonStr.indexOf('{', startIndex)
        if (startIndex === -1) {
            break
        }

        // 找到一个 JSON 对象的结束位置
        let openBrackets = 1
        endIndex = startIndex + 1
        let quoteTag = 0
        let currChar = ''
        while (openBrackets > 0 && endIndex < jsonStr.length) {
            currChar = jsonStr[endIndex]
            if (currChar === '"') {
                if (quoteTag == 0) {
                    quoteTag = 1
                } else {
                    quoteTag = 0
                }
            }
            if (currChar === '{' && quoteTag == 0) {
                openBrackets ++
            } else if (currChar === '}' && quoteTag == 0) {
                openBrackets --
            }
            endIndex++
        }

        // 将该 JSON 对象解析为一个对象，并添加到数组中
        const json = jsonStr.substring(startIndex, endIndex)
        // console.log('json字符串....', json)
        jsonArr.push(JSON.parse(json))

        // 更新下一个 JSON 对象的开始位置
        startIndex = endIndex
    }
    return jsonArr
}`)]),n("h3",{class:"title"},"格式化显示MarkDown文本与数学公式"),n("p",null,"需要引入marked.js和MathJax："),n("pre",null,[n("code",null,`<script id="MathJax-script" async src="https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.min.js"><\/script>
<script src="https://cdn.bootcdn.net/ajax/libs/marked/15.0.6/marked.min.js"><\/script>`)]),n("p",null,"显示回应内容时对content需要处理："),n("pre",null,[n("code",null,`const formatContent = marked(content.replace(/\\\\/g, '\\\\\\\\'))
contentEl.value.innerHTML = formatContent
if (MathJax) {
    MathJax.typesetPromise()
}`)]),n("h3",{class:"title"},"Node.js端对接Ai大模型接口"),n("p",null,"web端直接接入API会暴露apiKey，不太安全。以egg.js作服务端，对接completions接口为例："),n("p",null,"路由定义："),n("pre",null,[n("code",null,"router.post('/api/aichat/completions', controller.chat.completions);")]),n("p",null,"controller层定义："),n("pre",null,[n("code",null,`'use strict';
const Controller = require('egg').Controller;
class ChatController extends Controller {
    // 对话补全接口
    async completions () {
        const { ctx, service } = this
        const helper = ctx.helper
        const params = ctx.request.body;
        if (!params.messages || !(params.messages + '').trim()) {
            return helper.success(ctx, '', '缺少参数！', 501);
        }
        await service.chat.completions(params.messages);
    }
}
module.exports = ChatController;`)]),n("p",null,"Service层定义："),n("pre",null,[n("code",null,`'use strict';
const Service = require('egg').Service;
const axios = require('axios');
const pump = require('mz-modules/pump');

class ChatService extends Service {
    async completions (messages) { // 对话补全接口
        const { app, ctx } = this;
        const aiConfig = app.config.ai;
        const postData = JSON.stringify({
            model: aiConfig.model,
            messages,
            temperature: aiConfig.temperature,
            max_tokens: aiConfig.maxTokens,
            top_p: aiConfig.topP,
            frequency_penalty: aiConfig.frequencyPenalty,
            top_k: aiConfig.topK,
            stream: true
        });
        try{
            const response = await axios({
                url: aiConfig.baseUrl,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': \`Bearer \${aiConfig.apiKey}\`
                },
                data: postData,
                responseType: 'stream'
            })
            ctx.set({
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            });
            ctx.status = 200;
            await pump(response.data, ctx.res);
        } catch (error) {
            ctx.status = error.response ? error.response.status : 500;
            ctx.body = {
                error: '请求失败',
                details: error.message
            };
        }
    }
}
module.exports = ChatService;`)]),n("p",null,"nginx使用以下配置，以支持SSE："),n("pre",null,[n("code",null,`location /api/aichat {
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Connection '';
    proxy_http_version 1.1;  # 重要：确保使用HTTP/1.1协议
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    # 添加以下配置以处理SSE
    proxy_buffering off;
    proxy_cache off;
    proxy_read_timeout 86400s;
    proxy_pass http://10.0.0.1:9345;
}`)])],-1)])),_:1})}const d=r(c,[["render",i]]);export{d as default};
