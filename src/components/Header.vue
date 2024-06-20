<script setup></script>

<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">LOGO</router-link></li>
        <li><router-link to="/productdescription">產品簡介</router-link></li>
        <li><router-link to="/manual">使用說明</router-link></li>
        <li><router-link to="/vipservice">加值服務</router-link></li>
        <li><router-link to="/planbegins">開始體驗</router-link></li>
        <li><router-link to="/login">登入</router-link></li>
      </ul>
    </nav>
  </header>

  <router-view> </router-view>
  <div class="el-menu-demo">
  <el-menu class="el-menu--horizontal">
    <el-menu-item>处理中心</el-menu-item>
    <el-submenu>
      <template slot="title">我的工作台</template>
      <el-menu-item>选项1</el-menu-item>
      <el-menu-item>选项2</el-menu-item>
      <el-menu-item>选项3</el-menu-item>
      <el-submenu>
        <template slot="title">选项4</template>
        <el-menu-item>选项1</el-menu-item>
        <el-menu-item>选项2</el-menu-item>
        <el-menu-item>选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item disabled>消息中心</el-menu-item>
    <el-menu-item><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
</div>
<div class="line"></div>
<div class="el-menu-demo" style="background-color: #545c64; color: #fff;">
  <el-menu class="el-menu--horizontal">
    <el-menu-item>处理中心</el-menu-item>
    <el-submenu>
      <template slot="title">我的工作台</template>
      <el-menu-item>选项1</el-menu-item>
      <el-menu-item>选项2</el-menu-item>
      <el-menu-item>选项3</el-menu-item>
      <el-submenu>
        <template slot="title">选项4</template>
        <el-menu-item>选项1</el-menu-item>
        <el-menu-item>选项2</el-menu-item>
        <el-menu-item>选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item disabled>消息中心</el-menu-item>
    <el-menu-item><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  </el-menu>
</div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style scoped>
* {
  
  /* border: 10px solid red; */
  /* background-color: #3c91e0; */
}
header {
  width: 100%;
  height: 500px;
  border: 5px solid greenyellow;
}
ul {
  display: flex;
}
li a {
  color: #000;
}
</style>
