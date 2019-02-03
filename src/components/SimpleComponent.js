import React from 'react'

export default class SimpleComponent extends React.Component{
  constructor(){
    super()
    this.state={
      mood:"happy"
    }
  }

  handleClick=()=>{
    if(this.state.mood === "happy"){
      this.setState({
        mood:"sad"
      })
    }else{
      this.setState({
        mood:"happy"
      })
    }
  }
render(){
  return(
    <button onClick={this.handleClick}>{this.state.mood}!</button>
  )
}
}
