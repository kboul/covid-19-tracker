import numeral from "numeral";

const formatNumber = (number: number) => {
  return number ? `+${numeral(number).format("0.0a")}` : "+0";
};

export { formatNumber };
