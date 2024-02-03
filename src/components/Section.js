import React from 'react'
import { styled } from 'styled-components'

const Section = ({
  title,
  video,
  itemTextLight,
  headerTextLight,
  description,
  moreInfo,
  moreInfoLink,
  backgroundImg,
  rightBtnText,
  leftBtnText,
  footerText,
  footerTextLight,
  linkText
}) => {
  const vidStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
  }
  return (
    <Wrap bgImage={backgroundImg}>
      {video &&
        <video autoPlay muted loop style={vidStyles}>
          <source src={`/assets/${video}`} type="video/mp4" />
        </video>
      }
      <ItemText light={itemTextLight}>
        <HeaderText light={headerTextLight}>{title}</HeaderText>
        {description && <h3>{description}</h3>}
        {moreInfo && <p>{moreInfo}</p>}
        {moreInfoLink && <a href="/">{moreInfoLink}</a>}
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
        </ButtonGroup>
        <Terms light={footerTextLight}>{footerText} <br /> <a href="/">{linkText}</a></Terms>
      </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(/assets/model-3.jpg);
  background-size: cover;
  background-position: center;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${props => `url('/assets/${props.bgImage}')`};
  position: relative;
`

const ItemText = styled.div`
  margin-top: 100px;
  color: ${props => props.light ? '#fff' : '#171A20'};
  text-align: center;
  z-index: 10;
  h3 {
    font-size: 22px;
    font-weight: 500;
    letter-spacing: .5px;
  }
  p {
    font-size: 13px;
    letter-spacing: .5px;
  }
  a {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    border-bottom: 1px solid #fff;
  }
`

const HeaderText = styled.h1`
  font-size: 45px;
  font-weight: 500;
  color: ${props => props.light ? '#fff' : 'inherit'};
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`
const LeftButton = styled.div`
  width: 270px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  background-color: #fff;
  opacity: 0.65;
  color: #171A20;
`
const RightButton = styled(LeftButton)`
  color: #fff;
  background-color: rgba(23, 26, 32, 0.8);
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #171A20;
  text-align: center;
`

const Terms = styled.p`
  z-index: 10;
  margin-bottom: 30px;
  font-size: 13px;
  letter-spacing: .5px;
  color: ${props => props.light ? '#fff' : 'inherit'};
  a {
    text-decoration: underline;
    color: inherit;
  }
`

export default Section
