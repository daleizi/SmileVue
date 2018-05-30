<template>
    <div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="text">
                <div>
                    美国总统特朗普北京时间星期五又杀了个“回马枪”，他向媒体表示美朝峰会仍有可能在6月12日举行，美朝正就此进行商谈。他说“让我们拭目以待”。

大约整整24小时以前，特朗普总统通过一封致金正恩的公开信宣布取消定于6月12日在新加坡举行的美朝峰会，强烈震动了半岛局势和全球舆论。特朗普将他取消美朝峰会归咎于平壤在这之前对美方的喊话中展现出“极度愤怒以及公开的敌意”，就在特朗普宣布取消会晤几个小时前，平壤刚刚兑现承诺，拆除、炸毁了该国唯一的丰溪里核试验场。

很多人担心朝鲜会对特朗普星期四的决定进行报复，然而平壤在星期五清晨发表的一项声明中展现了冷静。朝方表示，他们之前的表态不过是在朝美峰会前夕美国逼迫其单方面弃核的过度言行引起的反弹，并且表示愿意随时以任何方式与美方坐下来解决问题。

特朗普总统在美国时间星期五早上表示，很高兴收到来自朝鲜“温暖并有建设性”的声明，紧接着就出现了他关于美朝峰会仍有可能在6月12日举行的最新表态。
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption:{
                    direction:'vertical',
                    slidesPerView:'auto',
                    //自由模式
                    freeMode:true,
                    //pc端鼠标滚轮也可以用
                    mousewheel:true,
                }
            }
        },
        components:{
            swiper,
            swiperSlide,
        },
    }
</script>

<style scoped>
.swiper{
    height: 200px;
    overflow: hidden;
}
.text{
    font-size: 18px;
    text-align: left;
    padding: 30px;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>