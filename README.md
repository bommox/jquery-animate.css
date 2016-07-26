# jquery-animate.css
This plugin allows you to control css animations from jQuery taking advantage of callbacks and promises.

The css part is cloned from daneden/animate.css

## Getting started

Import JS and the CSS files in your page:

`<link rel="stylesheet" href="libs/jquery-animate.css/libs/animate.css" />`

`<script src="libs/jquery-animate.css/jquery.animate.css.js"></script>`

Then simply perform an animation:

`$(".target").animateCss('bounce');`

## Usage and features
This plugin has the following features:

`$.fn.animateCss(effect:string, options:object)`

Options is a plain object:

`$(".target").animateCss('bounce', {duration: 500});`

### Option `duration`
The duration of the CSS animation applied. Default value defined in CSS with `animation-duration` property. If no defined, 1000ms is applied.

`$(".target").animateCss('bounce', {duration: 500});`

## Promises

## License