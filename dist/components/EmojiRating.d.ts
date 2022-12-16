import { Component } from 'react';
type propTypes = {
    onSelected: (selected: number) => void;
    icons?: Array<any>;
    iconSize?: number;
    scaleFactor?: number;
};
type stateTypes = {
    selected: number;
};
export declare class EmojiRating extends Component<propTypes, stateTypes> {
    state: stateTypes;
    render(): JSX.Element;
}
export {};
