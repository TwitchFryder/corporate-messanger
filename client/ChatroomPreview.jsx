import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
  cursor: pointer;
`

const getCardTitleStyle = () => ({
  display: 'flex',
  alignItems: 'center'
})

export default ({ chatroom, onEnter }) => (
  <div
    style={{ maxWidth: 600, marginBottom: 40 }}
    zDepth={5}
  >
    <Wrapper onClick={onEnter}>
      <div>
        <div
          className="Card"
          overlay={
            <div className="CardTitle">
              lastMess="Сосите твари"
              title={chatroom.name}
              style={getCardTitleStyle()}
            </div>
          }
        >
          <img height="100%" src={chatroom.image} alt="" />
        </div>
      </div>
    </Wrapper>
  </div>
)
