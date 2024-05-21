import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dummyData = {
    avgTemp: 25,
    avgRainfall: 10,
    avgHumidity: 60,
    currentTemp: 27,
    weeklyTemps: [22, 24, 26, 23, 25, 28, 30],
};

export default function Task2() {
    const [data, setData] = useState(dummyData);
    const [notes, setNotes] = useState(['Sample note 1', 'Sample note 2']);
    const [noteInput, setNoteInput] = useState('');

    useEffect(() => {
        // Here you can fetch real data
        // For example:
        // fetch('/api/weather')
        //   .then(response => response.json())
        //   .then(data => setData(data));
    }, []);

    const addNote = () => {
        if (noteInput) {
            setNotes([...notes, noteInput]);
            setNoteInput('');
        }
    };

    const deleteNote = (index:number) => {
        setNotes(notes => notes.filter((_, i) => i !== index));
    }

    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Average Temperature',
                data: data.weeklyTemps,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <div className="max-w-4xl mx-auto bg-white p-5 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-100 p-4 rounded shadow">
                        <h2 className="font-bold">Avg Temp of Week</h2>
                        <p>{data.avgTemp} °C</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded shadow">
                        <h2 className="font-bold">Avg Rainfall of Week</h2>
                        <p>{data.avgRainfall} mm</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded shadow">
                        <h2 className="font-bold">Avg Humidity of Week</h2>
                        <p>{data.avgHumidity} %</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded shadow">
                        <h2 className="font-bold">Current Temp</h2>
                        <p>{data.currentTemp} °C</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded shadow mb-6">
                    <h2 className="font-bold mb-4">Average Temperature of Previous Week</h2>
                    <Bar data={chartData} />
                </div>
                <div className="bg-white p-5 rounded shadow">
                    <h2 className="text-xl font-bold mb-4">Notepad</h2>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={noteInput}
                            onChange={(e) => setNoteInput(e.target.value)}
                            className="border p-2 w-full mb-2"
                            placeholder="Enter new note"
                        />
                        <button
                            onClick={addNote}
                            className="bg-green-500 text-white py-2 px-4 rounded"
                        >
                            Add Note
                        </button>
                    </div>
                    <ul>
                        {notes.map((note, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-gray-200 p-2 my-2 rounded"
                            >
                                {note}
                                <button
                                    onClick={() => deleteNote(index)}
                                    className="bg-red-500 text-white py-1 px-3 rounded"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
