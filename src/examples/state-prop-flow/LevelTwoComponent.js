import React from 'react';
import LevelThreeComponent from './LevelThreeComponent';

class LevelTwoComponent extends React.Component {
 
  render() {
    return (
      <div style={{padding: '20px', border: '1px solid #ddd'}}>
   
        <h4>Level 2</h4>

        <LevelThreeComponent onClick={this.props.onClick}/>
      </div>
    );
  }
}

export default LevelTwoComponent;
