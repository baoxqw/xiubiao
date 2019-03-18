<template>
  <div class="vip">
    <img src="~/assets/image/VIP_bg.png" alt="" class="VIP_bg">
    <div class="con container">
      <ul class="con_ul" id="con_ul">
          <li id="vip_one">
            <div class="li_head">
              <h2>免费版</h2>
              <p>￥<span>0</span></p>
              <span>免费试用</span>
            </div>
            <ul class="ul_ul">
                <li>
                  <p>数据查询权限</p>
                  <span>招标每日<strong>固定15条</strong></span>
                </li>
                <li>
                  <p>招标订阅</p>
                  <span>仅可订阅<strong>1条数据</strong></span>
                  <span>无关键词订阅</span>
                </li>
                <li>
                  <p>专题项目收集</p>
                  <span>无此特权</span>
                </li>
                <li>
                  <p>企业历史招标</p>
                  <span>无此特权</span>
                </li>
                <li>
                  <p>专属客服服务</p>
                  <span>无此特权</span>
                </li>
            </ul>
          </li>
          <li id="vip_two">
            <div class="li_head">
              <img src="~/assets/image/VIP_advise.png" alt="">
              <h2>1天</h2>
              <div class="li_price">
                <p><strong>100</strong>嗅币</p>
                <span>￥<b>3</b>
                  <del>￥5</del>
                </span>
              </div>
              <div class="li_btn">
                <span @click="purchase = true">立即购买</span>
                <span @click="exchange = true">立即兑换</span>
              </div>
            </div>
            <ul class="ul_ul">
                <li>
                  <p>数据查询权限</p>
                  <span>招标每日<strong>固定15条</strong></span>
                </li>
                <li>
                  <p>招标订阅</p>
                  <span>无限定订阅</span>
                  <span>关键词订阅</span>
                </li>
                <li>
                  <p>信息推送</p>
                  <span>APP推送</span>
                  <span>微信、邮箱推送</span>
                </li>
                <li>
                  <p>专题项目收集</p>
                  <span>无此特权</span>
                </li>
                <li>
                  <p>企业历史招标</p>
                  <span>有此特权</span>
                </li>
                <li>
                  <p>专属客服服务</p>
                  <span>有此特权</span>
                </li>
                <li>
                  <p>更多特权</p>
                  <span>敬请期待</span>
                </li>
            </ul>
          </li>
          <li id="vip_default">
            <div class="li_head">
              <img src="~/assets/image/VIP_advise.png" alt="">
              <h2>30天</h2>
              <div class="li_price">
                <p><strong>2200</strong>嗅币</p>
                <span>￥<b>68</b>
                  <del>￥98</del>
                </span>
              </div>
              <div class="li_btn">
                <span @click="purchase = true">立即购买</span>
                <span @click="exchange = true">立即兑换</span>
              </div>
            </div>
            <ul class="ul_ul">
                <li>
                  <p>数据查询权限</p>
                  <span>招标每日<strong>固定15条</strong></span>
                </li>
                <li>
                  <p>招标订阅</p>
                  <span>无限定订阅</span>
                  <span>关键词订阅</span>
                </li>
                <li>
                  <p>信息推送</p>
                  <span>APP推送</span>
                  <span>微信、邮箱推送</span>
                </li>
                <li>
                  <p>专题项目收集</p>
                  <span>无此特权</span>
                </li>
                <li>
                  <p>企业历史招标</p>
                  <span>有此特权</span>
                </li>
                <li>
                  <p>专属客服服务</p>
                  <span>有此特权</span>
                </li>
                <li>
                  <p>更多特权</p>
                  <span>敬请期待</span>
                </li>
            </ul>
          </li>
          <li id="vip_four">
            <div class="li_head">
              <h2>6个月</h2>
              <div class="li_month">
                <p>￥<span>318</span></p>
                <del>￥588</del>
              </div>
              <div class="month_btn">
                <span @click="purchase = true">立即购买</span>
              </div>
            </div>
            <ul class="ul_ul">
                <li>
                  <p>数据查询权限</p>
                  <span>招标每日<strong>固定15条</strong></span>
                </li>
                <li>
                  <p>招标订阅</p>
                  <span>无限定订阅</span>
                  <span>关键词订阅</span>
                </li>
                <li>
                  <p>信息推送</p>
                  <span>APP推送</span>
                  <span>微信、邮箱推送</span>
                </li>
                <li>
                  <p>专题项目收集</p>
                  <span>无此特权</span>
                </li>
                <li>
                  <p>企业历史招标</p>
                  <span>有此特权</span>
                </li>
                <li>
                  <p>专属客服服务</p>
                  <span>有此特权</span>
                </li>
                <li>
                  <p>更多特权</p>
                  <span>敬请期待</span>
                </li>
            </ul>
          </li>
          <li id="vip_five">
            <div class="li_head">
              <h2>12个月</h2>
              <div class="li_month">
                <p>￥<span>598</span></p>
                <del>￥1167</del>
              </div>
              <div class="month_btn">
                <span @click="purchase = true">立即购买</span>
              </div>
            </div>
            <ul class="ul_ul">
                <li>
                  <p>数据查询权限</p>
                  <span>招标每日<strong>固定15条</strong></span>
                </li>
                <li>
                  <p>招标订阅</p>
                  <span>无限定订阅</span>
                  <span>关键词订阅</span>
                </li>
                <li>
                  <p>信息推送</p>
                  <span>APP推送</span>
                  <span>微信、邮箱推送</span>
                </li>
                <li>
                  <p>专题项目收集</p>
                  <span>无此特权</span>
                </li>
                <li>
                  <p>企业历史招标</p>
                  <span>有此特权</span>
                </li>
                <li>
                  <p>专属客服服务</p>
                  <span>有此特权</span>
                </li>
                <li>
                  <p>更多特权</p>
                  <span>敬请期待</span>
                </li>
            </ul>
          </li>
      </ul>
      <!-- 购买弹框 -->
      <div id="buy">
        <el-dialog
          :visible.sync="purchase"
          width="400px"
          height="500px"
         >
          <div class="buy_dialog">
            <h2>VIP购买</h2>
            <ul class="buy_ul"> 
                <li>
                  <p>购买账号：</p>
                  <span>13795224587</span>
                </li>
                <li>
                  <p>购买项目：</p>
                  <span>普通会员12个月</span>
                </li>
                <li>
                  <p>实付金额：</p>
                  <span class="buy_money">￥168</span>
                </li>
            </ul>
            <div class="buy_pay">
              <p>用户支付</p>
              <div class="user_pay">
                <p style="margin-right:20px;" class="buy_payActive ">
                  <img src="~/assets/image/wechat_pay.png" alt="">
                  <span>微信支付</span>
                </p>
                <p>
                  <img src="~/assets/image/zh_pay.png" alt="">
                  <span>支付宝支付</span>
                </p>
              </div>
              <li class="wx_pay">
                <img src="~/assets/image/pay_code.png" alt="">
                <p>
                  <img src="~/assets/image/saoyisao.png" alt="">
                  <span>扫一扫支付</span>
                </p>
              </li>
              
            </div>
          </div>
        </el-dialog>
      </div>

      <!-- 兑换弹框 -->
      <div id="exchange">
        <el-dialog
          :visible.sync="exchange"
          width="400px"
          height="339px"
         >
          <div class="exchange_dialog">
            <h2>VIP兑换</h2>
            <ul class="buy_ul" style="border:0"> 
                <li>
                  <p>兑换账号：</p>
                  <span>13795224587</span>
                </li>
                <li>
                  <p>兑换项目：</p>
                  <span>普通会员12个月</span>
                </li>
                <li>
                  <p>所需积分：</p>
                  <span class="buy_money">100嗅币</span>
                </li>
            </ul>
            <p @click="exchangeClick">确定</p> 
          </div>
        </el-dialog>
      </div>
      <!-- 兑换成功弹框 -->
      <div id="exchange_sure">
        <el-dialog
          :visible.sync="exchange_sure"
          width="400px"
          height="240px"
         >
          <div class="exchangeSure_dialog">
              <img src="~/assets/image/success.png" alt="">   
              <p>兑换成功!</p>
              <div>
                <a href="" style="margin-right:50px;">查看记录</a>
                <a href="">返回首页</a>
              </div>
          </div>
        </el-dialog>
      </div>

    </div>
  </div>
</template>
<script>
  var that
  import axios from 'axios'

  export default {
    data() {
      return {
        purchase:false,
        exchange:false,
        exchange_sure:false,
        activeName: 'first'
      }
    },
    mounted(){
      that = this;
      that.initDefault();
      

    },
    methods:{
      exchangeClick(){
        this.exchange = false;
        this.exchange_sure = true;
      },
      initDefault(){
        let vip = document.getElementById('vip_default');
            vip.setAttribute('class','vip_default')
        let vip_one = document.getElementById('vip_one');
          vip_one.onmouseover = function(){
            vip.removeAttribute('class','vip_default')
          } 
        let vip_two = document.getElementById('vip_two');
          vip_two.onmouseover = function(){
            vip.removeAttribute('class','vip_default')
          }
        let vip_four = document.getElementById('vip_four');
          vip_four.onmouseover = function(){
            vip.removeAttribute('class','vip_default')
          }
        let vip_five = document.getElementById('vip_five');
          vip_five.onmouseover = function(){
            vip.removeAttribute('class','vip_default')
          }
        
      }

    },


  }
</script>
<style scoped>
html,body{
  background-color:#f0f0f0;
}
.el-main {
   background-color:#f0f0f0!important;
}
.vip {
  background-color:#f0f0f0;
}
.vip>img{
  width:100%;
  height:598px;
}
.con{
  margin-top:-300px;
  border-radius:10px;
  padding-bottom:200px;
  
}
.con>.con_ul{
  text-align:center;
  height:100%;
  box-sizing:border-box;
  padding:0!important;
  border-radius:10px;
  display:flex;
  flex-direcon:row;
  
}
.li_head{
  position:relative;
}
.con_ul>li>.li_head>img{
  position:absolute;
  top:-47px;
  right:-9px;
  width:36px;

}
con>.con_ul>li:nth-last-child{
  box-shadow:5px 0 5px #999;
}
.con>.con_ul>li{
  flex:1;
  background-color:#fefdfd;
  height:833px;
  float:left;
  box-sizing:border-box;
  border-right:1px solid #eaeaea;
  border-bottom:1px solid #eaeaea;
  padding-top:46px;
}
.con>.con_ul>li:hover{
  z-index:2;
  box-shadow:0 0 15px #666;
  height:850px;
  margin-top:-8px;
  box-sizing:border-box;
  border:1px solid #ff2741;
  border-radius:10px;
}
.con>.con_ul>.vip_default{
  z-index:2;
  box-shadow:0 0 15px #666;
  height:850px;
  margin-top:-8px;
  box-sizing:border-box;
  border:1px solid #ff2741;
  border-radius:10px;
}
.con>.con_ul>li:nth-child(1){
  border-radius:10px 0 0 10px;
  border-left:1px solid #eaeaea;
}
.con>.con_ul>li:nth-child(1):hover{
  width:242px;
  box-shadow:0 0 10px #999;
  height:850px;
  margin-top:-8px;
  box-sizing:border-box;
  border:1px solid #ff2741;
  border-radius:10px;
}
.con>.con_ul>li:nth-child(5){
  border-right:1px solid #eaeaea;
  border-radius:0 10px 10px 0px;
}
.con>.con_ul .active{
    width:242px;
    box-shadow:0 0 10px #999;
    height:850px;
    margin-top:-8px;
    box-sizing:border-box;
    border:1px solid #ff2741;
    border-radius:10px;
}
.con>.con_ul>li:nth-child(5):hover{
    width:242px;
    box-shadow:0 0 10px #999;
    height:850px;
    margin-top:-8px;
    box-sizing:border-box;
    border:1px solid #ff2741;
    border-radius:10px;
}
.li_head{
  border-bottom:1px solid #b2b2b2;
  width:170px;
  margin:0 auto;
  height:240px;
}
.li_head>h2{
  font-size:22px;
  color:#333;
  margin-bottom:26px;
}
.li_head>p{
  font-size:20px;
  color:#7f7f7f;
  vertical-align:middle;
  margin-bottom:47px;
}
.li_head>p>span{
  font-size:40px;
  color:#5a5a5a;
  font-weight:900;
  vertical-align:middle;
}
.li_head>span{
  font-size:17px;
  color:#7e7e7e;
  border-radius:20px;
  border:1px solid #b2b2b2;
  vertical-align:middle;
  display:inline-block;
  width:124px;
  height:40px;
  text-align:center;
  line-height:39px;
  margin-bottom:30px;
  cursor:pointer;
}
.ul_ul{
  margin-top:40px;
  padding:0;
}
.ul_ul>li{
  margin-bottom:15px;
}
.ul_ul>li>p{
  font-size:14px;
  color:#4d4d4d;
  line-height:22px;
  font-weight:900;
}
.ul_ul>li>span{
  font-size:12px;
  color:#616161;
  display:block;
  line-height:22px
}
.ul_ul>li>span>strong{
  color:#4d4d4d;
  font-size:12px;
}
.li_price{
  font-size:14px;
  color:#7f7f7f;
}
.li_price>p>strong{
  font-size:30px;
  color:#ff2741;
}
.li_price>span{
  font-size:14px;
}
.li_price>span>b{
  color:#ff2741;
  font-size:24px;
  margin-right:14px;
}
.li_btn{
  margin-top:40px;
  margin-bottom:30px;
  box-sizing:border-box;
  height:25px;
}
.li_btn>span{
  box-sizing:border-box;
  cursor:pointer;
  font-size:12px;
  display:inline-block;
  width:76px;
  text-align:center;
  height:25px;
  line-height:25px;
  color:#ff2741;
  border-radius:50px;
  border:1px solid #ff2741;
}
.li_btn>span:hover{
  color:#fff;
  border:0;
  background: linear-gradient(to right,#ff3c3f,#fe603b); 
}
.li_btn>span:nth-child(1){
  margin-right:18px;
}
.li_month>p{
  font-size:16px;
  color:#7f7f7f;
  
}
.li_month>p>span{
  font-size:40px;
  color:#ff2741;
  font-weight:900;
}
.li_month>del{
  font-size:14px;
  color:#7f7f7f;
}
.month_btn>span{
  display:inline-block;
  width:124px;
  height:40px;
  text-align:center;
  line-height:40px;
  color:#ff2741;
  border-radius:50px;
  box-sizing:border-box;
  border:1px solid #ff2741;
  margin-top:25px;
  cursor:pointer;
}
.month_btn>span:hover{
  color:#fff;
  border:0;
  background: linear-gradient(to right,#ff3c3f,#fe603b); 
}
.VIP_bg{
  width:100%;
}
#buy .el-dialog__body{
  padding:0!important;
}
.buy_dialog{
  box-sizing:border-box;
  padding:36px;
  width:400px;
  height:500px;
  background-color:#fff;
  border-radius:10px;
}
.exchangeSure_dialog{
  box-sizing:border-box;
  padding:36px;
  width:400px;
  height:240px;
  background-color:#fff;
  border-radius:10px!important;
}
.exchangeSure_dialog>img{
  width:36px;
  height:36px;
}
.exchangeSure_dialog>p{
  color:#ff2741;
  font-size:16px;
  margin-bottom:25px;
}
.exchangeSure_dialog a{
  display:inline-block;
  width:82px;
  height:36px;
  line-height:36px;
  text-align:center;
  font-size:14px;
  color:#4c4c4c;
  border:1px solid #4c4c4c;
  border-radius:4px;
}
.exchange_dialog{
  border-radius:10px;
  box-sizing:border-box;
  padding:36px;
  width:400px;
  height:339px;
  background-color:#fff;
}
.exchange_dialog>h2{
  font-weight:100;
  font-size:17px;
  color:#ff2741;
  padding-bottom:18px;
  border-bottom:1px solid #ebebeb;
}
.exchange_dialog>p{
  width:320px;
  height:40px;
  color:#fff;
  font-size:16px;
  font-weight:900;
  cursor:pointer;
  border-radius:5px;
  margin:30px auto;
  background-color:#ff2741;
  text-align:center;
  line-height:40px;
}
.buy_dialog>h2{
  font-weight:100;
  font-size:17px;
  color:#ff2741;
  padding-bottom:18px;
  border-bottom:1px solid #ebebeb;

}
.buy_ul{
  width:100%;
  height:120px;
  border-bottom:1px solid #ebebeb;
  box-sizing:border-box;
  padding-top:12px;
  padding-left:0;
}
.buy_ul>li{
  width:100%;
  height:30px;
  line-height:30px;
  fot-size:15px;
  color:#575757;
}
.buy_ul>li>p{
  float:left;
  text-align:left;
}
.buy_ul>li>span{
  float:right;
}
.buy_ul .buy_money{
  color:#ff2741
}
.buy_pay{
  margin-top:18px;
}

.buy_pay .wx_pay>p{
  height:40px;
  line-height:40px;
  width:100%;
  background-color:#e5e5e5;
  margin-top:-10px;
}
.wx_pay>img{
  width:100%;
  height:138px;
  margin:0;
}
.buy_pay>p{
  float:left;
  width:25%;
  padding-top:10px;
  font-size:18px;
  color:#4d4d4d;
  
}
.buy_pay>div{
  height:70px;
  float:left;
  width:75%;
  font-size:18px;
  color:#4d4d4d;
  overflow:hidden;
}
.buy_pay>div>P{
  float:left;
  width:110px;
  height:42px;
  line-height:42px;
  text-align:center;
  font-size:14px;
  border:1px solid #d1d1d1;
  cursor:pointer;
}
.buy_pay>.wx_pay{
  width:140px;
  height:175px;
  clear:both;
  margin:0 auto;
  border:1px solid #d1d1d1;
}
.buy_pay .wx_pay>p{
  border:0;
}
.buy_pay .wx_pay>p img{
  width:16px;
  height:16px;
  margin-right:10px;
}
.buy_pay>div>P>img{
  vertical-align:middle;
  display:inline-block;
  width:25px;
  height:25px;

}
.buy_payActive{
  border:1px solid #ff2741!important;
  background:url(~/assets/image/check.png) no-repeat right top;
}

</style>
<style>

.vip #buy .el-dialog__header{
  display:none;
}
.vip #buy .el-dialog__body{
  padding:0!important;
}
.vip #exchange_sure .el-dialog__header{
  display:none;
}
.vip #exchange .el-dialog__header{
  display:none;
}
.vip #exchange .el-dialog__body{
  padding:0!important;
  border-radius:10px!important;
}
.vip #exchange_sure .el-dialog__body{
  padding:0!important;
  border-radius:10px!important;
  height:240px!important;

}
.vip #buy .el-dialog{
  border-radius:10px!important;
}
.vip #exchange_sure .exchangeSure_dialog{
  border-radius:10px!important;
}
.vip #exchange .el-dialog{
  border-radius:10px!important;
}
#buy .el-dialog {
  border-radius:10px!important;
}
#buy .el-dialog .el-dialog__body{
  height:500px;

}
</style>
