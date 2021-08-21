<template>
    <div>
        <div class="vnb">
            <router-link to="/my">
            <van-nav-bar>
            <template #left>
                <van-icon name="arrow-left" size="18px" color="#797979"/>
                &nbsp;&nbsp;&nbsp;
                <span>账号设置</span>
            </template>
            </van-nav-bar>
        </router-link> 
        </div>
        
        <div class="cny">
            <p>账号管理</p>
            <p>关于此应用程序</p>
            <p>高级设置</p>
            <p>发送反馈</p>
        </div>
    </div>
</template>

<style scoped>
.vnb{
    margin-top: 5%;
}
span{
    font-size: 18px;
    color: #454545;
}
.cny p{
    font-size: 18px;
    color: #454545;
    margin-left: 5%;
    line-height: 400%;
}
</style>
