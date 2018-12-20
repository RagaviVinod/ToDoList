import React from 'react';
import { render } from 'react-dom';

class Delete extends React.Component {
    constructor(props){
        super(props);
        this.state={
            i:props.index
        };
        
    }
    onDeletebutton=()=>{
            this.props.deletebutton(this.state.i);
        }
    render(){
        return(
            <div>
                <input type="button" onClick={this.onDeletebutton} 
                            value="delete" /> 
                                
            </div>
        );

    }
}
export default Delete;