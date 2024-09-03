<template>
  <div class="about">
    <h4>使用了 postcss-px-to-viewport 插件2</h4>
    <h4>将 px 动态转成 vw</h4>
    <van-button type="primary" @click="show">Vant Button</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    show() {
      this.$toast({
        message: "Vant UI",
        type: "success",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.about {
  padding-top: 20vh;
}
</style>
