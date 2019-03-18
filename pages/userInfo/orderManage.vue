<template>
  <div class="orderManage">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>订单记录</span>
      </div>
      <!--订单表头-->
      <div class="header">
        <span style="width: 35%" class="number">订单编号</span>
        <span class="time">订单时间</span>
        <span class="project">项目</span>
        <span style="width: 15%" class="price">价格</span>
      </div>
      <div class="body">
        <div class="item" :key="i" v-for="i in items">
          <span style="width: 35%">********610529192919920</span>
          <span>2018-12-09 17:23:32</span>
          <span>普通会员30天</span>
          <span style="width: 15%" class="red">￥68</span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "orderManage",
    data: function () {
      return {
        items: [1,2,3,4,5,0,6,7,8,9]
      }
    }
  }
</script>
<style>
  .orderManage .el-card__body {
    padding: 0;
  }
</style>
<style scoped>
  .orderManage .el-card {
    text-align: left;
    min-height: 633px ;
  }
  .orderManage .header {
    background-color: #f9f9f9;
  }
  .orderManage .header > span {
    display: inline-block;
    text-align: center;
    line-height: 45px;
    height: 45px;
    width: 25%;
    font-size: 14px;
    color: #525252;
  }
  .orderManage .header .price {
    width: 150px;
  }
  .orderManage .body .item {
    border: 1px solid #f9f9f9;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #434343;
  }
  .orderManage .body .item > span {
    text-align: center;
    display: inline-block;
    height: 45px;
    width: 25%;
  }
  .orderManage .body .item .red {
    width: 150px;
    color: #ff2741;
  }
</style>
