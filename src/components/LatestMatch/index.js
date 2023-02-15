// Write your code here
import './index.css'

const LatestMatch = props => {
  const {newMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = newMatchDetails

  return (
    <div className="team-details-con">
      <div className="heading-container">
        <h1 className="heading">{competingTeam}</h1>
        <p className="para">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="image-con">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="images-size"
        />
      </div>
      <div className="umpire-container">
        <p className="firstInnings">First Innings</p>
        <p className="firstInnings">{firstInnings}</p>
        <p className="secondInnings">Second Innings</p>
        <p className="secondInnings">{secondInnings}</p>
        <p className="manOfTheMatch">Man Of The Match</p>
        <p className="manOfTheMatch">{manOfTheMatch}</p>
        <p className="umpires">{umpires}</p>
        <p className="matchStatus">{matchStatus}</p>
      </div>
    </div>
  )
}

export default LatestMatch
