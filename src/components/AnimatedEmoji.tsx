import React, {Component} from 'react';
import Lottie from "react-lottie";

type propTypes = {
  selected: boolean
  lottie: any,
  size?: number,
  onClick: () => void
}
type stateTypes = { active: boolean }

class AnimatedEmoji extends Component<propTypes, stateTypes> {
  state: stateTypes = {active: false}

  render() {
    let config = {
      loop: true,
      autoplay: false,
      animationData: this.props.lottie,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
    return (
      <div onMouseEnter={_ => this.setState({active: true})}
           onMouseLeave={_ => this.setState({active: false})}
           onClick={_ => this.props.onClick()}
           style={{filter: this.props.selected || this.state.active ? 'unset' : 'grayscale(100%)'}}
      >
        <Lottie options={config}
                height={this.props.size ?? 64}
                width={this.props.size ?? 64}
                isStopped={!this.props.selected && !this.state.active}/>
      </div>
    );
  }
}

export default AnimatedEmoji;