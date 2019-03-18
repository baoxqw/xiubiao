<template>
  <div class="index">
    <el-carousel height="550px" class="banner">
      <el-carousel-item>
        <img src="~/assets/image/banner.png">
      </el-carousel-item>
      <el-carousel-item>
        <img src="~/assets/image/VIP_bg.png">
      </el-carousel-item>
    </el-carousel>
    <div class="index_search container">
      <div class="inner_search container">
        <div class="search_tit">
          <my-search/>
        </div>
        <p class="hot_search">热门搜索：
          <a style="cursor:pointer;" @click="setKeyword(item.text)" v-for="(item,index) in hotData" :key="index">
            {{item.text}}
          </a>
        </p>
        <div class="index_classify">
          <h2><b></b>行业分类</h2>
          <ul class="search_ul">
            <a style="cursor:pointer;" @click="setIndustry(item.text)" v-for="(item,index) in searchData" :key="index">
              {{item.text}}
            </a>
          </ul>
        </div>
      </div>
    </div>
    <!-- 嗅标大数据 -->
    <div class="index_xiu">
      <div class="xiu_con container">
        <div class="xiu_t">
          <img src="~/assets/image/XIUBIAODATA.png" alt="">
          <h3>嗅标大数据</h3>
          <p>实时更新</p>
        </div>
        <ul class="xiu_ul container">
          <li>
            <h2>
              <countTo :endVal="todayUpdate" :duration='5000'>
              </countTo>
              <b slot="rightText" style="font-size: 14px;">条</b>
            </h2>
            <span class="today_span"></span>
            <p>今日数据更新量</p>
          </li>
          <li>
            <h2>
              <countTo :endVal="todayWin" :duration='5000'>
              </countTo>
              <b slot="rightText" style="font-size: 14px;">条</b>
            </h2>
            <span class="today_span"></span>
            <p>今日中标新量</p>
          </li>
          <li>
            <h2>
               <countTo :endVal="todayInvite" :duration='5000'>
               </countTo>
               <b slot="rightText" style="font-size: 14px;">条</b>
            </h2>
            <span class="today_span"></span>
            <p>今日招标新量</p>
          </li>
          <li style="border-right: none">
            <h2>
              <countTo :endVal="todayJoin" :duration='5000'>
              </countTo>
              <b slot="rightText" style="font-size: 14px;">条</b>
            </h2>
            <span class="today_span"></span>
            <p>参与招投标企业数量</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 快速订阅 -->
    <div class="subscribe">
      <div class="subscribe_con container">
        <img src="~/assets/image/SUBSCRIBE.png" alt="">
        <p>快速订阅</p>
        <div class="sub_phone">
          <div class="phone_lef">
            <Swiper ref="swiper">
              <Slide>
                <dl>
                  <dt>
                    <img src="~/assets/image/model.png" alt="">
                  </dt>
                  <dd>
                    <h4>精准订阅1</h4>
                    <span>Subscriptions</span>
                    <p>
                      用户可推送时间以及推送方式进行设置，系统会以邮箱微信等方式
                      进行定时或实时推送。用户可对推送时间以及推送方式进行设置，系统会以邮箱
                      、微信等方式进行定时或实时推送
                    </p>
                  </dd>
                </dl>
              </Slide>
              <Slide>
                <dl>
                  <dt>
                    <img src="~/assets/image/model.png" alt="">
                  </dt>
                  <dd>
                    <h4>自定义推送1</h4>
                    <span>Subscriptions</span>
                    <p>
                      用户可推送时间以及推送方式进行设置，系统会以邮箱微信等方式
                      进行定时或实时推送。用户可对推送时间以及推送方式进行设置，系统会以邮箱
                      、微信等方式进行定时或实时推送
                    </p>
                  </dd>
                </dl>
              </Slide>
              <Slide>
                <dl>
                  <dt>
                    <img src="~/assets/image/model.png" alt="">
                  </dt>
                  <dd>
                    <h4>个性化</h4>
                    <span>Subscriptions</span>
                    <p>
                      用户可推送时间以及推送方式进行设置，系统会以邮箱微信等方式
                      进行定时或实时推送。用户可对推送时间以及推送方式进行设置，系统会以邮箱
                      、微信等方式进行定时或实时推送
                    </p>
                  </dd>
                </dl>
              </Slide>
              <Slide>
                <dl>
                  <dt>
                    <img src="~/assets/image/model.png" alt="">
                  </dt>
                  <dd>
                    <h4>健康的恢复</h4>
                    <span>Subscriptions</span>
                    <p>
                      用户可推送时间以及推送方式进行设置，系统会以邮箱微信等方式
                      进行定时或实时推送。用户可对推送时间以及推送方式进行设置，系统会以邮箱
                      、微信等方式进行定时或实时推送
                    </p>
                  </dd>
                </dl>
              </Slide>
            </Swiper>
          </div>
          <div class="phone_rig">
            <ul class="phone_rigul">
              <li @click="prevSlideClick">
                <img src="~/assets/image/up.png" alt="">
              </li>
              <li id="one" @click="slideToClicko">
                <h2>精准订阅</h2>
                <p>Subscription</p>
              </li>
              <li id="two" @click="slideToClick">
                <h2>自定义推送1</h2>
                <p>Custom push</p>
              </li>
              <li id="three" @click="slideToClickth">
                <h2>个性化</h2>
                <p>Individualize</p>
              </li>
              <li id="four" @click="slideToClickf">
                <h2>健康的恢复</h2>
                <p>Custom push</p>
              </li>
              <li @click="nextSlideClick">
                <img src="~/assets/image/down.png" alt="">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="data" class="news_zb container">
      <img src="~/assets/image/INFORMATION.png" alt="">
      <p>最新中标信息</p>
      <div class="news_left">
        <img src="~/assets/image/news_pic.png" alt="">
      </div>
      <ul class="leftNews">
        <li v-for="(item,index) in data[0].successInfo" v-if="index < 7" :key="item.id">
					<span style="float:left; color: #666;width: 5px;background:#ff2341;
					height:5px;margin-top:10px;margin-right:10px">&nbsp;&nbsp;</span>
          <nuxt-link class="title"
                     :to="{ path: '/search/detail', query:{ id: item.id,sceneId: $store.state.user == null? 0: $store.state.user.sceneId,userId: $store.state.user == null? null: $store.state.user.userId}}">
            {{item.title}}
          </nuxt-link>
          <span class="address"><i class="el-icon-location-outline" style="font-size:13px;vertical-align:middle;margin-right:3px"></i>{{item.city}}</span>
          <span class="time"><i class="el-icon-time" style="font-size:13px;vertical-align:middle;margin-right:3px"></i>{{item.aboutTime}}</span>
          <!-- <el-tag size="mini" v-if="item.city" class="area">{{item.city}}</el-tag>
                    <el-tag size="mini" v-else-if="item.province" class="area">{{item.province}}</el-tag>
                    <el-tag v-else class="area" size="mini">全国</el-tag> -->
        </li>
      </ul>
    </div>
    <div class="index_friends container">
      <div class="friends_con container">
        <img src="~/assets/image/PARTERNER.png" alt="">
        <h3>我们的合作伙伴</h3>
        <ul class="friends_ul">
          <li class="friends_ef"><img src="~/assets/image/ali.png" alt=""></li>
          <li class="friends_t"><img src="~/assets/image/tencent.png" alt=""></li>
          <li><img src="~/assets/image/baidu.png" alt=""></li>
          <li class="friends_t"><img src="~/assets/image/tianyan.png" alt=""></li>
          <li><img src="~/assets/image/qichacha.png" alt=""></li>

          <li class="friends_b friends_ef"><img src="~/assets/image/zhihu.png" alt=""></li>
          <li class="friends_t friends_b"><img src="~/assets/image/tax.png" alt=""></li>
          <li class="friends_b"><img src="~/assets/image/weibo.png" alt=""></li>
          <li class="friends_t friends_b"><img src="~/assets/image/jiaotong.png" alt=""></li>
          <li class="friends_b"><img src="~/assets/image/ligong.png" alt=""></li>

          <li class="friends_ef"><img src="~/assets/image/telecom.png" alt=""></li>
          <li class="friends_t"><img src="~/assets/image/mobile.png" alt=""></li>
          <li><img src="~/assets/image/unicom.png" alt=""></li>
          <li class="friends_t"><img src="~/assets/image/gongyeyun.png" alt=""></li>
          <li><img src="~/assets/image/aamazadata.png" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  var that
  import MySearch from '@/components/search.vue';
  import countTo from 'vue-count-to';
  import Swiper from './swiper/swiper.vue';
  import Slide from './swiper/slide.vue';

  import axios from 'axios';
  export default {
    components: {
      MySearch,
      Swiper,
      Slide,
      countTo
    },
    data: function () {
      return {
        mainStyle: {
          fontSize: '30px'
        },
        countStyle: {

        },
        data: '',
        todayUpdate:458799852,
        todayWin:558799852,
        todayInvite:658799852,
        todayJoin:758799852,
        hotData: [
          {text: '建筑'},
          {text: '医疗'},
          {text: '交通'},
          {text: '工程'},
          {text: '办公'},
          {text: '采购'},
          {text: '绿化'},

        ],
        searchData: [
          {text: '工程建筑'},
          {text: '交通运输'},
          {text: '能源化工'},
          {text: '电气电力'},
          {text: '电子工程'},
          {text: '医疗卫生'},
          {text: '能源化工'},
          {text: '电气电力'},
          {text: '工程建筑'},
          {text: '交通运输'},
          {text: '能源化工'},
          {text: '电气电力'},
          {text: '电子工程'},
          {text: '医疗卫生'},
          {text: '能源化工'},
          {text: '电气电力'},
          {text: '工程建筑'},
          {text: '交通运输'},
          {text: '能源化工'},
          {text: '电气电力'},
          {text: '电子工程'},
          {text: '医疗卫生'},
        ]

      }
    },
    head() {
      return {
        title: '麦仓招标网',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: '麦仓招标是国内专业的招投标服务平台，海量招标信息，向用户提供查看信息，招标搜索，信息跟踪等多项服务，让您随时随地了解掌握最新招标咨询！'
          }
        ]
      }
    },
    mounted() {
      that = this
      axios.post(this.$store.state.host + '/search/indexPurByArea', {
        "province": null,
        "city": null
      })
        .then(function (response) {
          that.data = response.data.data.records
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {
      setKeyword(value) {
        that.$store.state.keyword = value
        that.$router.push({ path: `search` })
      },
      setIndustry(value) {
        that.$router.push({ path: `search`,query:{industry:value} })
      },
      prevSlideClick() {
        this.$refs.swiper.prevSlide()
      },
      nextSlideClick() {
        this.$refs.swiper.nextSlide()
      },
      slideToClicko() {
        let one = document.getElementById('one');
        one.setAttribute("class", "style2");
        let two = document.getElementById('two');
        two.removeAttribute("class", "style2");
        let three = document.getElementById('three');
        three.removeAttribute("class", "style2");
        let four = document.getElementById('four');
        four.removeAttribute("class", "style2");
        this.$refs.swiper.slideTo(0)
      },
      slideToClick() {
        let one = document.getElementById('one');
        one.removeAttribute("class", "style2");
        let two = document.getElementById('two');
        two.setAttribute("class", "style2");
        let three = document.getElementById('three');
        three.removeAttribute("class", "style2");
        let four = document.getElementById('four');
        four.removeAttribute("class", "style2");
        this.$refs.swiper.slideTo(1)
      },
      slideToClickth() {
        let one = document.getElementById('one');
        one.removeAttribute("class", "style2");
        let two = document.getElementById('two');
        two.removeAttribute("class", "style2");
        let three = document.getElementById('three');
        three.setAttribute("class", "style2");
        let four = document.getElementById('four');
        four.removeAttribute("class", "style2");
        this.$refs.swiper.slideTo(2)
      },
      slideToClickf() {
        let one = document.getElementById('one');
        one.removeAttribute("class", "style2");
        let two = document.getElementById('two');
        two.removeAttribute("class", "style2");
        let three = document.getElementById('three');
        three.removeAttribute("class", "style2");
        let four = document.getElementById('four');
        four.setAttribute("class", "style2");
        this.$refs.swiper.slideTo(3)
      }
    }
  };
</script>
<style scoped>
  .index {

  }

  .banner img {
    width: 100%;
    height: 564px;
  }

  .index_search {
    margin: 0 auto;
    position: relative;
    top: -244px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .inner_search {
    position: absolute;
    border-radius: 10px;
    z-index: 4;
    background: #fff;
  }
  .search_tit {
    top: 46px;
    margin: 0 auto;
    height: 50px;
    position: relative;
  }

  .search_tit input {
    display: block;
    width: 100%;
    height: 50px;
    border: 1px solid #ff2741;
    border-radius: 50px;
  }

  .hot_search {
    margin: 0 auto;
    margin-top: 46px;
    width: 900px;
    text-align: left;
    height: 40px;
    font-size: 13px;
    line-height: 40px;
    color: #7f7f7f;
  }

  .hot_search > a:nth-child(1) {
    color: #ff2741;
  }

  .hot_search > a {
    font-size: 13px;
    display: inline-block;
    margin-right: 17px;
    color: #7f7f7f;
  }

  .search_tit span img {
    width: 27px;
    height: 27px;
    vertical-align: middle;
  }

  .index_classify {
    margin: 0 auto;
    width: 900px;
    margin-top: 32px;
  }

  .index_classify > h2 {
    text-align: left;
    font-size: 18px;
    color: #4c4c4c;
    vertical-align: middle;
    margin-bottom: 28px;
  }

  .index_classify > h2 > b {
    margin-right: 8px;
    vertical-align: middle;
    display: inline-block;
    width: 4px;
    height: 23px;
    background: #ff2347;
  }

  .search_ul {
    padding: 0;
    width: 100%;
    height: 250px;

  }

  .search_ul > a {
    width: 160px;
    text-align: left;
    font-size: 15px;
    color: #606060;
    margin-bottom: 41px;
    float: left;
    cursor: pointer;
  }
  .search_ul > a:focus {
    color: #ff2347;
  }
  .search_ul > a:hover {
    color: #ff2347;
  }
  .search_ul > a:nth-child(6) {
    width: 100px;
  }

  .search_ul > a:nth-child(12) {
    width: 100px;
  }

  .search_ul > a:nth-child(18) {
    width: 100px;
  }

  .search_ul > a:nth-child(24) {
    width: 100px;
  }

  .index_xiu {
    position: relative;
    width: 100%;
    height: 600px;
    background: url(~/assets/image/chatracter_bg.png) no-repeat center center;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 240px;
  }

  .xiu_con {
    width: 100%;
    margin: 0 auto;
  }

  .xiu_t {
    width: 100%;
    text-align: center;
    float: left;
    height: 200px;
    box-sizing: border-box;
    padding-top: 50px;
    color: #4d4d4d;
  }

  .xiu_t h3 {
    font-size: 18px;
  }

  .xiu_t p {
    font-size: 14px;
  }

  .xiu_ul {
    padding: 0;
    display: flex;
    flex-direcon: row;
    margin-top: 109px;
    color: #5a5a5a;
  }

  .xiu_ul > li {
    text-align: center;
    border-right: 1px solid #b2b2b2;
    flex: 1;
    float: left;
    width: 300px;
    cursor: pointer;
  }
  .xiu_ul > li>span {
    width: 22px;
    height: 4px;
    display: inline-block;
    margin-bottom: 10px;
    margin-top: 10px;
    background: #5a5a5a;
  }

  .xiu_ul > li p {
    font-size: 14px;
  }

  .xiu_ul h2 {
    font-size: 14px;
  }

  .xiu_ul h2 strong {
    font-size: 30px;
  }
  .xiu_ul > li>h2>span{
    font-size: 26px;
  }
  .xiu_ul > li:hover {
    color: #ff2741;
  }

  .xiu_ul > li:hover .today_span {
    background: #ff2741
  }

  .xiu_con > img {

    width: 403px;
    height: 42px;
  }

  .xiu_con > h3 {
    font-size: 18px;
    margin-bottom: 5px;
    color: #4d4d4d;
  }

  .xiu_con > p {
    font-size: 14px;
    color: #4d4d4d;
  }

  .subscribe {
    position: relative;
    left: 0;
    width: 100%;
    height: 508px;
    background: #fff;
  }

  .subscribe_con {
    text-align: left;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    position: relative;
    box-sizing: border-box;
    padding-top: 50px;
  }

  .subscribe_con > img {
    width: 328px;
  }

  .subscribe_con > p {
    font-size: 18px;
    font-weight: 900;
    color: #4d4d4d;
  }

  .sub_phone {
    height: 347px;
  }

  .phone_lef {
    float: left;
    width: 80%;
    box-sizing: border-box;
    height: 347px;
    overflow: hidden;
  }

  .phone_lef .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  .phone_lef .swiper-wrapper .swiper-slide {
    width: 100%;
    height: 100%;

  }
  .phone_lef dl{
    height: 347px;
  }
  .phone_lef .swiper-container, .swiper-container-vertical {
    width: 871px;
    height: 347px;
    overflow: hidden;
  }

  .phone_rig {
    float: left;
    height: 508px;
    width: 20%;
    margin-top: -120px;
    border-left: 1px solid #ededed;
  }

  .phone_rig .swiper-wrapper {
    height: 508px;
    width: 178px;
  }

  .phone_rig .swiper-wrapper .swiper-slide {
    height: 508px;
    width: 178px;

  }

  .phone_rig .swiper-container, .swiper-container-vertical {
    height: 508px;
    width: 178px;
    overflow: hidden;
  }

  .phone_rigul {
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .phone_rigul > li {
    cursor: pointer;
    vertical-align: middle;
    width: 100%;
    float: left;
    height: 84.6px;
    box-sizing: border-box;
    border-bottom: 1px solid #ededed;
    padding-left: 50px;
    padding-top: 25px;
  }

  .phone_rigul > li img {
    text-align: center;
    width: 32px;
    margin-left: 16px;
    vertical-align: middle;
    display: inline-block;

  }

  .phone_rig .phone_rigul .style2 {
    color: #ff2347 !important;
  }

  .style2 h2 {
    color: #ff2347 !important;
  }

  .style2 p {
    color: #ff2347 !important;
  }

  .phone_rigul > li h2 {
    font-size: 14px;
    color: #626262;
  }

  .phone_rigul > li p {
    font-size: 12px;
    color: #7f7f7f;
  }

  .sub_phone dl dt {
    float: left
  }

  .sub_phone dl dt {
    width: 158px;
    height: 323px;
  }

  .sub_phone dl dt img {
    width: 100%;
  }

  .sub_phone dl dd {
    box-sizing: border-box;
    padding-top: 50px;
    float: left;
    margin-left: 92px;
    width: 340px;
  }

  .sub_phone dl dd h4 {
    font-size: 16px;
    color: #4c4c4c;
  }

  .sub_phone dl dd span {
    font-size: 12px;
    color: #7f7f7f;
  }

  .sub_phone dl dd p {
    margin-top: 23px;
    font-size: 14px;
    color: #606060;
    line-height: 24px;
  }

  .search .slogen {
    margin: 30px;
    font-size: 25px;
    color: #444;
  }

  .el-carousel__item {
    width: 100%;
    background-color: #2C93FF;
  }

  .middle {
    text-align: left;
    padding: 75px 0;
  }

  .middle img {
    width: 42%;
  }

  .middle .introduce {
    width: 50%;
    padding: 60px 0 10px 30px;
    float: right;
    font-size: 18px;
    color: #ffffff;
  }

  .middle .introduce strong {
    display: inline-block;
    font-size: 40px;
    color: #FFD64B;
  }

  .middle .introduce p {
    margin: 20px 0;
  }

  .news_zb {
    position: relative;
    background: #f0f0f0;
    margin: 0 auto;
    height: 490px;
    box-sizing: border-box;
    padding-top: 47px;

  }

  .news_zb > img {
    width: 403px;
  }

  .search {
    padding: 80px 0;
    height: 400px;
  }

  .news_left {
    float: left;
    width: 25%;
    height: 300px;
    margin-top: 20px;
  }

  .news_left > img {
    width: 80%;
    height: 100%;
  }

  .leftNews {
    padding: 0 !important;
    list-style: none;
    float: left;
    width: 75%;
  }

  @media (min-width: 1260px) {
    .leftNews {
      padding: 0 100px;
    }
  }

  .leftNews > p {
    display: inline-block;
    font-size: 18px;
    color: #4d4d4d;
    font-weight: 900;
  }

  .leftNews li {
    margin: 20px 0;
    font-size: 15px;
    text-align: left;
  }

  .leftNews li .title {
    font-size: 15px;
    color: #474747;
    width: 65%;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
  }

  .leftNews li a:hover {
    font-weight: 900;
    text-decoration: none !important;
    color: #ff2341 !important;
  }

  .leftNews li .type {
    color: #FFBA00;
  }

  .leftNews li .time {
    display: inline-block;
    font-size: 12px;
    color: #717171;
    vertical-align: top;
  }

  .leftNews li .address {
    margin-right: 20px;
    margin-left: 50px;
    vertical-align: top;
    display: inline-block;
    font-size: 12px;
    color: #717171;
  }

  .leftNews li .el-tag--mini {
    float: right;
  }

  .leftNews .title:hover {
    color: #409EFF;
    text-decoration: underline;
  }

  .index_friends {
    position: relative;
    left: 0;
    width: 100%;
    background: #fff;
  }

  .friends_con {
    box-sizing: border-box;
    padding-top: 53px;
    margin: 0 auto;
  }

  .friends_con > img {
    width: 354px;
  }

  .friends_con > h3 {
    font-size: 18px;
    color: #4d4d4d;
  }

  .friends_con table {
    margin-top: 75px;
    border-collapse: collapse
  }

  .friends_ul {
    overflow: hidden;
    padding: 75px 0;
    box-sizing: border-box;
  }

  .friends_ul > li {
    text-align: center;
    line-height: 95px;
    width: 239px;
    height: 95px;
    float: left;
    border: 1px solid #f8f8f8;
    box-sizing: border-box;
    cursor: pointer;
    overflow: hidden;
  }
  .friends_ul > li:hover{
    box-sizing: border-box;
    box-shadow: 0 0 10px #ddd;
  }
   .wh_slide dl {
    margin-left: 145px;
    display: inline-block;
   }
  .friends_ul > li > img {
    display: inline-block;
    vertical-align: middle;
  }

  .friends_ul .friends_t {
    border-left: 0;
    border-right: 0;
  }

  .friends_ul .friends_b {
    border-top: 0;
    border-bottom: 0
  }

  .friends_con table tr td img {
    /* width: 100%; */
  }

  .style2 {
    color: #ff2347 !important;
  }
  .friends_ef{
    margin-left: 2px;
  }
</style>
<style>
  
</style>
