import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'


export default function Admin() {
    const [users, setUsers] = useState([])
    const router = useRouter()

    useEffect(() => {
        fetch('api/users')
        .then(response => response.json())
        .then(data => {
            const nonAdminUsers = data.filter(user => !user.isAdmin);
            setUsers(nonAdminUsers);
        })
        .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleLogout = () => {
        axios.post("http://localhost:3000/api/logout")
        .then((response) => {
              localStorage.removeItem("user")
              window.alert("Logged out!")
              router.push('/')
        })
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-800 text-white">
          <h1 className="text-3xl font-bold text-center mb-4">Admin Portal</h1>
          <h2 className="text-2xl font-semibold mb-2">User List</h2>
          <div className="flex flex-col space-y-2">
            {users.map((user, index) => (
                <Link key={user._id} href={{pathname:"/home", query:{documentId: user.documentId, username: user.username}}} passHref>
                  <div className="text-left py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-md shadow">
                    <span className="font-semibold">{user.username}</span>
                  </div>
                </Link>
            ))}
          </div>
          <div className="w-full flex justify-center mt-4">
          <button 
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
          </div>
        </div>
    )
}
