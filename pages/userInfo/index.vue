<template>
  <div class="cardItem">
    <el-card shadow="never" class="box-card">
      <div slot="header" class="clearfix">
        <span>账号管理</span>
      </div>
      <div class="content">
        <div class="phone item" style="position:relative">
          <div class="item_bj phone_bj">
            <img class="img" src="~/assets/image/iphone.png" alt="">
          </div>
          <div class="item_text">
            <p class="textName">我的手机</p>
            <p class="prompt">绑定手机号后可直接使用手机号登录</p>
            <el-button size="mini" type="danger" @click="bundDialog = true">去绑定</el-button>
          </div>
          <div class="cancleBund">
            <span @click="changeDialog = true">修改登录密码</span>
          </div>
          <!-- 绑定手机号弹框 -->
          <div class="bund_dialog">
             <el-dialog width="389px" class="default_dia" 
               :show-close="false" 
               :visible.sync="bundDialog" 
             >
             <div class="login_message">
              <li>绑定手机号</li>
                <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="" 
                class="demo-ruleForm phone_num">
                  <el-form-item label="" prop="iphone">
                    <el-input v-model="ruleForm.iphone"  oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号码"></el-input>
                  </el-form-item>
                  <el-form-item label="" prop="code">
                    <el-input v-model="ruleForm.code" placeholder="手机验证码" style="display:inline-block;width:228px;"></el-input>
                    <el-button class="btn" v-if="isShowBtn" @click="sendCode" size="small" round>{{btn}}</el-button>
                    <el-button class="btnNumber" v-else disabled @click="sendCode" size="small" round>重新发送({{n}})</el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" class="btn_login" @click="submitForm('ruleForm')">登录</el-button>
                  </el-form-item>
                </el-form>
                <p class="err_message" v-if="errMessage">
                  <i class="el-icon-warning"> </i>
                  {{err_message}}
                </p>
                </div>
             </el-dialog>
          </div>
          <!-- 修改密码弹框 -->
          <div class="change_dialog">
            <el-dialog width="389px"  class="default_dia" 
               :show-close="false" 
               :visible.sync="changeDialog" 
             >
             <div class="change_wrap">
                <li>修改登录密码</li>
                <el-form :model="ruleForgetForm" status-icon ref="ruleForgetForm" label-width="" class="demo-ruleForm phone_num">
                    <el-form-item label="" prop="iphone">
                      <el-input v-model="ruleForgetForm.iphone"  
                      oninput="if(value.length>11)value=value.slice(0,11)" 
                        placeholder="请输入手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="code">
                      <el-input v-model="ruleForgetForm.code" placeholder="手机验证码" style="display:inline-block;width:219px;"></el-input>
                      <el-button class="btn" v-if="isShowBtnForget" @click="sendForgetCode" size="small" round>{{btnFor}}</el-button>
                      <el-button class="btnNumber" v-else disabled @click="sendForgetCode" size="small" round>重新发送({{f}})</el-button>
                    </el-form-item>
                    <el-form-item label="" prop="pass">
                      <el-input v-model="ruleForgetForm.pass" placeholder="请输入密码" :type="passwordType"
                        ></el-input>
                      <span @click="passwordType == 'text' ? passwordType = 'password' : passwordType = 'text'"
                          :class="passwordType"
                          style=""></span>
                    </el-form-item>
                    
                    <p class="err_message" v-if="errMessage">
                      <i class="el-icon-warning"> </i>
                      {{err_message}}
                    </p>
                    <el-form-item>
                      <el-button type="primary" class="btn_login" @click="submitForgetForm('ruleForgetForm')">确认</el-button>
                    </el-form-item>
                </el-form>
             </div>
           </el-dialog>
          </div>
        </div>
        <div class="wechat item">
          <div class="item_bj wechat_bj">
            <img class="img" src="~/assets/image/wechat.png" alt="">
          </div>
          <div class="item_text">
            <p class="textName">首次绑定微信号可获得30嗅币</p>
            <p class="prompt">绑定微信号后可直接使用微信扫码授权登录</p>
            <el-button size="mini" type="danger" @click="wxDialog = true">去绑定</el-button>
          </div>
          <div class="wx_dialog">
            <el-dialog width="220px" class="default_dia" 
               :show-close="false" 
               :visible.sync="wxDialog" 
             >
             <div class="wx_wrap">
               <img src="~/assets/image/code.png" alt="">
             </div>
           </el-dialog>
          </div>
        </div>
        <div class="qq item">
          <div class="item_bj qq_bj">
            <img class="img" src="~/assets/image/QQ.png" alt="">
          </div>
          <div class="item_text">
            <p class="textName">首次绑定qq号可获得30嗅币</p>
            <p class="prompt">绑定QQ号后可直接使用QQ扫码授权登录</p>
            <el-button size="mini" type="danger">去绑定</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  var that
  export default {
    data(){
      return{
        bundDialog:false,//绑定手机号弹框
        wxDialog:false,//绑定微信弹框
        changeDialog:false,//修改登录密码弹框
        err_message:'',
        isShowBtn: true,
        errMessage:false,
        n: 60,
        btn: '发送验证码',
        isShowBtnForget: true,
        f: 60,
        btnFor: '发送验证码',
        ruleForm: {
          iphone: '',
          code:''
        },
        passwordType:'password',
        ruleForgetForm:{
          iphone: '',
          pass:'',
          code:''
        }
      }
    },
    mounted(){
      that = this
    },
    methods:{
      /*短信登录发送验证码*/
      sendCode() {
        if(!that.ruleForm.iphone){
          that.errMessage = true;
          that.err_message = '请输入手机号码'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        if(!(/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(that.ruleForm.iphone))){
          that.errMessage = true;
          that.err_message = '手机号码不正确'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        if ((/^[1][3,4,5,6,,7,8,9][0-9]{9}$/.test(that.ruleForm.iphone))) {
          axios.get(this.$store.state.host + '/sms/sendCode?phoneNumber=' + that.ruleForm.iphone +'&serviceType=0')
            .then(function (response) {
              if (response.data.status === 200) {
                that.bizId = response.data.data.bizId
                that.$message({
                  showClose: true,
                  message: response.data.msg,
                  duration: 5000,
                  type: 'success'
                });
                that.isShowBtn = false
                var myVar = setInterval(function () { 
                  if (that.n > 0) {
                    that.n += -1
                  } else {
                    that.n = 60
                    clearInterval(myVar)
                    that.isShowBtn = true
                  }
                },1000)
              } else {
                that.errMessage = true;
                that.err_message = response.data.msg
                setTimeout(function () {
                    that.errMessage = false
                },1000)
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      /*修改密码发送验证码*/
      sendForgetCode() {
        if(!that.ruleForgetForm.iphone){
          that.errMessage = true;
          that.err_message = '请输入手机号码'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        if(!(/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(that.ruleForgetForm.iphone))){
          that.errMessage = true;
          that.err_message = '手机号码不正确'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        if ((/^[1][3,4,5,6,,7,8,9][0-9]{9}$/.test(that.ruleForgetForm.iphone))) {
          axios.get(this.$store.state.host + '/sms/sendCode?phoneNumber=' + that.ruleForgetForm.iphone +'&serviceType=0')
            .then(function (response) {
              if (response.data.status === 200) {
                that.bizId = response.data.data.bizId
                that.$message({
                  showClose: true,
                  message: response.data.msg,
                  duration: 5000,
                  type: 'success'
                });
                that.isShowBtnForget = false
                var myVar = setInterval(function () { 
                  if (that.f > 0) {
                    that.f += -1
                  } else {
                    that.f = 60
                    clearInterval(myVar)
                    that.isShowBtnForget = true
                  }
                },1000)
              } else {
                that.errMessage = true;
                that.err_message = response.data.msg
                setTimeout(function () {
                    that.errMessage = false
                },1000)
                /*that.$message({
                  showClose: true,
                  message: response.data.msg,
                  type: 'error'
                });*/
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      /*短信登录*/
      submitForm(formName) {
        //开始校验
        if(!that.ruleForm.iphone){
          that.errMessage = true;
          that.err_message = '手机号不能为空'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        if(!(/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(that.ruleForm.iphone))){
          that.errMessage = true;
          that.err_message = '手机号不正确'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        //校验成功
        axios.post(this.$store.state.host + '/personal/login', {
          "username": that.ruleForm.iphone,
        }, {
          withCredentials: true,
        })
          .then(function (response) {
            console.log('发起请求')
            if (response.data.status == 200) {
              that.$message({
                showClose: true,
                message: response.data.msg,
                type: 'success'
              });
              that.$store.commit('$_setStorage', response.data.data.user)
              that.$emit('user')
              that.$router.push({ path: `/` })
            } else {
              that.errMessage = true;
              that.err_message = response.data.msg;
              setTimeout(function () {
                  that.errMessage = false
                },1000)
             
              // that.$message({
              //     showClose: true,
              //     message: response.data.msg,
              //     type: 'error'
              //   });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      /*确认修改密码*/
      submitForgetForm(formName){
        //开始校验
        if(!that.ruleForgetForm.iphone){
          that.errMessage = true;
          that.err_message = '手机号不能为空'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        if(!(/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(that.ruleForgetForm.iphone))){
          that.errMessage = true;
          that.err_message = '手机号不正确'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        if(!that.ruleForgetForm.pass){
          that.errMessage = true;
          that.err_message = '密码不能为空'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        
      },

    }
  }
</script>
<style>
  .cardItem .el-card .el-card__body {
    padding-top: 0;
  }
</style>
<style scoped>
  .cardItem .el-card {
    height: 633px;
    text-align: left;
  }
  .cardItem .el-card .content .item {
    height: 120px;
  }
  .cardItem .el-card .item_bj {
    margin: 35px  0;
    display: inline-block;
    height: 50px;
    width: 50px;
    background-image: url("~/assets/image/type_unactive.png");
    background-size: cover;
  }
  .cardItem .el-card .item_bj .img {
    display: block;
    margin: 0 auto;
    padding: 10px 0;
  }
  .cardItem .el-card .item .item_text {
    position: absolute;
    margin: 17px 0;
    margin-left: 23px;
    display: inline-block;
  }
  .cardItem .el-card .item .item_text .prompt {
    line-height: 28px;
    font-size: 14px;
    color: #656565;
  }
  .cardItem .el-card .item .item_text .textName {
    line-height: 32px;
    font-size: 16px;
    color: #333;
  }
  .cardItem .el-card .item .item_text .el-button--danger {
    padding: 5px 10px;
    background-color: #ff2741;
  }
  .bund_dialog .login_message{
    margin:0 auto;
    height:250px;
    position:relative;
  }
  .bund_dialog .err_message{
    top:83px;
  }
  .bund_dialog .phone_num{
    width:100%!important
  }
  .bund_dialog .btn_login{
    width:100%!important
  }
  .login_message>li{
    border-bottom:2px solid #e4e7ed;
    margin-top:20px;
    height:30px;
  }
  .wx_wrap{
    width:200px;
    height:200px;
    margin:0 auto;
    padding:10px;
  }
  .wx_wrap>img{
    width:100%;
    height:100%;
  }
  .cancleBund{
    position:absolute;
    right:0;
    top:40px;;
  }
  .cancleBund>span{
    display:inline-block;
    width:123px;
    height:38px;
    line-height:38px;
    text-align:center;
    color:#ff2341;
    border:1px solid #ff2341;
    border-radius:50px;
    cursor:pointer;
  }
  .change_wrap{
    position:relative;
    margin:0 auto;
    width:350px;
    height:300px;
  }
  .cardItem .change_wrap .password::after {
    content: url("~/assets/image/open.png");
    position: absolute;
    height: 20px;
    width: 20px;
    right: 20px;
    top:3px;
  }

  .cardItem .change_wrap .text::after {
    content: url("~/assets/image/close.png");
    position: absolute;
    height: 20px;
    width: 20px;
    right: 20px;
    top:3px;
  }
  .cardItem .change_wrap .phone_num{
    margin:0 auto!important
  }
  .change_wrap>li{
    margin-top:10px;
    height:30px;
    margin-bottom:20px;
    box-sizing:border-box;
    padding-left:10px;
    border-bottom:2px solid #e4e7ed;
  }
  .change_wrap .err_message{
    top:114px;
  }
</style>
