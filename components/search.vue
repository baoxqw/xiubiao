<template>
	<span class="search_input">
		<el-input
		v-model="$store.state.keyword"
		:autofocus="true"
		:trigger-on-focus='false'
		placeholder="请输入您要查询的关键字"
		@keyup.enter.native="enter"
		></el-input>
		<el-button type="primary" @click="enter" icon="el-icon-search">搜索</el-button>
	</span>
</template>

<style scoped>
.search_input {
  width: 900px;
	display: inline-block;
}
.search_input .el-input {
  float: left;
	width: 880px;
	vertical-align: top;
	outline: none!important;

}
.search_input .el-button {
    position: relative;
    float: left;
    margin-left: -80px;
	height: 50px;
	width: 100px;
	top: 0;
	border-radius: 50px;
	border: 0;
	background: linear-gradient(to right,#ff3c3f,#fe603b);
}

</style>
<style>
.search_input .el-input__inner{
	border: 1px solid #ff2741;
	height: 50px!important;
	border-radius: 50px;
	z-index: -1;
	outline: none!important;
	background: #fff;
}
.search_input .el-input__inner:focus{
	border: 1px solid #ff2741;
}
</style>
<script>
var that
export default {
	data: function() {
		return {
		}
	},
	mounted: function () {
		that = this
	},
	methods: {
		/*enter键盘*/
		enter: function () {
		  console.log(that.$store.state.keyword)
			if (that.$store.state.keyword != '') {
				this.$router.push({ path: `search` })
				this.$emit('enter')
			}
		},
	}
};
</script>
