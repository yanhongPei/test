<template>
	<header>
		<slot></slot>
	</header>
</template>
<script type="text/javascript">
	export default {
		name:'MyHead',
		data (){
			return {

			}
		}
	}
</script>
<style type="text/css" scoped>
	header {
		width: 100%;
		height: 40px;
		background-color: RGB(093, 213, 200);
	}
</style>
