import * as React from 'react';
import { Component } from 'react';
import anger from './../assets/anger.json';
import bigFrown from './../assets/big_frown.json';
import SlightlyFrowning from './../assets/slightly_frowning.json';
import natural from './../assets/natural.json';
import slightlyHappy from './../assets/slightly_happy.json';
import warmSmile from './../assets/warm_smile.json';
import AnimatedEmoji from "./AnimatedEmoji";
export class EmojiRating extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            selected: -1
        };
    }
    render() {
        var _a;
        const { onSelected, iconSize, scaleFactor } = this.props;
        const icons = (_a = this.props.icons) !== null && _a !== void 0 ? _a : [
            anger,
            bigFrown,
            SlightlyFrowning,
            natural,
            slightlyHappy,
            warmSmile
        ];
        return (React.createElement("div", { style: { display: 'flex', justifyContent: 'start', flexFlow: 'row' } }, icons.map((icon, index) => React.createElement(AnimatedEmoji, { selected: this.state.selected == index, lottie: icon, onClick: () => {
                onSelected(index);
                this.setState({ selected: index });
            } }))));
    }
}
