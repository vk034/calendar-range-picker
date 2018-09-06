import {
  InMemoryDbService
} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const airLinesData = [
      {
        "name": "SpiceJet",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/SG.png",
        "travel_date": "9/1/2018"
      },
      {
        "name": "Air India Express",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/IX.png",
        "travel_date": "9/2/2018"
      },
      {
        "name": "China Southern",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/CZ.png",
        "travel_date": "9/3/2018"
      },
      {
        "name": "Go Air",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/G8.png",
        "travel_date": "9/4/2018"
      },
      {
        "name": "Air India",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/AI.png",
        "travel_date": "9/5/2018"
      },
      {
        "name": "Jet Airways",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/9W.png",
        "travel_date": "9/6/2018"
      },
      {
        "name": "Asiana",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/OZ.png",
        "travel_date": "9/7/2018"
      },
      {
        "name": "Vistara",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/UK.png",
        "travel_date": "9/8/2018"
      },
      {
        "name": "Ethihad",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/EY.png",
        "travel_date": "9/9/2018"
      },
      {
        "name": "Indi GO",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/6E.png",
        "travel_date": "9/10/2018"
      },
      {
        "name": "China Estern",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/MU.png",
        "travel_date": "9/11/2018"
      },
      {
        "name": "cathy pacific",
        "logo": "http://www.gstatic.com/flights/airline_logos/70px/multi.png",
        "travel_date": "9/19/2018"
      }
    ];
    return { airLinesData };
  }
}
