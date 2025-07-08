import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeAnime from "./../../assets/home_anime.gif"

class Home extends Component {

    state = {showModal:false};
    componentDidMount(){
        setTimeout(() =>{
            this.setState({showModal:true});
        }, 2400);
    }

    closeModal = () => {
        this.setState({showModal:false});
    }
  render(){
    return(
        <div className="home-container">
            
            <div className="header-text">
                <h1>
                    Welcome to my portfolio!
                </h1>
                <p>
                    This is Sagarika Hota, an <u>Aspiring Software Engineer</u>.
                </p>
            </div>
            <div className="header-btns">
                <Link className="btn btn-white" to="/about">
                    <p className="btn-text">Know more about me</p>
                </Link>
                <Link className="btn btn-transparent" to="/contact">
                    <p className="btn-text">Contact with me</p>
                </Link>
            </div>
            <div className="splash-image">
                <img src={homeAnime} alt="animation" loading="lazy" className="home-anim"/>
            </div>
        </div>
    )
  }
}

export default Home;
