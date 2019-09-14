import React,{ Component } from 'react';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField,requestRobots } from '../actions';

const mapStateToProps = state =>{
    console.log("mapStateToProps");
    return {
        searchField : state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch)=>{
    console.log("mapDispatchToProps");
    return{
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots : () => dispatch(requestRobots())
    }
}

class App extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         robots: [],
    //         // searchfield:''
    //     }
    // }

    componentDidMount(){
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(response => response.json())
        // .then(users => {this.setState({robots:users})})
        console.log("component did mount");
        this.props.onRequestRobots();
    }

    // onSearchChange = (event) => {
    //     // this.setState({ searchfield : event.target.value })
    //     // const filteredRobots = this.state.robots.filter(robots=>{
    //     //     return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    //     // })
    //     // console.log(filteredRobots);
        
    //     this.setState({ searchfield : event.target.value })
    // }

    
    render(){

        // const { robots } =this.state;
        console.log("Rendered");
        const { searchField,onSearchChange,robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(isPending){  //we can also use if(!robots.length) 
            console.log("Checked if is pending");
            return <h1 className="tc">Loading...PLEASE WAIT</h1>
        }else{
            console.log("Pending over...robots are here");
            return (
                <div className="tc pa2">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>

                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);