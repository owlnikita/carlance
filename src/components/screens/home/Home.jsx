import React, { useState } from 'react'
import '../../../assets/global.css'
import './Home.css'
import classNames from 'classnames'
import CarImage from '../../../SvgCompenents/CarImage.jsx'
import GetInput from '../../GetInput/GetInput.jsx'
import Modal from '../../ModalForm/Modal.jsx'


export const Home = () => {
    const [modalActive, setModalActive] = useState(true)
  return (
    <div className='wrapper'>
        <div className='header'>
            <div className='container'>
                <div className='navigation'>
                    <div className='navItems'>
                        <div className='navItem'>
                            <h1 className='title' style={{margin: '0'}}>
                                <span className='txtHLight'>Car</span>Lance
                            </h1>
                            <p className='subTitle'>Сервис поиска авто</p>
                        </div>
                        <div className='navItem navItemFlex'>
                            <div className='navItem navItemFlex'>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 11V8H13V11H16V13H13V16H11V13H8V11H11Z" fill="#000000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 12C3 16.9706 7.02944 21 12 21H18C19.6569 21 21 19.6569 21 18V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5Z" fill="#000000"></path> </g></svg>
                                Поиск заказов
                            </div>
                            <div className='navItem navItemFlex'>
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Bell_Ring"> <path id="Vector" d="M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9M15 17H18.5905C18.973 17 19.1652 17 19.3201 16.9478C19.616 16.848 19.8475 16.6156 19.9473 16.3198C19.9997 16.1643 19.9997 15.9715 19.9997 15.5859C19.9997 15.4172 19.9995 15.3329 19.9863 15.2524C19.9614 15.1004 19.9024 14.9563 19.8126 14.8312C19.7651 14.7651 19.7047 14.7048 19.5858 14.5858L19.1963 14.1963C19.0706 14.0706 19 13.9001 19 13.7224V10C19 6.134 15.866 2.99999 12 3C8.13401 3.00001 5 6.13401 5 10V13.7224C5 13.9002 4.92924 14.0706 4.80357 14.1963L4.41406 14.5858C4.29477 14.7051 4.23504 14.765 4.1875 14.8312C4.09766 14.9564 4.03815 15.1004 4.0132 15.2524C4 15.3329 4 15.4172 4 15.586C4 15.9715 4 16.1642 4.05245 16.3197C4.15225 16.6156 4.3848 16.848 4.68066 16.9478C4.83556 17 5.02701 17 5.40956 17H9M18.0186 2.01367C19.3978 3.05299 20.4843 4.43177 21.1724 6.01574M5.98197 2.01367C4.60275 3.05299 3.5162 4.43177 2.82812 6.01574" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                                Уведомления о заказах
                            </div>
                            </div>
                            <div className='navItem'>
                            <button className='button'>
                                <span>Личный кабинет</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main">
            <div className="container">
                <div className="emailForm">
                    <div className="boxElems">
                        <h2 className="carTitle">
                            Найди авто мечты по выгодной цене и купи первым!
                        </h2>
                        <p className="carLowTitle">
                            Поиск по всем доскам объявлений
                        </p>
                        <p className="boldText">
                            1 месяц доступа беплатно
                        </p>
                        <GetInput />
                    </div>
                    <div className="carImg">
                        <CarImage/>
                    </div>
                </div>
                <Modal active={modalActive} setActive={setModalActive}/>
                <div className="teset">AAAAA</div>
            </div>
        </div>
    </div>
  )
}

export default Home
