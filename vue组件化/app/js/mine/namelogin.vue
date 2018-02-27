<template>
  <div>
      <div class="account">
          <div class="name">帐号</div>
          <input type="text" placeholder="用户名/邮箱/已验证手机">
          <i></i>
      </div>
      <div class="account">
          <div class="name">密码</div>
          <input type="text" placeholder="请输入密码">
          <i></i>
      </div>
      
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
    .account{
        box-sizing: border-box;
        width: 100%;
        height: 96px;
        line-height: 96px;
        padding: 0 10px;
        border-bottom: 2px solid #d7d7d7;
        .name{
            display: inline;
            line-height: 96px;
            font-size: 28px;
            color: #333;
        }
        input{
            border: none;
            height: 38px;
            outline: 0;
            font-size: 28px;
            padding: 0 60px;
        }
    }
   
</style>
