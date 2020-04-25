import { VEHICLE_TYPES } from "../../constants";
import * as Yup from "yup";

export const CREATE_ITEM_SCHEMA = Yup.object().shape({
  [VEHICLE_TYPES.CAR]: Yup.object().shape({
    price: Yup.number().required(),
    year: Yup.string().required(),
    make: Yup.string().required(),
  }),
});
