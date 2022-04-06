import React from 'react'

import { Transition } from 'react-transition-group';

const duration = 100;

const defaultStyle = {
    transition: `top ${duration}ms ease-in-out`,
    position: 'relative',
    top: '0px',
    width: 400,
    // zIndex: 1200
}

const transitionStyles = {
    entering: { left: 0, top: 0, position: 'relative' },
    entered: { left: 0, top: 300, position: 'absolute' },
    exiting: { left: 0, top: 300, position: 'absolute' },
    exited: { left: 0, top: 0, position: 'relative' },
};

export default function TransitionCustom({ in: inProp, children }) {
    return <Transition in={inProp} timeout={duration}>
        {state => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                {children}
            </div>
        )}
    </Transition>
}
