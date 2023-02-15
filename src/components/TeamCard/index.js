import './index.css'

const TeamCard = props => {
  const {iplTeamDetails} = props
  const {name, teamImageUrl} = iplTeamDetails

  return (
    <div className="tem-container">
      <img className="sizes" src={teamImageUrl} alt={`${name}`} />
      <h1 className="head-to-match-team">{name}</h1>
    </div>
  )
}

export default TeamCard
