import { VEHICLE_TYPES } from "../../constants";
import * as Yup from "yup";

export const CREATE_ITEM_SCHEMA = Yup.object().shape({
  [VEHICLE_TYPES.CAR]: Yup.object().shape({
    price: Yup.number().required(),
    year: Yup.string().required(),
    make: Yup.string().required(),
  }),
});

const CAR_SCHEMA = {
  bodyType: "",
  carfaxUrl: "",
  declarations: [],
  displacement: "",
  drivetrain: "",
  exteriorColor: "",
  fueltype: "",
  interiorColor: "",
  make: "",
  mileage: "",
  mileageType: "km",
  model: "",
  notes: "",
  numberOfCylinders: "",
  numberOfDoors: "",
  numberOfPassengers: "",
  options: [],
  price: "",
  submodel: "",
  transmission: "",
  trim: "",
  vin: "",
  year: "",
};

const DEFAULT_SCHEMA = {
  declarations: [],
  exteriorColor: "",
  notes: "",
  options: [],
  year: "",
};

export const VEHICLE_TYPES_SCHEMA = {
  [VEHICLE_TYPES.CAR]: CAR_SCHEMA,
  [VEHICLE_TYPES.BICYCLE]: DEFAULT_SCHEMA,
  [VEHICLE_TYPES.MOTORCYCLE]: DEFAULT_SCHEMA,
  [VEHICLE_TYPES.TRUCK]: DEFAULT_SCHEMA,
  [VEHICLE_TYPES.TRAILER]: DEFAULT_SCHEMA,
  [VEHICLE_TYPES.BUS]: DEFAULT_SCHEMA,
  [VEHICLE_TYPES.BOAT]: DEFAULT_SCHEMA,
  [VEHICLE_TYPES.AIRCRAFT]: DEFAULT_SCHEMA,
};

export const VAIDATION_FIELDS = ["Car.price", "Car.year", "Car.make"];
