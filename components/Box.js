import React from 'react'
import { Text} from "react-native";
const Box = (props) => {
  return (
    <div  onClick={props.fnc} style={{width:'20vmin' ,
          height:'20vmin', 
          backgroundColor:"blue",
          borderRadius:12,
          display:'inline-flex',
          justifyContent:'center',
          alignItems:'center',
          fontWeight:'bold',
          color:"#fff",
          fontSize:20,
          margin:'1vmin',
          }}>
           {props.value}
      </div>
  )
}

export default Box