import _ from "lodash";
import { animales, autos } from "./datos.js";

var uniq_Car = _.uniq(autos);
console.log(uniq_Car);
