import _ from "lodash";
import { animales, autos } from "./datos.js";

var uniq_car = _.uniq(autos);
console.log(uniq_car);

var first_wild_animal = _.find(animales, { tipo: "salvaje" });
console.log(first_wild_animal);

var wild_animals = _.filter(animales, { tipo: "salvaje" });
console.log(wild_animals);
