# ink-progress-spinner [![CircleCI](https://circleci.com/gh/y0za/ink-progress-spinner.svg?style=svg)](https://circleci.com/gh/y0za/ink-progress-spinner)
> Progress spinner component for [Ink](https://github.com/vadimdemedes/ink)

## Demo
![](https://raw.githubusercontent.com/y0za/assets/master/ink-progress-spinner/demo.gif)

## Install
```console
$ npm install ink-progress-spinner
```

## Props

### characters

Type: `string[]`

Default: `['⠁', '⠂', '⠄', '⡀', '⢀', '⠠', '⠐', '⠈']`

This is a list of letters making up spinner, and this element is rendered in turn.

### delay

Type: `number`

Default: `60`

The time, in milliseconds, is used as render interval.


ProgressSpinner supports [Text component](https://github.com/vadimdemedes/ink/blob/master/lib/components/text.js) props. Text component uses [chalk](https://github.com/chalk/chalk), and you could use its API methods as ProgressSpinner props.

## License
MIT License
