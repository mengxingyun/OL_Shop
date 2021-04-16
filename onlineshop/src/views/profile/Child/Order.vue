<template>
    <el-card class="box-card-header" style="width: 800px; margin-left: 400px">
        <div class="card-header" style="display:flex">
          <el-button type="primary" plain style="font-size:20px; flex:1" @click="getNoPay">待支付订单</el-button>
          <el-button type="primary" plain style="font-size:20px;flex:1" @click="getHasPay">已支付订单</el-button>
          <el-button type="primary" plain style="font-size:20px;flex:1" @click="getEnd">已结束订单</el-button>
          <el-button type="primary" plain style="font-size:20px;flex:1" @click="getCancel">已取消订单</el-button>
        </div>

    </el-card>

    <el-card class="box-card2" style="width: 800px;margin-top: 2px0; margin-left: 400px; min-height:800px;">
        <div class="item-list" style="display:box; border: 1px solid #f1f1f1; padding: 20px;" v-for="item in orderlist.list" :key="item.id">
            <div class="addrmsg" style="display:table-cell;width: 300px; ">
                <span>订单号: {{ item.order_no }}</span>
            </div>
            <div class="price" style="display:table-cell;width: 300px; ">
                <span>总金额: ￥{{ item.sum }}</span>
            </div>
            <div style="display:table-cell;width: 100px;">
                <el-button type="primary" icon="el-icon-edit" circle @click="goToDetail(item.id, item.status, item.addr_id)"></el-button>
            </div>
        </div>
    </el-card>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { getOrderList} from 'network/order';
import { useRouter } from 'vue-router';
export default {
    name: "Order",
    setup() {   
        const router = useRouter();

        const orderlist = reactive({
            list: [],
        })

        const getNoPay = () => {
            const token = window.localStorage.getItem('token');
            const status = 1;
            getOrderList(token, status).then((res) => {
                console.log("获取的未支付订单", res);
                orderlist.list = res;
            })
        }

        const getHasPay = () => {
            const token = window.localStorage.getItem('token');
            const status = 2;
            getOrderList(token, status).then((res) => {
                console.log("获取的未支付订单", res);
                orderlist.list = res;
            })
        }

        const getCancel = () => {
            const token = window.localStorage.getItem('token');
            const status = 0;
            getOrderList(token, status).then((res) => {
                console.log("获取的未支付订单", res);
                orderlist.list = res;
            })
        }

        const getEnd = () => {
            const token = window.localStorage.getItem('token');
            const status = 3;
            getOrderList(token, status).then((res) => {
                console.log("获取的未支付订单", res);
                orderlist.list = res;
            })
        }

        const init = () => {
            const token = window.localStorage.getItem('token');
            const status = 1;
            getOrderList(token, status).then((res) => {
                console.log("获取的未支付订单", res);
                orderlist.list = res;
            })
        }


        const goToDetail = (id, status, addr_id) => {
            if(status == "1"){
                router.push({path:"/profile/ordernopay", query:{order_id:id, addr_id}})
            }
            else if(status == "2"){
                router.push({path:"/profile/orderhaspay", query:{order_id:id, addr_id}})
            }
            else{
                router.push({path:"/profile/orderend", query:{order_id:id, addr_id}})
            }
        }

      

        onMounted(() => {
            init()
        })

        return{
            orderlist,
            goToDetail,
            getNoPay,
            getHasPay,
            getCancel,
            getEnd
        }
    }
}
</script>

<style>
</style>