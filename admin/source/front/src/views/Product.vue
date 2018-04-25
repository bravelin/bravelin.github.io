<style lang="sass">
    @import '../sass/views/product.scss';
</style>
<template>
    <div id="product-page">

        <!--PC端-->
        <div v-if="!navigatorStatus" class="pc">
            <!--轮播图-->
            <div ref="refBanner" class="item-banner">
                <div class="item-img"></div>
            </div>

            <!-- :class="{'item-nav' : navTop}"-->
            <div class="item-navigation" :class="{'item-nav' : navTop}">
                <ul>
                    <li v-for="item in navigationData" @click="doClickMenu(item.value)" :class="{active: currTab == item.value}">{{ item.name }}</li>
                </ul>
            </div>

            <!--建立粉丝池-->
            <div ref="refBuildFans" class="item-fans container" v-if="currTab == 0">
                <div class="item-title">建立粉丝池</div>
                <div class="item-content">
                    <div>
                        <div>
                            <div class="title">场内锁客-支付即会员</div>
                            <div class="describe">通过客人微信买单，把客人变成粉丝。</div>
                        </div>
                        <div>
                            <div class="title">场外拓客-线上</div>
                            <div class="describe">通过分享会所微官网、电子期刊到微信群、</div>
                            <div class="describe">朋友圈吸引客人打开，编程粉丝。</div>
                        </div>
                    </div>

                    <div><img src="../assets/images/product/fans.png"/></div>

                    <div>
                        <div>
                            <div class="title">场内锁客-扫码锁客</div>
                            <div class="describe">通过场内客人扫码选技师，扫技师工牌</div>
                            <div class="describe">服务评价等锁住场内客人编程粉丝</div>
                        </div>
                        <div>
                            <div class="title">场外拓客-线下</div>
                            <div class="describe">发放带有会所微官网的二维码，</div>
                            <div class="describe">客人扫码进入微官网变成粉丝。</div>
                        </div>
                    </div>
                </div>
            </div>

            <!--活动运营-->
            <div ref="refActivityOperation" class="item-activity" v-if="currTab == 1">
                <div class="item-title">活动运营</div>
                <p class="item-describe">通过群发“优惠券、大转盘、限时抢、电子期刊”等营销活动，</p>
                <p class="item-describe">营造消费场景，让粉丝产生消费冲动，到店消费。</p>
                <div class="item-activity-navigation container">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div>
                        <div>优惠券<p></p></div>
                        <div>电子期刊</div>
                        <div>大转盘</div>
                        <div>技师海报</div>
                    </div>
                </div>
            </div>

            <!--客服营销-->
            <div ref="refServiceMarket" class="item-service" v-if="currTab == 2">
                <div class="item-title">客服营销</div>
                <p class="item-describe">通过会所营销客服和在线访客的及时沟通互动，抓住客人兴趣点，转化粉丝到店消费。</p>
                <div class="item-img"><img src="../assets/images/product/service_01.png"/></div>
            </div>

            <!--客人分类管理-->
            <div ref="refGuest" class="item-guest" v-if="currTab == 3">
                <div class="item-title">客人分类管理</div>
                <p class="item-describe">根据客人每月的消费次数和消费金额，对客人进行标签划分，对不同的标签客人进行等级分类，并差异化管理。</p>
                <div class="item-content container">
                    <div>
                        <div>
                            <div class="item-img">VIP 客</div>
                            <div class="item-sub-title">高频高消费</div>
                            <div class="item-text">这类客人是会所的忠实粉丝，可向他们推荐会员充值套餐，定期送些小礼品，做好客情维护。 </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div class="item-img">大客</div>
                            <div class="item-sub-title">低频高消费、高频低消费</div>
                            <div class="item-text">这类客人占比比较大，有变成VIP客的潜力，做好消费引导，比如定期推荐电子期刊。 </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div class="item-img">普客</div>
                            <div class="item-sub-title">低频消费</div>
                            <div class="item-text">这类客人属于散客，消费能力有限，对会所服务没有形成认同感，可发送“裂变优惠券”和“转发抽奖”，吸引到店消费，同时形成。</div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div class="item-img">流失客</div>
                            <div class="item-sub-title">一个月没有数据</div>
                            <div class="item-text">一个月没有消费数据 客人一个月没有消费数据，需要发送“感恩优惠券”“体验券”“问候电子期刊”等，预防客人流失。 </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--会员系统-->
            <div ref="refMember" class="item-member" v-if="currTab == 4">
                <div class="item-title">会员系统</div>
                <p class="item-describe">小摩豆会员系统，帮您轻松留住客户</p>
                <div class="item-img"></div>
                <div class="item-icon container">
                    <div class="item-rect">
                        <p>
                            <i>
                                <i></i>
                            </i>
                        </p>
                        <div>
                            <div>买单</div>
                            <div>通过客人线上买单，即可 将所有客人变成粉丝；</div>
                        </div>
                    </div>
                    <div class="item-rect">
                        <p>
                            <i>
                                <i></i>
                            </i>
                        </p>
                        <div>
                            <div>会员充值</div>
                            <div>通过引导会员充值会员套餐， 提前锁定客人消 费能力；</div>
                        </div>
                    </div>
                    <div class="item-rect">
                        <p>
                            <i>
                                <i></i>
                            </i>
                        </p>
                        <div>
                            <div>积分记录</div>
                            <div>通过对会所积分消耗的监控， 深入了解会员的 喜好。</div>
                        </div>
                    </div>
                </div>
            </div>

            <!--精准营销-->
            <div ref="refMarket" class="item-marketing" v-if="currTab == 5">
                <div class="item-title">精准营销</div>
                <p class="item-describe">基于消费者数据洞察，完善客人画像，更精准掌握客人消费动态、</p>
                <p class="item-describe">潜在需求，有针对性进行营销。</p>
                <div class="item-content container">
                    <div>
                        <p>&nbsp;&nbsp;提升客人消费额</p>
                        <p>&nbsp;&nbsp;激活新客</p>
                        <p>&nbsp;&nbsp;召回流失客人</p>
                    </div>
                    <div></div>
                </div>
            </div>

            <!--积分系统-->
            <div ref="refIntegral" class="item-integral" v-if="currTab == 6">
                <div class="item-title">积分系统</div>
                <p class="item-describe"> 通过积分系统，帮助会所增加用户粘性，提供更好的服务。</p>
                <div class="item-content container">
                    <div>
                        <div></div>
                        <div>消费领积分</div>
                        <p>客人的每一笔消费，小摩豆接单器都会</p>
                        <p>自动生成积分，客人扫码即可领取积分。</p>
                    </div>
                    <div>
                        <div></div>
                        <div>积分活动</div>
                        <p>会所可以设定不同时段项目的赠送</p>
                        <p>积分数，重点推广时段或项目。</p>
                    </div>
                    <div>
                        <div></div>
                        <div>积分商城</div>
                        <p>客人可以凭借积分到商城自由兑换</p>
                        <p>服务项目，或者实体商品。</p>
                    </div>
                </div>
            </div>

            <!--内网系统-->
            <div ref="refSystem" class="item-system" v-if="currTab == 7">
                <div class="item-title">内网系统</div>
                <p class="item-describe">可实现智能化排钟，提升整体服务效率；</p>
                <p class="item-describe">后台自动生成各类数据报表，实现会所经营数据化，帮助提升会所工作效率及减少人工成本。</p>
                <div class="item-input"></div>
                <div class="item-bottom-bg"></div>
            </div>

            <!--运营服务-->
            <div ref="refServe" class="item-serve" v-if="currTab == 8">
                <div class="item-title">运营服务</div>
                <p class="item-describe">一站式服务，售后无忧</p>
                <div class="item-content container">
                    <div>
                        <div>专业的运营指导</div>
                        <p>1. 专业的运营方案</p>
                        <p>2. 丰富的营销案例</p>
                        <p>3. 托管式运营辅导</p>
                    </div>
                    <div>
                        <div>完善的售后服务</div>
                        <p>1. 专员培训</p>
                        <p>2. 24小时客服在线</p>
                        <p>3. 经营数据定时推送</p>
                    </div>
                </div>
            </div>
        </div>

        <!--移动端-->
        <div v-if="navigatorStatus" class="mobile">
            <div class="m-item-banner">
                <div class="m-item-img"></div>
            </div>

            <div class="m-item-nav">
                <div v-for="(nav, index) in mNavData">
                    <div :class="{active: currTab == item.value}" v-for="item in nav.list" @click="doClickMenu(item.value)">{{ item.name}}</div>
                </div>
            </div>

            <!--建立粉丝池-->
            <div class="m-item-fans" v-if="currTab == 0">
                <div class="m-item-title m-container"> 建立粉丝池</div>
                <div class="m-item-describe">
                    <div>不同类型的会所都通过小摩豆获</div>
                    <div>得业绩提升</div>
                    <div class="m-item-img"></div>
                </div>
                
                <div class="m-item-content">
                    <div>场内锁客-支付即会员</div>
                    <div>通过客人微信买单，把客人编程粉丝</div>
                </div>

                <div class="m-item-content">
                    <div>场内锁客-扫码锁客</div>
                    <div>通过场内客人扫码选技师，扫技师工牌 服务评价等<br>锁住场内客人变成粉丝</div>
                </div>

                <div class="m-item-content">
                    <div>场外拓客-线上</div>
                    <div>通过分享会所微官网、电子期刊到微信群、<br>朋友圈吸引客人打开，变成粉丝。</div>
                </div>

                <div class="m-item-content">
                    <div>场外拓客-线下</div>
                    <div>发放带有会所微官网的二维码，客人扫码进入<br>微官网变成粉丝。</div>
                </div>
            </div>

            <!--活动运营-->
            <div class="m-item-activity" v-if="currTab == 1">
                <div class="m-item-title m-container"> 活动运营</div>
                <div class="m-item-describe">
                    <div>通过群发“优惠券、大转盘、限时抢、电子期<br>刊”等营销活动，营造消费场景，让粉丝产生<br>消费冲动，到店消费。</div>
                </div>
                <div class="m-item-img">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div>
                        <div>电子优惠券</div>
                        <div>电子期刊</div>
                        <div>大转盘</div>
                        <div>技师海报</div>
                    </div>
                </div>
            </div>

            <!--客服营销-->
            <div class="m-item-service" v-if="currTab == 2">
                <div class="m-item-title m-container"> 客服营销</div>
                <div class="m-item-describe">
                    <div>通过会所营销客服和在线访客的及时沟通</div>
                    <div>互动，抓住客人兴趣点，转化粉丝到店消费。</div>
                </div>
                <div class="m-item-img">
                    <div>技师可以主动与访客打招呼</div>
                    <div>客户可以通过客服及时沟通</div>
                </div>
            </div>
            <!--客人分类管理-->
            <div class="m-item-guest" v-if="currTab == 3">
                <div class="m-item-title m-container"> 客人分类管理</div>
                <div class="m-item-describe">
                    <div>根据客人每月的消费次数和消费金额，对客</div>
                    <div>人进行标签划分，对不同的标签客人进行等级分</div>
                    <div>类，并差异化管理。</div>
                </div>
                <div class="m-item-content">
                    <div>
                        <div><div>VIP 客</div></div>
                        <div>
                            <div>高频高消费</div>
                            <p>这类客人是会所的忠实粉丝，可向他们推荐会员充值套餐，定期送些小礼品，做好客情维护。</p>
                        </div>
                    </div>

                    <div>
                        <div><div>大客</div></div>
                        <div>
                            <div>低频高消费、高频低消费</div>
                            <p>这类客人占比比较大，有变成VIP客的潜力，做好消费引导，比如定期推荐电子期刊。</p>
                        </div>
                    </div>

                    <div>
                        <div><div>普客</div></div>
                        <div>
                            <div>低频消费</div>
                            <p>这类客人属于散客，消费能力有限，对会所服务没有形成认同感，可发送“裂变优惠券”和“转发抽奖”，吸引到店消费，同时形成。</p>
                        </div>
                    </div>

                    <div>
                        <div><div>流失客</div></div>
                        <div>
                            <div>一个月没有数据</div>
                            <p>一个月没有消费数据 客人一个月没有消费数据，需要发送“感恩优惠券”“体验券”“问候电子期刊”等，预防客人流失。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-item-member" v-if="currTab == 4">
                <div class="m-item-title m-container"> 会员系统</div>
                <div class="m-item-describe">小摩豆会员系统，帮您轻松留住客户</div>
                <div class="m-item-img">
                    <div></div>
                    <div>
                        <p><i><i></i></i></p>
                        <div>
                            <div>买单</div>
                            <div>通过客人线上买单，即可 将所有客人变成粉丝；</div>
                        </div>
                    </div>
                    <div>
                        <p><i><i></i></i></p>
                        <div>
                            <div>会员充值</div>
                            <div>通过引导会员充值会员套餐， 提前锁定客人消 费能力；</div>
                        </div>
                    </div>
                    <div>
                        <p><i><i></i></i></p>
                        <div>
                            <div>积分记录</div>
                            <div>通过对会所积分消耗的监控， 深入了解会员的 喜好。</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'product',
        data () {
            return {
                swiperOption: {},
                navigationData: [
                    {name: '建立粉丝池', value: 0},
                    {name: '活动运营', value: 1},
                    {name: '客服营销', value: 2},
                    {name: '客人分类管理', value: 3},
                    {name: '会员系统', value: 4},
                    {name: '精准营销', value: 5},
                    {name: '积分系统', value: 6},
                    {name: '内网系统', value: 7},
                    {name: '运营服务', value: 8}
                ],
                mNavData: [
                    {list: [{name: '建立粉丝池', value: 0}, {name: '活动运营', value: 1}, {name: '客服营销', value: 2}, {name: '客人分类管理', value: 3}]},
                    {list: [{name: '会员系统', value: 4}, {name: '精准营销', value: 5}, {name: '积分系统', value: 6}, {name: '内网系统', value: 7}]},
                    {list: [{name: '运营服务', value: 8}, {name: '', value: -1}, {name: '', value: -1}, {name: '', value: -1}]}
                ],
                tops: [],
                currTab: 0,
                navTop: false
            }
        },
        mounted () {
            // let that = this
            // const refs = that.$refs
            // that.tops = [
            //     refs.refBuildFans.offsetTop - 40,
            //     refs.refActivityOperation.offsetTop - 45,
            //     refs.refServiceMarket.offsetTop - 45,
            //     refs.refGuest.offsetTop - 45,
            //     refs.refMember.offsetTop - 45,
            //     refs.refMarket.offsetTop - 45,
            //     refs.refIntegral.offsetTop - 45,
            //     refs.refSystem.offsetTop - 45,
            //     refs.refServe.offsetTop - 45
            // ]
            window.addEventListener('scroll', this.productHandleScroll)
        },
        computed: {
            navigatorStatus () {
                let that = this
                let store = that.$store
                return store.state.navigatorStatus
            }
        },
        created (refs) {
            let that = this
            that.initSwiper()
        },
        methods: {
            initSwiper () {
                var that = this
                that.swiperOption = {
                    loop: true,
                    autoplay: {
                        stopOnLastSlide: true,
                        delay: 3000
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    onSlideChangeEnd: function (swiper) {
                    }
                }
            },
            doClickMenu (value) {
                let that = this
                if (value == -1) {
                    return
                }
                that.currTab = value
            },
            productHandleScroll () {
                let that = this
                let store = that.$store
                if (window.scrollY > 453) {
                    that.navTop = true
                    store.commit('setNavigationStatus', false)
                } else {
                    that.navTop = false
                    store.commit('setNavigationStatus', true)
                }
            }
        },
        destroyed () {
            window.removeEventListener('scroll', this.productHandleScroll)
        }
    }
</script>
