import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DiceWithAnimation } from 'cyber-dice';

// import { mapStateToProps } from '@store';
// import urlParamsReplace from '@parts/url-param-replace';
// import { popunder } from '@/js/parts';

import  './Cube.scss';

import '../styles/swiper.scss';
import { NavLink } from 'react-router-dom';

type CubeValue = 1 | 2 | 3 | 4 | 5 | 6;

type UrlToImg = string;

const diceNumbers: Array<UrlToImg> = [
  '/img/cube/cube-1.svg',
  '/img/cube/cube-2.svg',
  '/img/cube/cube-3.svg',
  '/img/cube/cube-4.svg',
  '/img/cube/cube-5.svg',
  '/img/cube/cube-6.svg',
];

interface CubeProps {
  curStep: {
    btn_next: string,
    btn_roll: string,
    choose_outcome: string,
    question_game: string,
    options: [],
    userPress: string,
    userChoice: string,
    btn_repeat: string,
  };
  clickHandler: Function;
  data: {
    repeat_url: {
      url: string,
      popunder_url: string,
    },
  };
}

function Cube() {
  const [userChoice, setUserChoice] = useState<CubeValue | 0>();
  const [randomNumber, setRandomNumber] = useState(1); // random number
  const [isAnimating, setAnimating] = useState(true); // turn on animation
  const [isUserPress, setIsUserPress] = useState(false); // change the button
  const [closeGame, setCloseGame] = useState(false); // chose a number and scrolled
  const [finishSwiper, setFinishSwiper] = useState(false); // finish for swiper
  const [repeat, setRepeat] = useState<number>(0); // repeat

  // const { clickHandler, curStep, data } = props;
  const desktopWidth = 1024;
  const cubeSizeDesktop = 100;
  const cubeSizeMobile = 80;
  const firstSideCube = 1;

  // const step = curStep;

  const numberChoseHandler = (key: any) => {
    if (!isAnimating) {
      setUserChoice(key);
    }
  };

  const cubeClickHandler = () => {
    if (userChoice && !closeGame) {
      setCloseGame(true);
      setAnimating(true);
      setRandomNumber(userChoice);
      setFinishSwiper(true);
    } else if (!userChoice && !isAnimating) {
      setCloseGame(true);
      setAnimating(true);
      numberChoseHandler(firstSideCube);
      setFinishSwiper(true);
    }
  };

  const animationEndHandler = () => {
    if (!userChoice) {
      setAnimating(false);
    }

    if (userChoice && closeGame) {
      setIsUserPress(true);
    }
  };

  const buttonNextGameHandler = () => {
    // step.options.map((opt, index) => clickHandler(opt, index));
  };

  const button = isUserPress ? (
    <NavLink
      to='/games/game_2'
      className='cube__btn_next'
      type='button'
      onClick={buttonNextGameHandler}
    >
      next
      {/* {step.btn_next} */}
    </NavLink>
  ) : (
    <button
      className='cube__btn_roll cube__btn_active'
      type='button'
      onClick={cubeClickHandler}
    >
      Roll the Dice
      {/* {step.btn_roll} */}
    </button>
  );

  const cubeClickRepeat = () => {
    setUserChoice(firstSideCube);
    setRandomNumber(firstSideCube);
    setAnimating(false);
    setIsUserPress(false);
    setCloseGame(false);
    setFinishSwiper(false);
    setRepeat((element) => {
      let newElement = element;
      const firstRepeat = 1;

      if (repeat === firstRepeat ) {
        // popunder(
        //   urlParamsReplace(data.repeat_url.url),
        //   urlParamsReplace(data.repeat_url.popunder_url),
        // );
      } else {
        newElement += 1;
      }

      return newElement;
    });
  };

  const buttonRepeat = isUserPress && (
    <button
      type='button'
      className='cube__btn_repeat'
      onClick={cubeClickRepeat}
    >
      repeat
      {/* {step.btn_repeat} */}
    </button>
  );

  const buttonText =
    (isUserPress && 'userPress') || (userChoice && 'userChoice');

  return (
    <div className='cube'>
      <div className='cube__wrap'>
        <h2 className='cube__question'>Can you guess the next roll?</h2>
        <p className='cube__title'>Choose Outcome:</p>
        <div className='cube__container'>
          <div className='cube__box_game'>
            <div className='cube__title_number'>
              {(!isAnimating || userChoice) && !finishSwiper && (
                <Swiper
                  loop
                  modules={[Navigation, EffectFade]}
                  navigation
                  spaceBetween={20}
                  slidesPerView={1}
                  onSlideChange={(swiper) => {
                    const numberElement = swiper.realIndex + 1;
                    // console.warn(numberElement)

                    numberChoseHandler(numberElement);
                  }}
                >
                  {diceNumbers.map((value) => (
                    <SwiperSlide key={value}>
                      <img
                        className='cube__number_item'
                        src={value}
                        alt='logo'
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              {isAnimating && !userChoice && (
                // show number at start
                <Swiper
                  modules={[Navigation, EffectFade]}
                  navigation
                  spaceBetween={20}
                  slidesPerView={1}
                  onSlideChange={(swiper) => {
                    const numberElement = swiper.realIndex + 1;

                    numberChoseHandler(numberElement);
                  }}
                >
                  <SwiperSlide>
                    <img
                      className='cube__number_item'
                      src={diceNumbers[0]}
                      alt='logo'
                    />
                  </SwiperSlide>
                </Swiper>
              )}
              {finishSwiper && (
                // ban select number
                <Swiper
                  modules={[Navigation, EffectFade]}
                  navigation
                  spaceBetween={20}
                  slidesPerView={1}
                  onSlideChange={(swiper) => {
                    const numberElement = swiper.realIndex + 1;

                    numberChoseHandler(numberElement);
                  }}
                >
                  <SwiperSlide>
                    <img
                      className='cube__number_item'
                      src={diceNumbers[0]}
                      alt='logo'
                    />
                  </SwiperSlide>
                </Swiper>
              )}
            </div>
            <button
              type='button'
              className='cube__dice_box'
              onClick={cubeClickHandler}
            >
              <DiceWithAnimation
                randomNumber={randomNumber}
                isAnimation={isAnimating}
                animationEndHandler={animationEndHandler}
                size= {100}
              />
            </button>
          </div>
          <div className='cube__box'>
            {isUserPress && buttonRepeat} {button}
          </div>
          {/* <p className='cube__text'>{buttonText || ''}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Cube;


