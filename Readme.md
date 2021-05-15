



![react-chevron](/Users/blueStragglr/WebstormProjects/yarn/react-chevron/image/title.png)





### About

No more '>' in your button, no more complicated image customization.

Insert chevron image that perfectly fit with sibling text by super-light library, which don't have any peer dependencies.



### Installation

```shell
$ yarn add react-chervron
```

The `React-chevron` supports TypeScript.



### Usage

- Default

![basic](https://github.com/blueStragglr/react-chevron/blob/master/image/basic.png?raw=true)

```tsx
import Chevron from 'react-chevron'

...

const myComponent = (...) => {
  ...
  
  return (
    <div>
    	More Info <Chevron/>
    </div>
  )
}
```

Import and use. That's it!



-  Size & Color

![size.png](https://github.com/blueStragglr/react-chevron/blob/master/image/size.png?raw=true)

![color](https://github.com/blueStragglr/react-chevron/blob/master/image/color.png?raw=true)

```tsx
import Chevron from 'react-chevron'

...

const myComponent = (...) => {
  ...
  
  return (
    <>
      <div style={ { 'fontSize': '24px' } }>
        More Info <Chevron/>
      </div>
      <div style={ { 'color': '#bb0000' } }>
        More Info <Chevron/>
      </div>
    </>
  )
}
```

As explained above, you don't have to customize chevron size. It will be automatically fit with sibiling text.



- Direction

  ![direction](https://github.com/blueStragglr/react-chevron/blob/master/image/direction.png?raw=true)

```tsx
import Chevron from 'react-chevron'

...

const myComponent = (...) => {
  ...

  return (
    <>
      <div>
        Four directions available
        <Chevron/>
        <Chevron direction={'right'}/>
        <Chevron direction={'down'}/>
        <Chevron direction={'up'}/>
        <Chevron direction={'left'}/>
      </div>
    </>
  )
}


```

Four direction options are available. Default direction is  `'right'`.



- className

![tilt.png](https://github.com/blueStragglr/react-chevron/blob/master/image/tilt.png?raw=true)

```tsx
import Chevron from 'react-chevron'
import 'myStyle.css'

...

const myComponent = (...) => {
  ...
  
  return (
    <div>
    	More Info <Chevron className="tilt"/>
    </div>
  )
}
```

```css
/* myStyle.css */
.tilt svg {
  transform: rotate(30deg);
}
```

As same as other react component, you can pass `className` as props. 

⚠️ Be aware the `<span>` that wrapping `svg` exists.



- Rotate animation

![rotate.gif](https://github.com/blueStragglr/react-chevron/blob/master/image/rotate.gif?raw=true)

```tsx
import Chevron from 'react-chevron'
import 'myStyle.css'

...

const myComponent = (...) => {
  ...
  
  const [ reversed, setReversed ] = useState<boolean>(false)
  return (
     <div onClick={() => setReversed(!reversed) }>
       More Info <Chevron reversed={ reversed }/>
     </div>
  )
}
```

You can toggle direction as opposit by status.



### Copyright

Open License 😎

You can use it to commercial, non-commercial either without any charge. 

Also, there is no need to specify the author's name separately.

