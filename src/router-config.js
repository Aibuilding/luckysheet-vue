// import activePublic from './page/activePublic/index.vue'
// import entitySearch from './page/entitySearch/entitySearch.vue'
// import graphManage from './page/graphManage/index.vue'
// import graphView from './page/graphView/graphView.vue'
// import graphTask from './page/graphTask/graphTask.vue'
// import systemSetting from './page/system/systemSetting.vue'
// import dataSearch from './page/data/dataSearch.vue'
// import picMarking from './page/data/picMarking.vue'
// import step1 from './page/activePublic/step1.vue'
// import step2 from './page/activePublic/step2.vue'
// import step3 from './page/activePublic/step3.vue'
// import step4 from './page/activePublic/step4.vue'
//
// import totalpages from './page/graphManage/totalpages.vue'
// import detail from './page/graphManage/detail.vue'
//
// import page1 from './page/graphManage/page1.vue'
// import page2 from './page/graphManage/page2.vue'
// import page3 from './page/graphManage/page3.vue'
// import page4 from './page/graphManage/page4.vue'
// import page5 from './page/graphManage/page5.vue'
import ExcelBench from "@/pages/excel_bench/ExcelBench";
import docList from "@/pages/doc_list/docList";
export default [
    // {
    //   path: '/graphManage',
    //   component: totalpages,
    //   children: [
    //     {path: '', component: graphManage},
    //     {
    //       path: 'detail', component: detail,
    //       children: [
    //         {path: '', component: page1},
    //         {
    //           path: 'page1', component: page1,
    //           children: [
    //             {path: '', component: step1},
    //             {path: 'step1', component: step1},
    //             {path: 'step2', component: step2},
    //             {path: 'step3', component: step3},
    //             {path: 'step4', component: step4}
    //           ]
    //         },
    //         {path: 'page2', component: page2},
    //         {path: 'page3', component: page3},
    //         {path: 'page4', component: page4},
    //         {path: 'page5', component: page5}
    //       ]
    //     },
    //   ]
    // },
    // {path: '/entitySearch', component: entitySearch, meta: {keepAlive: true}},
    // {path: '/graphView', component: graphView,},
    // {path: '/graphTask', component: graphTask,},
    // {path: '/systemSetting', component: systemSetting},
    {path: '/doc_list', component: docList, meta: {keepAlive: true}},
    {path: '/excel_bench', component: ExcelBench, meta: {keepAlive: false}},
    {path: '/', component: docList, meta: {keepAlive: false}}
]
