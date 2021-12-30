import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card ,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';

class Menu extends  Component
{
   
  

    

    render()

    {
        const menu= this.props.dishes.map((dish)=> {
            return(
                <div key={dish.id} className="col-12 col-md-5 mt-2">
                    <Card onClick={()=>this.props.onClick(dish.id)}>
                        <CardImg src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle className="fw-bold">{dish.name}</CardTitle>
                            
                        </CardImgOverlay>

                    </Card>

                </div>
            );

        });
        return(
          <div className ="container-fluid bg-light">
              <div className="row">
              
                    {menu}
                    
                  </div>
                  
                     

                  
          </div>
        );
        
    }
}
export default Menu;