<template>
    <div class="container">
        <ul  class="wrapper">
            <li v-for="item in goods" :key="item.id" class="gooditem">
                <a class="item" @click.prevent="goDetail(item.id)">
                    <img class="itempic" :src="item.url">
                    <div class="itemname"><span class="titleclass">{{ item.name }}</span></div>
                    <div class="price">
                        <span class="coupon-price-title">￥</span>
                        <span class="coupon-price-afterCoupon"> {{ item.price }} </span>
                    </div>
                    <div class="itemfooter">
                        <div class="item-tags"></div>
                        <div class="sell-info">销量 {{ item.sellnum }}</div>
                    </div>
                </a>
            </li>
        </ul>
        </div>
</template>

<script>
import {useRouter} from 'vue-router';
export default {

    name: "CateGoods.vue",
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    },
    setup(){
        const router = useRouter();
        const goDetail = (id) => {
            router.push({path:'/detail', query:{id}})
        }
        return{
            goDetail,
        }

    }
    
}
</script>

<style scoped>

.container{    text-size-adjust: 100%;
    font-family: arial, Helvetica, sans-serif !important;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    width: 1190px;
    margin: 20px auto;
    font-size: 12px;
    min-height: auto;}

.wrapper{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 1190px;
    font-size: 0;
    font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',sans-serif;
    border-top: 1px solid #f2f2f2;
    border-left: 1px solid #f2f2f2;
}

.gooditem{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    list-style: none;
    font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',sans-serif;
    margin: 0;
    padding: 0;
    width: 236px;
    height: 368px;
    box-sizing: border-box;
    display: inline-block;
    font-size: 12px;
    border: 1px solid #f2f2f2;
    border-top: none;
    border-left: none;
    background: #fff;
    vertical-align: top;
}

.item{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    list-style: none;
    font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',sans-serif;
    font-size: 12px;
    text-decoration: none;
    display: inline-block;
    width: 234px;
    height: 366px;
    box-sizing: border-box;
    padding: 22px 20px 0;
    background: #fff;
    position: relative;
    border: 2px solid transparent;
}


.itempic{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    list-style: none;
    font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',sans-serif;
    font-size: 12px;
    max-width: 100%;
    vertical-align: top;
    border: 0;
    width: 198px;
    height: 240px;
}

.itemname{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    list-style: none;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #9b9b9b;
    line-height: 20px;
    padding-top: 10px;
    height: 40px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.titleclass{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    list-style: none;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #9b9b9b;
    line-height: 20px;
    white-space: normal;
    vertical-align: middle;
}

.price{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    list-style: none;
    font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',sans-serif;
    font-size: 12px;
    height: 25px;
    padding: 6px 0 0;
    line-height: 1.6;
}

.coupon-price-title{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    list-style: none;
    line-height: 1.6;
    vertical-align: baseline;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #fd3f31;
}

.coupon-price-afterCoupon{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    list-style: none;
    margin-left: 4px;
    vertical-align: baseline;
    text-align: left;
    line-height: 25px;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #fd3f31;
}

.itemfooter{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    list-style: none;
    font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',sans-serif;
    font-size: 12px;
    margin-top: 4px;
    border-top: 1px solid #f2f2f2;
    padding: 9px 0;
    position: relative;
}

.item-tags{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    list-style: none;
    font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',sans-serif;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: middle;
}

.sell-info{
    text-size-adjust: 100%;
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
    list-style: none;
    font-family: 'helvetica neue',tahoma,'hiragino sans gb',stheiti,'wenquanyi micro hei',sans-serif;
    position: absolute;
    right: 0;
    top: 9px;
    color: #9b9b9b;
    font-size: 12px;
    line-height: 17px;
    background: #fff;
    padding-left: 12px;
}

</style>