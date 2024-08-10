function NumberOfPlayers() {
    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <form onSubmit={handleSubmit} className="py-2 flex justify-center flex-col border-2 border-indigo-600 rounded-md text-center">
            <div>
                <label htmlFor="numberOfPlayers">How many players?</label>
            </div>
            <div>
                <div>
                    <div>
                        <select
                            name="numberOfPlayers"
                            id="numberOfPlayers"
                            onChange={handleChange}
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
                    <button className="ml-2 bg-indigo-600 text-white rounded-full p-2">Create scoreboard</button>
                </div>
            </div>
        </form>
    )
};

export default NumberOfPlayers;