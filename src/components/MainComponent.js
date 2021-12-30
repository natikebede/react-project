import React, { Component } from "react";
import Menu from './MenuComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DISHES} from '../share/dishes.js';
import {COMMENTS} from '../share/comment.js';
import {LEADERS} from '../share/leaders.js';
import {PROMOTIONS} from '../share/promotions.js';
import Header from "./Headercomponet.js";
import Dishdetail from './dishDetail.js';
import Footer from "./footer.js";
import Home from "./Homecomponent.js";
import Contact from './Contactcomponent.js';
import {Switch,Route,Redirect} from 'react-router-dom'
class Main extends  Component
{
  constructor(props)
  {
    super(props);
    this.state={
        dishes:DISHES,
        comments:COMMENTS,
        promotions:PROMOTIONS,
        leaders:LEADERS
        
    };
  }
  onDishSelect(dishid)
  {
      this.setState({selectedDish:dishid});

  }
  renderDish(dish)
    {
        if(dish!=null)
        {
            return (
               <Dishdetail dish={dish}/>

            );
        }
        else
        {
            <div></div>
        }
    }
  render()
  {
    const Homepage=()=>
    {
      return (<Home  dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
      promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
      leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
      />);
    }
    

    return (

      <div className="container-fluid">
          <Header/>
          <Switch>
            <Route path="/home" component={Homepage}/>
            <Route path="/contactus" component={Contact}/>
            <Route path="/menu" exact component={()=><Menu dishes={this.state.dishes}/>}/>
            <Redirect to="/home"/>
          </Switch>
         
          <Footer/>
      </div>
    
    );
  }
}
export default Main;
/*<Menu dishes={this.state.dishes} onClick={(dishid)=>this.onDishSelect(dishid)}/>
<Dishdetail  dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/