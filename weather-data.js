function Weather(cityName, description, temp, country) {
    this.cityName = cityName;
    this.description = description;
    this.temperatureCelsius = temp + '°C';
    this.country = country;
    this._temperatureF = '';
}

Object.defineProperty(Weather.prototype, 'temperatureF', {
    get: function () {
        return this._tempetureF;
    },
    set: function (value) {
        this._temperatureF = (value * 1.8 + 32).toFixed(2) + 'F.';
    }
});