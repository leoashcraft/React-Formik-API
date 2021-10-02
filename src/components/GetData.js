import React from 'react'
import axios from 'axios';


function GetData(props) {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/' + String(props.name)
    
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setData(response.data);
      });
    }, []);
  
    if (!data) return null;
  
    return (
      <div className="content">
          <img src={data.sprites.other.dream_world.front_default} alt="Data image" />
          <h1>{data.name} stats</h1>
          <table>
            <thead>
            <tr>
                <th scope="col">Stat</th>
                <th scope="col">Base</th>
                <th scope="col">Effort</th>
            </tr>
            </thead>
            <tbody>
                {[...Array(6)].map((x, i) =>
                <tr>
                    <td className="bold">{data.stats[i].stat.name}</td>
                    <td>{data.stats[i].base_stat}</td>
                    <td>{data.stats[i].effort}</td>
                </tr>
                )}
                
            </tbody>
            </table>
      </div>
    );
}

export default GetData;
