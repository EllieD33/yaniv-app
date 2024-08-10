import { useState, useEffect } from "react";
import NumberOfPlayers from "../components/NumberOfPlayers";
import PlayerScoreCard from "../components/PlayerScoreCard";
import NavButton from "../components/NavButton";

function ScoreBoard() {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [players, setPlayers] = useState([]);
    const [isNumberOfPlayersVisible, setIsNumberOfPlayersVisible] = useState(true);
    const [winner, setWinner] = useState("")

    useEffect(() => {
        if (numberOfPlayers > 0) {
            const defaultPlayerNames = Array.from({ length: numberOfPlayers }, (_,i) => `Player ${i + 1}`);
            const defaultPlayerObjects = defaultPlayerNames.map((name, index) => ({
                id: index,
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
            const newPlayers = prevPlayers.map(player =>
                player.id === updatedPlayer.id ? updatedPlayer : player
            );
            return newPlayers;
        })
    }

    const resetBoard = () => {
        setNumberOfPlayers(0);
        setPlayers([]);
        setIsNumberOfPlayersVisible(true);
        setWinner("");
    }

    const resetScores = () => {
        players.forEach(player => {
            const updatedPlayer = {...player, score: 0};
            updatePlayer(updatedPlayer);
            setWinner("");
        });
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gradient-to-bl from-indigo-600 to-indigo-500 text-white shadow-lg">
                <h1 className="font-heading text-5xl px-2 py-4 text-center" >Yaniv Scoreboard</h1>
                <nav className="fixed bottom-0 w-full bg-gradient-to-bl from-indigo-600 to-indigo-500 flex items-center justify-center">
                    <NavButton
                        linkTo="/pages/Rules"
                        navText="How to play"
                        filled={true}
                    />
                </nav>
            </header>
            <main className="flex flex-1 items-center justify-center" >
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