<template>
  <div class="container">
    <el-container>
      <el-main>
        <div class="title">
          <div calss="con_tit" style="width:100%;overflow:hidden">
            <h2 class="con_titLef" 
            style="width:80%;color:#3e3e3e;font-size:24px;float:left;vertical-align:middle">
            {{data.title}}
            </h2>
            <span class="con_titRig" style="float:right;vertical-align:top;margin-top:5px;font-size:14px;color:#4d4d4d">
              <span class="love" @click="switchChecked" v-if="data.collection" style="color:#ff2341">
                <img src="~/assets/image/collect_red.png" alt="">
                <span>取消收藏</span>
               </span>
              <span class="love" @click="switchChecked" v-else style="color:#6e6e6e">
                <img src="~/assets/image/collect.png" alt="">
                <span>收藏</span>
              </span>
            </span>
          </div>
          <!-- <span></span> -->
          <div class="tag">
            <span>
              <i class="el-icon-menu" style="color:#ff2341;font-size:15px"></i>
              招标公告
            </span>
            <span>
              <img src="~/assets/image/tag_unactine.png" alt="" style="vertical-align:middle">
              建筑工程
            </span>
						<span>
							<i class="el-icon-time" style="font-size:15px"></i>
							{{data.time}}
						</span>
            <span>
              <i class="el-icon-location-outline" style="font-size:15px"></i>
              {{data.province}} {{data.city}}
            </span>
            <span style="margin:0!important;float:right">
              <a :href="data.webUrl" target="_blank" style="color:#ff2341;font-size:14px">
                <i class="el-icon-document" style="color:#ff2341;font-size:15px"></i>
                查看原文
              </a>
            </span>
            <!-- <a :href="data.webUrl" target="_blank">
              <el-button size="mini" type="primary"><i class="el-icon-document"></i>查看原文</el-button>
            </a> -->
            <!-- <el-tag v-if="data.city" class="area" size="mini">{{data.city}}</el-tag>
            <el-tag v-else-if="data.province" class="area" size="mini">{{data.province}}</el-tag>
            <el-tag v-else class="area" size="mini">全国</el-tag>
            <el-tag class="type" type="warning" size="mini">{{data.infoType}}</el-tag> -->
      <!--       <span class="collect" v-if="$store.state.user">
							 <span class="love" @click="switchChecked" v-if="data.collection"><i
                 class="el-icon-star-on"></i>取消收藏</span>
      						<span class="love" @click="switchChecked" v-else><i class="el-icon-star-off"></i>收藏</span>
						</span> -->
            
          </div>
        </div>
        <div class="content" v-html="data.html"></div>
      </el-main>
    <!--   <el-aside width="200px">
        <span>扫码收藏此项目</span>
        <img :src="data.qrcode">
      </el-aside> -->
    </el-container>
  </div>
</template>
<style scoped>
  .container .el-main {
    width: 100%;
    background: #fff;
    text-align: left;
    padding: 50px 30px 70px 50px;
  }

  .container .title {
    margin-right: 0!important;
    width: 760px;
  }
  .con_tit>h2{
    font-size: 24px;
    color: #3e3e3e;
    color: red;
  }

  .container .title .tag {
    margin: 20px auto;
    font-size: 15px;
  }

  .container .title .tag span {
    margin-right: 30px;
    font-size: 12px;
    color: #656565;
    display: inline-block;
  }

  .container .title .collect {
    cursor: pointer;
    color: red;
  }

  .container .title .collect i {
    margin-right: 5px;
  }

  .container .title .tag .el-button {
    float: right;
  }

  .container .title .tag .el-button i {
    margin-right: 5px;
  }

  .el-icon-time {
    font-size: 17px;
  }

  .container .content {
    border: 1px solid #f5f5f5;
    padding: 40px;
    width: 760px;
  }

  .container .el-aside {
    /*float: left;*/
    margin-top: 184px;
    height: 220px;
    width: 200px;
    background-color: #5DAAFC;
  }

  .container .el-aside span {
    padding-bottom: 10px;
    display: block;
    line-height: 30px;
    font-size: 16px;
    color: #fff;
  }

  .container .el-aside img {
    width: 160px;
  }
  .love{
    cursor: pointer;
    font-size: 14px;
    vertical-align: middle
   }
   .love>img{
    width: 15px;
    vertical-align: middle;
   }
   .love>span{
    font-size: 14px;
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
   }
  .container .el-container {
    display: -webkit-box;
  }
  @media (min-width: 1260px) {
    .container .content {
      width: 1100px;
    }

    .container .title {
      width: 1100px;
    }
  }
</style>
<script>
  import axios from 'axios';

  var sceneId
  var that
  export default {
    data: function () {
      return {}
    },
    asyncData: function (context) {
      if (context.route.query.sceneId != 0) {
        sceneId ='02#'+context.route.query.sceneId
      } else {
        sceneId ='02#'+new Date().getTime().toString().substring(5)
      }
      let date = new Date().getTime().toString().substring(5)
      return axios.post(context.store.state.host + '/search/getHtmlById', {
        id: context.route.query.id,
        sceneId: sceneId,
        userId: context.route.query.userId
      }, {
        withCredentials: true,
      })
        .then(function (response) {
          return {data: response.data.data}
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    head() {
      return {
        title: this.data.title,
        meta: [
          {hid: 'description', name: 'description', content: this.data.title}
        ]
      }
    },
    mounted: function () {
      that = this
      if ("WebSocket" in window) {
        var ws = new WebSocket(that.$store.state.ws + "/websocket?sceneId=" + that.data.sceneId);
        ws.onopen = function () {
          ws.send(that.data.sceneId);
        };
        ws.onmessage = function (evt) {
          if (JSON.parse(evt.data).status === 200) {
            that.data.collection = JSON.parse(evt.data).data.collection
            that.$store.commit('$_setStorage', JSON.parse(evt.data).data)
          }
          ws.close();
        };
      } else {
        alert("您的浏览器不支持扫码登录，请更换浏览器尝试!");
      }
      that.getIsCollect()
    },
    methods: {
      getIsCollect(){
        console.log(777)
        if (that.$store.getters.getStorage) {
          console.log(111)
          let userId = this.$store.getters.getStorage.userId
          console.log(that.$route.query.id)
          axios.get(that.$store.state.host+'/personal/getCollectionStatus?userId='+ userId + '&dataId=' + that.$route.query.id)
            .then(function (response) {
              if (response.data.status == 200) {
                that.data.collection = response.data.data.collection
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      switchChecked() {
        if (this.data.collection) {
          /*取消收藏*/
          axios.post(that.$store.state.host + '/personal/cancelCollection', {
            userId: that.$store.getters.getStorage.userId,
            dataId: that.$route.query.id,
          }, {
            withCredentials: true,
          })
            .then(function (response) {
              if (response.data.success) {
                that.data.collection = response.data.data.collection
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          /*添加收藏*/
          axios.post(that.$store.state.host + '/personal/addCollection', {
            userId: that.$store.getters.getStorage.userId,
            dataId: that.$route.query.id,
          }, {
            withCredentials: true,
          })
            .then(function (response) {
              if (response.data.success) {
                that.data.collection = response.data.data.collection
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
    }
  }
</script>
