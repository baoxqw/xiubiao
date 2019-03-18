<template>
	<div class="like container">
		<div v-if="data != ''">
			<p class="total">您一共收藏了<span>{{data.total}}</span>  条数据</p>
			<ul class="content">
				<li v-for="(item,index) in data.records" :key="index">
					<span style="float:left; color: #666">{{index+1}}.&nbsp;&nbsp;</span>
					<nuxt-link target="_blank" class="title" :to="{ path: '/search/detail', query:{ id: item.dataId,sceneId: $store.state.user == null? 0: $store.state.user.sceneId, userId: $store.state.user == null? null: $store.state.user.userId}}">
						{{item.dataTitle}}
					</nuxt-link>
					<el-tag v-if="item.dataCity" size="mini" class="area">{{item.dataCity}}</el-tag>
					<el-tag v-else-if="item.dataProvince" size="mini" class="area">{{item.dataProvince}}</el-tag>
					<el-tag v-else size="mini" class="area">全国</el-tag>
					<el-tag size="mini" class="type" type="warning">{{item.dataInfoType}}</el-tag>
					<span class="time"><i class="el-icon-time"></i>{{item.dataCreateTime}}</span>
					<div class="html">{{item.dataContent}}</div>
				</li>
			</ul>
		<el-pagination
		@current-change="pageChange"
		:current-page.sync="pageNo"
		:page-size="10"
		layout="total, prev, pager, next"
		:total="data.total">
	</el-pagination>
		</div>
		<div class="null_data" v-else>
			<img src="/null_data.png">
			<p><el-button @click='toIndex' size="medium" type="primary">点击返回首页</el-button></p>
		</div>
		</div>
</template>
<script>
import axios from 'axios';
var that
export default {
	data: function() {
		return {
			data: {},
			pageNo: 1,
		}
	},
	mounted () {
		that = this
		that.getLikeList()
	},
	head () {
    	return {
      		title: '麦仓招标网',
      		meta: [
        		{ hid: 'description', name: 'description', content: '麦仓招标是国内专业的招投标服务平台，海量招标信息，向用户提供查看信息，招标搜索，信息跟踪等多项服务，让您随时随地了解掌握最新招标咨询！' }
      		]
    	}
  	},
	methods: {
		/*获取收藏列表*/
		getLikeList: function() {
			if (this.$store.getters.getStorage) {
				let userId = this.$store.getters.getStorage.userId
				axios.get(that.$store.state.host+'/personal/getCollectionList?userId='+ userId + '&pageNo=' + that.pageNo + '&pageSize=10&fresh='+ Math.random())
					.then(function (response) {
						if (response.data.status == 200) {
							that.data = response.data.data
						} else {
							that.data = ''
						}
					})
					.catch(function (error) {
					console.log(error);
				});
			} else {
				this.$router.push({ path: `/login` })
			}
		},
		/*分页*/
		pageChange: function(val) {
			that.pageNo = val
			that.getLikeList()
		},
		toIndex: function() {
			this.$router.push({ path: `/` })
		}
	}
};
</script>
<style scoped>
	.like {
		margin: 100px auto;
	}
	.like .total {
		text-align: left;
		padding: 0 110px;
		font-size: 14px;
		color: #FFBA4C;
	}
	.like .total span {
		color: red;
	}
	.content {
	padding: 0;
	list-style: none;
	float: left;
	width: 100%; 
}
@media (min-width: 1260px){
	.like .content {
		padding: 0 100px;
	}
}
.like .content>p {
	font-size: 30px;
	margin: 50px 0;
}
.like .content li {
	margin: 20px 0;
	font-size: 15px;
	text-align: left;
}
.like .content li .title {
	width: 600px;
	color: #000;
	font-size: 16px;
	word-wrap:break-word;
	white-space: nowrap;
	overflow: hidden;
	display: inline-block;
	text-overflow: ellipsis;
}
.like .content li .type {
	color: #FFBA00;
	margin-left: 20px;
}
.like .content .el-tag {
	vertical-align: top;
}
.like .content li .time {
	margin-left: 20px;
	float: right;
}
.like .content .title:hover {
	color: #409EFF;
	text-decoration: underline;
}
.like .content .html {
	padding: 15px 5px;
	font-size: 14px;
	color: #777;
	border-bottom: 1px solid #e5e5e5;
}
.like .el-pagination {
	display: inline-block;
}
.like .null_data img{
	margin: 100px 0;
}
</style>