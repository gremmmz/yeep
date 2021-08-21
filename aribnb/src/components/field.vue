<template>
    <div>
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field v-model="tel" type="tel" label="手机号" clearable />
        <!-- 输入密码 -->
        <van-field v-model="password" type="password" label="密码" />
    </div>
</template>
