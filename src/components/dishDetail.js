import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card ,CardImg,CardBody,CardText,CardTitle} from 'reactstrap';
class Dishdetail extends Component
{
    renderDish(dish) {
        return(
            <div className="row">
                <div className='col-12 col-md-5  m-1' >   
                    <Card className="">
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>    
                            <CardText>{dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>

                <div  className="col-12 col-md-5 m-1">
                {this.renderComments(dish.comments)}
                </div>
        </div>   
        )
    }

    renderComments(comment){
        const listComment = comment.map((comm) =>
            <li>{comm.comment}  <br/><br/>--{comm.author} {new Intl.DateTimeFormat('en-US',{year:"numeric",month:"short",day:"2-digit"}).format( new Date(Date.parse(comm.date)))}<br/><br/></li>
  ) ;
        if( comment != null){
            return(
                <div>
                    <h4>Comments </h4>
                    <ul className='list-unstyled'>{listComment} </ul>
                  
                </div>
                
            )

        }else {
            return(
            <div>

            </div>)
        }
    }

    render() {
        const dish = this.props.dish ;
        if (dish!= null)
        {
            return (
            <div>
            {this.renderDish(dish)}
           
            </div>
            )
            }
            else
            {
              return  <div> </div>;
            }
    }
}
export default Dishdetail;