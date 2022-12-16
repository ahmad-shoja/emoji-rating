import * as React from 'react';
import {useState} from 'react';
import Lottie from 'react-lottie';
import anger from './../assets/anger.json'
import bigFrown from './../assets/big_frown.json'
import SlightlyFrowning from './../assets/slightly_frowning.json'
import natural from './../assets/natural.json'
import slightlyHappy from './../assets/slightly_happy.json'
import warmSmile from './../assets/warm_smile.json'

type propTypes = {
  onSelected: (selected: number) => void,
  icons?: Array<any>,
  iconSize?: number,
  scaleFactor?: number
}

export function EmojiRating(props: propTypes) {

  const [selected, setSelected] = useState(-1)

  let icons = props.icons ?? [
    anger,
    bigFrown,
    SlightlyFrowning,
    natural,
    slightlyHappy,
    warmSmile
  ]

  return (
    <div style={{display: 'flex', justifyContent: 'start', flexFlow: 'row'}}>
      {icons.map((icon, index) =>
        <AnimatedEmoji selected={selected == index} lottie={icon}
                       onClick={() => {
                         props.onSelected(index)
                         setSelected(index)
                       }}/>)}
    </div>
  );
}

function AnimatedEmoji(
  props:
    {
      selected: boolean
      lottie: any,
      size?: number,
      onClick: () => void
    }) {

  const [active, setActive] = useState(false)

  let config = {
    loop: true,
    autoplay: false,
    animationData: props.lottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div onMouseEnter={_ => setActive(true)}
         onMouseLeave={_ => setActive(false)}
         onClick={_ => props.onClick()}
         style={{filter: props.selected || active ? 'unset' : 'grayscale(100%)'}}
    >
      <Lottie options={config}
              height={props.size ?? 64}
              width={props.size ?? 64}
              isStopped={!props.selected && !active}/>
    </div>
  )
}

