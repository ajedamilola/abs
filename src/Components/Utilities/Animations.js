import React from 'react'

function FadeLeft({children,duration,delay}) {
  return (
    <div data-aos="fade-left" data-aos-duration={`${duration || '1000'}`} data-aos-delay={delay}>
        {children}
    </div>
  )
}
function FadeRight({children,duration,delay}) {
  return (
    <div data-aos="fade-right" data-aos-duration={`${duration || '1000'}`} data-aos-delay={delay}>
        {children}
    </div>
  )
}
function SlideLeft({children,duration,delay}) {
  return (
    <div data-aos="slide-left" data-aos-duration={`${duration || '1000'}`} data-aos-delay={delay}>
        {children}
    </div>
  )
}
function SlideRight({children,duration,delay}) {
  return (
    <div data-aos="slide-right" data-aos-duration={`${duration || '1000'}`} data-aos-delay={delay}>
        {children}
    </div>
  )
}
function Fade({children,duration,delay}) {
    return (
      <div data-aos="fade" data-aos-duration={`${duration || '1000'}`} data-aos-delay={delay}>
          {children}
      </div>
    )
  }
function FadeUp({children,duration,delay}) {
    return (
      <div data-aos="fade-up" data-aos-duration={`${duration || '1000'}`} data-aos-delay={delay}>
          {children}
      </div>
    )
  }

export {FadeRight,FadeLeft,SlideLeft,SlideRight,Fade,FadeUp}