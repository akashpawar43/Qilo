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
        <div className="min-h-screen bg-zinc-900 w-full p-5 grid items-center">
            <div className="max-w-xl w-full mx-auto bg-zinc-800 p-7 rounded shadow">
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
                        className="border p-2 w-full mb-2"
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
                            className="flex justify-between items-center bg-gray-200 p-2 my-2 rounded"
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
