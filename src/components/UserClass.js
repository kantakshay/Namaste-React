import React from "react"



class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count : 0
        }
    }
    render(){
        const {name,location} = this.props
        return(
                <div>
                <h2>count={this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Inc</button>
        <h2>Name:{name}</h2>
        <h2>location = {location}</h2>
        <h2>contact:</h2>

                </div>
        )
    } 
}

export default UserClass