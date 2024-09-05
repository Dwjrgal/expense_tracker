import React, { useEffect } from "react";

const ChartDesign = () => {
  const chart = () => {
    return Highcharts.chart("container", {
      data: {
        table: "datatable",
      },
      chart: {
        type: "column",
      },
      title: {
        text: "Live births in Norway",
      },
      subtitle: {
        text: 'Source: <a href="https://www.ssb.no/en/statbank/table/04231" target="_blank">SSB</a>',
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: "Amount",
        },
      },
    });
  };
};

export default ChartDesign;
