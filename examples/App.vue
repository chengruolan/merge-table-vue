<template>
  <div id="app" class="home">
    <header class="title">合并表格</header>
    <div class="content">
      <div class="menu">
        <ul>
          <li><router-link to="/table1">1</router-link></li>
          <li><router-link to="/foo">2</router-link></li>
        </ul>
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
    <footer class="title">crl</footer>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    menuData: () => {}
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "./styles/index.scss";
.home {
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 100%;
  .title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
  }
  header,
  footer {
    position: absolute;
    width: 100%;
    padding: 24px;
  }
  header {
    top: 0;
    border-bottom: 1px solid #eaecef;
  }
  footer {
    bottom: 0;
    border-top: 1px solid #eaecef;
  }
  .content {
    margin: 81px 24px;
    height: calc(100% - 162px);
    display: flex;
    justify-content: center;
    align-items: center;
    .menu {
      width: 320px;
      border-right: 1px solid #eaecef;
      height: 100%;
      overflow: auto;
      ul {
        padding: 24px 0;
        font-size: 15px;
        font-weight: 700;
        line-height: 40px;
      }
    }
    .main {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
