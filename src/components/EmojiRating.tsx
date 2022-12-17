import * as React from 'react';
import {Component} from 'react';
import anger from './../assets/anger.json'
import bigFrown from './../assets/big_frown.json'
import SlightlyFrowning from './../assets/slightly_frowning.json'
import natural from './../assets/natural.json'
import slightlyHappy from './../assets/slightly_happy.json'
import warmSmile from './../assets/warm_smile.json'
import AnimatedEmoji from "./AnimatedEmoji";

type propTypes = {
  selected: number
  onSelected: (selected: number) => void,
  icons?: Array<any>,
  iconSize?: number,
  scaleFactor?: number
}

export class EmojiRating extends Component<propTypes, {}> {

  render() {
    const {onSelected, iconSize, scaleFactor} = this.props
    const icons = this.props.icons ?? [
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
          <AnimatedEmoji selected={this.props.selected == index} lottie={icon} size={iconSize}
                         onClick={() => {
                           onSelected(index)
                         }}/>)}
      </div>
    );
  }
}

