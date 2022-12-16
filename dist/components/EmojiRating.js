import * as React from 'react';
import { useState } from 'react';
import Lottie from 'react-lottie';
import anger from './../assets/anger.json';
import bigFrown from './../assets/big_frown.json';
import SlightlyFrowning from './../assets/slightly_frowning.json';
import natural from './../assets/natural.json';
import slightlyHappy from './../assets/slightly_happy.json';
import warmSmile from './../assets/warm_smile.json';
export function EmojiRating(props) {
    var _a;
    const [selected, setSelected] = useState(-1);
    let icons = (_a = props.icons) !== null && _a !== void 0 ? _a : [
        anger,
        bigFrown,
        SlightlyFrowning,
        natural,
        slightlyHappy,
        warmSmile
    ];
    return (React.createElement("div", { style: { display: 'flex', justifyContent: 'start', flexFlow: 'row' } }, icons.map((icon, index) => React.createElement(AnimatedEmoji, { selected: selected == index, lottie: icon, onClick: () => {
            props.onSelected(index);
            setSelected(index);
        } }))));
}
function AnimatedEmoji(props) {
    var _a, _b;
    const [active, setActive] = useState(false);
    let config = {
        loop: true,
        autoplay: false,
        animationData: props.lottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (React.createElement("div", { onMouseEnter: _ => setActive(true), onMouseLeave: _ => setActive(false), onClick: _ => props.onClick(), style: { filter: props.selected || active ? 'unset' : 'grayscale(100%)' } },
        React.createElement(Lottie, { options: config, height: (_a = props.size) !== null && _a !== void 0 ? _a : 64, width: (_b = props.size) !== null && _b !== void 0 ? _b : 64, isStopped: !props.selected || !active })));
}
