<template>
  <div>
    <ul class="pagination">
      <li :class="{'disabled': current === 1}"><a @click="setCurrent(current - 1)">< </a></li>
      <!--<li :class="{'disabled': current === 1}"><a style="font-size: 12px" @click="setCurrent(1)"> 首页 </a></li>-->
      <li v-for="p in groupList" :class="{'active': current === p.val}"><a @click="setCurrent(p.val)"> {{ p.text }} </a>
      </li>
      <!--<li :class="{'disabled': current === page}"><a style="font-size: 12px" @click="setCurrent(page)"> 尾页 </a></li>-->
      <li :class="{'disabled': current === page}"><a @click="setCurrent(current + 1)"> ></a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "pagination",
    data() {
      return {
        current: this.currentPage
      }
    },
    props: {
      total: {// 数据总条数
        type: Number,
        default: 0
      },
      display: {// 每页显示条数
        type: Number,
        default: 10
      },
      currentPage: {// 当前页码
        type: Number,
        default: 1
      },
      pagegroup: {// 分页条数
        type: Number,
        default: 5,
        coerce: function (v) {
          v = v > 0 ? v : 5;
          return v % 2 === 1 ? v : v + 1;
        }
      }
    },
    computed: {
      page: function () { // 总页数
        return Math.ceil(this.total / this.display);
      },
      groupList: function () { // 获取分页页码
        let len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
        if (len <= this.pagegroup) {
          while (len--) {
            temp.push({text: this.page - len, val: this.page - len});
          }
          ;
          return temp;
        }
        while (len--) {
          temp.push(this.page - len);
        }
        ;
        let idx = temp.indexOf(center);
        (idx < count) && (center = center + count - idx);
        (this.current > this.page - count) && (center = this.page - count);
        temp = temp.splice(center - count - 1, this.pagegroup);
        do {
          let t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pagegroup) {
          (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
          (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
        }
        return list;
      }
    },
    methods: {
      setCurrent: function (idx) {
        if (this.current !== idx && idx > 0 && idx < this.page + 1) {
          this.current = idx;
          this.$emit('pagechange', this.current);
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    overflow: hidden;
    display: table;
    margin: 0 auto;
    /*width: 100%;*/
    height: 0.67rem;

    li {
      list-style-type: none;
      float: left;
      height: 0.67rem;
      margin: 0.03rem;
	    background:rgba(200,218,255,1);
      border-radius: 0.06rem;
      text-align: center;
      &
      :hover {
        background: #B0B0B0;

        a {
          color: #FFFFFF;
        }

      }
      a {
        display: block;
        width: 0.67rem;
        height: 0.67rem;
        padding: 0.18rem 0.17rem;
	      background:rgba(200,218,255,1);
        border-radius: 0.06rem;
        font-size: 0.21rem;
        font-weight: 600;
        color: rgba(62, 73, 91, 1);
        line-height: 0.29rem;
        text-decoration: none;
        cursor: pointer;
      }

    }
    .active {
      a {
	      background:rgba(255,255,255,1);
        color: #212936;
      }

    }
  }
</style>
