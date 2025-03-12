import { useState } from 'react';

function CardForm({ addCity }) {
const [formData, setformData] = useState({
    name: "",
    description: "",
    imgURL: "",
    isVisited: false, 
});

const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setformData({
        ...formData,
        [name] : inputValue,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
        id: Math.random(),
        name: formData.name,
        description: formData.description,
        imgURL: formData.imgURL,
        isVisited: formData.isVisited,
    };
    setformData({
        name: "",
        description: "",
        imgURL: "",
        isVisited: false, 
    });
    addCity(city);
};

    return (
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 p-5 w-80 mb-10 bg-slate-500">
            {/* è possibile usare handleClick */}

            <div className="flex flex-col p-3">
                <label>Nome città:</label>
                <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col p-3">
                <label>Descrizione:</label>
                <textarea 
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}></textarea>
            </div>
            <div className="flex flex-col p-3">
                <label>Immagine:</label>
                <input 
                type="text"
                name="imgURL"
                value={formData.imgURL}
                onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col p-3">
                <label>Visitata?</label>
                <input 
                type="checkbox"
                name="isVisited"
                value={formData.isVisited}
                onChange={handleInputChange}></input>
            </div>

            <button className="" type="submit">Aggiungi Card</button>
        </form>
    );
}

export default CardForm;