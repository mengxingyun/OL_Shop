<template>
    <el-card class="box-card" style="width: 1200px; margin: 0 auto">
        <div class="card-header" style="display:box;"> 
            <div style="display:table-cell;width: 800px; font-size: 20px;">{{ state.address.name }} {{ state.address.telphone }} {{ state.address.addr }}</div>
            <div style="display:table-cell;width: 400px;">
                <el-button type="primary" plain @click="$router.push({path: '/address'})"> 修改默认地址</el-button>
            </div>
        </div>
    </el-card>
    <el-card class="box-card" style="width: 1200px; margin: 0 auto;min-height:600px;">
        <div class="item-list" style="display:box; border: 1px solid #f1f1f1; padding: 20px;" v-for="item in state.carlist" :key="item.id" >
            <div class="default" style="display:table-cell; width: 100px; height:100px; float:left">
                <img :src="item.url" style="width: 100%;height:100%;object-fit:cover;">
            </div>
            <div class="addrmsg" style="display:table-cell;width: 600px; text-align:center; font-size:20px;">
                {{ item.name }}
            </div>
            <div style="display:table-cell;width: 100px; text-align:center; font-size: 20px;">
                 <span class="p-price-cont">数量: {{ item.num }}</span>
            </div>

            <div style="display:table-cell;width: 200px; text-align:center; font-size: 20px;">
                单价: <strong>¥{{ item.price }}</strong>
            </div>

            <div style="display:table-cell;width: 200px; text-align:center; font-size: 20px;">
                小计: <strong>¥{{ item.price * item.num }}</strong>
            </div>
            
            <div style="clear:both;"></div>
        </div>
    </el-card>
    <el-card class="box-bottom" style="width: 1200px; margin: 0 auto">
        <div class="card-header"> 
           
            <span>
                <span class="txt">总价:</span>
                <em class="price">￥{{ total}}</em>
            </span>
            
            <el-button type="success" round style="font-size:20px" @click="CreOrder">创建订单</el-button>
            <el-button type="danger" round style="font-size:20px" @click="$router.push({path:'/shopcart'})">取消订单</el-button>
        </div>
    </el-card>
</template>

<script>
import { onMounted, reactive, computed } from 'vue';
import { getOrderPre, createOrder } from 'network/order';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
export default {
    name: "CreateOrder",
    setup() {
        const router = useRouter();
        const state = reactive({
            carlist: [], //购物车列表
            address: {}// 默认地址信息
        })

        const init = () => {
            const token = window.localStorage.getItem('token');
            getOrderPre(token).then((res) => {
                console.log(res);
                
                if(res.address == 'nothing'){
                    ElMessage.warning({
                        message: '清先选择默认地址哦',
                        type: 'warning',
                        offset: 300
                    });
                    router.push({path:'/address'})
                }
                else{
                    state.carlist = res.carlist;
                    state.address = res.address;
                }
            });
        }

        const total =  computed(() => {
          let sum = 0;
          for(let i = 0; i < state.carlist.length; i++){
            sum = sum + state.carlist[i].num * state.carlist[i].price;
          }
          return sum;
        })

        const CreOrder = () => {
            const token = window.localStorage.getItem('token');
            const addr_id = state.address.id;
            const sum = total.value;
            const goodlist = state.carlist;
            console.log(goodlist);
            const data = {
                type: "CreateOrder",
                token,
                addr_id,
                sum,
                goodlist
            }
            createOrder(data).then((res) => {
                const flag = res.data.flag;
                if (!flag)
                {
                    ElMessage.warning({
                    message: '您选择的商品库存不足哦',
                    type: 'warning',
                    offset: 300
                    });
                    router.push({path:'/shopcart'})
                }
                else{
                     ElMessage.success({
                    message: '订单创建成功',
                    type: 'warning',
                    offset: 300
                    });
                    router.push({path:'/shopcart'})
                }
            })
        }

        onMounted(() => {
            init();
            
        })

        return{
            state,
            total,
            CreOrder
        }
    }
}
</script>

<style scoped>
.box-bottom{
    position: sticky;
    bottom: 0px;
    z-index: 50;
}
.price{
    -webkit-text-size-adjust: 100%;
    font: 12px/150% tahoma,arial,Microsoft YaHei,Hiragino Sans GB,"\u5b8b\u4f53",sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 20px;
    font-style: normal;
    margin-left: 10px;
    margin-right: 100px;
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
    margin-right: 0px;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: content-box;

    width: 50px;
    text-align: right;
    color: #999;
  }



</style>