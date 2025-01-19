// components/CalendarFlipCountdown.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const StaticCard = ({ position, digit }) => (
    <>
        {position === 'upper' ? (
            <UpperCard>
                <span>{digit}</span>
            </UpperCard>
        ) : (
            <LowerCard>
                <span>{digit}</span>
            </LowerCard>
        )}
    </>
);

const FlipUnit = ({ digit, shuffle, unit }) => {
    let currentDigit = digit;
    let previousDigit = digit + 1;

    if (unit !== 'hours') {
        previousDigit = previousDigit === -1 ? 59 : previousDigit;
    } else {
        previousDigit = previousDigit === -1 ? 23 : previousDigit;
    }

    if (currentDigit < 10) {
        currentDigit = `0${currentDigit}`;
    }
    if (previousDigit < 10) {
        previousDigit = `0${previousDigit}`;
    }

    const digit1 = shuffle ? previousDigit : currentDigit;
    const digit2 = !shuffle ? previousDigit : currentDigit;
    const animation = shuffle ? 'fold' : 'unfold';

    return (
        <FlipUnitContainer>
            <StaticCard position="upper" digit={currentDigit} />
            <StaticCard position="lower" digit={previousDigit} />
            <AnimatedCard animation={animation}>
                <span>{digit1}</span>
            </AnimatedCard>
            <AnimatedCard animation={animation === 'fold' ? 'unfold' : 'fold'}>
                <span>{digit2}</span>
            </AnimatedCard>
        </FlipUnitContainer>
    );
};

const CalendarFlipCountdown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [shuffleDays, setShuffleDays] = useState(false);
    const [shuffleHours, setShuffleHours] = useState(false);
    const [shuffleMinutes, setShuffleMinutes] = useState(false);
    const [shuffleSeconds, setShuffleSeconds] = useState(false);

    useEffect(() => {
        const updateTime = () => {

            const calculateTimeLeft = () => {
                const targetDate = new Date('2025-02-21T00:00:00');
                const now = new Date();
                const difference = targetDate - now;
        
                if (difference <= 0) {
                    return {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0,
                    };
                }
        
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
        
                return { days, hours, minutes, seconds };
            };
            const currentTime = new Date();
            const currentDays = calculateTimeLeft().days
            const currentHours = calculateTimeLeft().hours
            const currentMinutes = calculateTimeLeft().minutes
            const currentSeconds = calculateTimeLeft().seconds

            if (currentDays !== days) {
                setShuffleDays((prev) => !prev);
                setDays(currentDays);
            }
            if (currentHours !== hours) {
                setShuffleHours((prev) => !prev);
                setHours(currentHours);
            }
            if (currentMinutes !== minutes) {
                setShuffleMinutes((prev) => !prev);
                setMinutes(currentMinutes);
            }
            if (currentSeconds !== seconds) {
                setShuffleSeconds((prev) => !prev);
                setSeconds(currentSeconds);
            }
        };

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, [days,hours, minutes, seconds]);

    return (
        <FlipClockContainer>
            <Col>
                <FlipUnit digit={days} shuffle={shuffleDays} unit="days" />
                <CardTitle>Days</CardTitle>
            </Col>
            <Col>
                <FlipUnit digit={hours} shuffle={shuffleHours} unit="hours" />
                <CardTitle>Hours</CardTitle>
            </Col>
            <Col>
                <FlipUnit digit={minutes} shuffle={shuffleMinutes} unit="minutes" />
                <CardTitle>Mins</CardTitle>
            </Col>
            <Col>
                <FlipUnit digit={seconds} shuffle={shuffleSeconds} unit="seconds" />
                <CardTitle>Secs</CardTitle>
            </Col>
        </FlipClockContainer>
    );
};

const fold = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-180deg);
  }
`;

const unfold = keyframes`
  0% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

const CardTitle = styled.p`
    color: #974B00;
    text-align: center;
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 10px 0;
    @media (max-width: 1200px) { 
        font-size: 14px;
    }
`;

const Col = styled.div`
    width: 140px;
    height: 120px;
    border-radius: 20px;
    @media (max-width: 1200px) {
        border-radius: 10px;
        margin: 5px;
        height: 70px;
    }
`;

const FlipClockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(4 * 140px + 80px);
  @media (max-width: 1200px) {
    width: calc(4 * 90px + 20px); /* Reduce unit size and spacing for smaller screens */
  }
`;

const FlipUnitContainer = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    perspective-origin: 50% 50%;
    perspective: 300px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 10px 10px -10px grey;
    @media (max-width: 1200px) {
        border-radius: 10px; 
    }
`;

const UpperCard = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 50%;
    overflow: hidden;
    border-bottom: 0.5px solid whitesmoke;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 1px solid whitesmoke;
    @media (max-width: 1200px) {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    span {
        font-size: 5em; 
        font-weight: 700;
        color: #974B00;
        transform: translateY(50%);
        @media (max-width: 1200px) {
            font-size: 3em; /* Adjust size for smaller screens */
        }
    }
`;

const LowerCard = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 50%;
    overflow: hidden;
    border-top: 0.5px solid whitesmoke;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: 1px solid whitesmoke;
    @media (max-width: 1200px) {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    span {
        font-size: 5em; 
        font-weight: 700;
        color: #974B00;
        transform: translateY(-50%);
        @media (max-width: 1200px) {
            font-size: 3em; /* Adjust size for smaller screens */
        }
    }
`;

const AnimatedCard = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    animation: ${({ animation }) => (animation === 'fold' ? fold : unfold)} 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
    transform-origin: ${({ animation }) => (animation === 'fold' ? '50% 100%' : '50% 0%')};
    top: ${({ animation }) => (animation === 'fold' ? '0%' : '50%')};
    align-items: ${({ animation }) => (animation === 'fold' ? 'flex-end' : 'flex-start')};
    background-color: white;
    border: 1px solid whitesmoke;
    border-top: ${({ animation }) => (animation === 'fold' ? 'none' : '0.5px solid whitesmoke')};
    border-bottom: ${({ animation }) => (animation === 'fold' ? '0.5px solid whitesmoke' : 'none')};
    border-top-left-radius: ${({ animation }) => (animation === 'fold' ? '20px' : '0')};
    border-top-right-radius: ${({ animation }) => (animation === 'fold' ? '20px' : '0')};
    border-bottom-left-radius: ${({ animation }) => (animation === 'fold' ? '0' : '20px')};
    border-bottom-right-radius: ${({ animation }) => (animation === 'fold' ? '0' : '20px')};
    @media (max-width: 1200px) {
        border-top-left-radius: ${({ animation }) => (animation === 'fold' ? '10px' : '0')};
        border-top-right-radius: ${({ animation }) => (animation === 'fold' ? '10px' : '0')};
        border-bottom-left-radius: ${({ animation }) => (animation === 'fold' ? '0' : '10px')};
        border-bottom-right-radius: ${({ animation }) => (animation === 'fold' ? '0' : '10px')};
    }
    span { 
        font-size: 5em;
        font-weight: 700;
        color: #974B00;
        transform: ${({ animation }) => (animation === 'fold' ? 'translateY(50%)' : 'translateY(-50%)')};
        @media (max-width: 1200px) {
            font-size: 3em; /* Adjust size for smaller screens */
        }
    }
`;

export default CalendarFlipCountdown;

