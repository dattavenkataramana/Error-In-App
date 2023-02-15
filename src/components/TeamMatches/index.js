import {Component} from 'react'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: [], bannerUrl: '', recentMatchesListDetails: []}

  componentDidMount() {
    this.getTotalMatchDetails()
  }

  getTotalMatchDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl/:id')

    const newData = await response.json()
    console.log(newData)

    const latestMatchDetailsList = newData.latestMatchDetails.map(
      eachLatestMatchDetails => ({
        umpires: eachLatestMatchDetails.umpires,
        result: eachLatestMatchDetails.result,
        manOfTheMatch: eachLatestMatchDetails.man_of_the_match,
        id: eachLatestMatchDetails.id,
        date: eachLatestMatchDetails.date,
        venue: eachLatestMatchDetails.venue,
        competingTeam: eachLatestMatchDetails.competing_team,
        competingTeamLogo: eachLatestMatchDetails.competing_team_logo,
        firstInnings: eachLatestMatchDetails.first_innings,
        secondInnings: eachLatestMatchDetails.second_innings,
        matchStatus: eachLatestMatchDetails.match_status,
      }),
    )

    const teamBannerUrlList = newData.teamBannerUrl.map(eachUrl => ({
      teamBannerUrl: eachUrl.team_banner_url,
    }))

    const recentMatchesList = newData.recentMatches.map(
      eachRecentMatchesDetails => ({
        umpires: eachRecentMatchesDetails.umpires,
        result: eachRecentMatchesDetails.result,
        manOfTheMatch: eachRecentMatchesDetails.man_of_the_match,
        id: eachRecentMatchesDetails.id,
        date: eachRecentMatchesDetails.date,
        competingTeam: eachRecentMatchesDetails.competingTeam,
        competingTeamLogo: eachRecentMatchesDetails.competingTeamLogo,
        firstInnings: eachRecentMatchesDetails.firstInnings,
        secondInnings: eachRecentMatchesDetails.secondInnings,
        matchStatus: eachRecentMatchesDetails.matchStatus,
      }),
    )
    this.setState({teamDetails: latestMatchDetailsList})
    this.setState({bannerUrl: teamBannerUrlList})

    this.setState({recentMatchesListDetails: recentMatchesList})
  }

  render() {
    const {teamDetails, bannerUrl, recentMatchesListDetails} = this.state
    return (
      <div className="team-details-container">
        <div>
          <img src={bannerUrl} alt="team banner" className="banner-image" />
          <p className="para">Latest Matches</p>
          <ul className="ul-con">
            {teamDetails.map(eachLatestMatch => (
              <LatestMatch
                key={eachLatestMatch.id}
                newMatchDetails={eachLatestMatch}
              />
            ))}
          </ul>
          <ul>
            {recentMatchesListDetails.map(eachRecentMatchesListDetails => (
              <MatchCard
                key={eachRecentMatchesListDetails.id}
                newRecentMatchesListDetails={eachRecentMatchesListDetails}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
