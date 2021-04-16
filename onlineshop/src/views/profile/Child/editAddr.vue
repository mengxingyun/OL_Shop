<template>
<div style="min-height: 700px;">
<el-card class="box-card" style="width: 800px;margin:20px auto;">


  <el-form ref="form" :model="sizeForm" label-width="80px" size="medium">
    <el-form-item label="姓名">
      <el-input v-model="sizeForm.name" style="width:600px; font-size: 16px;"></el-input>
    </el-form-item>

    <el-form-item label="电话">
      <el-input v-model="sizeForm.telphone" style="width:600px"></el-input>
    </el-form-item>

    <el-form-item label="地址">
      <el-input v-model="sizeForm.addr" style="width:600px"></el-input>
    </el-form-item>
    
    <el-form-item label="默认地址">
        <el-switch v-model="sizeForm.isdefault"></el-switch>
    </el-form-item>
    
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button type="primary" @click="onDelete">删除</el-button>
    </el-form-item>
  </el-form>
</el-card>
</div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import {addAddress, editAddress, deleteAddress, getAddressDetail} from 'network/address';
import { ElMessage } from 'element-plus';
import { useRoute, useRouter } from 'vue-router';
export default {
  name: "editAddr",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const sizeForm = reactive({
        name: '',
        telphone: '',
        addr: '',
        isdefault: false
    })
    
    const onSubmit = () => {
        if(sizeForm.name == ''){
            ElMessage.warning({
                message: '姓名不能为空哦',
                type: 'warning',
                offset: 300
            });
        }
        else if(sizeForm.telphone==''){
            ElMessage.warning({
                message: '电话不能为空哦',
                type: 'warning',
                offset: 300
            });
        }
        else if(sizeForm.addr==''){
            ElMessage.warning({
                message: '地址不能为空哦',
                type: 'warning',
                offset: 300
            });
        }
        else{
            console.log(sizeForm.name);
            const token = window.localStorage.getItem('token');
            const id = route.query.id;
            if (id == 0){
                const data = {
                    type: 'addAddress',
                    name: sizeForm.name,
                    telphone: sizeForm.telphone,
                    addr: sizeForm.addr,
                    isdefault: sizeForm.isdefault,
                    token
                }
                addAddress(data).then((res) => {
                    ElMessage.success({
                    message: '成功添加地址',
                    type: 'warning',
                    offset: 300
                    });
                    router.push({path:"/profile/address"})
                })
            }
            else{
                const data = {
                    type: 'EditAddress',
                    name: sizeForm.name,
                    telphone: sizeForm.telphone,
                    addr: sizeForm.addr,
                    isdefault: sizeForm.isdefault,
                    token,
                    id
                }
                editAddress(data).then((res) => {
                    console.log(res);
                    router.push({path:'/profile/address'})
                })
            }
           
            
        }
    }
    const onDelete = () => {
        const token = window.localStorage.getItem('token');
        const id = route.query.id;
        if(id == 0){
             ElMessage.warning({
                message: '还未创建呢',
                type: 'warning',
                offset: 300
            });
        }
        else{
            const data = {
                type : "DeleteAddress",
                token,
                id
            }
            deleteAddress(data).then((res)=>{
                console.log(res);
                router.push({path:'/address'})
            })
            
        }
        
    }

    onMounted(() => {
        const token = window.localStorage.getItem('token');
        const id = route.query.id;
        if(id == 0){
            sizeForm.name = '';
            sizeForm.telphone = '';
            sizeForm.addr = '';
            sizeForm.isdefault = false;
        }
        else{
            getAddressDetail(token, id).then((res) => {
            sizeForm.name = res.name;
            sizeForm.telphone = res.telphone;
            sizeForm.addr = res.addr;
            sizeForm.isdefault = res.isdefault;
        })

        }
        
    })

    return {
        sizeForm,
        onSubmit,
        onDelete
    }
    
}
};
</script>

<style>
</style>