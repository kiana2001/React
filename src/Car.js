import React from "react";


class Car extends React.Component{
render(){
    return (
        <>
     <p>my car is {this.props.model} and its color is {this.props.color}</p>
     <p>{console.log(this.props)}</p>
     <span>{this.props.children}</span>

        
 </>
    )
    }

}
export default Car;
