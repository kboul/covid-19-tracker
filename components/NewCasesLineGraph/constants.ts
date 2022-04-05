import numeral from "numeral";

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: (tooltipItem: { value: number }) => {
          return numeral(tooltipItem.value).format("+0,0");
        }
      }
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll"
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: (value: number) => {
              return numeral(value).format("0a");
            }
          }
        }
      ]
    }
  }
};

export { options };
