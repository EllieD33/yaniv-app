import NumberOfPlayers from "../components/NumberOfPlayers";
import PlayerScoreCard from "../components/PlayerScoreCard";

function ScoreBoard() {
    return (
        <header>
            <h1>SCOREBOARD PAGE</h1>
            <NumberOfPlayers />
            <PlayerScoreCard />
        </header>
    );
}

export default ScoreBoard;