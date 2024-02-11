export const getWeatherStatus = (weatherCode: number) => {
  if (weatherCode === 0) {
    return 'Clear sky';
  } else if (weatherCode === 1) {
    return 'Mainly clear';
  } else if (weatherCode === 2) {
    return 'Partly cloudy';
  } else if (weatherCode === 3) {
    return 'Overcast';
  } else if (weatherCode === 45) {
    return 'Fog ';
  } else if (weatherCode === 48) {
    return 'Depositing rime fog';
  } else if (weatherCode === 51) {
    return 'Drizzle: Light';
  } else if (weatherCode === 53) {
    return 'Drizzle: Moderate';
  } else if (weatherCode === 55) {
    return 'Drizzle: Dense intensity';
  } else if (weatherCode === 56) {
    return 'Freezing drizzle: Light';
  } else if (weatherCode === 57) {
    return 'Freezing drizzle: Dense intensity';
  } else if (weatherCode === 61) {
    return 'Rain: Sligth';
  } else if (weatherCode === 63) {
    return 'Rain: Moderate';
  } else if (weatherCode === 65) {
    return 'Rain: Heavy intensity';
  } else if (weatherCode === 66) {
    return 'Freezing rain: Light';
  } else if (weatherCode === 67) {
    return 'Freezing rain: Heavy intensity';
  } else if (weatherCode === 71) {
    return 'Snow fall: Slight';
  } else if (weatherCode === 73) {
    return 'Snow fall: Moderate';
  } else if (weatherCode === 75) {
    return 'Snow fall: Heavy Intensity';
  } else if (weatherCode === 77) {
    return 'Snow grains';
  } else if (weatherCode === 80) {
    return 'Rain shower: Slight';
  } else if (weatherCode === 81) {
    return 'Rain shower: Moderate';
  } else if (weatherCode === 82) {
    return 'Rain shower: Violent';
  } else if (weatherCode === 85) {
    return 'Snow showers: Slight';
  } else if (weatherCode === 86) {
    return 'Snow showers: Heavy';
  } else if (weatherCode === 95) {
    return 'Thunderstorm';
  } else if (weatherCode === 96) {
    return 'Thunderstorm: Sligth hail';
  } else if (weatherCode === 99) {
    return 'Thunderstorm: Heavy hail';
  } else {
    return 'Unknown';
  }
}