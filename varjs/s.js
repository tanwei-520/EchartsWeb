option = {
  title: {
    text: "表格标题",
  },
  tooltip: {//设置鼠标悬停提示
    trigger: "axis",
  },
  legend: {//设置图例
    data: ["One", "Two"],
  },
  dataZoom: [//给x轴设置滚动条
        {
            type: 'slider',//slider表示有滑动块的，inside表示内置的
            // startValue: 8,//可用于设置开始显示的柱子的长度
            // endValue: 1,//可用于设置结束显示的柱子的长度
            start: 0,//默认为0  可设置滚动条从在后进行展示
            end: 100,//默认为100
            show: true,
            xAxisIndex: [0],
            handleSize: 0,//滑动条的 左右2个滑动条的大小
            height: 12,//组件高度
            left: '10%', //左边的距离
            right: '10%',//右边的距离
            bottom: 14,//右边的距离
            borderColor: "#CCCCCC",
            fillerColor: '#FFFFFF',
            backgroundColor: '#CCCCCC',//两边未选中的滑动条区域的颜色
            showDataShadow: false,//是否显示数据阴影 默认auto
            showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
            realtime: true, //是否实时更新
            filterMode: 'filter',
            handleStyle: {
                borderRadius: '20',
            },
            brushSelect:false,//隐藏拖动手柄
            maxValueSpan:3//显示数据条数，默认显示10，注意：从0开始计算，start,end需为0、100
        },
        //下面这个属性是里面拖到
        {
            type: 'inside',
            show: true,
            xAxisIndex: [0],
            start: 0,//默认为1
            end: 100,//默认为100
            moveOnMouseWheel: false,
            preventDefaultMouseMove: false,
        },
    ],
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "One",
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
      markPoint: {//设置标注图标
        data: [
          { type: "max", name: "Max" },
          { type: "min", name: "Min" },
          { name: "自定义", value: "自定义", xAxis: "Wed", yAxis: 224 },
        ],
      },
      markLine: {//设置标注线
        data: [
          { type: "average", name: "Avg" },
          { type: "max", name: "Max" },
        ],
      },
    },
    {
      name: "Two",
      data: [142, 200, 204, 189, 110, 127, 247],
      type: "line",
      label: {
        show: true,
      },
    },
  ],
};
