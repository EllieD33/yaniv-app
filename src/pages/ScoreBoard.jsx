import { useState, useEffect } from "react";
import NumberOfPlayers from "../components/NumberOfPlayers";
import PlayerScoreCard from "../components/PlayerScoreCard";

function ScoreBoard() {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [players, setPlayers] = useState([]);
    const [isNumberOfPlayersVisible, setIsNumberOfPlayersVisible] = useState(true);
    const [winner, setWinner] = useState("")

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
    }, [numberOfPlayers]);

    useEffect(() => {
        const activePlayers = players.filter(player => player.status === 'active');
        if (activePlayers.length === 1){
            setWinner(activePlayers[0].name);
        }
    }, [players])

    const updatePlayer = (updatedPlayer) => {
        setPlayers((prevPlayers) => {
            const newPlayers = [...prevPlayers];
            const index = newPlayers.findIndex(player => player.name === updatedPlayer.name);
            newPlayers[index] = updatedPlayer;
            return newPlayers;
        })
    }

    const resetBoard = () => {
        setNumberOfPlayers(0);
        setPlayers([]);
        setIsNumberOfPlayersVisible(true);
    }

    const resetScores = () => {
        players.forEach(player => {
            const updatedPlayer = {...player, score: 0}
            updatePlayer(updatedPlayer)
        });
    }

    return (
        <div>
            <header>
                <h1>Yaniv Scoreboard</h1>
            </header>
            <main>
                {isNumberOfPlayersVisible && <NumberOfPlayers setNumberOfPlayers={setNumberOfPlayers} />}
                {players && players.map((player, index) => (
                        <PlayerScoreCard key={index} player={player} updatePlayer={updatePlayer} />
                ))
                }
                {!isNumberOfPlayersVisible && 
                    <div>
                        <button className="bg-indigo-600 text-white rounded-full px-3 py-1 m-2" onClick={resetBoard} >New Game</button>
                        <button className="bg-indigo-600 text-white rounded-full px-3 py-1 m-2" onClick={resetScores} >Reset Scores</button>
                    </div>
                }
                {winner && 
                    <div>
                        <p>{winner} wins!</p>
                    </div>
                }
            </main>
        </div>
    );
}

export default ScoreBoard;