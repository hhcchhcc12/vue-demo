<template>
  <div class="page page-current">
    <nav class="bar bar-tab">
      <router-link class="tab-item" to= "/home" >
        <span class="icon icon-home"></span>
        <span class="tab-label">首页</span>
      </router-link>
      <router-link class="tab-item"  :to= "msg" data-transition='slide-in'>
        <span class="icon icon-star"></span>
        <span class="tab-label">收藏</span>
      </router-link>
      <router-link class="tab-item" to= "/me" data-transition='slide-in'>
        <span class="icon icon-me"></span>
        <span class="tab-label">我</span>
      </router-link>
    </nav>
    <router-view ></router-view>

  </div>
</template>

<style>

.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>

<script >
export default{
    data:function(){
        return{
            msg:"/favorite/xxxx"
        }
    }
}
</script>

