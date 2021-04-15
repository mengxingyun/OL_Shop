<template>
<div class="notempty" v-if="state.list.length">
<el-card class="box-card" style="width: 1200px; margin: 0 auto; min-height: 700px;">
<div class="item-list">
  <div class="item-combine" v-for="(item, index) in state.list" :key="index">
      <div class="item-item">
          <div class="item-form">
              <div class="p-checkbox">
                  <el-checkbox v-model="item.isChecked" @change="ChangeState(item.id)"></el-checkbox>
              </div>
              <div class="p-goods">
                <div class="goods-item">
                  <div class="p-img">
                      <img class="img" :src="item.url" style="width: 100%;height:100%;object-fit:cover;">
                  </div>
                  <div class="p-msg">
                    {{ item.name}}
                  </div>
                </div>
                
              </div>
              <div class="p-price">
                  <span class="p-price-cont">￥{{ item.price }}</span>
                </div>
                <div class="p-quantity">
                  <el-input-number v-model="item.num" :min="1" :max="item.stock" :value="item.id" style="margin-top: 20px;" @change="onChange(item.id, item.num)"></el-input-number>
                </div>
                <div class="p-sum">
                  <strong>¥{{ item.price * item.num }}</strong>
                </div>
                <div class="p-ops">
                  <el-button type="danger" icon="el-icon-delete" @click="deleteGood(item.id)" circle></el-button>
                </div>
          </div>
      </div>
      <div style="clear:both;"></div>
  </div>
</div>
</el-card>
<el-card class="box-card" style="width: 1200px; margin: 0 auto">
    <div class="card-header">
        <el-checkbox v-model="checked" @change="checkAll">全选</el-checkbox>
        <span>
            <span class="txt">总价:</span>
            <em class="price">￥{{ total}}</em>
        </span>
        <el-button type="danger" round style="font-size:20px" @click="OnSubmit">去结算</el-button>
    </div>
</el-card>
</div>

<div class="empty" v-if="!state.list.length">
  <img class="empty-cart" src="~assets/img/empty.jpg" style="margin:50px">
  <el-row style="width: 100px;margin: 0px auto">
    <el-button type="danger" @click="goTo">前往购物</el-button>
  </el-row>
</div>

</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue';
import {getCart, modifyCart,modifyState, modifyStateAll, deleteCartItem} from 'network/cart'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
export default {
    name: "ShopCart",
    setup(){
        const checked = ref(false);
        const router = useRouter();
        let num = ref(1);
        //数据模型
        const state = reactive({
          list: []
        })

        //前往购物
        const goTo = () =>{
          router.push({path: '/home'})
        }

        //初始化购物车数据
        const init = () => {
          const token =  window.localStorage.getItem('token');
          getCart(token).then(res => {
            console.log('购物车数据', res);
            state.list = res;
          })
        }

        //改变购物车内商品数量
        const onChange = (id, num) => {
          const token = window.localStorage.getItem('token');
          const changedata = {
            type: 'ChangeNum',
            id,
            num,
            token
          }
          modifyCart(changedata).then((res) => {
            console.log(res);
          })
        }

        //改变商品选中状态
        const ChangeState = (id) => {
          const token = window.localStorage.getItem('token');
          console.log(id);
          const changedata = {
            type: 'ChangeState',
            id,
            token
          }
          modifyState(changedata).then((res) => {
            console.log(res);
          })
        }

        //全选
        const checkAll = () => {
          console.log(checked.value);
          if(!checked.value){
            for(let i = 0; i < state.list.length; i++){
              state.list[i].isChecked = false;
            }
          }
          else{
            for(let i = 0; i < state.list.length; i++){
              state.list[i].isChecked = true;
            }
          }
          const token = window.localStorage.getItem('token');
          const changedata = {
            type: "ChangeStateAll",
            token,
            state: checked.value
          }
          modifyStateAll(changedata).then((res) => {
            console.log(res)
          })
        }

        //删除商品
        const deleteGood = (id) => {
          const type = 'DeleteGood';
          const myid = id;
          const token = window.localStorage.getItem('token');
          const changedata = {
            type,
            myid,
            token
          }
          deleteCartItem(changedata).then((res) => {
            console.log(res);
          });
          getCart(token).then(res => {
            console.log('购物车数据', res);
            state.list = res;
          })
        }

        //总价格
        const total =  computed(() => {
          let sum = 0;
          for(let i = 0; i < state.list.length; i++){
            if(state.list[i].isChecked){
              sum = sum + (state.list[i].price) * (state.list[i].num);

            }
          }
          return sum;
        })

        //创建订单

        const OnSubmit = () => {
          let flag = true;
          for(let i = 0; i < state.list.length; i++){
            if(state.list[i].isChecked == true){
              flag = false;
              break;
            }
          }
          if(flag){
            ElMessage.warning({
            message: '请先选中商品哦',
            type: 'warning',
            offset: 300
            });
          }
          else{
            router.push({path: '/createorder'})
          }
        }
        onMounted(() => {
          init();
        })
        return {
            checked,
            num,
            state,
            goTo,
            init,
            onChange,
            ChangeState,
            checkAll,
            deleteGood,
            total,
            OnSubmit
        }
    }

}
</script>

<style scoped>
 .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
    
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }
  
  .price{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 20px;
    font-style: normal;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    font-size: 24px;
    color: #e2231a;
    font-family: verdana;
    font-weight: 700;
  }
  
  .txt{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    line-height: 20px;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    float: left;
    width: 50px;
    text-align: right;
    color: #999;
  }

.box-card, .el-card, .is-always-shadow{
    position: sticky;
    bottom: 0px;
    z-index: 50;
}

.item-list{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 12px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    border: 1px solid #f1f1f1;
    border-top: 2px solid #aaa;
    background: #fff;
}

.item-combine{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 12px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    position: relative;
    border-top: 1px solid #ccc;
}

.item-item{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 12px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    margin: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    position: relative;
    line-height: 20px;
    background: #fff;
    padding: 0 0 1px 40px;
    clear: both;
    border: 0;
}

.item-form{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 12px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    line-height: 20px;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: content-box;
    display: block;
    border-top: 1px solid #f0f0f0;
}

.p-checkbox{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 12px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    line-height: 20px;
    margin: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    float: left;
    padding: 15px 0 10px;
    z-index: 3;
    width: 30px;
    min-height: 10px;
    margin-left: 10px;
    position: absolute;
    left: 0;
    top: 0;
}

.p-goods{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 12px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    line-height: 20px;
    margin: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    float: left;
    padding: 15px 0 10px;
    width: 300px;
}

.goods-item{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 12px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    line-height: 20px;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: content-box;
    display: block;
}

.p-img{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 12px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    line-height: 20px;
    margin: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
    margin-right: 10px;
    background: #fff;
    padding: 0;
    text-align: center;
    overflow: visible;
}

.p-msg{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 14px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    line-height: 20px;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;
}

.p-price{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 12px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    line-height: 20px;
    margin: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    overflow: hidden;
    float: left;
    padding: 15px 0 10px;
    position: relative;
    width: 150px;
    padding-right: 40px;
    text-align: right;
    outline: none;
    padding-top: 50px;
}

.p-price-cont{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    line-height: 20px;
    text-align: right;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    color: #333;
}

.p-quantity{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 12px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    line-height: 20px;
    margin: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    float: left;
    padding: 15px 0 10px;
    width: 200px;
}
.p-sum{
    padding-top: 50px;
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 20px;
    line-height: 20px;
    margin: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    float: left;
    
    width: 200px;
    padding-right: 40px;
    text-align: right;
    font-family: verdana;
}

.p-ops{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #434343;
    font-size: 12px;
    font-family: verdana,Microsoft YaHei,SimSun,-apple-system,BlinkMacSystemFont,PingFang SC;
    line-height: 20px;
    margin: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;
    float: left;
    padding: 40px 0;
    width: 100px;
}

</style>