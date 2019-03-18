<template>
  <div class="register">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机号" prop="iphone">
        <el-input v-model="ruleForm.iphone" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="手机验证码" prop="code">
        <el-input v-model="ruleForm.code" placeholder="请输入手机验证码"></el-input>
        <el-button class="btn" v-if="isShowBtn" @click="sendCode" size="small" round>{{btn}}</el-button>
        <el-button class="btnNumber" v-else disabled @click="sendCode" size="small" round>重新发送({{n}})</el-button>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="再次输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
  .register {
    margin: 100px auto;
    width: 400px;
  }

  .register .btn {
    position: absolute;
    left: 205px;
    top: 4px;
  }
  .register .btnNumber {
    position: absolute;
    left: 195px;
    top: 4px;
  }
</style>

<script>
  var that
  import axios from 'axios'
  import md5 from 'js-md5';

  export default {
    data() {
      var checkIphone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else if ((/^[1][3,4,5,6,,7,8,9][0-9]{9}$/.test(value))) {
          callback();
        } else {
          return callback(new Error('请输入正确的手机号'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var checkCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        }
        callback();
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          iphone: '',
          code: '',
          sendDate: '',
        },
        isShowBtn: true,
        n: 60,
        btn: '发送验证码',
        bizId: '',
        rules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          iphone: [
            {validator: checkIphone, trigger: 'blur'}
          ],
          code: [
            {validator: checkCode, trigger: 'blur'}
          ],
        }
      };
    },
    head () {
    	return {
      		title: '麦仓招标网',
      		meta: [
        		{ hid: 'description', name: 'description', content: '麦仓招标是国内专业的招投标服务平台，海量招标信息，向用户提供查看信息，招标搜索，信息跟踪等多项服务，让您随时随地了解掌握最新招标咨询！' }
      		]
    	}
  	},
    mounted: function () {
      that = this
      // this.sendDate = this.getCurrentDate()
    },
    methods: {
      submitForm(formName) {
        if (that.ruleForm.checkPass && that.ruleForm.pass && that.ruleForm.checkPass === that.ruleForm.pass) {
          //校验成功
          axios.post(this.$store.state.host + '/personal/register', {
            "phoneNumber": that.ruleForm.iphone,
            "code": that.ruleForm.code,
            "password": md5(that.ruleForm.checkPass),
            "bizId": that.bizId,
            // "sendDate": that.sendDate
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
                that.$router.push({path: `/`})
              } else {
                that.$message({
                  showClose: true,
                  message: response.data.msg,
                  type: 'error'
                });
              }

            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          that.$message({
            showClose: true,
            message: '请正确填写密码！',
            type: 'error'
          });
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      sendCode() {
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
                that.$message({
                  showClose: true,
                  message: response.data.msg,
                  type: 'error'
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    }
  }
</script>
