var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>You can try it out with these few locations:</p>
      <ol>
        <li>
          <Link to='/?location=Monrovia'>Monrovia, LR</Link>
        </li>
        <li>
          <Link to='/?location=Lagos'>Lagos, NG</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
