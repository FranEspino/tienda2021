import React from 'react'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
  
export const LoaderSkype = () => {
    return (
        <SkypeIndicator color='black' />
    )
}

  
export const LoaderPulse= () => {
    return (
        <PulseIndicator color='#01286C' size={65} />
    )
}
