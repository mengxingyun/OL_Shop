<template>
    <div class="HomeAll">
        <div class="banners">
            <img src="~assets/img/1.jpg">
        </div>

        <Recommend :recommends="recommends"></Recommend>
        <GoodList></GoodList>
    </div>

    
</template>

<script>
import Recommend from "./Child/Recommand";
import GoodList from "components/content/goods/GoodList";
import {getHomeAllData} from 'network/home';
import {onMounted, ref} from 'vue';
export default {
    name: "Home",
    components: {
        Recommend,
        GoodList
    },
    setup(){
        const recommends = ref([]);
        onMounted( () => {
            getHomeAllData().then(res=>{
                console.log(res);
                recommends.value = res;
            })
        });

        return {
            recommends
        }
    }
}
</script>

<style>
.banners img{
    width: 500px;
    height: auto;
    margin-top: 45px;
}

</style>