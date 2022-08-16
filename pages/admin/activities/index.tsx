import type { NextPage } from 'next'
import { useState } from 'react'
import { User } from '@prisma/client'

const About: NextPage<any> = ({ users }: { users: User[] }) => {

    const [state, setState] = useState({
        users
    })

    const addUser = () => {
        const user = {
            name: "Jeff",
            email: "jeff@gmail.com"
        } as User

        setState((prevState) => ({
            users: prevState.users.concat(user)
        }))
    }

  return (
    <div >
      <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody>
            {state.users.map((user: User) => {
                return (
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
      <button onClick={addUser}>Add User</button>
    </div>
  )
}

export const getServerSideProps = async () => {
    const data = await fetch("http://localhost:3000/api/get-users", {
        method: "POST",
        body: JSON.stringify({
            limit: 5
        })
    }).then(data => data.json());

    return {
        props: {
            users: data.users,
        }
    }
}



export default About
