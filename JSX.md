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
