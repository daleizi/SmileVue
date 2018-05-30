<template>
    <div>
        <div class="floor-title">{{floorTitle}}</div>
        <div class="floor">            
            <div class="floor-anomaly">
                <div class="floor-one">
                    <img v-lazy="floorData0.image" width="100%">
                </div>
                <div>
                    <img class="floor-two" v-lazy="floorData1.image" width="100%">
                    <img v-lazy="floorData2.image" width="100%">
                </div>
            </div>
        </div>
        <div class="floor-rule">
            <div v-for="(item,index) in floorData.slice(3)" :key="index">
                <img v-lazy="item.image" width="100%">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['floorData','floorTitle'],
        data() {
            return {
                floorData0:{},
                floorData1:{},
                floorData2:{},
            }
        },
        watch:{
            floorData(val){
                this.floorData0 = this.floorData[0]
                this.floorData1 = this.floorData[1]
                this.floorData2 = this.floorData[2]
            }
        }
    }
</script>

<style scoped>
.floor-title{
    text-align: center;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 14px;
}
.floor-anomaly{
    display: flex;
    flex-direction: row;
    background: #fff;
    border-bottom: 1px solid #eee;
}
.floor-anomaly div{
    width: 10rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.floor-one{
    border-right: 1px solid #eee;
}
.floor-two{
    border-bottom: 1px solid #eee;
}
.floor-rule{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #fff;
}
.floor-rule div{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 10rem;
    border-bottom: 1px solid #eee;
}
.floor-rule div:nth-child(odd){
    border-right: 1px solid #eee;
}
</style>