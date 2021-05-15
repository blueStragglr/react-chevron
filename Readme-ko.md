



![react-chevron](/Users/blueStragglr/WebstormProjects/yarn/react-chevron/image/title.png)





### About

더이상 ‘>’ 는 그만! 타입스크립트와 리액트 외에 아무 의존성 없는 가벼운 라이브러리로 텍스트처럼 시각보정된 chevron을 넣어 봅시다. 





### 설치하기

```shell
$ yarn add react-chervron
```





### Usage

- Default

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

...끝입니다! 

![basic](/Users/blueStragglr/WebstormProjects/yarn/react-chevron/image/basic.png)



-  Size & Color

![size](/Users/blueStragglr/WebstormProjects/yarn/react-chevron/image/size.png)

![color](/Users/blueStragglr/WebstormProjects/yarn/react-chevron/image/color.png)

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

마찬가지로 별도로 지정해 줘야 하는 옵션은 없습니다. 색과 폰트 크기 모두 적절히 상속됩니다. 



- Direction

  ![direction](/Users/blueStragglr/WebstormProjects/yarn/react-chevron/image/direction.png)

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

4개의 방향을 설정할 수 있습니다. 방향을 입력하지 않았을 때의 기본값은 `'right'` 입니다. 



- className

![tilt](/Users/blueStragglr/WebstormProjects/yarn/react-chevron/image/tilt.png)

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

⚠️ span wrapper가 svg를 감싸고 있음에 유의하세요.



- Rotate animation

![rotate](/Users/blueStragglr/WebstormProjects/yarn/react-chevron/image/rotate.gif)

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

항상 180도 회전합니다. 





### Copyright

Open License 😎

You can use it to commercial, non-commercial either without any charge. 

Also, there is no need to specify the author's name separately.

