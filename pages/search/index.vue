<template>
  <div class="search">
    <div class="switch">
      <div style="width:940px;height:50px;position:relative;margin:0 auto">
        <my-search v-on:enter="enter"/>
      </div>
      <p class="hot_search">热门搜索：
          <a style="cursor:pointer;" @click="setKeyword(item.text)" v-for="(item,index) in hotData" :key="index">
          {{item.text}}
          </a>
      </p>
    </div>
    <div class="filter container">
      <div class="mode" style="width:100%;overflow:hidden">
        <span class="title sea_tit" style="float:left;margin-top:7px;">行业分类：</span>
        <el-radio-group @change='filterMode()' size="mini" v-model="filter_mode"
        style="float:left;width:90%;">
          <el-radio label="全部" style="font-size:14px;color:#333;font-weight:900;margin-right:20px"></el-radio>
          <el-radio label="工程建筑"></el-radio>
          <el-radio label="交通运输"></el-radio>
          <el-radio label="能源化工"></el-radio>
          <el-radio label="电气电力"></el-radio>
          <el-radio label="电子工程"></el-radio>
          <el-radio label="医疗卫生"></el-radio>
          <el-radio label="冶金矿产"></el-radio>
          <el-radio label="纺织轻功"></el-radio>
          <el-radio label="仪器仪表"></el-radio>
          <el-radio label="环保设备"></el-radio>
          <el-radio label="纸业印刷"></el-radio>
          <el-radio label="IT 通讯"></el-radio>
          <el-radio label="传媒广电"></el-radio>
          <el-radio label="建筑建材"></el-radio>
          <el-radio label="家具家电"></el-radio>
          <el-radio label="安全防护"></el-radio>
          <el-radio label="包装加工"></el-radio>
          <el-radio label="橡胶塑胶"></el-radio>

          <el-radio label="文件办公"></el-radio>
          <el-radio label="农产品"></el-radio>
          <el-radio label="食品烟酒"></el-radio>
          <el-radio label="服务行业"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </div>
      <div class="area" style="width:100%;overflow:hidden">
        <span class="title sea_tit" style="float:left;margin-top:7px;">区域选择：</span>
        <el-radio-group @change="filterArea(1)" size="mini" v-model="filter_province" style="float:left;width:90%;">
          <el-radio label="全国" style="font-size:14px;color:#333;font-weight:900;margin-right:20px"></el-radio>
          <el-radio disabled label="A"></el-radio>
          <el-radio label="安徽" class="aa"></el-radio>

          <el-radio disabled label="B"></el-radio>
          <el-radio label="北京" class="aa"></el-radio>

          <el-radio disabled label="C"></el-radio>
          <el-radio label="重庆" class="aa"></el-radio>

          <el-radio disabled label="F"></el-radio>
          <el-radio label="福建" class="aa"></el-radio>

          <el-radio disabled label="G"></el-radio>
          <el-radio label="广东" class="aa"></el-radio>
          <el-radio label="广西" class="aa"></el-radio>
          <el-radio label="贵州" class="aa"></el-radio>
          <el-radio label="甘肃" class="aa"></el-radio>

          <el-radio disabled label="H"></el-radio>
          <el-radio label="河北" class="aa"></el-radio>
          <el-radio label="湖北" class="aa"></el-radio>
          <el-radio label="黑龙江" class="aa"></el-radio>
          <el-radio label="海南" class="aa"></el-radio>
          <el-radio label="河南" class="aa"></el-radio>
          <el-radio label="湖南" class="aa"></el-radio>

          <el-radio disabled label="J"></el-radio>
          <el-radio label="吉林" class="aa"></el-radio>
          <el-radio label="江苏" class="aa"></el-radio>
          <el-radio label="江西" class="aa"></el-radio>

          <el-radio disabled label="L"></el-radio>
          <el-radio label="辽宁" class="aa"></el-radio>

          <el-radio disabled label="N"></el-radio>
          <el-radio label="内蒙古" class="aa"></el-radio>
          <el-radio label="宁夏" class="aa"></el-radio>

          <el-radio disabled label="Q"></el-radio>
          <el-radio label="青海" class="aa"></el-radio>

          <el-radio disabled label="S"></el-radio>
          <el-radio label="山西" class="aa"></el-radio>
          <el-radio label="陕西" class="aa"></el-radio>
          <el-radio label="上海" class="aa"></el-radio>
          <el-radio label="山东" class="aa"></el-radio>
          <el-radio label="四川" class="aa"></el-radio>

          <el-radio disabled label="T"></el-radio>
          <el-radio label="天津" class="aa"></el-radio>

          <el-radio disabled label="X"></el-radio>
          <el-radio label="西藏" class="aa"></el-radio>
          <el-radio label="新疆" class="aa"></el-radio>

          <el-radio disabled label="Y"></el-radio>
          <el-radio label="云南" class="aa"></el-radio>

          <el-radio disabled label="Z"></el-radio>
          <el-radio label="浙江" class="aa"></el-radio>
          <!--<el-radio v-for="(value, key, index) in area_list" :key="index" :label="key"></el-radio>-->
        </el-radio-group>
        <div v-if="city_show" class="filter_city">
          <el-radio-group @change="filterArea(2)" size="mini" v-model="filter_city">
            <el-radio v-for="item in filter_city_list" :key="item" :label="item"></el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="type" style="width:100%;overflow:hidden">
        <span class="title sea_tit" style="float:left;margin-top:7px;">信息类型：</span>
        <el-radio-group @change='filterInfo(1)' size="mini" v-model="filter_infoType" style="float:left;width:90%;">
          <el-radio label="全部" style="font-size:14px;color:#333;font-weight:900;margin-right:20px"></el-radio>
          <el-radio label="招标预告"></el-radio>
          <el-radio label="招标公告"></el-radio>
          <el-radio label="招标结果"></el-radio>
          <el-radio label="招标信用"></el-radio>
          <el-radio label="其他公告"></el-radio>
        </el-radio-group>
        <div v-if="type_show" class="filter_infoType_inner">
          <el-radio-group @change='filterInfo(2)' size="mini" v-model="filter_infoType_inner">
            <el-radio v-for="(value, key) in filter_Type_inner" :key="key" :label="value"></el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="time" style="overflow:hidden">
        <span class="title sea_tit" style="float:left;margin-top:7px;">发布时间：</span>
        <el-radio-group @change="filterTime" size="mini" v-model="filter_time" style="float:left;width:90%;">
          <el-radio label="全部" style="font-size:14px;color:#333;font-weight:900;margin-right:20px"></el-radio>
          <el-radio label="最近3天"></el-radio>
          <el-radio label="最近7天"></el-radio>
          <el-radio label="最近1个月"></el-radio>
          <el-radio label="最近3个月"></el-radio>
          <el-date-picker
            v-model="startData"
            type="date"
            @change="diyTimeChange"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="开始日期">
          </el-date-picker>
          <span class="inline">-</span>
          <el-date-picker
            v-model="endData"
            type="date"
            @change="diyTimeChange"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="结束日期">
          </el-date-picker>
        </el-radio-group>
      </div>
    </div>
    <el-card v-if="dataList" v-loading="loading"
             element-loading-text="拼命搜索中"
             element-loading-spinner="el-icon-loading"
             class="box-card container search_content">
      <el-radio-group v-model="searchMode" size="small" @change="onTitleChangeAjax">
        <el-radio label="1" border>标题搜索</el-radio>
        <el-radio label="0" border style="margin:0">全文搜索</el-radio>
      </el-radio-group>
      <div v-for="(item) in dataList" :key="item.id" class="text item">
        <div class="top">
          <div class="lef">
            <p>招标</p>
          </div>
          <div class="rig">
            <p class="rig_tit">
              <nuxt-link class="title search_title" style="float:left"
               :to="{ path: '/search/detail', query:{ id: item.id,sceneId: $store.state.user == null? 0: $store.state.user.sceneId, userId: $store.state.user == null? null: $store.state.user.userId}}"
               v-html="item.title">
              </nuxt-link>
              <span class="time" style="font-size:14px;color:#656565;float:right"><i class="el-icon-time"></i>{{item.time}}</span>
            </p>
            <p class="bottom"><span v-html="item.highlight" style="display:inline-block;width:100%"></span>...</p>
            <div class="rig_bot">
              <span class="med">
                <img src="~/assets/image/tag.png" alt="">
                传媒广角
              </span>
              <span><i class="el-icon-location-outline" style="font-size:14px;margin-right:3px;"></i>{{item.province}}  {{item.city}}</span>
            </div>

          </div>

        </div>

      </div>
    </el-card>
    <div class="container" v-else style="padding:20px 0">
      <img src="~/assets/image/non_result.png" style="height:100%">
      <!-- <p style="padding-bottom:50px">{{errorText}}</p> -->
    </div>
    <el-pagination v-if="dataList"
                   @current-change="pageChange"
                   :current-page.sync="pageNo"
                   :page-size="10"
                   layout="total, prev, pager, next, jumper"
                   :total="data.total">
    </el-pagination>
  </div>
</template>
<script>
  var that
  import MySearch from '@/components/search.vue';
  import axios from 'axios';

  export default {
    components: {
      MySearch
    },
    data: function () {
      return {
        errorText: '没有找到该关键词匹配的信息',
        pageSize: 10,
        loading: false,
        hotData:[
          {text:'建筑'},
          {text:'医疗'},
          {text:'交通'},
          {text:'工程'},
          {text:'办公'},
          {text:'采购'},
          {text:'绿化'},
        ],
        filter_type: {
          '全部': [],
          '招标预告':['暂无招标预告'],
          '招标公告': ['公开招标', '邀请招标', '询价公告', '竞争性谈判', '单一来源'],
          '招标结果': ['中标公告', '成交公告','废标公告', '流标公告','合同公告','资格预审','中标候选人公示'],
          '招标信用': ['验收结果','违规公告'],
          '其他公告':['答疑公告','补充公告','变更公告','澄清公告','开标记录','其他']
        },
        searchMode: '1',
        area_list: '', //省市对应json数据
        data: '',
        dataList: [],
        city_show: false,
        type_show: false,
        pageNo: 1,
        infoType: [],
        province: [],
        city: [],
        filter_infoType: '全部', // 一级信息类型
        filter_infoType_inner: '全部', //选择的二级信息类型
        filter_Type_inner: [], // 二级信息类型列表
        filter_province: '全国',
        filter_time: '全部',
        filter_city: '全部',
        filter_city_list: [], //市级列表
        startTime: '',
        endTime: '',
        diyTime: [],
        startData: '',
        endData: '',
        filter_mode: '全部',
        searchType: 0,
        currentDate: this.getFormatDate(0),
        sevenDate: this.getFormatDate(7),
        monthDate: this.getFormatDate(30),
        yearDate: this.getFormatDate(182),
      }
    },
    head() {
      return {
        title: '麦仓招标搜索',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: '麦仓招标是国内专业的招投标服务平台，海量招标信息，向用户提供查看信息，招标搜索，信息跟踪等多项服务，让您随时随地了解掌握最新招标咨询！'
          }
        ]
      }
    },
    mounted: function () {
      that = this
      this.$on('enter',function () {
        that.enter()
      })
      if (that.$route.query.industry) {
        that.filter_mode = that.$route.query.industry
      }
      /*请求本地json数据*/
      axios.get('/city.json')
        .then((res) => {
          that.area_list = res.data
        })
        .catch(function (error) {
          console.log(error);
        });
      this.enter()
    },
    methods: {
      setKeyword(value) {
        that.$store.state.keyword = value
        that.enter()
      },
      enter: function () {
        this.pageNo = 1
        this.infoType = []
        this.province = []
        this.city = []
        this.filter_infoType = '全部'
        this.filter_infoType_inner = '全部'
        this.filter_Type_inner = []
        this.filter_province = '全国'
        this.filter_time = '全部'
        this.filter_city = '全部'
        this.filter_city_list = []
        this.startTime = ''
        this.endTime = ''
        this.startData = ''
        this.endData = ''
        this.city_show = false
        this.type_show = false
        this.enterSearch()
      },
      /*标题或者全文搜索*/
      onTitleChangeAjax:function (value) {
        this.enterSearch()
      },
      /*搜索*/
      enterSearch: function () {
        that.loading = true
        axios.post(this.$store.state.host + '/search/contentAndTitle', {
          keyword: that.$store.state.keyword,
          pageSize: that.pageSize,
          pageNo: that.pageNo,
          infoType: that.infoType,
          searchMode: parseInt(that.searchMode),
          province: that.province,
          city: that.city,
          startTime: that.startTime,
          endTime: that.endTime,
          searchType: that.searchType
        }, { timeout: 10000},{
          withCredentials: true,
        })
          .then(function (response) {
            that.loading = false
            if (response.data.status === 200) {
              that.data = response.data.data
              that.dataList = response.data.data.records
            } else if (response.data.status === 201) {
              that.errorText = '没有找到该关键词匹配的信息'
              that.data = null
              that.dataList = null
            } else {
              that.errorText = '服务器繁忙，请稍后再试！'
              that.data = null
              that.dataList = null
            }
          })
          .catch(function (error) {
            that.data = null
            that.dataList = null
            that.loading = false
            that.errorText = '服务器超时，请稍后重试！'
          });
      },
      /*分页*/
      pageChange: function (val) {
        this.pageNo = val
        this.enterSearch()
      },
      /*区域筛选菜单*/
      filterArea: function (val) {
        this.pageNo = 1
        if (val === 1) {
          console.log(1)
          if (this.filter_province === '全国') {
            this.city = []
            this.province = []
            this.filter_city_list = []
            this.city_show = false
          } else {
            this.filter_city_list = this.area_list[this.filter_province]
            if (this.filter_city_list.length > 0) {
              this.city_show = true
            } else {
              this.city_show = false
            }
            console.log(2)
            this.filter_city = '全部'
            this.city = []
            this.province[0] = this.filter_province
          }
        } else {
          if (this.filter_city === '全部') {
            this.city = []
          } else {
            this.city[0] = this.filter_city
          }
        }
        this.enterSearch()
      },
      /*筛选类型菜单*/
      filterInfo: function (val) {
        this.pageNo = 1
        if (val === 1) {
          if (this.filter_infoType === '全部') {
            this.filter_Type_inner = []
            this.infoType = []
            this.type_show = false
          } else {
            this.type_show = true
            this.filter_Type_inner = this.filter_type[this.filter_infoType]
            this.filter_infoType_inner = '全部'
            this.infoType = this.filter_type[this.filter_infoType]
          }
        } else {
          if (this.filter_infoType_inner === '全部') {
            this.infoType = this.filter_type[this.filter_infoType]
          } else {
            this.infoType = []
            this.infoType[0] = this.filter_infoType_inner
          }
        }
        this.enterSearch()
      },
      /*筛选时间*/
      filterTime: function () {
        this.pageNo = 1
        this.startData = ''
        this.endData = ''
        if (this.filter_time === '全部') {
          this.startTime = ''
          this.endTime = ''
        } else if (this.filter_time === '最近7天') {
          this.startTime = this.sevenDate
          this.endTime = this.currentDate
        } else if (this.filter_time === '最近30天') {
          this.startTime = this.monthDate
          this.endTime = this.currentDate
        } else if (this.filter_time === '最近半年') {
          this.startTime = this.yearDate
          this.endTime = this.currentDate
        }
        this.enterSearch()
      },
      /*模式筛选*/
      filterMode: function () {
        this.pageNo = 1
        if (that.filter_mode === '精确匹配') {
          that.searchType = 0
        } else {
          that.searchType = 1
        }
        this.enterSearch()
      },
      diyTimeChange: function () {
        this.pageNo = 1
        that.filter_time = ''
        if (this.startData && this.endData) {
          this.startTime = this.startData
          this.endTime = this.endData
          this.enterSearch()
        }
      },
      /*时间函数*/
      getFormatDate: function (val) {
        let currentDate = new Date().getTime()
        let now = new Date(currentDate - val * 24 * 60 * 60 * 1000);
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second
      }
    }
  }
</script>
<style>
  .search .filter .time .el-input .el-input__inner {
    height: 30px;
    line-height: 30px;
  }

  .search .filter .time .el-date-editor .el-input__icon {
    line-height: 30px !important;
  }

  .search .el-loading-spinner {
    top: 300px;
  }
  .search .filter .mode .el-radio__label{
    padding:0 10px!important;
    color:#333;
    font-size:14px;
    display:inline-block;
    height:25px;
    line-height:25px;
  }
  .search .filter .mode .el-radio__input.is-checked+.el-radio__label{
    border-radius:50px;
    text-align:center;

    background: linear-gradient(to right,#ff3c3f,#fe603b);
    color:#fff;
  }
  .search .filter .type .el-radio__label{
    padding:0 10px!important;
    color:#333;
    display:inline-block;
    font-size:14px;
    height:25px;
    line-height:25px;
  }
  .search .filter .type .el-radio__input.is-checked+.el-radio__label{
    border-radius:50px;
    text-align:center;
    background: linear-gradient(to right,#ff3c3f,#fe603b);
    color:#fff;
  }
  .search .filter .time .el-radio__label{
    padding:0 10px!important;
    color:#333;
    font-size:14px;
    display:inline-block;
    height:25px;
    line-height:25px;
  }
  .search .filter .time .el-radio__input.is-checked+.el-radio__label{
    border-radius:50px;
    text-align:center;
    background: linear-gradient(to right,#ff3c3f,#fe603b);
    color:#fff;
  }

  .search .filter .area .el-radio__label{
    padding:0 10px!important;
    color:#333;
    font-size:14px;
    display:inline-block;
    height:25px;
    line-height:25px;
  }
  .search .filter .area .el-radio__input.is-checked+.el-radio__label{
    border-radius:50px;
    text-align:center;
    background: linear-gradient(to right,#ff3c3f,#fe603b);
    color:#fff;
  }
  .search .filter .area .aa{
    color:#333;
  }

  .search .filter .filter_city .el-radio__label{
    display:inlie-block;
    height:25px!important;
    line-height:25px!important;
    padding:0 8px;
    color:#333;
  }
  .search .filter .filter_city .el-radio__input.is-checked+.el-radio__label{
    background:none;
    color:#ff2341;
    border-radius:50px;
    text-align:center;
    height:25px!important;
    line-height:25px!important;
  }

  .search .filter .type .filter_infoType_inner .el-radio__label{
    padding:0 10px!important;
    color:#333;
    font-size:14px;
    background:#f2f2f2;
  }
  .search .filter .type .filter_infoType_inner .el-radio__input.is-checked+.el-radio__label{
    color:#ff2347;
    background:#f2f2f2!important;
    border-radius:50px;
    text-align:center;
    height:25px!important;
    line-height:25px!important;
  }
  .search .box-card .el-card__body .el-radio-group .el-radio__label{
    font-size:16px;
    color:#4c4c4c;
    font-weight:900;
    line-height:30px;
 }
 .el-radio.is-bordered.is-checked .el-radio__label{
    color:#ff2341!important;
    background:#fff;
 }
 .el-radio.is-bordered.is-checked{
   background:#fff!important;
 }
 .search label.el-redio .el-radio--small .is-bordered .is-checked{
  background:#fff;
 }
  .search label .el-redio .el-radio--small .is-bordered{
    background:#fe0!important;
 }
</style>
<style scoped>
.search{
  background:#fff;
  padding-top:40px;
}
.hot_search{
  width:900px;
  margin:0 auto;
  text-align: left;
  height: 40px;
  font-size: 13px;
  line-height: 40px;
  color: #7f7f7f;
}
.hot_search>a:nth-child(1){
  color: #ff2741;
}
.hot_search>a{
  font-size: 13px;
  display: inline-block;
  margin-right: 17px;
  color: #7f7f7f;
}

  .search .switch .el-radio {
    margin: 0;
  }

  .search .switch .el-radio-group {
    display: block;
  }

  .search .el-card {
    min-height: 500px;
  }

  .container {
    margin: 0 auto;
    font-size: 14px;
    width: 960px;
  }

  .search .search_content {
    margin-top: 50px;
    box-shadow: none;
    border-radius:10px;
  }

  .search .search_content .text .bottom {
    color: #777;

  }

  .search .text {
    overflow:hidden;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
  }

  .search .text:last-child {
    border-bottom: none;
  }

  .text .top {
    float:left;
    overflow:hidden;
    vertical-align:middle;
    line-height: 28px;
  }

  .text .top .title {
    width: 550px;
    text-decoration: none;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    font-weight:900;
    font-size:16px;
    color:#3e3e3e;
  }
  .text .top .title:hover {
    color: #ff2041;
    text-decoration: none;
  }

  .text .top .el-tag {
    margin: 5px 10px 0 5px;
  }

  .text .top .time {
    margin-left: 10px;
  }

  .el-icon-time {
    font-size: 16px;
    margin-right: 3px;
  }

  .text .top .area, .text .top .type, .text .top span {

  }

  .search .el-pagination {
    width:100%;
    margin-top: 20px;
    padding-bottom:20px;
  }

  /* 筛选样式 */
  .filter {
    margin-top:48px;
    padding: 5px 14px;
    text-align: left;
    border: 1px solid #ebeef5;
    border-radius:10px;
  }

  .filter .filter_city, .filter .filter_infoType_inner {
    margin: 5px 0 5px 100px;
    background-color: #F2F2F2;
    border: 1px solid #e5e5e5;
    line-height: 34px;
    height:34px;
    border-radius: 10px;
    float: left;
    width: 80%;
    box-sizing: border-box;
  }

  .filter > div {
    padding: 5px 0;
  }

  .filter .title {
    width:9%;
    vertical-align: top;
  }

  .filter .time .title {
    font-size:14px;
    color:#5f5f5f;
    vertical-align: middle;
  }

  .filter .el-radio-group {

    padding: 5px 0 0 3px;
  }

  .filter .time .el-date-editor {
    margin-left: 20px;
    max-width: 150px;
  }

  .filter .time .inline {
    display: inline-block;
    margin: 0 -15px 0 4px;
    font-size: 20px;
    color: #999;
  }

  .filter .el-radio-group .el-radio {
    height: 34px;
  }

  .filter .el-radio + .el-radio {
    margin-left: 5px;
  }
  @media (min-width: 980px){
    .container {
      width: 800px;
    }
  }
  @media (min-width: 1042px) {
    .container {
      width: 900px;
    }
  }
  @media (min-width: 1280px) {
    .container {
      width: 1200px;
    }
  }

  .search .null_data {
    margin: 150px;
    font-size: 14px;
    color: #777;
  }

  .search .null_data img {
    height: 110px;
    margin: 10px;
  }
  .search .null_data p {
    font-size: 18px;
    color: #666;
  }
  .sea_tit{
    font-size:14px;
    color:#5f5f5f;

  }
  .mode{
    border-bottom:1px dashed #e5e5e5;
    margin-bottom:13px;
  }
  .area{
    border-bottom:1px dashed #e5e5e5;
    margin-bottom:13px;
  }
  .type{
    border-bottom:1px dashed #e5e5e5;
    margin-bottom:13px;
  }
 .box-card .el-card__body .el-radio-group{
  width:100%;
  text-align:left;
  background:#f3f3f3;
  height:50px;
  border-radius:10px 10px 0 0;
 }
 .box-card .el-card__body .el-radio-group .el-radio{
    display:inline-block;
    height:50px;
    border:0;
    font-size:20px;
    color:#4c4c4c;
    font-weight:900;
    background:#eee;
 }
 .box-card .el-card__body .el-radio-group .el-radio__label{
    font-size:20px;
    color:#4c4c4c;
    font-weight:900;

 }
  .top .lef{
    display:inline-block;
    box-sizing:border-box;
    width:10%;
    height:100%;
    text-align:center;
    vertical-align:top;
    height:113px;
  }
 .top .lef>p{
  margin-top:30px;
  margin-left:20px;
  vertical-align:top;
  font-size:16px;
  font-weight:900;
  color:#fff;
  width:64px;
  height:64px;
  text-align:center;
  line-height:64px;
  background: linear-gradient(-45deg, #e72a40 50%, #ff2741 50%);
  border-radius:50px;

 }
 .rig{
  display:inline-block;
  width:85%;
  margin-left:2%;
  box-sizing:border-box;

 }
 .rig_tit{
  overflow:hidden;
  height:35px;
  margin-top:17px;
 }
 .rig_tit>a{
  float:left;

 }
  .rig_tit>span{
  float:right;
 }
 .bottom{
  float:left
 }
 .rig_bot{
  width:100%;
  float:left;
  text-align:left;
  margin-top:5px;
  margin-bottom:15px;
 }
 .rig_bot>span{
  color:#676767;
 }
 .rig_bot>.med{
  color:#ff2341;
  font-weight:900;
  font-size:12px;
  margin-right:20px;
 }
 .rig_bot>.med>img{
  width:16px;
  vertical-align:middle;
  margin-right:8px;
 }
</style>
