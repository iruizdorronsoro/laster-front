import './app.css'
import {FC, useEffect, useState} from 'react'
import { Marks } from './features/bookmarks/ui/marks/marks'
import {Header} from "./features/bookmarks/ui/header/header"
import {Login} from "./features/bookmarks/ui/login/login";
import {UserRepositoryFactory} from "./features/bookmarks/infrastructure/user/user-repository-factory";
import {GetUsersUseCase} from "./features/bookmarks/application/user/get-users-use-case";
import {User} from "./features/bookmarks/domain/user/user";

export const App: FC = () => {

  const userRepository = UserRepositoryFactory.buildLocal()
  const [user, setUser] = useState<User>()

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const token = ""
    const getUsersUseCase = new GetUsersUseCase(userRepository)
    setUser(await getUsersUseCase.execute(token))
  }

  return (
    <>
      {!user ?
        <Login onUserAction={fetchUsers} userRepository={userRepository}/> :
        <>
          <Header user={user} onUserAction={fetchUsers} userRepository={userRepository}/>
          <Marks user={user} onUserAction={fetchUsers}/>
        </>
      }
    </>
    )

}
