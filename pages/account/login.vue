<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机号" prop="iphone">
        <el-input v-model="ruleForm.iphone" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
  .login {
    margin: 100px auto;
    width: 400px;
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
        }
        if ((/^1[3|4|5|6|7|8][0-9]\d{4,8}$/.test(value))) {
          callback();
        } else {
          return callback(new Error('请输入正确的手机号'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };

      return {
        ruleForm: {
          pass: '',
          iphone: '',
        },
        rules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          iphone: [
            {validator: checkIphone, trigger: 'blur'}
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
        //校验成功
        axios.post(this.$store.state.host + '/personal/login', {
          "username": that.ruleForm.iphone,
          "password": md5(that.ruleForm.pass)
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
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>
