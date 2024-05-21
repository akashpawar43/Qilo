import { useState } from 'react';

export default function Task1() {
    const [items, setItems] = useState(['Random text 1', 'Random text 2', 'Random text 3']);
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if (inputValue) {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    const deleteItem = (index:number) => {
        setItems(items.filter((_, i) => i !== index));
    };
    return (
        <div className="min-h-screen bg-gray-900 w-full p-5 grid items-center">
            <div className="max-w-xl w-full mx-auto bg-gray-800 p-7 rounded shadow">
                <div className="mb-4 text-white">
                    <h1 className="text-2xl font-bold">Akash Pawar</h1>
                    <p>Mail ID: akashsl1643pawar@gmail.com</p>
                    <p>Phone Number: (+91) 9326806207</p>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className=" py-2 px-3 w-full mb-2.5 bg-gray-700 text-zinc-200 focus:outline-none focus:ring-blue-500 focus:ring-2 rounded-md"
                        placeholder="Enter new text"
                    />
                    <button
                        onClick={addItem}
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Add Item
                    </button>
                </div>
                <ul>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center text-white bg-gray-700 py-2 px-3 my-2 rounded"
                        >
                            {item}
                            <button
                                onClick={() => deleteItem(index)}
                                className="bg-red-500 text-white py-1 px-3 rounded"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
