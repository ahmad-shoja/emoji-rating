/// <reference types="react" />
type propTypes = {
    onSelected: (selected: number) => void;
    icons?: Array<any>;
    iconSize?: number;
    scaleFactor?: number;
};
export declare function EmojiRating(props: propTypes): JSX.Element;
export {};
