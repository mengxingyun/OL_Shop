<template>
    <div class="title">
        <div class="titlewrapper">
            <h3 class="titlemes">推荐</h3>
        </div>
    </div>
    <div class="wrapper">
        <div  style="clear: both;">
            <ul class="goods">
                <GoodListItem></GoodListItem>
                <GoodListItem></GoodListItem>
                <GoodListItem></GoodListItem>
                <GoodListItem></GoodListItem>
                <GoodListItem></GoodListItem>
                <GoodListItem></GoodListItem>
                <GoodListItem></GoodListItem>
                <GoodListItem></GoodListItem>
                <GoodListItem></GoodListItem>
            </ul>
        </div>
    </div>


</template>

<script>
import GoodListItem from './GoodListItem';
export default {
    name: "GoodList",
    components: {
        GoodListItem
    }
}
</script>

<style scoped>

.title{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    margin: 0;
    padding: 0;
    height: 65px;
}

.titlewrapper{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    padding: 0;
    margin: 0 auto;
    width: 990px;
}

.titlemes{
            -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    position: relative;
    width: 150px;
    height: 45px;
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    line-height: 45px;
    padding: 0 30px;
    margin: 0 auto 20px;
    overflow: hidden;
    color: #333;
}

.wrapper{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    padding: 0;
    margin: 0 auto;
    width: 990px;
    
}

.goods{
     -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    padding: 0;
    margin: 0 -5px;
    background-color: #666  ;
}

</style>