import React, {Component} from 'react';
import axios from 'axios';

class LandingPage extends Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      person: null
    }
  }

  async componentDidMount() {
    const url = 'https://api.randomuser.me/'
    let response = await axios.get(url)
    // console.log(response.data.results[0])
    this.setState({
      person: response.data.results[0],
      loading: false
    })
  }

  render() {

    // if(this.state.loading) {
    //   return <div>loading..</div>
    // }
    // if(!this.state.person) {
    //   return <div>didnt get person</div>
    // }

    // return (
    //   <div>
    //     {this.state.person.name.first}
    //   </div>
    // )
    return(
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.person.name.first}</div>
          </div>
        )}
      </div>
    )
  }
}

export default LandingPage;