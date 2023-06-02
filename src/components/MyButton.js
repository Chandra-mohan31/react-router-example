import "./MyButtonStyles.css";

import React, { Component } from 'react';
import PropTypes from 'prop-types';




class MyButton extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
     console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillReceiveProps(nextProps) {
      console.log("component will receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log("should component update");
      return true;
  }

  componentWillUpdate(nextProps, nextState) {
      console.log("component will update");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return (
      <div>
<button className='customBtn' onClick={this.props.clickFunc}>{this.props.btnText}</button>
      </div>
    );
  }
}

MyButton.propTypes = {

};

export default MyButton;

// function MyButton({btnText,clickFunc}) {
//   return (
//     <button className='customBtn' onClick={clickFunc}>{btnText}</button>
//   )
// }

// export default MyButton;

