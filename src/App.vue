<template>
  <div>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Jobs">
        <img slot="icon" src="">
        职位
      </mt-tab-item>
      <mt-tab-item id="Companies">
        <img slot="icon" src="">
        公司
      </mt-tab-item>
      <mt-tab-item id="消息">
        <img slot="icon" src="">
        <Icon type="ios-text-outline" />
        消息
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      selected:'Jobs'
    }
  },
  watch:{
    selected (newV,oldV) {
      this.$router.push({
        name : newV
      })
    }
  }
}
</script>

<style>

</style>
