import React, { Component } from "react";

 
export default class CopyEmail extends Component {
  copyCodeToClipboard = str => {
    const el = document.createElement('input')
    el.value = str
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    alert(`Kainy's email address has copied to your clipboard!`)
  }
 
  render() {
    return (
        <button className='email' onClick={() => this.copyCodeToClipboard('kainy2109@gmail.com')} name='Click'>
            Contact
        </button>
    )
  }
}