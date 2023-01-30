import React, {useEffect, useState} from "react";
import axios from 'axios'

let Movie = () => {
    let [player, setPlayer] = useState([])
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://free-nba.p.rapidapi.com/players',
      params: {page: '0', per_page: '25'},
      headers: {
        'X-RapidAPI-Key': '6895530f68mshf00f4b89f1dbf30p1561efjsn1a2692acef8e',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setPlayer(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])
  return (
    <div>
    <ul>
        {player = player.map(player =>(
          <h2 key = {player.id}>{player.first_name} {player.last_name}</h2>
        ))}
  
      </ul>
    </div>
  )
}

export default Movie;
