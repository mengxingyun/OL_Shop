<template>
    
    <div class="wrapper" >
        <div  >
            <ul class="goods">
                <GoodListItem v-for="item in goods" :product="item" :key="item.id"></GoodListItem>
                <div style=" clear:both; visibility:hidden;"></div>
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
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
    
}
</script>

<style scoped>


.wrapper{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    padding: 0;
    margin: 0 auto;
    width: 1200px;
    
}

.goods{
     -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    padding: 0;
    margin: 0 -5px;
}



</style>