<template>
  <div class="myCollect">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>信息收藏</span>
      </div>
      <div class="item" :key="i" v-for="i in items">
        <div class="item_bj">
          招标
        </div>
        <div class="item_text">
          <p class="textName">汉中市传染病医院（汉中市第二人民医院）关于康复治疗设备采购客户收到客户回款我家搜户籍上的项目</p>
          <div class="label">
            <span>建筑工程</span>
            <span>陕西省 西安市</span>
            <span>今天</span>
          </div>
        </div>
        <div class="unLike">
          取消收藏
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
    export default {
        name: "myCollect",
      data: function () {
        return {
          items: [1,2,3,4,5,6]
        }
      }
    }
</script>
<style>
  .myCollect .el-card .el-card__body {
    padding-top: 0;
  }
</style>
<style scoped>
.myCollect .el-card {
  text-align: left;
}
.myCollect .el-card .item {
  border-bottom: 1px solid #f0f0f0;
}
.myCollect .el-card .item .item_bj {
  margin: 25px 20px;
  display: inline-block;
  text-align: center;
  font-size: 14px;
  color: #fff;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background-image: url("~/assets/image/type_bg.png");
  background-size: cover;
}
.myCollect .el-card .item .item_text {
  max-width: 70%;
  display: inline-block;
  vertical-align: middle;
}
.myCollect .el-card .item .item_text .textName {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 28px;
  color: #3e3e3e;
}
.myCollect .el-card .item .item_text .label {
  font-size: 12px;
  line-height: 24px;
  color: #676767;
}
.myCollect .el-card .item .unLike {
  float: right;
  margin: 28px 2% 0 0;
  font-size: 14px;
}
  .unLike:before {
    content: url("~/assets/image/collect_red.png");
    vertical-align: sub;
  }
</style>
