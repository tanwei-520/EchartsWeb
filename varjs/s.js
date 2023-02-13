option = {
  title: {
    text: "表格标题",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["One", "Two"],
  },
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
      markPoint: {
        data: [
          { type: "max", name: "Max" },
          { type: "min", name: "Min" },
          { name: "自定义", value: "自定义", xAxis: "Wed", yAxis: 224 },
        ],
      },
      markLine: {
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
