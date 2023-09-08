import { useState, useEffect } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

const Home = () => {
  const [cityName, setCityName] = useState("London");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1d77399c80cfc1107c196a4b97320b07&units=metric`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        <section>
          <h1>City</h1>
          <h1>Temperature</h1>
          <h4>Feels like:</h4>
          <h4>Humidity</h4>
        </section>
      </div>
      <div className="container">
        <section>
          <div className="condition-icon">
            <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
          </div>
          <h2>description:</h2>
          <h3>
            temp high
            <FiArrowUp />
          </h3>
          <h3>
            temp low
            <FiArrowDown />
          </h3>
        </section>
      </div>
    </>
  );
};

export default Home;
