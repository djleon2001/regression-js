
/**
 * Helper to create Macro and Micro Trends DataSet
 */
function prepareDataSet(dataSet, firstTimeStamp) {
  return dataSet.map((point) => {
    // keep point immutable
    point = point.slice(0);
    point[0] = point[0] - firstTimeStamp;
    return point;
  });
}
function restoreDataSet(dataSet, firstTimeStamp) {
  return dataSet.map((point) => {
    // restore point timeStamp
    point[0] = point[0] + firstTimeStamp;
    return point;
  });
}
function getRegression(regressionType, dataSet) {
  const sortedDataSet = dataSet.sort((a, b) => a[0] - b[0]);
  let firstTimeStamp = dataSet[0][0];
  // for log regression we don't need to shift on begin
  if (regressionType === 'logarithmic') {
    firstTimeStamp = firstTimeStamp - 10;
    // return regression(regressionType, preparedDataSet, 3).points; or even don't at all
  }
  const preparedDataSet = prepareDataSet(sortedDataSet, firstTimeStamp);
  return restoreDataSet(regression(regressionType, preparedDataSet, 3).points, firstTimeStamp);
}
const TrendsHelper = {
  getMacroTrend(dataSet,regressionType){
    return getRegression(regressionType, dataSet.toJS());
  },
  getMicroTrends(trendData, dMin, dMax, regressionType, numberOfSeries){
    let regressionDataMicros   = [];
    let maxValue               = trendData.count();
    const trendTimeSlices      = Math.round(maxValue / numberOfSeries);
    const data                 = trendData;
    let interval               = 1;
    let startCurrentRegression = dMax;
    let dataValues             = [];
    
    // start at the last time value and work back in time
      data.reverse().toJS().forEach((value,idx) => {
          interval = startCurrentRegression - value[0];
      if (interval < trendTimeSlices){
        dataValues.push(value);
      }
      else {
        dataValues.push(value);
        startCurrentRegression = value[0];
        // reverse the array to have the time values go from start time to finish time
        dataValues.reverse();
        regressionDataMicros.push(getRegression(regressionType, dataValues));

        dataValues = [];
        dataValues.push(value);
      }
    });
    //Add the missing first slice 
    dataValues.reverse();
    regressionDataMicros.push(getRegression(regressionType, dataValues));

    
    return regressionDataMicros;
  },
  getSlope(trendData){
    var y2 = trendData[trendData.length-1][1];
    var y1 = trendData[0][1];
    var x2 = trendData[trendData.length-1][0];
    var x1 = trendData[0][0];
    return (y2-y1)/(x2-x1);
  }
    /*
    getAverage(data) {
        var size = data.length;
        var sum = 0;
        data.forEach( function(value,  id) {
            sum = sum + data[ idx ][1];
        }
        return sum / size;
    }
*/
};
