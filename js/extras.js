		LineChart
		ColumnChart
		AreaChart

		ComboChart
		
		seriesType : 'line',
		series : {
			2 : {
				type : 'bars'
			}
		}

		ScatterChart
		for (i = 0; i < data.length; i++) {
			data[i].splice(0, 1);
			data[i].splice(2, 1);
		}
