import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props){
    super(props)
    this.state=({
        class:'ss_menu_none'
    })}
    ChangeDropdown=()=>{
        this.state.class==='ss_menu_none'?this.setState({class:'ss_menu_block'}):this.setState({class:'ss_menu_none'})
    }


  render() { 
    return (
      <div className="container">
      <nav className="menu">
           
          <div className="ss_menu">
              <ul className="list_menu">
                  <li className="list_menu-item"><a className="link_active" href="#"  >Home </a></li>
                  <li className="list_menu-item" onMouseOver={this.ChangeDropdown}  ><a className="link_active" href="#"  > Service </a>
                    
                    <div className={this.state.class}> 
                        
                        <div className="ss_ss_menu_item" >   

                           <a href ="#" > For entrepreneurs </a>
                           <a href ="#"  > For students </a>
                           <a href ="#" > For hobbies </a>
             
              
                  

                        </div>
                                </div>
                                
                  
                  </li>
                
                  <li className="list_menu-item"><a href="#" /> Contact</li>
     

              </ul>
          

          </div>
      </nav>
     
  </div>

);

    }}
 
export default App ;
