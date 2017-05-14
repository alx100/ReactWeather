var React = require('react');

// var About = React.createClass({
//     render: function() {
//        return (
//            <h3>About Component</h3>
//        );
//     }
// });

// refactoring stateless component with arrow func

// var About = function (props) {
//     return (
//         <h3>About Component</h3>
//     )
// };

// or


// var About = (props) => {
//     return (
//         <h3>About Component</h3>
//     )
// };

var About = (props) => (<h3>About Component</h3>);



module.exports = About;