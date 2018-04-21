<style lang="sass">
    @import '../sass/views/home.scss';
</style>
<template>
    <div id="home-page">
        <!--PC端-->
        <div v-if="!navigatorStatus" class="pc">
            <!--轮播图-->
            <swiper :options="swiperOption">
                <swiper-slide><img src="../assets/images/home/banner01.jpg"/></swiper-slide>
                <swiper-slide><img src="../assets/images/home/banner02.jpg"/></swiper-slide>
                <swiper-slide><img src="../assets/images/home/banner03.jpg"/></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="item-fans">
                <div class="container">{{ scrollData.title }} <ScrollNumber :num = 'scrollData.num'></ScrollNumber>{{ scrollData.desc }}</div>
            </div>
            <!--营销-->
            <div class="item-product container">
                <ul>
                    <li @mouseenter="doMouseleave(item.value)" v-for="item in productTitle" :class="{active: currTab == item.value}"><i></i><span>{{ item.name }}</span></li>
                </ul>
                <!-- 锁客 拓客 -->
                <div class="item-tkyl" v-if="currTab == 0">
                    <div class="item-content">
                        <div class="item-title"><span>收集粉</span>丝/活动营销/客服营销</div>
                        <p>通过小摩豆</p>
                        <p>轻松将所有到店客人转化为会所粉丝，牢牢锁住新客；</p>
                        <p>一键将上万活动信息发给客人，省时省成本，触达客人快捷精准；</p>
                        <p>会所技师、客服可随时与客人线上互动、最大成都转发粉丝到店消费。</p>
                        <div class="item-more">了解更多<i></i></div>
                    </div>
                    <div class="item-product-img"><img src="../assets/images/home/product01.png"/></div>
                </div>

                <!-- 管理 -->
                <div class="item-tkyl" v-if="currTab == 1">
                    <div class="item-content">
                        <div class="item-title"><span>客人分类管理</span>/精准营销/会员系统/积分系统</div>
                        <p>帮助会所对不同客人进行标签划分，了解客人消费喜好；</p>
                        <p>智能大数据分析，方便会所针对不同的顾客提供个性化服务；</p>
                        <p>通过引导会员充值套餐，锁定客人的消费能力；</p>
                        <p>获取客人消费忠诚，提升到店频次。</p>
                        <div class="item-more">了解更多<i></i></div>
                    </div>
                    <div class="item-product02-img"><img src="../assets/images/home/product02.png"/></div>
                </div>

                <div class="item-tkyl" v-if="currTab == 2">
                    <div class="item-content">
                        <div class="item-title"><p>自动拍钟/开钟记账/收银记账/</p><p><span>工资结算/</span>财务报表</p></div>
                        <p>智能化排钟，提升服务效率；</p>
                        <p>自动生成各类数据报表，实现会所经营数据化，帮助提升会所服务效率及</p>
                        <p>减少人工成本。</p>
                        <div class="item-more">了解更多<i></i></div>
                    </div>
                    <div class="item-product02-img"><img src="../assets/images/home/product03.png"/></div>
                </div>

                <div class="item-tkyl" v-if="currTab == 3">
                    <div class="item-content">
                        <div class="item-title"><span>运营指</span>导/售后服务</div>
                        <p>专业的运营方案，丰富的营销案例，托管式运营指导，协助会所高</p>
                        <p>效运营。</p>
                        <p>专员到店培训，24小时客服在线，经营数据定时推送，从开通使用</p>
                        <p>到售后维护，一站式服务，售后无忧。</p>
                        <div class="item-more">了解更多<i></i></div>
                    </div>
                    <div class="item-product04-img"><img src="../assets/images/home/product04.png"/></div>
                </div>
            </div>

            <!--行业案例-->
            <div class="item-business-case">
                <div class="item-title container">不同类型的会所都通过小摩豆获得业绩提升</div>
                <div class="container item-business">
                    <swiper :options="businessSwiperOption" class="banner-swipe">
                        <swiper-slide v-for="caseItem in caseList" :key="caseItem.id">
                            <div class="item-content">
                                <div class="item-left" :style="{ 'background-image': 'url(' + caseItem.imgUrl +')' }"></div>
                                <div class="item-right">
                                    <div class="title">{{ caseItem.title }}</div>
                                    <div class="item-desc"><span>会所面积：</span><p>{{ caseItem.clubArea }}</p></div>
                                    <div class="item-desc"><span>会所类型：</span><p>{{ caseItem.clubType }}</p></div>
                                    <div class="item-desc"><span>会所痛点：</span><p>{{ caseItem.painPoint }}</p></div>
                                    <div class="item-desc"><span>获得成就：</span><p>{{ caseItem.effect }}</p></div>
                                </div>
                                <div class="item-btn">查看详情<i></i></div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="business-swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                
            </div>

            <!-- 行业知识 -->
            <div class="item-case">
                <div class="item-title container">聚焦行业热点 让营销更容易</div>
                <div class="item-content container">
                    <div v-for="knowledge in knowledgeList" :key="knowledge.id">
                        <div>
                            <div class="item-img" :style="{ 'background-image': 'url(' + knowledge.imgUrl + ')' }"></div>
                            <div class="item-title">{{ knowledge.title }}</div>
                            <div class="item-text">{{ knowledge.desc }}</div>
                            <div class="item-btn"></div>
                        </div>
                    </div>
                </div>
                <div class="item-btn">更多行业知识</div>
            </div>
            <!--招商加盟-->
            <div class="item-join">
                <div class="item-title">全国各区代理 火热招募中</div>
                <div class="item-sub-title">代理加盟流程</div>
                <div class="item-img-join container"></div>
            </div>
        </div>

        <!--移动端-->
        <div v-if="navigatorStatus" class="mobile">
            <swiper :options="swiperOption">
                <swiper-slide><img src="../assets/images/home/m_banner_02.png"/></swiper-slide>
                <swiper-slide><img src="../assets/images/home/m_banner_02.png"/></swiper-slide>
                <swiper-slide><img src="../assets/images/home/m_banner_03.png"/></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>

            <div class="m-item-fans m-container">
                <div>小摩豆已帮助会所累计粉丝 
                    <span class="item-paple right">012345，6789人</span>
                    <!--<span class="item-paple middle">0123456789</span>
                    <span class="item-paple left">12</span>-->
                </div>
            </div>

            <div class="m-item-product">
                <div class="m-item-title m-container"> 我们的产品</div>
                <div class="m-item-content">
                    <div class="m-container"><i></i>拓客引流</div>
                    <div>
                        <span>建立粉丝池/活动运营/客服营销</span>
                        <p>通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷</p>
                        <b>了解更多</b>
                    </div>
                </div>
                <div class="m-item-content">
                    <div class="m-container"><i></i>留住顾客</div>
                    <!--<div>
                        <span>建立粉丝池/活动运营/客服营销</span>
                        <p>通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷</p>
                        <b>了解更多</b>
                    </div>-->
                </div>
                <div class="m-item-content">
                    <div class="m-container"><i></i>无忧管理</div>
                    <!--<div>
                        <span>建立粉丝池/活动运营/客服营销</span>
                        <p>通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷</p>
                        <b>了解更多</b>
                    </div>-->
                </div>
                <div class="m-item-content">
                    <div class="m-container"><i></i>运营服务</div>
                    <!--<div>
                        <span>建立粉丝池/活动运营/客服营销</span>
                        <p>通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷通过小摩豆,可轻松将所有到店客人转化为会所粉丝（锁新客）；可一键将上万份活动信息发给客人（省时省成本，触达客人快捷</p>
                        <b>了解更多</b>
                    </div>-->
                </div>
            </div>

            <div class="m-item-case">
                <div class="m-item-title m-container"> 客户案例</div>
                <div class="m-item-describe">不同类型的会所都通过小摩豆获<br>得业绩提升</div>
                <div class="m-item-list" v-for="caseItem in caseList">
                    <div>
                        <div :style="{ 'background-image': 'url(' + caseItem.imgUrl + ')' }"></div>
                        <div>
                            <div>{{ caseItem.title }}</div>
                            <div><span>获得成效：</span>{{ caseItem.effect }}</div>
                            <div>查看详情</div>
                        </div>
                    </div>
                </div>
                <div class="m-more-case">更多案例</div>
            </div>

            <div class="m-item-industry">
                <div class="m-item-title m-container"> 行业知识</div>
                <div class="m-item-describe">聚焦行业热点 让营销更容易</div>
                <div class="m-item-swiper">
                    <swiper :options="mSwiperOption">
                        <swiper-slide v-for="item in knowledgeList" :key="item.id">
                            <div class="m-item-container">
                                <div>
                                    <div class="m-item-img" :style="{ 'background-image': 'url(' + item.imgUrl + ')' }"></div>
                                    <div class="m-title">{{ item.title }}</div>
                                    <div class="m-item-text">{{ item.desc }}</div>
                                    <div class="m-item-btn"></div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="m-more-case">更多行业知识</div>
            </div>

            <div class="m-item-join">
                <div class="m-item-title m-container"> 加盟流程</div>
                <div class="m-item-describe">全国各区代理 火热招募中</div>
                <div class="m-item-img"><div></div></div>
                <div class="m-item-tel">咨询热线：<span>400-829-9358</span></div>
            </div>
        </div>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import fetch from '@/utils/fetch'
    import ScrollNumber from '@/components/common/ScrollNumber'

    export default {
        name: 'home',
        components: {
            swiper, swiperSlide, ScrollNumber
        },
        data () {
            return {
                scrollData: {
                    title: '',
                    num: 0,
                    desc: ''
                },
                scrollTimer: null,
                scrollCount: 0,
                scrollDataList: [
                    { title: '小摩豆已帮会所增加新顾客', num: 486048, desc: '人' },
                    { title: '小摩豆已帮会所提升老客到店率', num: 20, desc: '%' },
                    { title: '小摩豆已帮会所推送营销活动', num: 875395, desc: '条' }
                ],
                swiperOption: {
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
                },
                businessSwiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el: '.business-swiper-pagination'
                    }
                },
                mSwiperOption: {},
                productTitle: [{name: '锁客 拓客', value: 0}, {name: '管理客人 留住客人', value: 1}, {name: '内部智能管理', value: 2}, {name: '运营服务', value: 3}],
                currTab: 1,
                scrolled: false,
                caseList: [], // 行业案例
                knowledgeList: [] // 行业知识
            }
        },
        computed: {
            navigatorStatus () {
                let that = this
                let store = that.$store
                return store.state.navigatorStatus
            }
        },
        created () {
            let that = this
            that.initSwiper()
            that.startScrollData()
            that.queryCaseList()
            that.queryKnowledgeList()
        },
        methods: {
            startScrollData () {
                const that = this
                const scrollData = that.scrollData
                const scrollDataList = that.scrollDataList
                scrollData.title = scrollDataList[0].title
                scrollData.num = scrollDataList[0].num
                scrollData.desc = scrollDataList[0].desc
                let index = 0
                that.scrollTimer = setInterval(() => {
                    index = (that.scrollCount ++) % 3
                    scrollData.title = scrollDataList[index].title
                    scrollData.num = scrollDataList[index].num
                    scrollData.desc = scrollDataList[index].desc
                }, 3000)
            },
            initSwiper () {
                var that = this
                that.mSwiperOption = {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    initialSlide: 1,
                    spaceBetween: 30
                }
            },
            doMouseleave (tab) {
                this.currTab = tab
            },
            queryKnowledgeList () {
                const that = this
                let filter = {
                    fields: {
                        content: false
                    },
                    limit: 3,
                    where: { status: 'online' },
                    order: 'createdAt DESC'
                }
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/news',
                    params: { filter: JSON.stringify(filter) }
                }).then(res => {
                    that.knowledgeList = res || []
                })
            },
            queryCaseList () {
                const that = this
                let filter = {
                    fields: {
                        content: false
                    },
                    limit: 3,
                    where: { status: 'online' },
                    order: 'createdAt DESC'
                }
                fetch({
                    url: 'https://d.apicloud.com/mcm/api/case',
                    params: { filter: JSON.stringify(filter) }
                }).then(res => {
                    that.caseList = res || []
                })
            }
        },
        beforeDestroy () {
            const that = this
            if (that.scrollTimer) {
                clearInterval(that.scrollTimer)
            }
        }
    }
</script>
