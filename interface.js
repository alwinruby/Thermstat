$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  $('#temperature-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  $('form').on("submit", function(event){
    event.preventDefault();
    displayWeather($(this).serialize());
  });

  function displayWeather(city)
  {
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    var token = '&appid=733539c7a2e636a87f14365fc38fdaa8';
    var units = '&units=metric';
    $.get(url + city + token + units, function(data)
    {
      $('#city-temperature').text(data.main.temp);
    });
  }

});
