import React, {useState} from "react";
import {connect} from "react-redux"

function Calculator(props) {
    const [value, setValue] =useState(0);
    // console.log(props);
    const handleClickAdd = (e) => {
        // console.log (value);
        props.add(value);
    }
    const handleClickMinus = (e) => {
        // console.log (value);
        props.minus(value);
    }
    const handleClickMultiply = (e) => {
        // console.log (value);
        props.multiply(value);
    }
    const handleClickDevision = (e) => {
        // console.log (value);
        props.devision(value);
    }
    const handleChange = (e) => {
        setValue (+e.target.value);
    }

  return (
    <div>
        <p>Calculator</p>
        <input value = {value}onChange = {handleChange} type='number'/>
        <button onClick ={handleClickAdd}>Add</button>
        {/* <input value = {value}onChange = {handleChange} type='number'/> */}
        <button onClick ={handleClickMinus}>Minus</button>
        {/* <input value = {value}onChange = {handleChange} type='number'/> */}
        <button onClick ={handleClickMultiply}>Multiply</button>
        {/* <input value = {value}onChange = {handleChange} type='number'/> */}
        <button onClick ={handleClickDevision}>Devision</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
    // output: state.output,
    state
  });
  const mapDispatchToProps = (dispatch) => {
    return {
        add: (number) => dispatch({type : "ADD", payload: number}),
        minus: (number) => dispatch({type : "MINUS", payload: number}),
        multiply: (number) => dispatch({type : "MULTIPLY", payload: number}),
        devision: (number) => dispatch({type : "DIVISION", payload: number}),
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);