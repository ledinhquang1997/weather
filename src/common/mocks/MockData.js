export const MOCK_LOCATION_INFO = [
  {
    title: 'London',
    location_type: 'City',
    woeid: 44418,
    latt_long: '51.506321,-0.12714',
  },
];

export const MOCK_WEATHER_INFO = {
  data: {
    weather: [
      {
        id: 6578402917089280,
        weather_state_name: 'Light Rain',
        weather_state_abbr: 'lr',
        wind_direction_compass: 'NNE',
        created: '2021-03-04T09:20:02.594736Z',
        applicable_date: '2021-03-04',
        min_temp: 4.15,
        max_temp: 7.74,
        the_temp: 6.57,
        wind_speed: 5.908215493623903,
        wind_direction: 21.50182010505292,
        air_pressure: 1025.0,
        humidity: 76,
        visibility: 8.407773602163367,
        predictability: 75,
      },
      {
        id: 4778166636773376,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'NE',
        created: '2021-03-04T09:20:01.727566Z',
        applicable_date: '2021-03-05',
        min_temp: 2.76,
        max_temp: 6.7,
        the_temp: 6.300000000000001,
        wind_speed: 6.916588486569104,
        wind_direction: 48.66164574425015,
        air_pressure: 1032.0,
        humidity: 56,
        visibility: 12.087844488188976,
        predictability: 71,
      },
      {
        id: 4965531833597952,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'ENE',
        created: '2021-03-04T09:20:02.607886Z',
        applicable_date: '2021-03-06',
        min_temp: 1.055,
        max_temp: 8.045,
        the_temp: 6.5649999999999995,
        wind_speed: 3.0623710981521253,
        wind_direction: 77.66934227402905,
        air_pressure: 1034.5,
        humidity: 61,
        visibility: 11.795178656645191,
        predictability: 71,
      },
      {
        id: 5478683654488064,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'W',
        created: '2021-03-04T09:20:02.695586Z',
        applicable_date: '2021-03-07',
        min_temp: 1.565,
        max_temp: 9.11,
        the_temp: 6.99,
        wind_speed: 3.062804951756409,
        wind_direction: 260.1565478055076,
        air_pressure: 1027.5,
        humidity: 60,
        visibility: 13.892306430446194,
        predictability: 71,
      },
      {
        id: 4678377903489024,
        weather_state_name: 'Showers',
        weather_state_abbr: 's',
        wind_direction_compass: 'WSW',
        created: '2021-03-04T09:20:02.717800Z',
        applicable_date: '2021-03-08',
        min_temp: 4.255,
        max_temp: 10.405000000000001,
        the_temp: 8.61,
        wind_speed: 4.782988692391103,
        wind_direction: 242.16480581820147,
        air_pressure: 1022.5,
        humidity: 65,
        visibility: 12.136932812375726,
        predictability: 73,
      },
      {
        id: 4805470884724736,
        weather_state_name: 'Heavy Rain',
        weather_state_abbr: 'hr',
        wind_direction_compass: 'SW',
        created: '2021-03-04T09:20:05.817979Z',
        applicable_date: '2021-03-09',
        min_temp: 5.275,
        max_temp: 11.63,
        the_temp: 10.06,
        wind_speed: 6.8924644078581085,
        wind_direction: 217.0,
        air_pressure: 1017.0,
        humidity: 78,
        visibility: 9.763605543625228,
        predictability: 77,
      },
    ],
    city: {
      title: 'London',
      location_type: 'City',
      woeid: 44418,
      latt_long: '51.506321,-0.12714',
      timezone: 'Europe/London',
    },
  },
};

export const MOCK_DATA = {
  result: [
    {
      id: 6578402917089280,
      weather_state_name: 'Light Rain',
      weather_state_abbr: 'lr',
      applicable_date: '2021-03-03',
      min_temp: 3.9850000000000003,
      max_temp: 12.22,
      wind_speed: 2.517334394331769,
      humidity: 77,
      predictability: 75,
    },
    {
      id: 6578402917089281,
      weather_state_name: 'Showers',
      weather_state_abbr: 's',
      applicable_date: '2021-03-04',
      min_temp: 4.109999999999999,
      max_temp: 8.28,
      wind_speed: 5.884700135552374,
      humidity: 75,
      predictability: 73,
    },
    {
      id: 6578402917089283,
      weather_state_name: 'Heavy Cloud',
      weather_state_abbr: 'hc',
      applicable_date: '2021-03-05',
      min_temp: 2.915,
      max_temp: 6.765,
      wind_speed: 6.75195061811554,
      humidity: 58,
      predictability: 71,
    },
    {
      id: 6578402917089284,
      weather_state_name: 'Heavy Cloud',
      weather_state_abbr: 'hc',
      applicable_date: '2021-03-06',
      min_temp: 2.16,
      max_temp: 7.715,
      wind_speed: 3.340137420456534,
      humidity: 58,
      predictability: 71,
    },
    {
      id: 6578402917089285,
      weather_state_name: 'Heavy Cloud',
      weather_state_abbr: 'hc',
      applicable_date: '2021-03-07',
      min_temp: 0.95,
      max_temp: 7.994999999999999,
      wind_speed: 2.8119647144489517,
      humidity: 61,
      predictability: 71,
    },
    {
      id: 6578402917089286,
      weather_state_name: 'Heavy Cloud',
      weather_state_abbr: 'hc',
      applicable_date: '2021-03-08',
      min_temp: 2.245,
      max_temp: 9.495000000000001,
      wind_speed: 3.218594806331027,
      humidity: 63,
      predictability: 71,
    },
  ],
  cityName: 'London',
};
