<template>
    <div class="wrapper">
        <div class="detail">
            <div class="detailwrapper">
                <div class="goodtitle">
                    <h1> 	
                        {{ good.mes.name }}
                    </h1>
                </div>

                <div class="pricewrapper" style="text-align: left;">
                    
                        <span class="title">价格&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span class="pricedd"><em class="yen">¥</em><span class="price"> {{ good.mes.price }} </span></span>
                    
                </div>

                <div style="padding: 10px">
                    <span style="font-size:20px; float: left;">销量</span>
                    <span style="font-size:20px;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ good.mes.sellnum }} </span>
                </div>

                <div style="padding: 10px">
                    <span style="font-size:20px; float: left;">库存</span>
                    <span style="font-size:20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ good.mes.stock}} </span>
                </div>

                <div style="padding: 10px">
                    <span style="font-size:20px; float: left;">类别</span>
                    <span style="font-size:20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ cates[good.mes.cate] }} </span>
                </div>

                <el-input-number v-model="num" :min="1" :max="good.mes.stock" label="描述文字" style="margin-top: 20px;"></el-input-number>

                <el-row style="margin-top: 20px; margin-left: 260px">
                    <el-button type="danger" plain @click="toBuy">立即购买</el-button>
                    <el-button type="danger" plain @click="toAddCart">加入购物车</el-button>
                </el-row>
                
            </div>
        </div>

        <div class="picwrapper">
            <div class="piccon">
                <a class="picw">
                    <span class="ks-imagezoom-wrap">
                        <img :src="good.mes.url" class="pic">
                    </span>
                </a>
            </div>

        </div>
    </div>

</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {getDetail} from 'network/detail';
import { addCart, toCart } from 'network/cart';
import { ElMessage } from 'element-plus';

export default {
    name: "Detail",
    setup() {
        
        const cates = ref(["饮食", "服装", "书籍", "电子", "母婴", "家具"]);
        const route = useRoute();
        const router = useRouter();
        let id = ref(0);
        let good = reactive({
            mes: {}
        });
        let num = ref(1);

        const toAddCart = () => { //加入购物车
            const id = good.mes.id;
            const token = window.localStorage.getItem('token');
            const number = num.value;
            const carItem = {
                type: 'Addcart',
                id,
                token,
                number
            }
            console.log(token, '将', id, '加入了购物车');
            addCart(carItem).then(res => {
                if(res.data.ans == 'Unlog'){
                    ElMessage.warning({
                        message: '请先登录哦',
                        type: 'warning',
                        offset: 300
                    });
                }
                else if(res.data.ans == 'hasIn'){
                    ElMessage.warning({
                        message: '该商品您已经加入了购物车哦',
                        type: 'warning',
                        offset: 300
                    });
                }
                else{
                    ElMessage.success({
                        message: '成功加入购物车',
                        type: 'success',
                        offset: 300
                    });
                }
            })
        }

        const toBuy = () => { //立即购买
            const id = good.mes.id;
            const token = window.localStorage.getItem('token');
            const number = num.value;
            const carItem = {
                type: 'toBuy',
                id,
                token,
                number
            }
            toCart(carItem).then(res => {
            if(res.data.ans == 'Unlog'){
                ElMessage.warning({
                    message: '请先登录哦',
                    type: 'warning',
                    offset: 300
                });
                router.push({path:'/login'})
            }
            else{
                router.push({path:'/shopcart'})
            }
        })
        }

        onMounted(() => {
            id.value = route.query.id;
            getDetail(id.value).then((res) => {
                good.mes = res.list[0];
                console.log(good);
            })
        })

        return{
            id,
            good,
            num,
            cates,
            toAddCart,
            toBuy

        }

    }
}
</script>

<style scoped>
.wrapper{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    color: #404040;
    font-family: tahoma,arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
    padding: 0;
    margin: 20px auto;
    width: 1190px!important;
}

.detail{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    color: #404040;
    font-family: tahoma,arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
    margin: 0;
    padding: 0;
    float: left;
    width: 100%;
}

.detailwrapper{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    font-family: tahoma,arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
    margin: 0 0 0 460px;
    color: #666;
    padding: 0 0 10px;
}

.goodtitle{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    font-family: tahoma,arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
    margin: 0;
    padding: 20px 10px 12px;
    color: #000;
}

.pricewrapper{
    color: #666;
    margin: 0;
    padding: 0;
    background-image: url(data:image/png;base64,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);
    background-color: #e9e9e9;
    background-repeat: no-repeat;
    position: relative;
    left: 0;
    z-index: 10;
    font: 12px/1.5 "Microsoft Yahei",tahoma,arial;
    padding-bottom: 5px;
    padding-top: 5px;
    margin-right: 20px;
}

.pricename{
    font: 12px/1.5 "Microsoft Yahei",tahoma,arial;
    margin: 0;
    padding: 0;
    position: static;
    color: #333;
    padding-left: 0;
    line-height: 30px;
}

.pricedd{
    font: 12px/1.5 "Microsoft Yahei",tahoma,arial;
    line-height: 30px;
    margin: 0;
    padding: 0;
    position: relative;
    color: #333;
    margin-left: 70px;
    font-family: Arial;
}

.title{
    font: 12px/1.5 "Microsoft Yahei",tahoma,arial;
    line-height: 30px;
    padding: 0;
    color: #999;
    font-size: 20px;
    text-align: left;
    width: 69px;
    margin: 0 0 0 8px;
}

.yen{
    font: 12px/1.5 "Microsoft Yahei",tahoma,arial;
    line-height: 30px;
    margin: 0;
    padding: 0;
    font-style: normal;
    font-family: Arial;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    vertical-align: middle;
    color: #FF0036;
    font-size: 18px;
}

.price{
    font: 12px/1.5 "Microsoft Yahei",tahoma,arial;
    line-height: 30px;
    margin: 0;
    padding: 0;
    font-family: Arial;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    vertical-align: middle;
    color: #FF0036;
    font-size: 24px;
    font-weight: bolder;
}


.picwrapper{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    color: #404040;
    font-family: tahoma,arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
    margin: 0;
    padding: 0;
    margin-left: -100%;
    float: left;
    width: 460px;
    position: relative;
}

.piccon{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    color: #404040;
    font-family: tahoma,arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
    padding: 0;
    position: relative;
    display: table;
    table-layout: fixed;
    z-index: 1;
    width: 420px;
    height: 420px;
    margin: 20px auto 0;
}

.picw{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    font-family: tahoma,arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #35a;
    outline: 0;
    width: 418px;
    height: 418px;
    border: 1px solid rgba(0,0,0,.05);
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.ks-imagezoom-wrap{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    font-family: tahoma,arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
    color: #35a;
    text-align: center;
    padding: 0;
    margin: -1px 0 0 -1px;
}

.pic{
    font: 12px/1.5 tahoma,arial,"\5b8b\4f53";
    font-family: tahoma,arial,\5FAE\8F6F\96C5\9ED1,sans-serif;
    color: #35a;
    text-align: center;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
}

.stock{
    font-size: 20px;
}
</style>