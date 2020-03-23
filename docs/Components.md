# Components

Application is built using resuable and nestable components that are based on the DOM elements. Following file describes
examples of components.

## Base component

```javascript
import createComponent from 'components/utils/createComponent'

function Component() {
  return createComponent('<div />')
}

export default Component
```

## Complex markup components

Any valid HTML string can be used for component's markup:

```javascript
import createComponent from 'components/utils/createComponent'

function Component() {
  return createComponent(`
    <div class="container">
      <header>
        <h1>Container's header</h1>
        <p>Container's subheader</o>
      </header>
    </div>
  `)
}

export default Component
```

## Component with children

Children are appended to the parent's top-most DOM element:

```javascript
import createComponent from 'components/utils/createComponent'

function Child() {
  return createComponent('<div />')
}

function Parent() {
  return createComponent('<div />', Child())
}

export default Parent
```

## Passing parameters to a component

Since components are nothing else than functions, you can pass to them any parameters:

```javascript
import createComponent from 'components/utils/createComponent'

function Child({className}) {
  return createComponent(`<div class="${className}" />`)
}

function Parent() {
  return createComponent('<div />', Child({className: 'child'}))
}

export default Parent
```

## Component with multiple children

Providing array of components will append them to the parent's top-most DOM element in provided order:

```javascript
import createComponent from 'components/utils/createComponent'

function SecondChild() {
  return createComponent('<div />')
}

function FirstChild() {
  return createComponent('<div />')
}

function Parent() {
  return createComponent('<div />', [FirstChild(), SecondChild()])
}

export default Parent
```

## Dispatching actions to the store

You can dispatch any action from the component to the store::

```javascript
import * as sidebarActions from 'store/sidebar/actions'
import createComponent from 'components/utils/createComponent'
import * as store from 'store'

function Component() {
  store.dispatch(sidebarActions.open())

  return createComponent('<div />')
}

export default Component
```

## Subscribing to the store

Components can subscribe to the store to receive notifications when it gets updated:

```javascript
import createComponent from 'components/utils/createComponent'
import * as store from 'store'

function Component() {
  const component = createComponent('<div />')

  store.subscribe(() => {
    component.append('Received an update!')
  })

  return component
}

export default Component
```

## Complex component example

Array of children will be appended to the `section` element:

```javascript
import createComponent from 'components/utils/createComponent'

function FirstChild({className}) {
  return createComponent(`<p class="${className}"/>`)
}

function SecondChild() {
  return createComponent('<div />')
}

function Parent() {
  return createComponent(`
    <section class="container">
      <header>
        <h1>Container's header</h1>
        <p>Container's subheader</o>
      </header>
    </section>
  `, [FirstChild({className: 'firstChild'}), SecondChild(), 'Lorem ipsum'])
}

export default Parent
```
