import React from 'react';
import { render } from 'react-dom';
import Delete from './Delete';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue:"",
            storeArray:[],
            i:0
        };
        
                
    }
    onInputChange =(event) => {
        this.setState({ inputValue: event.target.value });

    }
    onSave=()=> {
         this.state.storeArray.push(this.state.inputValue);
        this.setState({
            storeArray : this.state.storeArray
            
        });
    }
    onDelete(index){
         let temp = this.state.storeArray.filter((value,inde,arr)=> value!=arr[index] );
        this.setState({storeArray:temp});
    }
    /*onDelete(index){
       
        
        let temp = this.state.storeArray.filter((value,inde,arr)=> value!=arr[index] );
        this.setState({storeArray:temp});
    }*/
    /*render() {
        return (
            <div>
                <input type="text" onChange={this.onInputChange}
                    value={this.state.inputValue} />
                <input type="submit" onClick={this.onSave}
                    value="save" />
                <h1>To Do List</h1>
                <ul>
                    {this.state.storeArray.map((value, index) =>
                        <li key={index}> {value}
                            <Delete index={index} deletebutton={this.onDelete.bind(this)}/>
                            
                        </li>)}

                        
                </ul>
            </div>
        );
    }*/
    render() {
        return (
            <div>
                <input type="text" onChange={this.onInputChange}
                    value={this.state.inputValue} />
                <input type="submit" onClick={this.onSave}
                    value="save" />
                <h1>To Do List</h1>
                <ul>
                    {this.state.storeArray.map((value, index) =>
                        <li key={index}> {value}
                            <input type="button" onClick={()=>{this.onDelete(index)}} 
                            value="delete" />
                            
                        </li>)}

                        
                </ul>
            </div>
        );
    }
}
export default HomePage;