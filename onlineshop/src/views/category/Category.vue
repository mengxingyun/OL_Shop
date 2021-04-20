<template>
  <div id="mainbox">
    <div style="width: 700px; margin: 0 auto; margin-top: 20px;">
        <ul class="nav">
            <li class="navitem" v-for="(item, index) in cates">
                <a class="navmes" @click.prevent="GetCurrentCate(index)"
                ><el-divider direction="vertical"></el-divider>{{ item
                }}<el-divider direction="vertical"></el-divider
                ></a>
            </li>
        </ul>
    </div>
    <el-row>
        <el-button type="primary" plain @click="ReSort(1)" style="width: 200px; font-size: 20px">按销量排序</el-button>
        <el-button type="success" plain @click="ReSort(2)" style="width: 200px; font-size: 20px">按价格排序</el-button>
    </el-row>
    <div class="goodlist">
        <CateGoods :goods="goods.list"></CateGoods>
    </div>
    <div class="change" >
    <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left" @click.prevent="GetPrePage()">上一页</el-button>
        <el-button type="primary" @click.prevent="GetNextPage()">下一页<i class="el-icon-arrow-right el-icon--right" ></i></el-button>
    </el-button-group>
    <div style="height:30px;"></div> 
    </div>
  </div>
  
</template>

<script>
import { getCategoryData } from "network/category";
import { ref, reactive, onMounted } from "vue";
import CateGoods from './Child/CateGoods';

export default {
  name: "Category",
  components: {
    CateGoods  
  },
  setup() {
    const cates = ref(["饮食", "服装", "书籍", "电子", "母婴", "家具"]);
    const goods = reactive({
      page: 0, //第几页的数据
      cate: 0, //类别
      list: [],
    });
    const GetCurrentCate = (index) => {
        goods.cate = index;
        goods.page = 0;
        getCategoryData(goods.cate, goods.page).then((res) => {
            goods.list = res.list;
            console.log('分类数据','类别',res.cate,'第几页', res.page);
        })
    }

    const compareByPrice = (objA, objB) => {
        return objA.price - objB.price;
    }

    const compareByNum = (objA, objB) => {
        return objB.sellnum - objA.sellnum;
    }

    const ReSort = (flag) => {
        if(flag == 1){
            goods.list = goods.list.sort(compareByNum);
        }
        else{
            goods.list = goods.list.sort(compareByPrice);
        }
    }

    const GetPrePage = () => {
        if(goods.page == 0){
            return;
        }
        
        goods.page = goods.page - 1;
        getCategoryData(goods.cate, goods.page).then((res) => {
            goods.list = res.list;
            console.log('分类数据','类别',res.cate,'第几页', res.page);
        })
    }

    const GetNextPage = () => {
        if(goods.list.length > 0){
            goods.page = goods.page + 1;
        }
        
        getCategoryData(goods.cate, goods.page).then((res) => {
            goods.list = res.list;
            
            if(res.list.length == 0){
                goods.page = goods.page;
            }

            console.log('分类数据','类别',res.cate,'第几页', res.page);
        })
    }

    onMounted(() => {
        getCategoryData(goods.cate, goods.page).then((res) => {
            console.log(res);
            goods.list = res.list;
            
            console.log('分类数据','类别',res.cate,'第几页', res.page);
        })
    });


    return {
      cates,
      goods,
      GetCurrentCate,
      ReSort,
      compareByNum,
      compareByPrice,
      GetPrePage,
      GetNextPage
    };
  },
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