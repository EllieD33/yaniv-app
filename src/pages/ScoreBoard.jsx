import { useState, useEffect } from "react";
import NumberOfPlayers from "../components/NumberOfPlayers";
import PlayerScoreCard from "../components/PlayerScoreCard";
import NavButton from "../components/NavButton";

function ScoreBoard() {
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [players, setPlayers] = useState([]);
    const [isNumberOfPlayersVisible, setIsNumberOfPlayersVisible] = useState(true);
    const [winner, setWinner] = useState("");

    useEffect(() => {
        const savedPlayers = localStorage.getItem('yanivPlayers');
    
        if (savedPlayers) {
            setPlayers(JSON.parse(savedPlayers));
            setIsNumberOfPlayersVisible(false);
        }
    }, []);

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
        if (players.length > 0) {
            localStorage.setItem('yanivPlayers', JSON.stringify(players));
        }

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
        });
    }

    const resetBoard = () => {
        setNumberOfPlayers(0);
        setPlayers([]);
        setIsNumberOfPlayersVisible(true);
        setWinner("");
        localStorage.removeItem('yanivPlayers');
        localStorage.removeItem('yanivNumberOfPlayers');
    }

    const resetScores = () => {
        players.forEach(player => {
            const updatedPlayer = {...player, score: 0, status: 'active'};
            updatePlayer(updatedPlayer);
        });
        setTimeout(() => {            
            setWinner("");
        }, 0); 
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-gradient-to-bl from-indigo-600 to-indigo-500 text-white shadow-lg">
                <h1 className="font-heading text-5xl px-2 py-5 text-center" >Yaniv Scoreboard</h1>
                <nav className="fixed bottom-0 w-full bg-gradient-to-bl from-indigo-600 to-indigo-500 flex items-center justify-center">
                    <NavButton
                        linkTo="/pages/Rules"
                        navText="How to play"
                        filled={true}
                    />
                </nav>
            </header>
            <main className="flex flex-col flex-1 items-center justify-center">
                {isNumberOfPlayersVisible && <NumberOfPlayers setNumberOfPlayers={setNumberOfPlayers} />}
                <div className={`flex flex-wrap justify-center ${winner ? 'pointer-events-none' : ''}`}>
                    {players && players.map((player, index) => (
                            <PlayerScoreCard key={index} player={player} updatePlayer={updatePlayer} />
                    ))
                    }
                </div>
                {winner && 
                    <div aria-live="polite" className="mt-4">
                        <p className="text-3xl font-heading" >{winner} wins!</p>
                    </div>
                }
                {!isNumberOfPlayersVisible && 
                    <div className="m-2">
                        <button className="border-2 border-indigo-600 bg-indigo-600 text-white rounded-full px-3 py-2 m-2" onClick={resetBoard} >New Game</button>
                        <button className="border-2 border-red-600 text-red-700 rounded-full px-3 py-2 m-2" onClick={resetScores} >Reset Scores</button>
                    </div>
                }
            </main>
            <div className="h-28"></div>
        </div>
    );
}

export default ScoreBoard;