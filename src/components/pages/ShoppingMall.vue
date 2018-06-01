<template>
    <div>
        <!-- 搜索条 -->
        <div class="search-bar">
            <van-row>
                <van-col span="3">
                    <img :src="locationIcon" class="location-icon">
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input">
                </van-col>
                <van-col span="5">
                    <van-button size="mini" class="search-button">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <!-- 轮播图 -->
        <div class="swiper-area">
            <van-swipe :autoplay="1500">
                <van-swipe-item v-for="(item,index) in bannerPicArray" :key="index">
                    <img v-lazy="item.image" width="100%">                   
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 分类 -->
        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.image" width="90%">
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
        <!-- 广告条 -->
        <div>
            <img v-lazy="adBanner" width="100%">
        </div>
        <!-- 商品推荐 -->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img v-lazy="item.image" width="80%">
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice | moneyFilter}})</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <!-- swiper效果 -->
        <!-- <swiperDefault></swiperDefault>
        <swiperDefault2></swiperDefault2>
        <swiperText></swiperText> -->
        <!-- 楼层 -->
        <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
        <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
        <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
        <!-- 热卖 -->
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
            <!--这里需要一个list组件-->
                <van-list>
                    <van-row gutter="20">
                        <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                            <goodsInfoComponent :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goodsInfoComponent>
                        </van-col>
                    </van-row>
                </van-list>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    // vue-awesome-swiper插件
    import 'swiper/dist/css/swiper.css'
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    import swiperDefault from '../swiper/swiperDefault'
    import swiperDefault2 from '../swiper/swiperDefault2'
    import swiperText from '../swiper/swiperText'
    import floorComponent from '../component/floorComponent.vue'
    import goodsInfoComponent from '../component/goodsInfoComponent.vue'
    import {toMoney} from '@/filter/moneyFilter.js'
    //引入接口
    import url from '@/serviceAPI.config.js'

    export default {
        data() {
            return {
                locationIcon: require('../../assets/images/定位.png'),
                bannerPicArray:[], 
                category:[],
                adBanner:'', 
                recommendGoods:[],
                swiperOption:{
                    //设置一行显示3个
                    slidesPerView:3,
                    //无限循环
                    loop:true,
                },
                floor1:[],
                floor2:[],
                floor3:[],
                floorName:{},
                hotGoods:[],//热卖商品
            }
        },
        components:{
            swiper,
            swiperSlide,
            swiperDefault,
            swiperDefault2,
            swiperText,
            floorComponent,
            goodsInfoComponent,
        },
        created(){
            axios.get(url.getShopinMallInfo)
            .then(reponse=>{
                console.log(reponse)
                if(reponse.status == 200){
                    this.category = reponse.data.data.category;
                    this.adBanner = reponse.data.data.advertesPicture.PICTURE_ADDRESS;
                    this.bannerPicArray = reponse.data.data.slides;
                    this.recommendGoods = reponse.data.data.recommend;
                    this.floor1 = reponse.data.data.floor1;
                    this.floor2 = reponse.data.data.floor2;
                    this.floor3 = reponse.data.data.floor3;
                    this.floorName = reponse.data.data.floorName;
                    this.hotGoods = reponse.data.data.hotGoods;
                }
            })
            .catch(error=>{
                console.log(error)
            })
        },
        filters:{
            moneyFilter(money){
                return toMoney(money)
            }
        },
        
    }
</script>

<style scoped>
.search-bar{
    height: 2.2rem;
    background: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
}
.location-icon{
    width: 70%;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
}
.search-input{
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-bottom: 1px solid #fff;
    background: #e5017d;
    color:#fff;
}
.search-button{
    margin-left: 0.7rem;
}
.swiper-area{
    clear: both;
    max-height: 10rem;
    overflow: hidden;
}
.type-bar{
    background: #fff;
    margin: 0.3rem 0.3rem 0.3rem 0.3rem ;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    font-size: 13px;   
}
.type-bar div{
    padding: .3rem;
    text-align: center;
    flex:1;
}
.recommend-area{
    background: #fff;
    margin-top: 0.2rem;
}
.recommend-title{
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: 0.2rem;
    color: #e5017d;
}
.recommend-body{
    border-bottom: 1px solid #eee;
}
.recommend-item{
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;
}
.hot-area{
    text-align: center;
    font-size:14px;
    height: 1.8rem;
    line-height:1.8rem;
}
</style>