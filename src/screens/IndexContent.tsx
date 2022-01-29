import React from 'react';
import getConfig from 'next/config';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ParallaxBanner } from 'react-scroll-parallax';

const { publicRuntimeConfig } = getConfig();

const useStyles = makeStyles((theme: Theme) => ({
  customButton: {
    backgroundColor: '#6f2da8',
    color: theme.palette.common.white,
    fontFamily: theme.accentFontFamily,
  },
}));

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

      <div style={{height: 1440}}></div>
      <div>
      <ParallaxBanner
      style={{height: 2797}}
      layers={[
        { image: '/static/img/porsche-03.png', speed: -50 },
        { image: '/static/img/porsche-02a.png', speed: -40, opacity: [0.0, 1], },
        { image: '/static/img/porsche-01a.png', speed: -30 },
        {
          speed: 15,
          children: (
            <div style={{position:"absolute", color: "white", display: "flex", justifyContent: "center", paddingTop: 2100, width:"100%"}} className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl text-white font-thin">Hello World!</h1>
            </div>
          ),
        },
        { image: '/static/img/porsche-00.png', speed: -10 },
      ]}
      className="aspect-[2/1]"
    >
     
    </ParallaxBanner>    
    </div>

    <div style={{height: 1440}}></div>
    </div>
  );
};

export default IndexContent;
