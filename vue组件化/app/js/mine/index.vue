<template>
    <div class="content">
        <header class="header">
            <i class="icon-arrow_lift"></i>
            <span class="title">京东登录</span>
        </header>
        <div class="page">
            <div class="login-tab">
                <router-link to="">帐号密码登录</router-link>
                <router-link to="">短信验证码登录</router-link>
                <!-- <a href="">帐号密码登录</a>
                <a href="">短信验证码登录</a> -->
            </div>
        </div>
        <div class="content-wrapper">
            <namelogin/>
            <!-- <router-view></router-view> -->
            <div class="notice"></div>
        <a href="" class="submit">登&nbsp;录</a>
        <a href="" class="key-submit">一键登录</a>
        <div class="quick-nav">
            <a href="" class="forget-psw"><i></i> 忘记密码</a>
            <a href="" class="tel-sign"><i></i>手机快速注册</a>
        </div>
        <div class="quick-login">
            <div class="quick-title">
                <i class="border-1px"></i>
                <span>其他登录方式</span>
                <i class="border-1px"></i>
            </div>
            <div class="weixin-qq">
                <a href=""><i class="icon-sina-weibo"></i></a>
                <a href=""><i class="icon-github"></i></a>
                <p>登录即代表您已同意<a href="">京东隐私政策</a></p>
            </div>
        </div>

        </div>
    </div>
</template>

<script>
import Namelogin from './namelogin'
export default {
  components: {
      Namelogin,
  }
}
</script>
// 试用一下scoped
<style lang="scss" scoped>
        .content{
            background-color: #fff;
        .header{
        position: relative;
        width: 100%;
        height: 90px;
        line-height: 90px;
        text-align: center;
        background: #f9f9f9;
        color: #616161;
        font-size: 34px;
        border-bottom: 2px solid #bbb;
        i{
            position: absolute;
            top: 30px;
            left: 20px;
            color: #616161;
        }
        }
        .page{
            .login-tab{
                display: flex;
                box-sizing: border-box;
                width: 100%;
                height: 90px;
                
                align-items: center;
                justify-content: space-around;
                font-size: 28px;
                border-bottom: 2px solid #d7d7d7;
              
                a{
                    padding: 27px 20px;
                    text-decoration: none;
                    color: #333;
                    .router-link-active{
                        border-bottom: 4px solid #f23030;
                    }
                }
            }
        }
        .content-wrapper{
            padding: 0 40px;
            .notice{
                font-size: 24px;
                height: 60px;
                line-height: 60px;
                color: #f23030;
                text-align: left;
            }
            .submit{
                display: inline-block;
                font-size: 28px;
                width: 100%;
                text-align: center;
                line-height: 96px;
                background-color: #eee;
                border-radius: 4px;
                border: 0;
                color: #848689;
            }
            .key-submit{
                display: inline-block;
                box-sizing: border-box;
                font-size: 28px;
                width: 100%;
                text-align: center;
                line-height: 96px;
                border-radius: 4px;
                border: 2px solid #f23030;
                color: #f23030!important;
                margin-top: 20px;
            }
            .quick-nav{
                overflow: hidden;
                margin-top: 40px;
                height: 44px;
                line-height: 44px;
                color: #333;
                font-size: 24px;
                .forget-psw{
                    float: left;
                }
                .tel-sign{
                    float: right;
                }
            }
            .quick-login{
                margin-top: 180px;
                .quick-title{
                display: flex;
                justify-content: space-around;
                align-items: center;
                i{
                    flex: 1;
                    border-top: 2px solid #bfbfbf;
                }
                span{
                    margin: 0 30px;
                    font-size: 28px;
                    color: #bfbfbf;
                    font-weight: 700;
                }
            
            }
            .weixin-qq{
                margin-top: 60px;
                height: 60px;
                line-height: 60px;
                font-size: 28px;
                color: #333;
                text-align: center;
                > a{
                    padding: 0 40px;
                    i{
                        font-size: 44px;
                        
                    }
                }
                p{
                    a{
                        text-decoration: underline
                    }
                }

            }
        }
        }
        }
     

    

</style>



