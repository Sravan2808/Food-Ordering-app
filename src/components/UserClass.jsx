import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name:"Dummy",
                location: "Default",
               
            }
        }
        // console.log(this.props.name + "Child Constructor");   
    }

    async componentDidMount(){
    //    console.log(this.props.name + "Child Component Did Mount");

    //    Api Calls
        const data = await fetch("https://api.github.com/users/sravan2808",
        );
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
       // console.log(json);
        
    }
    componentDidUpdate(){
        // console.log("Componenet Did Updated");
        
    }
    
    componentWillUnmount(){
        // console.log("Componenet Will Unmount");
        
            
    }

    render(){
        

        console.log(this.props.name + "Child Render");
        const {name,location,avatar_url} = this.state.userInfo;
        return(
        <div className="user-card">
            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: Sravan@28</h4>
        </div>
        )
    }
}
export default UserClass;

/***
 * -----MOUNTING------
 * 
 * Constructor(dummy)
 * Render(dummy)
 *      <HTML Dummy>
 * Componenet Did Mount
 *      <API Call>
 *      <this.setState> -->STATE VARIABLE IS UPDATED
 * 
 * ----- UPDATE
 *          render(API data)
 *          <HTML (new API data>)
 * componentDidUpdate
 */