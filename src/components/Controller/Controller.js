import React, { Component } from 'react';
import './Controll.css';
class Controller extends Component{
    constructor(props){
        super(props)
        this.state={
            start: true,
            pause: false,
            lap: false,
            reset: false
        }
    }
    startControler(){
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true
        })
        this.props.start()
    }
    pauseControler(){
        this.setState({
            ...this.state,
            start: true,
            reset: true,
            lap: false,
            pause: false
        })
        this.props.pause()
    }
    lapControler(){
        this.props.lap()
    }
    resetControler(){
        this.setState({
            start: true,
            pause: false,
            lap: false,
            reset: false
        })
        this.props.reset()
    }
    getController(){
        let output= null 
        if (this.state.start && !this.state.reset){
            output = (
                <div>
                    <button 
                       className="btn btn-success btn-lg px-5 ml-5 button"
                       onClick={ event => this.startControler()}
                       >Start
                    </button>
                </div>
            )
        } else if(this.state.pause && this.state.lap){
            output = (
                <div className="my-5">
                    <button 
                        className="btn btn-primary btn-lg px-5 ml-5 button"
                        onClick={ event => this.pauseControler()}
                        >Pause
                    </button>
                    <button 
                        className="btn btn-warning btn-lg px-5 ml-5 button"
                        onClick={ event => this.lapControler()} 
                        >Lap
                    </button>
                </div>
            )
        }else if(this.state.start && this.state.reset){
            output = (
                <div className="my-5">
                    <button 
                       className="btn btn-success btn-lg px-5 ml-5 button"
                       onClick={ event => this.startControler()}
                       >Start
                    </button>
                    <button 
                        className="btn btn-danger btn-lg px-5 ml-5 button"
                        onClick={ event => this.resetControler()} 
                        >Reset
                    </button>
                </div>
            )
        }
        return output
    }
    render(){
        return  this.getController()
    }
}
export default Controller