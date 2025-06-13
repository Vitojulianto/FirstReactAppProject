import React, { useEffect, useState } from 'react'
import Navbar from '../Fragments/Navbar'

const Todoapp = () => {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState("")

  // Menyimpan data ke localStorage setelah state todo diperbarui
  const saveToLocalStorage = (todo) => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }

  const handleAdd = () => {
    const newTask = {
      id: Date.now(),
      text: input
    }

    const updatedTodo = [...todo, newTask]
    setTodo(updatedTodo)
    setInput("")
    saveToLocalStorage(updatedTodo)
  }

  useEffect(() => {
    const savedTodo = localStorage.getItem("todo")
    if (savedTodo) {
      setTodo(JSON.parse(savedTodo))
    }
  }, []) // Hanya dipanggil sekali ketika komponen pertama kali dimuat

  const handleDelete = (id) => {
    const filteredTodo = todo.filter(list => list.id !== id)
    setTodo(filteredTodo)
    saveToLocalStorage(filteredTodo) // Simpan kembali setelah delete
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">To Do App</h1>
        
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Enter your task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todo.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded"
            >
              <li className="list-none text-gray-800">{item.text}</li>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todoapp
