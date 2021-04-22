<template>
  <div id="header">
    <div class="w">
      <div id="logo" class="logo">
        <a href="#" class="logo_scene logo_scene_hide">
          <img class="logo_scene_img" src="./assets/img/heihei.gif">
        </a>
      </div>

      <div id="search">
        <div class="form" role="searchbox">
          <input type="text" autocomplete="off" class="text" aria-label="搜索" style="background: transparent;" v-model="data">
          
          <button class="button" aria-label="搜索" @click="Sea"><i  class="iconfont icon-sousuo"></i></button>
          
        </div>
      </div>

      <div id="navitems" role="navigation">
          <router-link class="tar-bar-item" to="/">
            <div><i  class="iconfont icon-zhuye4"></i></div>
            <div style="font-size: 24px">首页</div>
          </router-link>
        
          <router-link class="tar-bar-item" to="/category">
            <div><i class="iconfont icon-leimupinleifenleileibie"></i></div>
            <div style="font-size: 24px">分类</div>
          </router-link>
        
          <router-link class="tar-bar-item" to="/shopcart">
            <div><i class="iconfont icon-gouwuche"></i></div>
            <div style="font-size: 24px">购物车</div>
          </router-link>
         
          <router-link class="tar-bar-item" to="/profile/address">
            <div><i class="iconfont icon-gerenzhongxin-zhong"></i></div>
            <div style="font-size: 24px">个人中心</div>
          </router-link>

          <router-link class="tar-bar-item" to="/onlineplay">
            <div><i class="iconfont icon-zhibobofangshexiangjitianxianmianxing"></i></div>
            <div style="font-size: 24px">直播</div>
          </router-link>
        
      </div>
    </div>

  </div>
  <router-view :key="$router.fullPath" />
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: "Category",
  setup() {
    const data = ref('');
    const router = useRouter();
    const Sea = () => {
      
      router.push({path:'/search', query:{data:data.value}});
     
    }
    return {
      data,
      Sea
    }
  },
  components: {
    
  }
}
</script>


<style lang="scss">
@import 'assets/css/base.css';
@import 'assets/css/iconfont.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#F4F4F4 ;
}

#nav {
  padding: 30px;
  background: #F6F6F6;
  display: flex;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--color-high-text);
    }
  }

  .tar-bar-item {
    flex: 1;
  }
}

.logo_scene_img{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    padding: 0;
    color: #666;
    text-decoration: none;
    background-image: url(//misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/sprite/header/sprite.png);
    background-position: 0 0;
    background-repeat: no-repeat;
    overflow: hidden;
    display: block;
    width: 100px;
    height: 100px;
    font-size: 0;
    margin-top: 20px ;
    margin-left: 600px;
    
}

#header{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    margin: 0;
    padding: 0;
    background: #fff;
    border-bottom: 1px solid #ddd;

    position: sticky;
    top: 0px;
    z-index: 100;
}

.text{
    -webkit-font-smoothing: antialiased;
    margin: 0;
    font-family: Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    position: absolute;
    top: 0;
    outline: none;
    color: #333;
    left: 0;
    padding: 2px 44px 2px 17px;
    height: 50px;
    border: 1px solid transparent;
    line-height: 26px;
    font-size: 20px;
    width: 400px;
    background: transparent;
}

.form{
    -webkit-font-smoothing: antialiased;
    font: 12px/1.5 Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    color: #666;
    margin: 0 500px;
    padding: 0;
    position: absolute;
    top: 25px;
    height: 50px;
    border: 2px solid #e2231a;
    background: #fff;
    width: 486px;
    left: 220px;
    margin-top: 30px;
}

.button{
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    cursor: pointer;
    font-family: Microsoft YaHei,Heiti SC,tahoma,arial,Hiragino Sans GB,"\5B8B\4F53",sans-serif;
    position: absolute;
    top: 0;
    outline: none;
    border-radius: 0;
    right: 0;
    width: 100px;
    height: 48px;
    line-height: 32px;
    border: none;
    background-color: #e1251b;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    transition: background .2s ease;
}

#navitems{
  display: flex;
  .tar-bar-item{
    flex: 1;
  }
    a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--color-high-text);
    }
  }
}


</style>
