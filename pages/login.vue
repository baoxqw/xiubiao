<template>
	<div class="login">
		<p>微信扫码登录</p>
		<img class="qrcode" v-if="QRCodeUrl" :src="QRCodeUrl">
		<img class="faild" v-else alt="获取失败">
		<div class="btn">
			<nuxt-link class="account" to="/account/login"><el-button type="primary" size="small">账号登录</el-button></nuxt-link>
			<nuxt-link class="account" to="/account/register"><el-button type="success" size="small">账号注册</el-button></nuxt-link>
		</div>
	</div>
</template>

<style scoped>
	.login {
		margin: 100px 0;
	}
	.login p {
		color: #333;
	}
	.login .qrcode {
		width: 230px;
	}
	.login .faild {
		margin: 100px 0;
	}
	.login .btn {
		margin-top: 80px;
	}
	.account+.account {
		margin-left: 90px;
	}
</style>

<script>
var that
import axios from 'axios';
export default {
	data: function() {
		return {
			QRCodeUrl: ''
		}
	},
	asyncData: function (context) {
		let date ='01%23' + new Date().getTime().toString().substring(5)
		return axios.get(context.store.state.host+'/personal/getQRCode?sceneId='+date)
		.then(function (response) {
			if (response.data.status == 200) {
				return {QRCodeUrl: response.data.data.QRCodeUrl,sceneId: response.data.data.sceneId}
			}
		})
		.catch(function (error) {
			console.log(error);
		});
	},
	head () {
    	return {
      		title: '麦仓招标网',
      		meta: [
        		{ hid: 'description', name: 'description', content: '麦仓招标网，扫码登录' }
      		]
    	}
  	},
	mounted () {
		if (this.$store.getters.getStorage) {
			this.$router.push({ path: `/` })
		}
		that = this
		if ("WebSocket" in window) {
            var ws = new WebSocket(that.$store.state.ws+"/websocket?sceneId="+that.sceneId);
            ws.onopen = function() {
                ws.send(that.sceneId);
            };
            ws.onmessage = function (evt) {
            	if (JSON.parse(evt.data).status === 200) {
              		that.$store.commit('$_setStorage', JSON.parse(evt.data).data)
              		that.$emit('user')
              		that.$router.push({ path: `/` })
            	}
                ws.close();
            };
        } else {
            alert("您的浏览器不支持扫码登录，请更换浏览器尝试!");
        }
	}
};
</script>
