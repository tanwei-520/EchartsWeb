option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        120,
        200,
        150,
        80,
        70,
        110,
        130
      ],
      itemStyle:{
                  normal:{
                      ///  通过params.value拿到对应的data里面的数据
                      color:function(params){
                        if(params.value >0 && params.value <99){
                          return "#003345";
                        }else if(params.value >=199 && params.value<=299 ){
                          return "#26C0C0";
                        }
                        return "#9BCA63";
                      }
                    }
                  },
      type: 'bar'
    }
  ]
};