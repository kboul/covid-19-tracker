const style = { width: "100%", height: "100%", borderRadius: "12px" };

const position = { lat: 34.8, lng: -40.47 };

interface CasesTypeColors {
  [key: string]: {
    hex: string;
    rgb: string;
    half_op: string;
    multiplier: number;
  };
}

const casesTypeColors: CasesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 800
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 1200
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 2000
  }
};

const initialZoom = 3;

export { casesTypeColors, initialZoom, position, style };
