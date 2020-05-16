import React,{ Component } from 'react';


class Content extends Component{
  componentWillMount(){
      console.log('Component Will mount')
  }  
  componentDidMount(){
      console.log('Component Did mount')
  }
  componentWillReceiveProps(newProps){
      console.log('Component Will receive props')
  }
  shouldComponentUpdate(newProps,newState){
      console.log('Should Component update')
  }
  componentWillUpdate(newProps,newState){
      console.log('Component Will update')
  }
  componentDidUpdate(newProps,newState){
      console.log('Component Did update')
  }
  componentWillUnmount(){
      console.log('Component Will Unmount')
  }
  render(){
  return (
    <div>
      <h2>{this.props.myNum}</h2>
    </div>
  );
  }
}

export default Content;
