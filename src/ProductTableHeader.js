import React, { Component } from 'react';


class ProductTableHeader extends Component{
    render(){
        return(
            <div>
                <th>
                   {this.props.column}
                   <button className="ProductTableHeader-current">&#x25B2;</button>
                   <button>&#x25BC;</button>
                </th>

            </div>
        )
    }
}

export default ProductTableHeader;