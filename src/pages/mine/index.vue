<template>
  <div class="page">
    <zoom-navbar @on-click-back="back" :fixed="true">
      我的
    </zoom-navbar>
    <div class="page-content">
      <zoom-cell :is-link="true" :show-icon="true" @click.native="showDialog">
        <span slot="title">
          <label>自定义标题和内容</label>
        </span>
      </zoom-cell>
      <zoom-textinput v-model="val" label="基本用法：" placeholder="请输入内容" />
      <zoom-button type="primary" @click="showPopUp">popup</zoom-button>
      <zoom-popup v-model="show" round position="bottom" :style="{ height: '20%' }" />
      <zoom-button type="primary" @click="switchActionSheet">actionsheet</zoom-button>
      <zoom-actionsheet :is-visible="isVisible" :is-lock-bg-scroll="true"
          @close="switchActionSheet"
          :menu-items="menuItems"
          @choose="chooseItem"
      ></zoom-actionsheet>
      <zoom-swiper
        :paginationVisibile="true"
        direction="horizontal"
        :swiperData="dataImgItem"
        :loop="true"
        :canDragging="false"
        :paginationVisible="true"
      >
        <div v-for="(item, index) in dataImgItem" :key="index" class="zoom-swiper-slide ">
          <img :src="item.imgSrc" style="max-width:100%; max-height:100%" />
        </div>
      </zoom-swiper>
      <zoom-cell :showIcon="true" :isLink="true" @click.native="switchPickerClose">
        <span slot="title"><label>日期区间选择</label></span>
        <span slot="sub-title">有默认日期~~~</span>
        <div slot="desc" class="selected-option">
          <span class="show-value">{{ date1 ? `${date1[0]}至${date1[1]}` : '请选择日期' }}</span>
        </div>
      </zoom-cell>
      <zoom-calendar
        :is-visible.sync="isVisible1"
        :default-value="date1"
        type="range"
        :start-date="null"
        :end-date="null"
        @choose="setChooseValue1"
        >
      </zoom-calendar>
      <zoom-noticebar>
        华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！
      </zoom-noticebar>
      <zoom-steps :current="3">
        <zoom-step title="已完成" content></zoom-step>
        <zoom-step title content="这里是该步骤的描述信息"></zoom-step>
        <zoom-step title="进行中" content="这里是该步骤的描述信息"></zoom-step>
        <zoom-step title="待进行" content="这里是该步骤的描述信息"></zoom-step>
        <zoom-step title="待进行" content="这里是该步骤的描述信息"></zoom-step>
      </zoom-steps>
       <zoom-textinput v-model="input" label="基本用法：" placeholder="请输入内容" />
      </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      show: false,
      isVisible: false,
      isVisible1: false,
      val: '',
      input: '',
      date1: ['2018-12-22', '2019-01-08'],
      sex: '请选择',
      menuItems: [
        {
          name: '男',
          value: 0,
        },
        {
          name: '女',
          value: 1,
        },
      ],
      dataImgItem: [
        {
          imgSrc: 'https://filestorage.gtdreamlife.com/test/1597633985109ba3e8ed06b9f4b0d90a5cf224511aa45.png',
        },
        {
          imgSrc: 'https://filestorage.gtdreamlife.com/test/1597633948834743877a801f048d7b98e3932b959b4d7.png',
        },
        {
          imgSrc: 'https://filestorage.gtdreamlife.com/test/1597633985109ba3e8ed06b9f4b0d90a5cf224511aa45.png',
        },
        {
          imgSrc: 'https://filestorage.gtdreamlife.com/test/1597633948834743877a801f048d7b98e3932b959b4d7.png',
        },
      ],
    };
  },
  computed: {

  },
  watch: {

  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    showDialog() {
      const options = {
        title: '确定删除此订单？',
        content: '删除后将从你的记录里消失，无法找回',
        closeOnPopstate: true,
      };

      this.$dialog(options);
    },
    showPopUp() {
      this.show = true;
    },
    switchActionSheet() {
      this.isVisible = !this.isVisible;
    },
    switchPickerClose() {
      this.isVisible1 = !this.isVisible1;
    },
    setChooseValue1(param) {
      console.log(param);
      this.date1 = [...[param[0][3], param[1][3]]];
    },
    chooseItem(itemParams) {
      this.sex = itemParams.name;
    },
  },
  created() {

  },
};
</script>

<style scoped lang="less" >
.backBtn{
  width: 50px;
}
</style>
