var showLines;

function init(){
	$( ".toggle" ).click(function() {
	  showLines = !showLines;	  
	  renderChart();	  
	});
	$( ".apply" ).click(function() {	  	  
	  renderChart();	  
	});
	$( ".reset" ).click(function() {
		$('.start').val(0);
        $('.end').val(147);
        $('.number').val(10);	  	  
	  	renderChart();	  
	});	
	showLines = true;
	renderChart();
}

function renderChart(){    
    // Data
    var z = 0;
    var data = [
	[z++,79.85977936467556],
	[z++,61.41041243267354],
	[z++,58.78316357021663],
	[z++,60.33754952651546],
	[z++,54.5102794787489],
	[z++,41.207632236898824],
	[z++,38.98656755113285],
	[z++,36.996828968249204],
	[z++,39.241472466151535],
	[z++,37.74461002011774],
	[z++,28.48975017681237],
	[z++,31.471076216227974],
	[z++,29.61001909017613],
	[z++,33.18465796806407],
	[z++,30.882952375939585],
	[z++,28.98702331885507],
	[z++,24.743400792315107],
	[z++,24.6006949611447],
	[z++,28.576836215048345],
	[z++,21.311271831937088],
	[z++,25.613674362110192],
	[z++,21.954610322861523],
	[z++,31.190133450671393],
	[z++,24.208372407516947],
	[z++,29.419736119258914],
	[z++,26.879392034909724],
	[z++,37.347953826621584],
	[z++,74.743400792315107],
	[z++,54.6006949611447],
	[z++,48.576836215048345],
	[z++,31.311271831937088],
	[z++,15.613674362110192],
	[z++,11.954610322861523],
	[z++,21.190133450671393],
	[z++,14.208372407516947],
	[z++,97.419736119258914],
	[z++,36.879392034909724],
	[z++,57.347953826621584],
	[z++,24.743400792315107],
	[z++,24.6006949611447],
	[z++,29.576836215048345],
	[z++,28.311271831937088],
	[z++,25.613674362110192],
	[z++,23.954610322861523],
	[z++,91.190133450671393],
	[z++,84.208372407516947],
	[z++,79.419736119258914],
	[z++,86.879392034909724],
	[z++,27.347953826621584],
	[z++,45.63153443450464],
	[z++,47.22173031801307],
	[z++,44.15691063591684],
	[z++,51.5509863564778],
	[z++,57.26229195973365],
	[z++,60.67349146884253],
	[z++,56.03626559497977],
	[z++,59.29350492300145],
	[z++,63.867335350552636],
	[z++,73.27504703537457],
	[z++,76.79605060692097],
	[z++,81.39855329502537],
	[z++,81.77911438076613],
	[z++,80.64816919043757],
	[z++,63.12122941617823],
	[z++,64.74868330839296],
	[z++,52.458248605646716],
	[z++,51.27183324410875],
	[z++,45.39445146371664],
	[z++,46.04088326207375],
	[z++,41.58714983055068],
	[z++,29.433862151073352],
	[z++,31.515711025171143],
	[z++,25.72609319814721],
	[z++,28.07419619582349],
	[z++,26.571981258841188],
	[z++,28.07823075122152],
	[z++,23.095042869099085],
	[z++,25.67879027677033],
	[z++,21.2430741584503],
	[z++,24.978887845591412],
	[z++,21.21453287704027],
	[z++,21.59804836125523],
	[z++,22.191968558470272],
	[z++,20.792745879095655],
	[z++,28.84322414105451],
	[z++,52.458248605646716],
	[z++,51.27183324410875],
	[z++,45.39445146371664],
	[z++,46.04088326207375],
	[z++,41.58714983055068],
	[z++,29.433862151073352],
	[z++,31.515711025171143],
	[z++,25.72609319814721],
	[z++,28.07419619582349],
	[z++,26.571981258841188],
	[z++,28.07823075122152],
	[z++,23.095042869099085],
	[z++,25.67879027677033],
	[z++,21.2430741584503],
	[z++,24.978887845591412],
	[z++,21.21453287704027],
	[z++,21.59804836125523],
	[z++,22.191968558470272],
	[z++,20.792745879095655],
	[z++,28.84322414105451],
	[z++,52.458248605646716],
	[z++,51.27183324410875],
	[z++,15.39445146371664],
	[z++,26.04088326207375],
	[z++,31.58714983055068],
	[z++,49.433862151073352],
	[z++,51.515711025171143],
	[z++,65.72609319814721],
	[z++,78.07419619582349],
	[z++,76.571981258841188],
	[z++,78.07823075122152],
	[z++,63.095042869099085],
	[z++,65.67879027677033],
	[z++,61.2430741584503],
	[z++,54.978887845591412],
	[z++,41.21453287704027],
	[z++,31.59804836125523],
	[z++,32.191968558470272],
	[z++,20.792745879095655],
	[z++,18.84322414105451],
	[z++,35.24677049684375],
	[z++,34.076080610579346],
	[z++,31.63768978159084],
	[z++,37.29196329558706],
	[z++,43.02182340593791],
	[z++,44.83156069393042],
	[z++,42.717130896526776],
	[z++,44.65045252700092],
	[z++,46.71927784672579],
	[z++,52.790607521142256],
	[z++,60.935711814119436],
	[z++,61.00029485003285],
	[z++,66.10530569929202],
	[z++,67.72544583577432],
	[z++,72.44379182879142],
	[z++,69.11014160042252],
	[z++,82.44379182879142],
	[z++,49.11014160042252],
	[z++,70.3005956718549],
	[z++,71.34075258538277],
	[z++,75.81107706758046],
	[z++,72.25346309601603],
	[z++,77.04953724846793],
	[z++,73.39843483074058],
	[z++,69.7119758670161]];	

    
    var startTime      = $('.start').val();
    var endTime        = $('.end').val();
    data               = data.slice(startTime,endTime);
    var dataSet        = Immutable.fromJS(data);
    var regressionType = 'linear';

    var yellow = '#f4ee42';
    var purple = '#9b42f4';
    var red    = '#f44242';
    var color  = yellow;
    var black  = '#000000';

    var numberOfTrends = $('.number').val();
    var slopes         = {'SPEED':[],'SPEED2':[]};
    var chartSeries    = [];
    var foo            = 0;
    var foo2           = 0;

    //SPEED SET
   
    //Macro Trend SPEED
    var marcroTrend = TrendsHelper.getMacroTrend(dataSet,regressionType);
    chartSeries.push({data: marcroTrend,
			   lines: { show: true }, points: { show: false }, color: black });
    var macroSlope = TrendsHelper.getSlope(marcroTrend);
    
	//Micro Trends SPEED
    var microTrends    = TrendsHelper.getMicroTrends(dataSet, startTime,endTime, regressionType,numberOfTrends);
    if(showLines){
    	chartSeries.push({data: data,
			   lines: { show: true }, points: { show: false },
			   label: 'SPEED', 
			   color: '#757575'});	
    }	
    
    microTrends.forEach(function(microTrend,idx) {
		if( idx % 2 === 0) {
		    color = red;
		}
		else {
		    color = yellow;
		}
		chartSeries.push({data: microTrend, color: color });
		microSlope = TrendsHelper.getSlope(microTrend)
		slopes['SPEED'][idx] = microSlope;
		foo = foo + Math.pow((macroSlope - microSlope),2);
    });
    foo = Math.sqrt(foo / microTrends.length);
    
    //SPEED 2 SET
    var newData = [];
    var phaseOne = 50;
    var phaseOneInc = 10;
    var phaseTwo   = 95
    var phaseTwoInc = 20;
    var syn = 70;
    var counter = 0;
    var spacer = 100;
    data.forEach(function(value,  id) {
	var point = value[1] + spacer;
	
	if( counter >= phaseOne && counter <= phaseOne + phaseOneInc ){
	    //	    point = point + syn + Math.random() ;
	    point = 200 + Math.random();
        }
	else if( counter >= phaseTwo && counter <= phaseTwo + phaseTwoInc ){
	    point = 100 + Math.random();
	}
	
        newData.push([value[0],point]);
	counter++;
    });
    var newDataSet = Immutable.fromJS(newData);

    //Macro Trend SPEED 2
    marcroTrend = TrendsHelper.getMacroTrend(newDataSet,regressionType);
    chartSeries.push({data: marcroTrend,
			   lines: { show: true }, points: { show: false }, color: black });

    //Micro Trends SPEED 2
    microTrends    = TrendsHelper.getMicroTrends(newDataSet, startTime,endTime, regressionType,numberOfTrends);
    
    if(showLines){
    	chartSeries.push({data: newData,
		      lines: { show: true }, points: { show: false },
		      label: 'SPEED 2', 
		      color: '#7c79e0',		   
			  grid : { markings: markings }
			  }
		);	
    }
    microTrends.forEach(function(microTrend, idx) {
    	//var avg = TrendsHelper.getAverage(microTrend);
		if( idx % 2 === 0) { 
		    color = purple;
		}
		else {
		    color = yellow;
		}
			chartSeries.push({data: microTrend, color: color } );    //'#ffc107'});
			microSlope = TrendsHelper.getSlope(microTrend)
			slopes['SPEED2'][idx] = microSlope;
			foo2 = foo2 + Math.pow((macroSlope - microSlope),2);
	});
	foo2 = Math.sqrt(foo2 / microTrends.length);

	//Foos
	$('.foos').append('<tr style="color:#757575"><td>'+foo+'</td><td>'+foo2+'</td></tr>');
    
    // Markings 
    var markings =  [ { xaxis: { from: 42, to: 60 }, yaxis: { from: 160, to: 210 }, color: "#d4eba0" },
                      { xaxis: { from: 42, to: 60 }, yaxis: { from:  52, to:  65 }, color: "#d4eba0" }]
    
    //Plot data			
    $.plot(
    	$('.graph'), 
    	chartSeries,
    	{ grid: { markings: markings } }
    );			

    
    //Create Slopes Table
    $('.slopes').find("tr:gt(0)").remove();
    slopes.SPEED.forEach(function(slope,idx) {
	var diff = Math.round((slope-(slopes.SPEED2[idx])));
	if( diff != 0) {
	    $('.slopes').append('<tr style="color:#757575"><td>'+(idx+1)+'</td><td>'+slope+'</td><td>'+
				slopes.SPEED2[idx]+'</td><td>**** '+diff+' ****</td><td>'+ data[(idx+1)][1] + '</td></tr>');
	}
	else {
	    $('.slopes').append('<tr style="color:#7575757"><td>'+(idx+1)+'</td><td>'+slope+'</td><td>'+
				slopes.SPEED2[idx]+'</td><td>'+diff+ '</td><td>'+ data[(idx+1)][1] + '</td></tr>');
	    
	}
    });
}


