<template>
  <div class="page">
    <zoom-navbar @on-click-back="back" :fixed="true">
      首页
    </zoom-navbar>
    <div class="page-content">
      <zoom-button type="primary" @click="goMine">goMine</zoom-button>
      <div class="video-con">
        <zoom-video
          :sources="sources"
          :options="options"
          @play="play"
          @pause="pause"
          @playend="playend"
        />
      </div>
      <zoom-cell :show-icon="true" title="请选择城市" :desc="option" @click.native="openSwitch">
      </zoom-cell>
      <div>
        <zoom-cell>
          <span slot="title"><zoom-rate v-model="val"></zoom-rate></span>
        </zoom-cell>
        <zoom-cell>
          <span slot="title">当前分数：{{ val }}分</span>
        </zoom-cell>
      </div>
      <zoom-picker
        :is-visible="isVisible"
        :list-data="listData"
        :default-value-data="defaultValueData"
        @confirm="confirm"
      ></zoom-picker>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isVisible: false,
      option: '请选择',
      val: 10,
      defaultValueData: null,
      listData: [
        [
          {
            label: 1,
            value: '南京市',
          },
          {
            label: 2,
            value: '无锡市',
          },
          {
            label: 3,
            value: '海北藏族自治区',
          },
          {
            label: 4,
            value: '北京市',
          },
          {
            label: 5,
            value: '连云港市',
          },
          {
            label: 6,
            value: '浙江市',
          },
          {
            label: 7,
            value: '江苏市',
          },
          {
            label: 8,
            value: '大庆市',
          },
          {
            label: 9,
            value: '绥化市',
          },
          {
            label: 10,
            value: '潍坊市',
          },
          {
            label: 11,
            value: '请按市',
          },
          {
            label: 12,
            value: '乌鲁木齐市',
          },
        ],
      ],
      sources: [
        {
          src:
            'https://gt-toolbox.oss-cn-beijing.aliyuncs.com/gt-toolbox/b5f94e92-e50c-4946-8e54-7a9f90aed9bf.mp4',
          type: 'video/mp4',
        },
      ],
      options: {
        controls: true,
      },
    };
  },
  methods: {
    back() {
      // $jssdk('nav.pop');
      this.$router.go(-1);
    },
    confirm(value) {
      console.log('value', value);
      this.isVisible = !this.isVisible;
    },
    openSwitch() {
      this.isVisible = !this.isVisible;
    },
    goMine() {
      this.$router.push({
        path: './mine',
      });
    },
    play(elm) {
      console.log('play', elm);
    },
    pause(e) {
      console.log('pause', e);
    },
    playend(e) {
      alert('播放结束', e);
    },
  },
  activated() {
    console.log('bbb');
  },
  created() {
    console.log('aaaa');
  },
};
</script>
<style lang="less" scoped>

</style>
