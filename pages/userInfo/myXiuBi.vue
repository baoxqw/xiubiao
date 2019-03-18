<template>
  <div class="myXiuBi">
    <el-card class="box-card" shadow="never">
      <el-tabs v-model="activeName">
        <el-tab-pane label="嗅币兑换" name="convert">
          <div :key="i" v-for="i in items" class="item_convert">
            <span class="day">VIP会员7天</span>
            <span class="score">
              <span style="color: #ff2741;">100</span>
              积分
            </span>
            <span class="onConvert">
              立即兑换
            </span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="嗅币记录" name="record" class="record">
          <!--订单表头-->
          <div class="header">
            <span class="time">兑换时间</span>
            <span class="project">项目</span>
            <span class="score">所用积分</span>
          </div>
          <div class="body">
            <div class="item" :key="i" v-for="i in items">
              <span>2018-12-09 17:23:32</span>
              <span>30天会员</span>
              <span>
                <span style="color: #ff2741;">-100</span>
                积分
              </span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="嗅币规则" name="rule">嗅币规则</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "myXiuBi",
    data: function () {
      return {
        activeName: 'convert',
        items: [1,2,3,4,5,0,6,7,8,9]
      }
    }
  }
</script>
<style>
  .myXiuBi .el-card .el-tabs__header {
    height: 59px;
    line-height: 59px;
    margin: 0;
  }
  .myXiuBi .el-card .el-card__body {
    padding-top: 0;
  }
  .myXiuBi .el-card .el-tabs__header .el-tabs__item {
    font-size: 16px;
    font-weight: normal;
    color: #666;
  }
  .myXiuBi .el-card .el-tabs__header .el-tabs__active-bar {
    background-color: #ff2741;
  }
</style>
<style scoped>
  .myXiuBi .el-card .item_convert {
    border-bottom: 1px solid #f0f0f0;
    text-align: left;
  }

.myXiuBi .item_convert .day,.myXiuBi .item_convert .score,.myXiuBi .item_convert .onConvert {
  display: inline-block;
  margin-right: 50px;
  text-align: center;
  width: 25%;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: #434343;
}
  .myXiuBi .item_convert .onConvert {
    vertical-align: middle;
    cursor: pointer;
    margin-left: 50px;
    width: 110px;
    height: 32px;
    text-align: center;
    border: 1px solid #ff2741;
    border-radius: 16px;
    line-height: 32px;
    color: #ff2741;
  }


  .myXiuBi .record .header {
    text-align: left;
    background-color: #f9f9f9;
  }
  .myXiuBi .record .header > span {
    display: inline-block;
    text-align: center;
    line-height: 45px;
    height: 45px;
    width: 30%;
    font-size: 14px;
    color: #525252;
  }
  .myXiuBi .record .body .item {
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #434343;
  }
  .myXiuBi .record .body .item > span {
    text-align: center;
    display: inline-block;
    height: 45px;
    width: 30%;
  }
  .myXiuBi .record .body .item .red {
    width: 150px;
    color: #ff2741;
  }
</style>
