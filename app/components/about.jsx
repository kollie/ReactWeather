var React = require('react');

var About = (props) => {
  return (

    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is my first application using React. This applicatin basically lets
        you type the name of any city and get the temperature. I'm'
        actually getting these skills from the Complete React Web Developer Course offered on Udemy.
      </p>
      <p>
        You can access some of the tools I used in this application below:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - A JavaScript framework developed by facebook.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to quickly return the temperature of the city you're looking for.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
