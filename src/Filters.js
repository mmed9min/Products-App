import React, { Component } from 'react';


export class Filters extends Component{
    handleChange(e) {
        const value = e.target[e.target.type === "checkbox" ? "checked" : "value"]
        const name = e.target.name;
    
        this.props.onFilter({
          [name]: value
        });
    }
    render(){
        return(
           <form>
               <input
                type="text"
                placeholder="Search..."
                value={this.props.filterText}
                name="filterText"
                onChange={this.handleChange}
               />
               <p>
                 <input
                    type="checkbox"
                    checked={this.props.inStockOnly}
                    name="inStockOnly"
                    onChange={this.handleChange}
                 />
                 &nbsp;
                 Only show products in stock
               </p>
           </form>
        )
    }
}

