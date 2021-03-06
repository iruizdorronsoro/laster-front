import { FC } from 'react'
import {Button} from "../../../../core/components/button/button";
import {bind} from "../../../../utils/bind";
import styles from './header.module.css'
import {User} from "../../domain/user/user";
import {UserRepository} from "../../domain/user/user-repository";

const cx = bind(styles)

interface Props {
  user: User
  userRepository: UserRepository
  onUserAction(): void
}

export const Header: FC<Props> = ({user, userRepository, onUserAction}) => {

  async function logOut(user: User) {
    await userRepository.logOut(user)
    onUserAction()
  }

  return (
    <header className={cx('navbar')}>
      <img src={"./logo.png"} className={cx('navbar__logo')}></img>
      {/*//TODO: Future functionality <input type="search" placeholder="Search" className={cx('navbar__search')}/>*/}
      <nav className={cx('navbar__right')}>
        {/*//TODO: Future functionality <Button className={cx('primary')}>Config</Button>*/}
        <Button className={cx('primary')} onClick={() => logOut(user)}>Logout</Button>
      </nav>
    </header>
  )
}
