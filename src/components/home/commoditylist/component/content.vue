<template>
    <div id="content">
        <ul v-if="content.length!==0" v-infinite-scroll="loadMore"
  :infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
            <li v-for="(item,index) in content" :key="index" @click="commoditydetails(item)">
                <img :src="item.goods_img" alt="">
                <div>
                    <div>{{item.goods_name}}</div>
                    <div>￥{{item.price}}</div>
                    <p>立即购买</p>
                </div>
            </li>           
        </ul>
        <div v-if="loadingone" id='nulltox'>
            <img src="../../../../imgs/Icon-Small-40@3x.png" alt="">
            <div>暂无商品</div>
        </div>
    </div>

</template>
<script>
import { Toast, Indicator } from "mint-ui";
export default {
  name: "navtab",
  data() {
    return {
      loadingone: false,
      loading: false,
      content: [],
      page: 1
    };
  },
  props: ["commodityobjct"],
  created() {
    Indicator.open();
  },
  methods: {
    loadMore() {
      if (this.loading) {
        this.loading = false;
        Toast({
          message: "正在加载...",
          position: "bottom",
          duration: 800
        });
        this._querys();
      }
    },
    //前往商品详情页
    commoditydetails(item) {
      if(item.agent_source=='2'){
        this.$store.dispatch("details", item);
        this.$router.push("/commoditydetails");
      }else{
        Toast({
          message: "此商品暂不支持下单",
          position: "bottom",
          duration: 800
        });
      }
    },
    //发送请求
    _querys() {
      this.$http
        .get(
          this.$url.URL.goods +
            "?category_id=" +
            this.commodityobjct.parent_id +
            "&category_sub_id=" +
            this.commodityobjct.category_sub_id +
            "&page=" +
            this.page +
            "&user_id=" +
            this.$store.state.my_data.user_id +
            "&sort=1"
        )
        .then(res => {
          Indicator.close();
          if (res.data.data.data.length == 0) {
            this.content.length == 0
              ? (this.loadingone = true)
              : (this.loadingone = false);
            Toast({
              message: "已全部加载完...",
              position: "bottom",
              duration: 1000
            });
          } else {
            this.page++;
          }
          setTimeout(() => {
            this.loading = true;
          }, 1000);
          this.content = [...this.content, ...res.data.data.data];
        });
    }
  },
  watch: {
    commodityobjct() {
      this.page = 1;
      this.content = [];
      this._querys();
      Indicator.open();
    }
  }
};
</script>

<style scoped lang="less">
#content {
  padding-top: 0.03rem;
  width: 70%;
  height: 100%;
  > ul {
    width: 100%;
    height: 100%;
    overflow: scroll;
    > li:nth-of-type(2n) {
      margin-left: 4%;
      margin-right: 3%;
    }
    > li:nth-of-type(2n-1) {
      margin-left: 3%;
    }
    > li {
      box-sizing: border-box;
      float: left;
      width: 45%;
      height: 1.5rem;
      text-align: center;
      color: #20c7c9;
      background: #dddddd;
      margin-bottom: 0.1rem;
      > img {
        width: 100%;
        height: 0.8rem;
      }
      > div > p {
        margin: 0 0.2rem;
        background: #20c7c9;
        color: #ffffff;
        padding: 0.02rem;
      }
      > div > div {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
#nulltox {
  width: 100%;
  height: 100%;
  text-align: center;
  background: #ffffff;
  > img {
    width: 80%;
    padding-top: 0.8rem;
  }
  font-size: 0.26rem;
}
</style>
