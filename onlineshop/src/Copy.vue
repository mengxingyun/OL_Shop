<template>
  <div id="nav">
    <router-link class="tar-bar-item" to="/">
      <div><i  class="iconfont icon-zhuye4"></i></div>
      <div>首页</div>
    </router-link>
    <router-link class="tar-bar-item" to="/category">
      <div><i class="iconfont icon-leimupinleifenleileibie"></i></div>
      <div>分类</div>
    </router-link>
    <router-link class="tar-bar-item" to="/shopcart">
      <div><i class="iconfont icon-gouwuche"></i></div>
      <div>购物车</div>
    </router-link>
    <router-link class="tar-bar-item" to="/profile">
      <div><i class="iconfont icon-gerenzhongxin-zhong"></i></div>
      <div>个人中心</div>
    </router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import 'assets/css/base.css';
@import 'assets/css/iconfont.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
