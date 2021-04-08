<template>
    <!-- <div class="recommend-pic">
       
    </div> -->

    <div class="recommend">
        <a class="recommend-item" style="float: left; width: 203.333px; padding-top: 50px;">
            <div>
                <img src="~assets/img/hot.png" class="recommend-img">
            </div>
        </a>
        <a target="_blank" class="recommend-item" @click.prevent="goDetail(item.id)"  v-for="item in recommends" :key="item.id" style="float: left; width: 203.333px;">
            <div class="recommend-wrapper">
                <img :src="item.url" class="recommend-img">
            </div>
            <h6 class="recommend-name"> {{ item.name }} </h6>
            <div class="recommend-price">
                <span class="price-recommend">&nbsp;&nbsp;&nbsp;<i>&yen;</i><span> &nbsp;{{  item.price }} </span></span>
            </div>
        </a>


        
    </div>
    
</template>

<script>
import {useRouter} from 'vue-router';
export default {
    name: "Recommand",
    props: {
        recommends: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    setup(){
        const router = useRouter();
        const goDetail = (id) => {
            router.push({path:'/detail', query:{id}})
        }
        return {
            goDetail,
        }
    }
}
</script>

<style scoped lang="scss">
.recommend {
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    width: 1300px;
}

.recommend-item {
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    margin: 0;
    padding: 0;
    color: #666;
    text-decoration: none;
    min-height: 1px;
    height: 260px;
    display: inline-block;
    width: 203.333px;
}

.recommend-wrapper {
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    margin: 0;
    padding: 0;
    overflow: hidden;
    transition: background .2s linear,opacity .2s linear!important;
    background: transparent;
    width: 140px;
    height: 140px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
}
.recommend-img{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    transition: opacity .2s linear;
    opacity: 1;
}

.recommend-name {
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    margin: 0;
    padding: 0;
    width: 160px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 13px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    transition: color .2s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.recommend-price{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    margin: 0;
    padding: 0;
    width: 160px;
    height: 24px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7px;
    border: 1px solid #e1251b;
    box-sizing: border-box;
    line-height: 24px;
    overflow: hidden;
    background-color: #e1251b;
}

.price-recommend{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    margin: 0;
    padding: 0;
    width: 92px;
    height: 100%;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    float: left;
}


// .recommend-item {
//     flex: 1;
//     img {
//         width: 150px;
//         height: 180px;
//         margin-bottom: 10px;
//     }
    
// }
</style>