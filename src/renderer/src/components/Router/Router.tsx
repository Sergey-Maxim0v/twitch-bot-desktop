import { FC, useState } from 'react'
import { IRouter } from './types'
import Auth from '../Auth'

// TODO: console
// eslint-disable-next-line
const Router: FC<IRouter> = ({ socket, setSocket }) => {
  const [isAuth, setIsAuth] = useState(false) // eslint-disable-line
  // TODO: Router (страница авторизации и под каждый канал)

  // TODO: кнопка Logout

  if (!socket) {
    return <Auth setIsAuth={setIsAuth} />
  }

  return (
    <div
      style={{
        backgroundColor: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem'
      }}
    >
      <p>TODO: app</p>
    </div>
  )
}

export default Router
