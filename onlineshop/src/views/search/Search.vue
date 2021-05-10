<template>
  <div id="mainbox">
    <div class="goodlist">
        <CateGoods :goods="goods.list"></CateGoods>
    </div>
    <div>
        <div class="empty" v-if="!goods.list.length">
  <img class="empty-cart" src="~assets/img/pic.jpg" style="margin:50px">
</div>
    </div>
    
  </div>
  
</template>

<script>
import { Search } from "network/search";
import { ref, reactive, onMounted } from "vue";
import CateGoods from '../category/Child/CateGoods';
import { useRoute } from 'vue-router';

export default {
  name: "Search",
  components: {
    CateGoods  
  },
  setup() {
    const goods = reactive({
      list: [],
    });
    const route = useRoute();
    const init = () => {
        const data = route.query.data;
        
        Search(data).then((res) => {
            
                console.log("搜索返回的数据:", res);
                goods.list = res;
                console.log('search Data: ',res);

            
        })
    }
    onMounted(() => {
        init();
    });


    return {
      goods,
      init
    };
  },
  watch: {
          // 如果路由发生变化，再次执行该方法
          "$route.query.data": "init"
        }


};
</script>

<style scoped>
.nav {
  -webkit-font-smoothing: antialiased;
  color: #666;
  margin: 0;
  padding: 0;
  float: left;
}

.navitem {
  -webkit-font-smoothing: antialiased;
  color: #666;
  margin: 0;
  padding: 0;
  list-style: none;
  float: left;
  margin-left: 1px;

}

.navitem :hover{
    color: red;
}

.navitem :active{
    color: yellow;
}

.navmes {
  -webkit-font-smoothing: antialiased;
  list-style: none;
  padding: 0;
  text-decoration: none;
  position: relative;
  display: block;
  height: 40px;
  line-height: 40px;
  font-size: 25px;
  color: #333;
  margin: 0 11px;
  transition: color 0.2s ease;
}

</style>