# jquery-animate.css
This plugin allows you to control css animations from jQuery taking advantage of callbacks and promises.

The css part is cloned from daneden/animate.css

## Getting started

Import JS and the CSS files in your page:

```html
<link rel="stylesheet" href="libs/jquery-animate.css/libs/animate.css" />
```

```html
<script src="libs/jquery-animate.css/jquery.animate.css.js"></script>
```

Then simply perform an animation:

```js
$(".target").animateCss('bounce');
```

## Usage and features
This plugin has the following features:

```js
$.fn.animateCss(effect /*string*/);
//or
$.fn.animateCss(effect /*string*/, options /*plainObject*/);
//or
$.fn.animateCss(effect /*string*/, callback /*function*/);
```

Options is a plain object:
```js
{
  delay : 0,                // in milliseconds
  duration : 800,           // in milliseconds
  callback : function() {}, // function with element scope
  queue : 'fx'              // the queueName to be used
}
```

### Option `duration`
The duration of the CSS animation applied. Default value defined in CSS with `animation-duration` property. If no defined, 1000ms is applied.

```js
$(".target").animateCss('bounce', {duration: 500});
```

### Option `delay`
The offset until animation begins.

```js
$(".target").animateCss('bounce', {delay: 500});
```

### Option `callback`
The callback which will be executed after animation ends. The plugin has an internal control to ensure callback is called even if animation does not exists.

It is also possible to use `promise` to manage the callback or actions after animation.

```js
$(".target").animateCss('bounce', {
    callback: function() {
        $(this).html("Callback!");
    }    
});
```
Remember it is possible to pass callback directly as second argument:

```js
$(".target").animateCss('bounce', function() {
        $(this).html("Callback!");
    });
```

## Promises and deferreds
This plugins uses the `fx` queue so it is possible to use the promise to manage when the queue has ended.

```js
$(".target").animateCss('bounce').promise()
    .then(
        function() {
            $(this).html("Promise resolved!");
        }
    );
```
Remember you can modify the `queueName` with the `queue` option:
```js
$(".target").animateCss('bounce', {queue : 'anim'}).promise('anim')
    .then(
        function() {
            $(this).html("Promise resolved!");
        }
    );
```
