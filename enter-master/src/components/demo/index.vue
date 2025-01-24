<template>
  <div class="demo_wrap">
    <div class="demo_title_wrap">
      <h1>预约产品演示</h1>
      <p>
        请完善以下信息，我们的顾问会在1个工作日内与您联系，为您安排产品演示服务
      </p>
    </div>
    <div class="demo_form hidden-xs-only">
      <Form
        :model="formTop"
        label-position="top"
        inline
        class="demo_form_item1"
      >
        <FormItem
          label="想了解的产品服务"
          style="width: 46%"
          class="form_item1"
          required
        >
          <Select v-model="formTop.service" placeholder="请选择" size="large">
            <Option value="产业大脑">产业大脑</Option>
            <Option value="云招商">云招商</Option>
            <Option value="企业创新服务">企业创新服务</Option>
            <Option value="产业咨询">产业咨询</Option>
          </Select>
        </FormItem>
        <FormItem label="姓名" style="width: 46%" class="form_item1" required>
          <Input
            v-model="formTop.input"
            placeholder="请输入您的姓名"
            size="large"
          ></Input>
        </FormItem>
      </Form>
      <Form
        :model="formTop2"
        label-position="top"
        inline
        class="demo_form_item2"
      >
        <FormItem label="手机号" style="width: 23%" class="form_item2" required>
          <Input
            v-model="formTop2.phone"
            placeholder="请输入您的手机号"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="验证码" style="width: 22%" class="form_item2" required>
          <Input
            v-model="formTop2.code"
            placeholder="请输入您的验证码"
            search
            enter-button="获取验证码"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="邮箱" style="width: 46%" class="form_item2" required>
          <Input
            v-model="formTop2.email"
            placeholder="请输入您的邮箱"
            size="large"
          ></Input>
        </FormItem>
      </Form>
      <Form
        :model="formTop3"
        label-position="top"
        inline
        class="demo_form_item2"
      >
        <FormItem
          label="政府/园区/机构/企业名称"
          style="width: 46%"
          class="form_item3"
          required
        >
          <Input
            v-model="formTop3.gongsi"
            placeholder="请输入您的公司名称"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="您的职务" style="width: 46%" class="form_item3">
          <Input
            v-model="formTop3.zhiwu"
            placeholder="请输入您的职务"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="备注" style="width: 92%" class="form_item3">
          <Input
            v-model="formTop3.beizhu"
            placeholder="您可以在这儿描述问题和需求,不超过200字"
            type="textarea"
            :rows="5"
            maxlength="200"
          ></Input>
        </FormItem>
      </Form>
      <div class="form_bottom">
        <el-checkbox v-model="accept" label="1"
          >点击提交视为您已阅读并同意云逸创造《隐私政策》</el-checkbox
        >
        <el-button class="btn">点击预约</el-button>
      </div>
    </div>

    <div class="demo_form_mobile hidden-sm-and-up">
      <Form :model="formTopMobile" label-position="top" class="demo_form_item1">
        <FormItem label="想了解的产品服务" class="form_item1" required>
          <!-- <Cascader
            :data="selectData"
            v-model="formTopMobile.service"
          ></Cascader> -->
          <el-select v-model="formTopMobile.service" placeholder="请选择活动区域">
            <el-option :label="item.label" :value="item.value" v-for="(item,index) in selectData" :key="index"></el-option>
          </el-select>
        </FormItem>
        <FormItem label="姓名" class="form_item1" required>
          <Input
            v-model="formTopMobile.input"
            placeholder="请输入您的姓名"
            size="large"
            style="height: 150px !imporant"
          ></Input>
        </FormItem>
        <FormItem label="手机号" class="form_item2" required>
          <Input
            v-model="formTopMobile.phone"
            placeholder="请输入您的手机号"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="邮箱" class="form_item2" required>
          <Input
            v-model="formTopMobile.email"
            placeholder="请输入您的邮箱"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="验证码" class="form_item2" required>
          <Input
            v-model="formTopMobile.code"
            placeholder="请输入您的验证码"
            search
            enter-button="获取验证码"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="政府/园区/机构/企业名称" class="form_item3" required>
          <Input
            v-model="formTopMobile.gongsi"
            placeholder="请输入您的公司名称"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="您的职务" class="form_item3">
          <Input
            v-model="formTopMobile.zhiwu"
            placeholder="请输入您的职务"
            size="large"
          ></Input>
        </FormItem>
        <FormItem label="备注" class="form_item3">
          <Input
            v-model="formTopMobile.beizhu"
            placeholder="您可以在这儿描述问题和需求,不超过200字"
            type="textarea"
            :rows="15"
            maxlength="200"
          ></Input>
        </FormItem>
      </Form>
      <div class="form_bottom">
        <div class="bottom_top">
          <input type="checkbox" id="checkmy" />
          <label for="checkmy" style="font-size: 12px;padding-left:8px;"
            >点击提交视为您已阅读并同意云逸创造《隐私政策》</label
          >
        </div>
        <el-button class="btn">点击预约</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formTop: {
        input: '',
        service: '',
      },
      formTop2: {
        email: '',
        code: '',
        phone: '',
      },
      formTop3: {
        gongsi: '',
        zhiwu: '',
        beizhu: '',
      },
      formTopMobile: {
        input: '',
        service: [],
        email: '',
        code: '',
        phone: '',
        gongsi: '',
        zhiwu: '',
        beizhu: '',
      },
      accept: '1',
      selectData: [
        {
          value: '产业大脑',
          label: '产业大脑',
        },
        {
          value: '云招商',
          label: '云招商',
        },
        {
          value: '企业创新服务',
          label: '企业创新服务',
        },
        {
          value: '产业咨询',
          label: '产业咨询',
        },
      ],
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
  },
}
</script>

<style lang="scss"  >
.demo_wrap {
  padding-top: 150px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  .demo_title_wrap {
    text-align: center;
    @media screen and (max-width: 768px) {
      text-align: left;
    }
    h1 {
      font-size: 32px;
      @media screen and (max-width: 768px) {
        font-size: 28px;
      }
    }
    p {
      font-size: 18px;
      margin-top: 10px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
  .demo_form {
    width: 70%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      margin-top: 10px;
    }
    .demo_form_item1 {
      margin-top: 40px;
      .form_item1 {
      }
    }
    .form_bottom {
      position: relative;
      display: flex;
      align-items: center;
      margin-top: 80px;
      .btn {
        background: orange;
        color: #fff;
        border-radius: 20px;
        position: absolute;
        left: 46%;
        transform: translateX(-46%);
      }
    }
  }
  .demo_form_mobile {
    margin-top: 1rem;
    .demo_form_item1 {
      width: 100%;
      .form_item1 {
        margin-top: 1rem;
      }
      .form_item2 {
        margin-top: 1rem;
      }
      .form_item3 {
        margin-top: 1rem;
      }
    }
    .form_bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;  
      .bottom_top{
        color: #999;
        margin-top: 10PX;
      }
      .btn{
        background: orange;
        color: #fff;
        border-radius: 20PX;
        width: 80PX;
        height: 30PX;
        margin-top: 20PX;
        @media screen and (max-width: 768px){
          width: 90px;
          height: 30px;
          font-size: 16px;
        }
          
      }
    }
  }
}
@media screen and (max-width: 768px){
  .ivu-input,
  .ivu-input-group-prepend {
    height: 40PX !important;
    font-size: 1rem;
  }
  .ivu-form-item-label{
    font-size: 1rem !important;
  }
  .ivu-input-large{
    font-size: 1rem !important;
  }
  .ivu-cascader-menu .ivu-input-search{
    font-size: 1rem !important;
  }
  .ivu-input-group-large>.ivu-input-group-append{
    font-size: 14PX !important;
    padding: 0 10PX !important;
  }
  // .ivu-select-dropdown{
  //   transform: scale(4);
  //   left: 38% !important;
  // }
  .el-input{
    font-size: 1rem !important;
    input{
      height: 40PX;
    }
    span{
      transform: translateY(-40%);
    }
  }
  .el-select{
    width: 100%;
  }
  .el-select-dropdown__item{
    font-size: 14PX;
    padding: 15PX 0;
  }
}
</style>