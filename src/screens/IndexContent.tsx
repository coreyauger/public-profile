import React from 'react';
import getConfig from 'next/config';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ParallaxBanner, useParallax } from 'react-scroll-parallax';
import { Typography } from '@material-ui/core';

const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles((theme: Theme) => ({
  customButton: {
    backgroundColor: '#6f2da8',
    color: theme.palette.common.white,
    fontFamily: theme.accentFontFamily,
  },
}));


function PorscheTitleComponent() {
  const parallax = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [0, 100, 'easeOutQuint'],
    translateY: [-100, 100, 'easeInQuint'],
  });
  return <div ref={parallax.ref}>
    <div style={{position: "absolute", fontFamily:"Imperial Script"}}>
      <h1 style={{fontSize: "calc(.03273*100vw + 12.72727px)", margin: 0}}>Attention to detail</h1>
    </div>
  </div>;
}


function PorscheTextComponent() {
  const parallax = useParallax<HTMLDivElement>({
    translateX: [0, 100, 'easeOutQuint'],
    translateY: [-100, 100, 'easeInQuint'],
  });
  return <div ref={parallax.ref}>
    <div style={{position: "absolute", fontFamily:"Imperial Script", marginTop: 90}}>
      <span style={{fontSize: "calc(.03273*100vw - 20.72727px)", }}>Another place on the Cayenne model range starting grid has now been taken – with intense performance and precise dynamics. The Cayenne Turbo GT has all the attributes to be ahead of the game from the start.</span>
    </div>
  </div>;
}

interface IndexProps { greeting: string }
const IndexContent: React.FC<IndexProps> = (props) => {
  const { greeting } = props;
  const classes = useStyles();

  return (
    <div>
      <h1>
        {greeting}
        {publicRuntimeConfig.greeting_emoji}
        !
      </h1>
      <Button variant="contained" className={classes.customButton}>A Simple Button !</Button>

      <div style={{height: 1440, backgroundColor:"black"}}></div>
      <div style={{position:"relative"}}>
      <ParallaxBanner
        style={{height: "100vw", width: "100vw"}}
        layers={[
          { image: '/static/img/porsche-03a.png', speed: -8, },
          { image: '/static/img/porsche-02b.png', speed: -6, opacity: [0.0, 1], },
          { image: '/static/img/porsche-01.png', speed: -4 },
          {
            speed: 40,
            children: (
              <div style={{position:"absolute", justifyContent: "center", width: "20%", bottom: "30%", right: "20%",}}>                
                <img src="/static/img/porsche-00.6.png" width="100%" />
              </div>
            ),
          },                    
          { image: '/static/img/porsche-00.png', speed: -2 },
        ]}
    >
    
    </ParallaxBanner>    
    <div style={{position: "absolute", width: "50%", left: "-40%", bottom: "60vw"}}>
      {PorscheTitleComponent()} 
      {PorscheTextComponent()} 
    </div>
    </div>
    

    <div style={{height: 1440, backgroundColor:"black"}}></div>
    </div>
  );
};

export default IndexContent;
