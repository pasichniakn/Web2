// Підключаємо необхідні файли
const planet = require("./planet");
const station   = require("./station");
const cargo  = require("./cargo");

// Доступні операції з планетами
exports.FindPlanete   = planet.FindPlanete;
exports.AddPlanete    = planet.AddPlanete;
exports.DeletePlanet  = planet.DeletePlanet;
exports.EditPlanet    = planet.EditPlanet;
exports.GetPlanetList = planet.GetPlanetList;
exports.global_planet_list  =  planet.global_planet_list;

// Доступні операції з станціями
exports.FindStation    = station.FindStation;
exports.AddStation     = station.AddStation;
exports.DeleteStation  = station.DeleteStation;
exports.EditStation    = station.EditStation;
exports.GetStationList = station.GetStationList;

// Доступні операції з вантажем
exports.FindCargo    = cargo.FindCargo;
exports.AddCargo     = cargo.AddCargo;
exports.DeleteCargo  = cargo.DeleteCargo;
exports.EditCargo    = cargo.EditCargo;
exports.GetCargoList = cargo.GetCargoList;