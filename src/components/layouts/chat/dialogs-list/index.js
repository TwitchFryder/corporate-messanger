import React from 'react'
import './index.sass'
import avatar from './avatar.png'
import avatar2 from './avatar2.png'
import avatar3 from './avatar3.png'

class Dialogs extends React.Component {
  render() {
    return (
      <div className="dialogs-list">
        <div className="dialogs-list__head">
          <div class="dialogs-list__title-wrap">
            <div class="dialogs-list__title">Сообщения</div>
            <div class="dialogs-list__count"><span>1</span></div>
          </div>       
          <div className="dialogs-list__new-chat">+ Новый чат</div>
        </div>
        <div class="dialogs-list__search">
          <div className="input-box">
            <input type="text" className="dialogs-list__input input-main" placeholder="Поиск диалогов..."/> 
          </div>
          <div className="dialogs-list__control"></div>
        </div>
        <div className="dialogs-message">
          <div className="dialogs-message__item">
            <div className="dialogs-message__inner">
              <div className="dialogs-message__avatar">
                <img src={avatar2} alt="avatar"/>
              </div>
              <div className="dialogs-message__wrap">
                <div className="dialogs-message__name">Антон Королев</div>
                <div className="dialogs-message__text">Как дела?</div>
                <div className="dialogs-message__time">21:15</div>
              </div>
            </div>
            <div className="dialogs-message__qute">
              <div className="dialogs-message__qute-text">Qute.agency</div>
              <div className="dialogs-message__qute-images">
                <img src={avatar} class="dialogs-message__qute-image" alt="avatar"/>
                <img src={avatar2} class="dialogs-message__qute-image" alt="avatar"/>
              </div>
            </div>
          </div>
          <div className="dialogs-message__item dialogs-message__item--active">
            <div className="dialogs-message__inner">
              <div className="dialogs-message__avatar">
                <img src={avatar3} alt="avatar"/>
              </div>
              <div className="dialogs-message__wrap">
                <div className="dialogs-message__name">Анатолий Емельянов</div>
                <div className="dialogs-message__text">Ты посмотрел?</div>
                <div className="dialogs-message__time">21:15</div>
              </div>
            </div>
          </div>
          <div className="dialogs-message__item dialogs-message__item--active">
            <div className="dialogs-message__inner">
              <div className="dialogs-message__avatar">
                <img src={avatar} alt="avatar"/>
                <div className="dialogs-message__online"></div>
              </div>
              <div className="dialogs-message__wrap">
                <div className="dialogs-message__name">Анатолий Емельянов</div>
                <div className="dialogs-message__text">Вы: Есть пару интересных идей</div>
                <div className="dialogs-message__time">21:15</div>
              </div>
            </div>
            <div className="dialogs-message__qute">
              <div className="dialogs-message__qute-text">Qute.agency</div>
              <div className="dialogs-message__qute-images">
                <img src={avatar2} class="dialogs-message__qute-image" alt="avatar"/>
                <img src={avatar3} class="dialogs-message__qute-image" alt="avatar"/>
                <img src={avatar} class="dialogs-message__qute-image" alt="avatar"/>
              </div>
            </div>
          </div>
          <div className="dialogs-message__item">
            <div className="dialogs-message__inner">
              <div className="dialogs-message__avatar">
                <img src={avatar3} alt="avatar"/>
              </div>
              <div className="dialogs-message__wrap">
                <div className="dialogs-message__name">Анатолий Емельянов</div>
                <div className="dialogs-message__text">Вы: Есть пару интересных идей</div>
                <div className="dialogs-message__time">21:15</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dialogs;