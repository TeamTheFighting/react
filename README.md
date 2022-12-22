## React 수업 (22.12.22 ~ 22.12.23) 👼

    React.js로 Open API이용한 영화 사이트 만들기

### 사전 개념정리

1. ES6 문법 공부

### 사전 준비

    https://www.omdbapi.com/ 에서 API KEY 발급 받기

### React 설치 및 실행

1. node 설치 (https://nodejs.org/ko/download/)
2. npm install -g create-react-app
3. npx create-react-app (project-name)

### 필요한 라이브러리

- npm i redux react-redux @reduxjs/toolkit
- npm i react-router-dom

### JSX(JavaScript Syntax Extension)

    JavaScript파일에서만 사용할 수 있는 html문법

1. className

```javascript
//리액트에서 html 태그 작성하는 방법
<div className="App"></div>
```

2. 부모 div가 무조건 있어야 한다.

```javascript
return (
  <div>
    <div className="title">HOME</div>;
  </div>
);
```

3. if가 없다. 삼항연산자를 이용하자.

```javascript
function App() {
  const name = '메시';
  return <div>{name === '메시' ? <h1>메시</h1> : <h2>호날두</h2>}</div>;
}
```

4. css에서 background-color 와 같이 - 문자가 포함된 이름들을, JSX에서는 카멜 표기법으로 작성하자.

```javascript
function App() {
  const style = {
    backgroundColor: 'white',
    fontSize: '10px',
    fontWeight: 'bold',
  };
  return <div style={style}>리액트가 뭐길래!!</div>;
}
```

5. JSX에서는 반드시 닫아주는 태그를 작성해야 합니다.

```javascript
<input></input>
// 혹은 다음과 같이 self-closing 태그로 작성해도 무방
<input />
```
