import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

function PlayerScoreCard({ player, updatePlayer }) {
    const [playerName, setPlayerName] = useState(player.name);
    const [editing, setEditing] = useState(false);
    const [scoreInputValue, setScoreInputValue] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);

    const handleNameChange = (event) => {
        const newName = event.target.value;
        setPlayerName(newName)
        updatePlayer({ ...player, name: newName });
    };

    const handleDoubleClick = () => {
        setEditing(true);
    };

    const handleBlur = () => {
        setEditing(false);
    };

    const handleInputChange = (event) => {
        setScoreInputValue(event.target.value);
    }

    const handleAddClick = (event) => {
        event.preventDefault();
        setIsProcessing(true);
        const inputScore =  parseInt(scoreInputValue);

        if (isNaN(inputScore)) {
            setIsProcessing(false);
            return;
        }

        const newScore = player.score + inputScore;
        let updatedPlayer;

        if (newScore > 100) {
            updatedPlayer = { ...player, score: newScore, status: 'bust' };
        } else {
            updatedPlayer = { ...player, score: newScore === 100 ? 50 : newScore };
        }
    
        updatePlayer(updatedPlayer);
        setScoreInputValue("");
        setIsProcessing(false);
    }

    const handleAsafClick = (event) => {
        event.preventDefault();
        setIsProcessing(true);
        const newScore = player.score + 25;
        const updatedPlayer = { ...player, score: newScore === 100 ? 50 : newScore};
        updatePlayer(updatedPlayer);
        setIsProcessing(false);
    }

    const handleResetClick = () => {
        setIsProcessing(true);
        const updatedPlayer = { ...player, score: 0};
        updatePlayer(updatedPlayer);
        setIsProcessing(false);
    }
    
    return (
        <section className="py-2 flex justify-center flex-col border-2 border-indigo-600 rounded-md text-center" >
            <div className="flex justify-center" onDoubleClick={handleDoubleClick}>
                {editing ? (
                    <input type="text" value={playerName} onChange={handleNameChange} onBlur={handleBlur} autoFocus />
                ) : (
                    <h2 className="text-xl mr-2">{playerName}</h2>
                )}
                <FontAwesomeIcon icon={faEdit} />
            </div>
            <div className="py-2">
                <p className="text-6xl">{player.score}</p>
            </div>
            <form className="py-2">
                <input className="p-1 border-2 border-slate-500 w-12" type="text" value={scoreInputValue} onChange={handleInputChange} disabled={isProcessing || player.status === 'bust'} />
                <button className="ml-2 bg-green-600 text-white rounded-full p-2" onClick={handleAddClick} disabled={isProcessing || player.status === 'bust'}>Add</button>
                <button className="ml-2 bg-indigo-600 text-white rounded-full p-2" onClick={handleAsafClick} disabled={isProcessing || player.status === 'bust'} >Asaf!</button>
            </form>
            <div className="py-2">
                <button className="ml-2 bg-red-600 text-white rounded-full p-2" onClick={handleResetClick} disabled={isProcessing}>Reset</button>
            </div>
        </section>
    )
};

export default PlayerScoreCard;