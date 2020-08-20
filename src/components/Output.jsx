import React, {useState} from "react";
import {connect} from "react-redux"


function Output (props) {
    return (
        <div>
            {props.state}
        </div>
      );}
const mapStateToProps = (state) => ({
    state
})


export default connect(mapStateToProps)(Output);