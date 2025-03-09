function CardForm({ addCity }) {
const handleSubmit = () => {
    const city = {
        id: 3,
        name: "Bangkok",
        description: "lorem ipsum dolor patt. Repellat at omen ipsum?",
        imgURL: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true,
    };
    addCity(city);
};

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5 w-80 mb-10">
            {/* è possibile usare handleClick */}

            <div className="flex flex-col p-5">
                <label>Nome città:</label>
                <input type="text" name="name"></input>
            </div>
            <div className="flex flex-col">
                <label>Descrizione:</label>
                <input type="text" name="description"></input>
            </div>
            <div className="flex flex-col">
                <label>Imagine:</label>
                <input type="text" name="imgURL"></input>
            </div>
            <div className="flex flex-col">
                <label>Visitata?</label>
                <input type="checkbox" name="isVisited"></input>
            </div>

            <button type="submit">Aggiungi Card</button>
        </form>
    );
}

export default CardForm;