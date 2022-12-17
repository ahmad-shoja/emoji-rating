# Emoji-rating-component

[//]: # (add badges)
A reactjs emoji-based rating component based on [react-lottie](https://www.npmjs.com/package/react-lottie)

![Preview](https://github.com/ahmad-shoja/emoji-rating/raw/main/src/assets/priview.gif)

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install emoji-rating-component --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add emoji-rating-component
```

### Quick example

You can use following snippet to quickly add component

```js
<EmojiRating
    selected={selected}
    onSelected={(selected) => {
        setSelected(selected)
    }}
/>
```

This will result in following output:

![Preview](https://github.com/ahmad-shoja/emoji-rating/raw/main/src/assets/priview.gif)

### Props

Use following Props to customize for your needs

|                 Props                  | Necessity |                   Description                    |
|:--------------------------------------:|:---------:|:------------------------------------------------:|
|            selected: number            | required  |             to chose selected emoji              |
| onSelected: (selected: number) => void | required  |    will be called on each emoji select(click)    |
|           icons?: Array<any>           | optional  | specify you custom icons as array of lottie data |
|           iconSize?: number            | optional  |   set custom icon size in px , default is 32px   |

