/* eslint-disable no-unsafe-optional-chaining */

import { Country } from "../../../models";
import { casesTypeColors } from "../constants";

const getRadius = (casesType: string, country: Country) => {
  return Math.sqrt(
    +country[casesType as keyof Country] *
      casesTypeColors[casesType]?.multiplier
  );
};

export { getRadius };
