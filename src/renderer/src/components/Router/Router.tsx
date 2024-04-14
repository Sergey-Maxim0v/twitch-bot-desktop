import { FC } from 'react'
import { IRouter } from './types'
import Auth from '../Auth'

const Router: FC<IRouter> = ({ socket, setSocket }) => {
  // TODO: Router (страница авторизации и под каждый канал)

  // TODO: кнопка разлогина

  if (!socket) {
    return <Auth setSocket={setSocket} />
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
