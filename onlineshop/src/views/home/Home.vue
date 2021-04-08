<template>
  <div class="banners" style="width: 1300px; margin: 0 auto">
    <el-carousel height="600px" style="text-align: center;">
      <el-carousel-item>
        <img src="~assets/img/flow1.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="~assets/img/flow2.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="~assets/img/flow3.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="~assets/img/flow4.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="~assets/img/flow5.jpg" />
      </el-carousel-item>
    </el-carousel>
  </div>

  <Recommend :recommends="recommends"></Recommend>
  <GoodList :goods="goods.list"></GoodList>
</template>

<script>
import Recommend from "./Child/Recommand";
import GoodList from "components/content/goods/GoodList";
import { getHomeHotData, getHomeRecommendData } from "network/home";
import { onMounted, reactive, ref } from "vue";
export default {
  name: "Home",
  components: {
    Recommend,
    GoodList,
  },
  setup() {
    const recommends = ref([]);
    const goods = reactive({
      page: 0,
      list: [],
    });
    const isRefreshBool = ref(true);
    const isRefresh = () => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (
        scrollTop + windowHeight >= scrollHeight - 200 &&
        isRefreshBool.value
      ) {
        isRefreshBool.value = false;
        refresh();
      }
    };
    const refresh = () => {
      const page_more = goods.page + 1;

      getHomeRecommendData(page_more).then((res) => {
        console.log("推荐数据+", res);
        if (res.list.length > 0) {
          goods.list = [...goods.list, ...res.list];
          goods.page = goods.page + 1;
          console.log(goods.list);
          isRefreshBool.value = true;
        }
      });
    };

    onMounted(() => {
      getHomeHotData().then((res) => {
        console.log("热销数据", res);
        recommends.value = res;
      });

      getHomeRecommendData(goods.page).then((res) => {
        console.log("推荐数据", res);
        goods.list = res.list;
        goods.page = res.page;
      });

      window.addEventListener("scroll", isRefresh, true);
    });

    return {
      recommends,
      goods,
      isRefresh,
      isRefreshBool,
      refresh,
    };
  },
};
</script>

<style>
.banners img {
  width: auto;
  height: auto;
  margin-top: 45px;
}

.el-carousel__item{
     background-color: #d3dce6;
}

</style>