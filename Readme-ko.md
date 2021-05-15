



![title.png](https://github.com/blueStragglr/react-chevron/blob/master/image/title.png?raw=true)





## 소개

버튼에 '>' 는 이제 그만! 이미지 조정도 그만... 😢

텍스트 스타일에 따라 자동으로 조정되는 꺽쇠를 컴포넌트 형태로 사용해 보세요.

React와 TypeScript 이외에는 아무 dependecy도 없는 가벼운 라이브러리입니다. 😎



## 설치

```shell
$ yarn add react-chervron
```

`React-chevron` 라이브러리는 TypeScript를 지원합니다. 



## 사용법

### 기본형

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

import하고 사용하세요. 끝입니다!



### Size & Color

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

소개한 것 처럼, 따로 폰트 사이즈나 컬러를 설정해 줄 필요가 없습니다. 형제 DOM을 따라서 설정됩니다. 

*인라인 스타일은 예제 작성의 편의를 위한 것입니다. CSS 파일이나 Styled Component를 사용하셔도 전혀 무방합니다. 



### Direction

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

네 개의 방향을 설정할 수 있습니다. 기본값은  `'right'` 입니다.



### className

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

다른 리액트 컴포넌트들 처럼  `className` 을 넘겨줄 수 있습니다.

⚠️ `<svg> ` 를 감싸고 있는 `<span>`  요소가 있음에 주의하세요.





### Rotate animation

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

상태를 변경해서 회전하는 애니메이션 효과를 줄 수도 있습니다. 드롭다운 등에 활용 해 보세요!





## 저작권

오픈 라이센스 프로젝트입니다 😎

상업적, 비상업적 프로젝트에 모두 사용하셔도 되고, 별도의 비용은 없습니다.

따로 저작권자를 명시할 필요는 없습니다. 해주시면 좋긴 하지만요!



Author: blueStragglr (Oortcloud1599@gmail.com) [https://bluestragglr.com]

