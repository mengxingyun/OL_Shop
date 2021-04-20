<template>
    

  <div class="content" style="display:box">
    <div class="leftMenu" style="display:table-cell">
      <el-menu
      :uniqueOpened="true"
      default-active="1"

      class="el-menu-vertical-demo">

      <router-link to="/profile/address">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <template #title>地址列表</template>
        </el-menu-item>
      </router-link>
      <router-link to="/profile/order">
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <template #title>订单列表</template>
        </el-menu-item>
      </router-link>
      <div  @click="toLogout">
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <template #title>退出登录</template>
      </el-menu-item>
      </div>
      
      </el-menu>
    </div>
    <div class="rightContent" style="display:table-cell; width: 100%">
      <router-view/>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
import { logout, getUserData } from "network/user";
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: "Profile",
    setup(){
        const router = useRouter();
        const state = reactive({
          user: {}
        })

        const handleOpen = (key, keyPath) => {
          console.log(key, keyPath);
        }

        // onMounted(() => {
        //   router.push({path:'/profile/address'})
        // })

        return {
            state,
            handleOpen
        }
    },
    methods: {
        success() {
        this.$alert('已退出', '提示', {
          confirmButtonText: '确定',
        });
      },

      fail(){
        this.$alert('请先登录', '提示', {
          confirmButtonText: '确定',
        });
      },

      toLogout(){
        const token = window.localStorage.getItem('token');
        logout({type: 'Logout', token}).then(res => {
            console.log("退出登录返回的信息: ", res.data.flag);
            if(res.data.flag){
                window.localStorage.setItem('token', ''); //清除token
                console.log(token);
                this.success();
                this.$store.commit('setIsLogin', false)
                setTimeout(() => {
                    this.$router.push({path: '/login'})
                }, 500)
            }
            else{
                this.fail();
                setTimeout(() => {
                    this.$router.push({path: '/login'})
                }, 500)
            }
        })
      }
    }
}
</script>

<style>
.box-card{
  position: sticky;
    bottom: 0px;
    z-index: 50;
}
</style>