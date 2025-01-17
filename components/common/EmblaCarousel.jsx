import React, { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react'

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max)

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const tweenFactor = useRef(0)


    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenOpacity = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                const opacity = numberWithinRange(tweenValue, 0, 1).toString()
                emblaApi.slideNodes()[slideIndex].style.opacity = opacity
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        setTweenFactor(emblaApi)
        tweenOpacity(emblaApi)
        emblaApi
            .on('reInit', setTweenFactor)
            .on('reInit', tweenOpacity)
            .on('scroll', tweenOpacity)
            .on('slideFocus', tweenOpacity)
    }, [emblaApi, tweenOpacity])

    return (
        <Con className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <img
                                className="embla__slide__img"
                                src={`https://picsum.photos/600/350?v=${index}`}
                                alt="Your alt text"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </Con>
    )
}

const Con = styled.div`  
  width: 100%; 
  max-width: 48rem;
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 70%;
  .embla__viewport {
    overflow: hidden;
    }
    .embla__container {
        display: flex;
        touch-action: pan-y pinch-zoom;
        margin-left: calc(var(--slide-spacing) * -1);
    }
    .embla__slide {
        transform: translate3d(0, 0, 0);
        flex: 0 0 var(--slide-size);
        min-width: 0;
        max-width: 300px;
        padding-left: var(--slide-spacing);
    }
    .embla__slide__img {
        border-radius: 20px;
        display: block;
        height: 400px;
        width: 100%;
        object-fit: cover;
    }
    .embla__controls {
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        gap: 1.2rem;
        margin-top: 1.8rem;
    }
    .embla__buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.6rem;
        align-items: center;
    }
    .embla__button {
        -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
        touch-action: manipulation;
        display: inline-flex;
        text-decoration: none;
        cursor: pointer;
        border: 0;
        padding: 0;
        margin: 0;
        box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
        width: 3.6rem;
        height: 3.6rem;
        z-index: 1;
        border-radius: 50%;
        color: var(--text-body);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .embla__button:disabled {
        
    }
    .embla__button__svg {
        width: 35%;
        height: 35%;
    }
    .embla__dots {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
        margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
    }
    .embla__dot {
        -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
        touch-action: manipulation;
        display: inline-flex;
        text-decoration: none;
        cursor: pointer;
        border: 0;
        padding: 0;
        margin: 0;
        width: 2.6rem;
        height: 2.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    .embla__dot:after {
        box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        content: '';
    }
    .embla__dot--selected:after {
        box-shadow: inset 0 0 0 0.2rem var(--text-body);
    }
`;
export default EmblaCarousel
