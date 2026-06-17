# JQuery

**_Phase 1:_** `Prerequisites`

Before jQuery, you should know:

- HTML
- CSS
- JavaScript basics
  - Variables
  - Functions
  - Arrays
  - Objects
  - Loops
  - DOM basics
  - Events

Example Javascript

```js
document.getElementById('btn').addEventListener('click', () => {
  console.log('Clicked');
});
```

Example JQuery

```js
$('#btn').click(() => {
  console.log('Clicked');
});
```

**_Phase 2:_** `What is jQuery?`

jQuery is a JavaScript library.

It helps:

- Select elements
- Manipulate DOM
- Handle events
- Make AJAX requests
- Create animations

CDN Setup:

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

**_Phase 3:_** `jQuery Syntax`

Basic Syntax:

```js
$(selector).action();
```

Examples:

```js
$('p').hide();
```

```js
$('#heading').hide();
```

```js
$('.box').hide();
```

**_Phase 4:_** `Selectors (Very Important)`

ID Selector

```html
<h1 id="title">Hello</h1>
```

```js
$('#title').css('color', 'red');
```

Class Selector

```html
<p class="para">Text</p>
```

```js
$('.para').hide();
```

Element Selector

```js
$('p').hide();
```

Multiple Selector

```js
$('h1,p').css('color', 'blue');
```

Attribute Selector

```html
<input type="text" />
```

```js
$("input[type='text']");
```

**_Phase 5:_** `Document Ready`

Industry Standard

```js
$(document).ready(function () {
  console.log('DOM Loaded');
});
```

Modern Short Form

```js
$(function () {
  console.log('DOM Loaded');
});
```

**_Phase 6:_** `Events`

Click

```js
$('#btn').click(function () {
  alert('Clicked');
});
```

Double Click

```js
$('#btn').dblclick(function () {
  alert('Double Click');
});
```

Mouse Enter

```js
$('#box').mouseenter(function () {
  console.log('Mouse Enter');
});
```

Mouse Leave

```js
$('#box').mouseleave(function () {
  console.log('Mouse Leave');
});
```

Keyboard Events

```js
$('#input').keyup(function () {
  console.log($(this).val());
});
```

Submit Event

```js
$('#form').submit(function (e) {
  e.preventDefault();
  console.log('Submitted');
});
```

**_Phase 7:_** `DOM Manipulation`

Change Text

```js
$('#title').text('New Title');
```

Change HTML

```js
$('#title').html('<b>Bold Title</b>');
```

Get Text

```js
let text = $('#title').text();
```

Get HTML

```js
let html = $('#title').html();
```

**_Phase 8:_** `Working with Inputs`

HTML

```html
<input id="name" />
```

Get Value

```js
let name = $('#name').val();
```

Set Value

```js
$('#name').val('John');
```

**_Phase 9:_** `CSS Manipulation`

```js
$('#box').css('color', 'red');
```

Multiple CSS

```js
$('#box').css({
  color: 'white',
  background: 'black',
  padding: '20px',
});
```

**_Phase 10:_** `Classes`

Add Class

```js
$('#box').addClass('active');
```

Remove Class

```js
$('#box').removeClass('active');
```

Toggle Class

```js
$('#box').toggleClass('active');
```

Check Class

```js
$('#box').hasClass('active');
```

**_Phase 11:_** `DOM Traversing`

HTML

```html
<div id="parent">
  <p id="child">Hello</p>
</div>
```

Parent

```js
$('#child').parent();
```

Child

```js
$('#parent').children();
```

Find

```js
$('#parent').find('p');
```

Next

```js
$('#child').next();
```

Prev

```js
$('#child').prev();
```

**_Phase 12:_** `Creating Elements`

Create

```js
let p = $('<p>Hello</p>');
```

Append

```js
$('#container').append(p);
```

Prepend

```js
$('#container').prepend(p);
```

Before

```js
$('#box').before('<h1>Before</h1>');
```

After

```js
$('#box').after('<h1>After</h1>');
```

**_Phase 13:_** `Remove Elements`

Remove

```js
$('#box').remove();
```

Empty

```js
$('#box').empty();
```

**_Phase 14:_** `Effects`

Hide

```js
$('#box').hide();
```

Show

```js
$('#box').show();
```

Toggle

```js
$('#box').toggle();
```

Fade Effects

```js
$('#box').fadeIn();
```

```js
$('#box').fadeOut();
```

```js
$('#box').fadeToggle();
```

Side Effects

```js
$('#box').slideDown();
```

```js
$('#box').slideUp();
```

```js
$('#box').slideToggle();
```

**_Phase 15:_** `Animation`

```js
$('#box').animate({
  width: '300px',
  height: '300px',
});
```

**_Phase 16:_** `Method Chaining`
Industry Uses This A Lot

```js
$('#box').css('color', 'red').slideDown().fadeOut();
```

**_Phase 17:_** `AJAX (Very Important)`

This is where jQuery became famous.

GET Request

```js
$.get('https://jsonplaceholder.typicode.com/users', function (data) {
  console.log(data);
});
```

```md
$.get(url, data, successCallback, dataType);
```

POST Request

```js
$.post(
  'https://jsonplaceholder.typicode.com/posts',
  {
    title: 'Hello',
  },
  function (data) {
    console.log(data);
  },
);
```

```md
$.post(url, data, successCallback, dataType);
```

AJAX Method

```js
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/users',
  method: 'GET',
  success: function (data) {
    console.log(data);
  },
  error: function (err) {
    console.log(err);
  },
});
```

```md
$.ajax({
url // Restaurant address
method // Order type
data // Food items
headers // Special instructions
beforeSend // "Order placed"
success // "Food delivered"
error // "Restaurant closed"
complete // "Order process ended"
})
```

**_Phase 18:_** `Event Delegation (Industry Favorite)`

Problem

```js
$('.btn').click(function () {});
```

Works only on existing buttons.

Industry Solution:

```js
$(document).on('click', '.btn', function () {
  console.log('clicked');
});
```

Used heavily in:

- Dynamic tables
- Infinite scroll
- Dashboard applications

**_Phase 19:_** `Data Attributes`

HTML

```html
<button data-id="101">Delete</button>
```

JQuery

```js
let id = $(this).data('id');
```

**_Phase 20:_** `Real Industry Mini Projects`

Project 1

Todo App

Learn:

- append()
- remove()
- click()
- val()

<hr>

Project 2

CRUD Application

Learn:

- AJAX
- Forms
- Validation
- Dynamic UI

<hr>

Project 3

Product Filtering

Learn:

- search
- category filtering
- event delegation

<hr>

Project 4

Admin Dashboard

Learn:

- AJAX
- Tables
- Pagination
- Modals

**_Phase 21:_** `jQuery Plugins`

ndustry uses plugins extensively.

Examples:

- DataTables
- Select2
- jQuery UI
- Owl Carousel