import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createChart } from 'lightweight-charts';
import { chartData, saveChart, chart, saveSeries, candlestickSeries } from './Chart.effects'
import { createComponent, useStore } from 'effector-react'
import { setD, setO, setH, setL, setC, panelData } from './Panel.effects'
import moment from 'moment';


const PricePatternMaker = (props, state) => {
  const $chartData = useStore(chartData)
  const $chart = useStore(chart)
  const $candlestickSeries = useStore(candlestickSeries)

  const initChart = () => {

    const chart = createChart(
      document.getElementById("PricePatternMaker"), 
      { width: 800, height: 600 }
    );

    

    const candlestickSeries = chart.addCandlestickSeries({
      // autoscaleInfoProvider: (original) => {
      //   const res = original();
      //   return {
      //       priceRange: {
      //           minValue: 0,
      //           maxValue: 100,
      //       },
      //   };
      // },
    });
    
    candlestickSeries.setData($chartData);
    chart.applyOptions({
      // layout: {
      //   backgroundColor: '#FAEBD7',
      //   textColor: '#696969',
      //   fontSize: 12,
      //   fontFamily: 'Calibri',
      // },
      watermark: {
        color: 'rgba(11, 94, 29, 0.4)',
        visible: true,
        text: 'Candlestick Pattern Maker',
        fontSize: 24,
        horzAlign: 'left',
        vertAlign: 'bottom',
      },
      crosshair: {
        // vertLine: {
        //     color: '#6A5ACD',
        //     width: 0.5,
        //     style: 1,
        //     visible: true,
        //     labelVisible: false,
        // },
        // horzLine: {
        //     color: '#6A5ACD',
        //     width: 0.5,
        //     style: 0,
        //     visible: true,
        //     labelVisible: true,
        // },
        mode: 1,
      },
      priceScale: {
        //position: 'left',
        //mode: 2,
        autoScale: true,
        // invertScale: true,
        alignLabels: false,
        //borderVisible: false,
        //borderColor: '#555ffd',
        // scaleMargins: {
        //     top: 0.30,
        //     bottom: 0.25,
        // },
      },
      timeScale: {
        // rightOffset: 12,
      },
    });
    chart.timeScale().fitContent();

    // chart.subscribeCrosshairMove(param => {
    //   if (param.time) console.log(param.seriesPrices.get(candlestickSeries))
    // })

    let handleClick = (param) => {
      if (!param.point) {
        return;
      }
      
      console.log(`An user clicks at (${param.point.x}, ${param.point.y}) point, 
      the time is ${param.time.year}-${param.time.month}-${param.time.day}.
      O-${param.seriesPrices.get(candlestickSeries).open}
      H-${param.seriesPrices.get(candlestickSeries).high}
      L-${param.seriesPrices.get(candlestickSeries).low}
      C-${param.seriesPrices.get(candlestickSeries).close}`);

      
      setD(moment(param.time.year+"-"+param.time.month+"-"+param.time.day))
      setO(param.seriesPrices.get(candlestickSeries).open)
      setH(param.seriesPrices.get(candlestickSeries).high)
      setL(param.seriesPrices.get(candlestickSeries).low)
      setC(param.seriesPrices.get(candlestickSeries).close)
    };

    chart.subscribeClick(handleClick);

    saveChart(chart)
    saveSeries(candlestickSeries)
  }

  useEffect(() => {
    if (document.getElementById("PricePatternMaker").childElementCount==0) {
      initChart();
    } else {
      $candlestickSeries.setData($chartData);
    }

  })

  //render() {
  return <div id="PricePatternMaker" />
  //}
}

export default PricePatternMaker;
