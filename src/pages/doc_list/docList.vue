<template>
  <div style="margin-top: 100px">
    <a-table :columns="columns" :data-source="doc_list" ref="table" size="small" bordered rowKey="id"
             dataPath="informationList" showPagination="auto" :pagination="ipagination" :customRow="rowClick">
      <p slot="tags" slot-scope="text,tags" class="tp">
        <a @click="enter_doc(tags.id)">进入</a>
        <a @click="delete_doc(tags.id)" style="margin-left: 5px">删除</a>
      </p>
    </a-table>
  </div>
</template>

<script>

const columns = [{
  title: 'ID',
  dataIndex: 'id',
  align: 'center',

}, {
  title: '文档名称',
  align: 'center',
  dataIndex: 'name',
}, {
  width: 200,
  align: 'center',
  title: '操作',
  dataIndex: 'tags',
  key: 'tags',
  scopedSlots: {customRender: 'tags'},
}];
export default {
  name: "docList",
  data() {
    return {
      doc_list: [],
      menuVisible: false,
      menuStyle: {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: 1,
        borderRadius: "5px",
        border: "1px solid #eee"
      },
      recordRow: [],
      searchValue: {
        type: "",
        id: "",
        name,
        mode: "dev"
      },
      columns,
      searchEntityList: [],
      ipagination: {
        size: 'small',
        current: 1,
        pageSize: 100,
        total: 0,
        pageSizeOptions: ['10', '20', '30', '50', '100'], //可选的页面显示条数
        showTotal: (total, range) => {
          return range[0] + "-" + range[1] + " 共" + total + "条"
        }, //展示每页第几条至第几条和总数
        hideOnSinglePage: false, // 只有一页时是否隐藏分页器
        showQuickJumper: true, //是否可以快速跳转至某页
        showSizeChanger: true, //是否可以改变pageSize
      },
    };
  },
  created() {
    this.getDocList()
  }
  ,
  methods: {
    rowClick(record, index) {
      return {
        on: {
          contextmenu: e => {
            e.preventDefault();
            this.menuVisible = true;
            this.recordRow = record;
            var y = e.clientY;
            var x = e.clientX + "px";
            y = y + document.documentElement.scrollTop + 'px';
            console.log(x)
            console.log(y)
            console.log(document.getElementById("table").offsetTop)
            this.menuStyle.top = y;
            this.menuStyle.left = x;
            document.addEventListener("click", this.cancelClick);
          }
        },
        style: {
          // 字体颜色
          color: record.remarkDesc ? record.remarkDesc.fontColor : '#262626',
          // 行背景色
          'background-color': index % 2 == 0 ? '#FAFAFA' : '#FFFFFF'
        }
      }
    },
    getDocList: function () {
      this.request.post("/api/index/").then(res => {
        console.log(res.data.all)
        this.doc_list = res.data.all

      }).catch(e => {
        console.log("e", e);
      })
    }
    ,
    enter_doc: function (id) {
      this.$router.push('/excel_bench?doc_id=' + id);
    },
    delete_doc: function (id) {
      this.$router.push('/index/delete?doc_id=' + id);
    }
  }
}
</script>

<style scoped>

.tp {
  margin-bottom: 0;
}
</style>