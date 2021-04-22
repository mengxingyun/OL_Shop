<template>
    <div>
        <el-card class="box-card" style="width: 800px;margin-top: 2px0; margin-left: 400px; min-height:800px;">
            <div class="item-list" style="display:box; border: 1px solid #f1f1f1; padding: 20px;" v-for="item in state.list" :key="item.id">
                <div class="default" style="display:table-cell; width: 50px;">
                    <el-checkbox v-model="item.isdefault" disabled></el-checkbox>
                </div>
                <div class="addrmsg" style="display:table-cell;width: 600px; ">
                    <div>{{item.name}} {{item.telphone}} {{item.addr}}</div>
                </div>
                <div style="display:table-cell;width: 100px;">
                    <el-button type="primary" icon="el-icon-edit" circle @click="$router.push({path:'/profile/addrdetail', query:{id:item.id}})"></el-button>
                </div>
            </div>
        </el-card>
    </div>
    <el-card class="box-card" style="width: 800px; margin-left: 400px">
    <div class="card-header">
        <el-button type="danger" round style="font-size:20px" @click="$router.push({path:'/profile/addrdetail', query:{id: 0}})">添加地址</el-button>
    </div>
    </el-card>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import { deleteAddress, getAddressList} from 'network/address';
export default {
    name: "Address",
    setup() {
        const checked = ref(false);
        const state = reactive({
            list: []
        })
        onMounted(() => {
            const token = window.localStorage.getItem('token');
            getAddressList(token).then((res) => {
                state.list = res;
                console.log('----',state.list);
            });

        })
        return {
            checked,
            state
        }
       
    }
}
</script>

<style scoped>

</style>