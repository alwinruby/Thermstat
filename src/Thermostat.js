'use strict';

function Thermostat(){
  this.MIN_TEMP = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  this.temperature +=1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()){
    return;
  }
  this.temperature -=1;
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MIN_TEMP;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this.powerSavingMode = true;
};
