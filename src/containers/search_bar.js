import React,{Component} from 'react'

const formStyle = {
    width: '50%',
    margin:'20px 0px'
  };

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={cityTerm:'',CountreyTerm:''};
        this.onChange=this.onChange.bind(this);

    }


    onSubmit(event){
        event.preventDefault();

    }

    onChange(event){
        if(event.target.id==="citySearch")
        this.setState({cityTerm:event.target.value});
         if(event.target.id==="countreySearch")
        this.setState({CountreyTerm:event.target.value});
       

    }



    render(){
        return(
            <center>
                <p>search the weather</p>
            <form onSubmit={this.onSubmit} style={formStyle} className="input-group">
            <input id="citySearch" onInputCapture={this.onChange} value={this.state.cityTerm} placeholder="enter the city"className="form-control"></input>
            <input id="countreySearch" onInputCapture={this.onChange}  value={this.state.CountreyTerm} placeholder="enter the countrey"className="form-control"></input>
            <button type="submit" className="btn btn-secondary">
                 Search
                </button  >
                
            </form>
            </center>

        );
    }
}

export default SearchBar;