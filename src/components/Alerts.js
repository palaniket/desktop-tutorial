import React from 'react'

export default function Alerts(props) {
    // const capitalize=(word)=>{
    //     const lower=word.toLowerCase();
    //     return lower.charAt[0].toUpperCase()+lower.slice(1);

    //   }
    const capitalize=(word)=>{
        const l=word.toLowerCase();
        return l.charAt(0).toUpperCase() + l.slice(1);
    }
    const str="weeeeee";
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
      return (
          props.alert &&<div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>{capitalize(props.alert.type)}</strong> {capitalize(props.alert.msg)}
          {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      )
}
