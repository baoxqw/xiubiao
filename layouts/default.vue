<template>
  <el-container class="default">
    <el-header height='60px'>
      <el-menu text-color="#000" active-text-color="#1c81ff" :default-active='$route.path' class="el-menu-demo container"
          style='margin: 0 auto; text-align: left' mode="horizontal" :router="true">
        <el-menu-item index="" class="leftLogo"><img style="height:60px;vertical-align:top" src="~/assets/image/ali.png"></el-menu-item>
        <el-menu-item style="margin-left: 80px" index="/">首页</el-menu-item>
        <el-menu-item  style="margin-left: 40px" index="/search">招标采购</el-menu-item>
        <!--<el-menu-item index="/subscribe">招标订阅</el-menu-item>-->
        <el-menu-item style="margin-left: 40px" index="/vip">VIP服务</el-menu-item>
        <el-submenu index="/userInfo">
          <template slot="title"><img class="userImage" src="~/assets/image/zhihu.png"></template>
          <el-menu-item index="/userInfo">账号管理</el-menu-item>
          <el-menu-item index="/userInfo/myCollect">我的收藏</el-menu-item>
          <el-menu-item index="/userInfo/addSubscribe">添加订阅</el-menu-item>
          <el-menu-item index="/userInfo/orderManage">订单管理</el-menu-item>
          <el-menu-item index="/userInfo/myXiuBi">我的嗅币</el-menu-item>
          <el-menu-item @click="exit" index="/">退出登录</el-menu-item>
        </el-submenu>
        <el-menu-item index="" @click="loginDialog = true" 
          class="login">登录</el-menu-item>
      </el-menu>
    </el-header>
    <el-main><nuxt/></el-main>
    <!-- 登录弹框 -->
    <el-dialog width="631px" class="default_dia" height="359px" :show-close="false" :visible.sync="loginDialog" @close="handleClose('ruleForm')">
      <div class="login_dialog">
        <!-- 登录 -->
        <div class="lo">
          <!-- 左边 -->
          <div class="login_left">
            <p class="title">使用微信登录</p>
            <div class="QRcode">
              <img style="width: 154px;height: 154px;margin: 10px 0;" src="~/assets/image/pay_code.png" alt="">
              <p>打开微信扫描二维码登录</p>
            </div>
            <div class="qq_login">
              <span class="qq">使用QQ登录</span>
            </div>
          </div>
          <!-- 右边 -->
          <div class="login_right" v-show="login_dia">
            <el-tabs v-model="activeName">
              <el-tab-pane label="短信登录" name="msg">
                <div class="login_message">
                  <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="" class="demo-ruleForm phone_num">
                    <el-form-item label="" prop="iphone">
                      <el-input v-model="ruleForm.iphone"  oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="code">
                      <el-input v-model="ruleForm.code" placeholder="手机验证码" style="display:inline-block;width:213px;"></el-input>
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
              </el-tab-pane>
              <el-tab-pane label="密码登录" name="password">
                <div class="passLogin">
                  <el-form :model="rulePassForm" status-icon ref="rulePassForm" label-width="" class="demo-ruleForm phone_num">
                    <el-form-item label="" prop="iphone">
                      <el-input v-model="rulePassForm.iphone"  oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="pass">
                      <el-input type="password" v-model="rulePassForm.pass" auto-complete="off" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" class="btn_login" @click="submitPassForm('rulePassForm')">登录</el-button>
                    </el-form-item>
                  </el-form>
                  <p class="err_message" v-if="errMessage">
                      <i class="el-icon-warning"> </i>
                      {{err_message}}
                  </p>
                  <div class="btn_radio">
                     <p style="vertical-align:middle;">
                      <input type="checkbox" v-model="checked" style="vertical-align:middle;margin-right:8px;" name="">
                      记住密码
                     </p>
                     <span style="" @click="forget = true;login_dia = false;clearCookie" >忘记密码？</span>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <!-- 忘记密码 -->
        <div class="login_dialog forget_dialog" v-show="forget">
          <div class="login_right">
            <div class="login_password forget_password" style="position:relative">
              <p>忘记密码</p>
                <el-form :model="ruleForgetForm" status-icon ref="ruleForgetForm" label-width="" class="demo-ruleForm phone_num">
                    <el-form-item label="" prop="iphone">
                      <el-input v-model="ruleForgetForm.iphone"  
                      oninput="if(value.length>11)value=value.slice(0,11)" 
                        placeholder="请输入手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="code">
                      <el-input v-model="ruleForgetForm.code" placeholder="手机验证码" style="display:inline-block;width:230px;"></el-input>
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
                    <p 
                      style="height:30px;line-height:30px;border:0;text-align:right;
                      margin-top:-17px;cursor:pointer;color:#777;box-sizing:border-box;padding-right:5px"
                      @click="forget = false;login_dia = true"
                    >
                     返回登录
                    </p>
                    <p class="err_message" v-if="errMessage">
                      <i class="el-icon-warning"> </i>
                      {{err_message}}
                    </p>
                    <el-form-item>
                      <el-button type="primary" class="btn_login" @click="submitForgetForm('ruleForgetForm')">确认</el-button>
                    </el-form-item>
                </el-form>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <div class="download">
      <p style="margin:15px 0">
        <img src="~/assets/image/code.png" alt="">
        <span>扫描下载APP</span>
      </p>
      <p>
        <img src="~/assets/image/code.png" alt="">
        <span>扫码关注公众号</span>
      </p>
    </div>
    <div class="service">
      <img style="width: 80px;" src="~/assets/image/service.png" alt="">
    </div>
    <el-footer height='120px'>
      <!-- 版权所有©2016 - 2017 | 西安极数宝数据服务有限公司 | 陕ICP备17018521号-1 -->
      <div class="footer container">
        <div class="footer_left ">
          <ul class="ul">
            <li>招标采购</li>
            <li>vip服务</li>
            <li>免声声明</li>
            <li style="border:0">个人中心</li>
          </ul>
          <p>西安极数宝数据服务有限公司-Copyright ©  2018嗅标网</p>
        </div>
        <div class="footer_right">
          <div class="footer_pic">
            <p class="footer_wx">
              <img src="~/assets/image/wechat_active.png" alt="">
              <span>微信公众号</span>
            </p>
            <img src="~/assets/image/code.png" alt="">
          </div>
          <div class="footer_pic">
            <p class="footer_wx">
              <span>APP免费下载</span>
            </p>
            <img src="~/assets/image/code.png" alt="">
          </div>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
  var that
  import axios from 'axios'
  import md5 from 'js-md5';
  export default {
    data: function () {
      // var checkIphone = (rule, value, callback) => {
      //   if (!value) {
      //     var err = '手机号不能为空'
      //     return callback(new Error(err));
      //   }
      //   if ((/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(value))) {
      //     callback();
      //   } else {

      //     return callback(new Error('请输入正确的手机号'));
      //   }
      // }; 
      return {
        errMessage:false,
        err_message:'',
        checked:false,
        isShowBtn: true,
        n: 60,
        btn: '发送验证码',
        isShowBtnForget: true,
        f: 60,
        btnFor: '发送验证码',
        message_phone:'',
        loginDialog: false,
        forget:false,
        login_dia: true,
        passwordDialog:false,//修改密码弹框
        activeName: 'msg',
        passwordType:'password',
        forget_password:'',//输入密码
        // 短信登录
        ruleForm: {
          iphone: '',
          code:''
        },
        //密码登录
        rulePassForm: {
          pass:'',
          iphone: '',
        },
        //忘记密码
        ruleForgetForm: {
          iphone:'',
          pass:''
        },
      }set
    },
    computed: {
      userData () {
        return this.$store.state.user
      }
    },
    mounted () {
      that = this
      this.$store.state.user = JSON.parse(localStorage.getItem('user'))
      this.getCookie();
    },
    methods: {
      /*关闭弹框时初始化数据*/
      handleClose(formName) {
        that.$refs.ruleForgetForm.resetFields()
        that.$refs.ruleForm.resetFields()
        that.$refs.rulePassForm.resetFields()
      },
      /*退出登录*/
      exit() {
        this.$store.commit('$_removeStorage')
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
      /*密码登录*/
      submitPassForm(formName) {
        //开始校验
        if(!that.rulePassForm.iphone){
          that.errMessage = true;
          that.err_message = '手机号不能为空'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        if(!(/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(that.rulePassForm.iphone))){
          that.errMessage = true;
          that.err_message = '手机号不正确'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        console.log(that.rulePassForm.pass)
        if(!that.rulePassForm.pass){
          that.errMessage = true;
          that.err_message = '输入密码不能为空'
          setTimeout(function () {
              that.errMessage = false
            },1000)
          return
        }
        if(that.checked == true){
          //传入账号名，密码，和保存天数3个参数
         that.setCookie(that.rulePassForm.iphone,that.rulePassForm.pass,7);
        }else{
          that.clearCookie();
        }
        //校验成功
        axios.post(this.$store.state.host + '/personal/login', {
          "username": that.rulePassForm.iphone,
          "userpass": that.rulePassForm.pass
        }, {
          withCredentials: true,
        })
          .then(function (response) {
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
              that.err_message = response.data.msg
              setTimeout(function () {
                  that.errMessage = false
              },1000)
                //  that.$message({
                //   showClose: true,
                //   message: response.data.msg,
                //   type: 'error'
                // });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
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
                // that.$message({
                //   showClose: true,
                //   message: response.data.msg,
                //   type: 'error'
                // });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      /*忘记密码发送验证码*/
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
      /*忘记密码弹框*/
      passwordDialogEvent(){
        var that = this;
        that.loginDialog = false
        that.passwordDialog = true
      },
      /*设置cookie*/
      setCookie(c_name,c_pwd,exdays) {
        var exdate=new Date();//获取时间
        exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
        //字符串拼接cookie
        window.document.cookie="userName"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
        window.document.cookie="userPwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
       },
      /*读取cookie*/
      getCookie:function () {
        if (document.cookie.length>0) {
         var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
         for(var i=0;i<arr.length;i++){
          var arr2=arr[i].split('=');//再次切割
          //判断查找相对应的值
          if(arr2[0]=='userName'){
           this.rulePassForm.iphone=arr2[1];//保存到保存数据的地方
          }else if(arr2[0]=='userPwd'){
           this.rulePassForm.pass=arr2[1];
          }
         }
        }
      },
      /*清除cookie*/
      clearCookie:function () {
        this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
       },
    }
  }
</script>
<style>
  .default .el-header {
    background-color: #fff;
    padding: 0;
  }
  .default .el-header .login {
    float: right;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    display: inline-block;
  }
  .default .el-dialog {
    border-radius: 10px;
  }
  .default .el-dialog .el-dialog__header {
    padding: 0;
  }
  .default .el-dialog .el-dialog__body {
    padding: 0;
    overflow:hidden
  }
  .default .login_dialog {
    height: 359px;
  }
  .default .login_dialog .login_left {
    border-right: 1px solid #ebebeb;
    float: left;
    width: 230px;
    height: 100%;
  }
  .default .login_dialog .login_left .title {
    margin-top: 50px;
    font-size: 15px;
    color: #6ecd2a;
  }
  .default .login_dialog .login_left .qq_login {
    margin: 0 auto;
    margin-top: 20px;
    height: 37px;
    line-height: 37px;
    width: 134px;
    color: #27b1f5;
    cursor: pointer;
    border: 1px solid #27b1f5;
    border-radius: 18px;
  }
  .default .login_dialog .login_left .qq_login .qq {
    display: block;
  }
  .default .login_dialog .login_left .qq_login .qq:before {
    content: url("~/assets/image/QQ_active.png");
  }
  .default .login_dialog .login_left .title:before {
    content: url("~/assets/image/wechat_active.png");
  }

  .default .login_dialog .login_right {
    float: left;
    padding: 36px 30px 20px 30px;
    width: 389px;
    height: 100%;
  }
  .default .forget_dialog{
     
     background:#fff;
     border-radius:10px;
  }
  .default .forget_dialog .login_right {
    float: left;
    padding: 14px 30px;
    width: 400px;
    height: 100%;

  }

  .default .el-header .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .default .el-header .el-submenu.is-active .el-submenu__title {
    border-bottom: none;
  }
  .default .el-header .el-menu--horizontal>.el-submenu {
    float: right;
  }
  .el-menu--collapse .el-menu .el-submenu,.el-menu--popup {
    min-width: 100px;
  }
  .el-container {
    text-align: center;
    display: -webkit-box;
    background-color: #f0f0f0;
  }
  .el-container .logo {
    display: inline-block;
  }
  .default .el-main {
    padding: 0; min-width: 960px;
    z-index: 2
  }
  .default .el-header .el-menu--horizontal .el-submenu .el-submenu__title .userImage {
    height: 30px;
    width: 30px;
    border-radius: 15px;
  }
  .default .el-header .el-menu--horizontal .leftLogo {
    float: left;
    padding: 0;
  }
  .default .el-footer {
    z-index: 56;
    bottom: 0;
    width: 100%;
    background-color: #323232;
    font-size: 13px;
    color: #a5a5a5;

  }
  .default .footer{
    overflow: hidden;
    margin:0 auto;
    box-sizing:border-box;
    font-size:12px;
  }
  .default .footer_left{
    width:60%;
    float:left;
    box-sizing:border-box;
    margin-top:30px;
    height:60px;
    border-right:1px solid #545454;
    background-color: #323232;
  }
  .default .footer_left .ul {
    width: 100%;
    display: inline-block;
  }
  .default .footer_left li{
    cursor:pointer;
    color:#e6e6e6;
    width:25%;
    float:left;
    text-align:center;
    box-sizing:border-box;
    border-right:1px solid #545454;
    font-size:14px;
  }
  .default .footer_left li:nth-last-child{
    border:0;
  }
  .default .footer_left>p{
    float:left;
    text-align:left;
    line-height:60px;
    margin-left:90px;
    font-size:12px;
  }
  .default .footer_right{
    padding-top:15px;
    width:38%;
    float:left;
    background:#323232;
    height:120px;
    box-sizing:border-box;
    padding-left:100px;

  }
  .default .footer_wx{
    cursor:pointer;
  }
  .default .footer_wx>img{
    cursor:pointer;
    width:20px;
    vertical-align:middle;
    margin-right:10px;
  }
  .default .footer_wx>span{
    display:inline-block;
    vertical-align:middle;
  }
  .default .footer_pic{
    float:left;
    width:120px;
    color:#dedede;
  }
  .default .footer_pic>img{
    width:65px;
    height:65px;
    margin-top:5px;
  }
  .default .download{
    z-index:5;
    border-radius:10px;
    box-sizing:border-box;
    position:fixed;
    left:10px;
    top:280px;
    width:100px;
    height:240px;
    background: linear-gradient(to right,#ff3c3f,#fe603b);
  }
  .default .download img{
    margin: 0 auto;
    width:80px;
    display:block;
    border-radius:10px;
  }
  .default .service{
    z-index:5;
    position:fixed;
    right:10px;
    bottom:100px;
    width:80px;
  }
  .default .download span{
    font-size:12px;
    color:#fff;
  }
    /*媒体查询*/
 @media screen and (max-width: 1400px) {
    .download{
      display:none;
    }
    .service{
      display:none;
    }
  }
  .login_right .el-tabs__item.is-active{
    color: #ff2341;
  }
  .login_right .el-tabs__item:hover{
    color: #ff2341;
  }
  .login_right .el-tabs__active-bar{
    background-color: #ff2341!important;
  }
  .login_message{
    position:relative;
    width:340px;
    height:220px;
    text-align:left;
  }
  .login_message,.login_password .el-input__inner{
      border-radius:6px;
      margin-bottom:10px;
      outline:none;
      
  }
  .login_password{
    width:340px;
    height:220px;
  }
  .phone_num{
    outline:none;
    margin-bottom:20px;
    border-radius:6px;
    margin-top:20px;
    width:95%!important;
  }
  .passLogin{
    position:relative;
  }
  .passLogin .phone_num{
    width:100%!important;
  }
  .forget_password .phone_num{
    width:100%!important;
  }
  .phont_btn{
    background:#ff2741;
    color:#fff;
    font-size:14px;
    margin-left:10px;
    border-radius:6px;
    width:112px;
    text-align:center;
    height:40px;
    line-height:40px;
    border:1px solid #ff2741;
    outline:none;
  }
  .btn_login{
    font-size:16px;
    border-radius:6px;
    border:0;
    outline:none;
    width:330px;
    height:42px;
    background:#ff2741;
    color:#fff;
  }
  .el-checkbox__input.is-focus .el-checkbox__inner{
    border-color:red;
  }
  .btn_radio{
    width: 95%;
    margin: 10px auto;
    font-size:14px;
    color:#666;
  }
  .btn_radio>p{
    float:left;
  }
  .btn_radio>span{
    float:right;
    cursor:pointer;
  }
  .forget_password{
    position:relative;
    background:#fff;
    height:285px;
  }
  .forget_password .err_message{
    top:124px;
  }
  .forget_password>p{
    text-align:left;
    margin-top:10px;
    height:30px;
    border-bottom:2px solid #e4e7ed;
    font-size:14px;
    color:#303333;
    cursor:pointer;
  }
  .default .el-input__inner{
    background:#fff;
    color:#777;
    font-size:14px;
    margin:0;
  }
  .default .el-input__inner::-webkit-input-placeholder {
    color: #777;
    font-size: 14px;
  }
  .forget_password .phone_num{
    margin-bottom:0;
  }
  .forget_password .btn_login{
    margin-top:12px;
  }
  .default .el-input__inner:focus{
    background:#fff;
    border:1px solid #ff2341;
  }
  .default .forget_dialog .password::after {
    content: url("~/assets/image/open.png");
    position: absolute;
    height: 20px;
    width: 20px;
    right: 20px;
    top:3px;
  }

  .default .forget_dialog .text::after {
    content: url("~/assets/image/close.png");
    position: absolute;
    height: 20px;
    width: 20px;
    right: 20px;
    top:3px;
  
  }
  .err_message{
    box-sizing:border-box;
    padding-left:10px;
    text-align:left;
    width: 80%;
    height: 35px;
    line-height: 35px;
    position: absolute;
    top: 40px;
    left: 7%;
    z-index: 5;
    border-radius: 6px;
    background:rgba(0,0,0,0.5);
    color:#fff!important;
  }
  .err_message>i{
    margin-right:5px;
  }
  .forgetErr_message{
    top:-100px;
    position:relative;
    width: 260px;
    right:50px;
    text-align:left!important;
  }
  .default .el-button--small, .el-button--small.is-round{
    padding: 9px 15px;
    display: inline-block;
    height: 40px;
    width: 102px;
    margin-left: 8px;
    background:#ff2341;
    color:#fff;
    border:0
  }
  .default .btnNumber{
    background:#fff!important;
    color:#777!important;
    border:1px solid #c0c4cc;
  }
  .default .el-button.is-round{
    border-radius:6px;
  }
  .default .el-button--primary{
    background:#ff2341
  }
  .default .el-menu--horizontal>.el-menu-item.is-active{
    border-bottom:2px solid #ff2341!important;
    color:#ff2341!important;
  }
  .default .el-menu--horizontal>.el-menu-item{
    font-size:16px;
    font-weight:900;
    color:#575757!important;
  }
  .el-dialog{
    margin-top:15%!important
  }
</style>
