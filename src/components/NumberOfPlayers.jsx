import { useState } from "react";

function NumberOfPlayers({ setNumberOfPlayers }) {
    const [selection, setSelection] = useState(2);

    const handleSubmit = (event) => {
        setNumberOfPlayers(selection);
        event.preventDefault();
    }

    const handleChange = (event) => {
        const { value } = event.target;
        setSelection(parseInt(value));
    }

    return (
        <form onSubmit={handleSubmit} className="w-full py-2 mx-2 -mt-40 max-w-lg flex space-y-2 justify-center flex-col border-2 border-indigo-600 rounded-md text-center">
            <div>
                <label className="text-xl" htmlFor="numberOfPlayers">How many players?</label>
            </div>
            <div>
                <div className="my-2" >
                    <select
                        name="numberOfPlayers"
                        id="numberOfPlayers"
                        onChange={handleChange}
                        className="p-2 border border-slate-300 rounded-md bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                        >
                        {[2, 3, 4, 5, 6, 7, 8].map((option, index) => (
                            <option
                                key={index}
                                value={option}
                                >
                                    {option}
                                </option>
                        ))}
                    </select>
                </div>
                <button className="m-2 py-2 px-4 bg-indigo-600 text-white rounded-full">Create scoreboard</button>
            </div>
        </form>
    )
};

export default NumberOfPlayers;