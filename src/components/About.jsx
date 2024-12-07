import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{

    constructor(props){
        super(props);

        // console.log("Parent Constructor");
        
    }
    componentDidMount(){
        // console.log("Parent Component Did Mount");
         
     }
    render(){
        // console.log("Parent Render");
        
        return(
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                {/* <User name={"Sravan(Function)"} /> */}
                <UserClass name={"Sravan(Class) "} location={"AndhraPradesh(class)"} />
                {/* <UserClass name={"Elon Musk"} location={"US"} /> */}
            </div>
        )
    }
}

/*
-Parent Constructor
-Parent render

   -First Constructor
   -First Render

   -Second Constructor
   -Second Render

   <DOM UPDATED - IN SINGLE BATCH>

   -First ComponentDidMount
   -Second ComponenetDidMount
 */


export default About;