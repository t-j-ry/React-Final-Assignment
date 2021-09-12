import { Component } from 'react';
import axios from 'axios';
import './App.css';
import Listitem from './Listitem';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      hasError: false,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const promise = axios.get('https://randomuser.me/api/?results=25');

    promise.then((response) => {
      this.setState({
        users: response.data.results
      }) 
    }).catch((error) => {
      this.setState({
        hasError: true
      })
    })
  }

  deleteItem = (id) => {
    const newList = this.state.users.filter((user) => user.login.md5 !== id);

    this.setState({
      users: newList
    })

  }
  

  render() {
    return (
      <div className="App">
        {this.state.hasError && (
          <p>Error fetching data</p>
        )}
        <ul>
          {this.state.users.map((user) => { 
            return (
              <Listitem 
                key={user.login.md5} 
                first={user.name.first}
                last={user.name.last} 
                picture={user.picture.large}
                city={user.location.city} 
                state={user.location.state} 
                email={user.email} 
                gender={user.gender} 
                country={user.location.country} 
                onClick={() => this.deleteItem(user.login.md5)}
              />
            )
          })
          }
        </ul>
      </div>
    );
  }
}

export default App;
