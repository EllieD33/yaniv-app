import { useState, useEffect } from "react";
import NumberOfPlayers from "../components/NumberOfPlayers";
import PlayerScoreCard from "../components/PlayerScoreCard";

function ScoreBoard() {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [players, setPlayers] = useState([]);
    const [isNumberOfPlayersVisible, setIsNumberOfPlayersVisible] = useState(true);

    useEffect(() => {
        if (numberOfPlayers > 0) {
            const defaultPlayerNames = Array.from({ length: numberOfPlayers }, (_,i) => `Player ${i + 1}`);
            const defaultPlayerObjects = defaultPlayerNames.map((name) => ({
            name,
            score: 0,
            status: 'active'
        }));
        setPlayers(defaultPlayerObjects);
        setIsNumberOfPlayersVisible(false);
        }
    }, [numberOfPlayers])

    const updatePlayer = (updatedPlayer) => {
        setPlayers((prevPlayers) => {
            const newPlayers = [...prevPlayers];
            const index = newPlayers.findIndex(player => player.name === updatedPlayer.name);
            newPlayers[index] = updatedPlayer;
            return newPlayers;
        })
    }

    return (
        <header>
            <h1>SCOREBOARD PAGE</h1>
            {isNumberOfPlayersVisible && <NumberOfPlayers setNumberOfPlayers={setNumberOfPlayers} />}
            {players && players.map((player, index) => (
                <PlayerScoreCard key={index} player={player} updatePlayer={updatePlayer} />
            ))

            }
        </header>
    );
}

export default ScoreBoard;