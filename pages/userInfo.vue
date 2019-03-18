<template>
  <div class="userInfo container">
    <div class="leftCard">
      <div class="userCard">
        <div class="user">
          <img style="width: 81px; height: 81px;" src="~/assets/image/zhihu.png" alt="">
          <p class="name">西安极数宝</p>
          <div class="date"><span>2018-12-25</span>到期</div>
        </div>
        <nuxt-link class="button_vip" to="/vip">
          立即续费
        </nuxt-link>
      </div>
      <div class="navCard">
        <el-menu
          :default-active='$route.path'
          :router="true"
          class="el-menu-vertical-demo">
          <el-menu-item index="/userInfo">
            <b class="b_tit"></b><span slot="title">账号管理</span>
          </el-menu-item>
          <el-menu-item index="/userInfo/myCollect">
            <b class="b_tit"></b><span slot="title">我的收藏</span>
          </el-menu-item>
          <el-menu-item index="/userInfo/addSubscribe">
            <b class="b_tit"></b><span slot="title">添加订阅</span>
          </el-menu-item>
          <el-menu-item index="/userInfo/orderManage">
            <b class="b_tit"></b><span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="/userInfo/myXiuBi">
            <b class="b_tit"></b><span slot="title">我的嗅币</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view class="cardItem"></router-view>
  </div>
</template>

<script>
  export default {
    name: "userInfo"
  }
</script>

<style scoped>
  .userInfo {
    margin: 30px auto;
  }
  .userInfo .leftCard {
    display: inline-block;
    width: 246px;
    min-height: 703px;
  }

  .leftCard, .cardItem {
    display: inline-block;
  }

  .userInfo .userCard {
    padding: 25px 0;
    border-radius: 5px;
    height: 248px;
    width: 100%;
    background-color: #fff;
  }
  .userInfo .cardItem {
    width: 70%;
    margin-left: 25px;
    display: inline-block;
    vertical-align: top;
  }
  .userInfo .userCard .user .name {
    line-height: 32px;
    font-size: 16px;
    color: #575757;
    font-weight: bold;
  }
  .userInfo .userCard .user .date {
    margin-bottom: 16px;
    color: #757575;
    font-size: 13px;
    line-height: 20px;
  }
  .userInfo .button_vip {
    margin: 0 auto;
    font-size: 14px;
    color: #fff;
    line-height: 42px;
    display: block;
    border-radius: 6px;
    width: 212px;
    height: 42px;
    background-color: #ff2741;
  }

  .userInfo .navCard {
    text-align: left;
    border-radius: 5px;
    font-size: 14px;
    color: #474747;
    margin-top: 20px;
    height: 365px;
    width: 100%;
    background-color: #fff;
  }
  .userInfo .navCard .el-menu {
    border-radius: 5px;
   
  }
  .userInfo .el-menu-item{
    color:#000;
    height:52px;
    line-height:52px;
    padding:0!important;
  }

  .b_tit{
    display:inline-block;
    width:4px;
    background:#fff;
    height:20px;
    margin-right:20px;
  }
  .userInfo .el-menu-item:hover .b_tit{
    background:#ff2341;
   }
  .userInfo .el-menu-item:hover{
    background:#ff2341;
    color:#fff;
   }
  .userInfo .navCard .is-active {
    background: #fff;
    font-size: 15px;
    color:#000;
    height:52px;
    line-height:52px;
    font-size: 15px;
  }
  .userInfo .navCard .is-active .b_tit{
    background:#ff2341;
  }
</style>
