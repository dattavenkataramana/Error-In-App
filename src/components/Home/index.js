import {Component} from 'react'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplData: []}

  componentDidMount() {
    this.getIplTeamData()
  }

  getIplTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const statusCode = await response.status
    console.log(statusCode)
    const data = await response.json()

    const fetchedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplData: fetchedData})
  }

  render() {
    const {iplData} = this.state

    return (
      <div className="ipl-container">
        <div className="ipl-img-container">
          <img
            className="image-size"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt=" ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="flex-container">
          <ul className="ul-container">
            {iplData.map(eachIplTeam => (
              <TeamCard key={eachIplTeam.id} iplTeamDetails={eachIplTeam} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
