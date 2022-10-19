import { useRef, useState } from "react";

//useRef의 크게 2가지 종류의 쓰임새가 있는데 이번시간에는 참조하는 용도가 아닌 값을 저장하는 용도의 Ref를 배워보자
// 스테이트와 레프 두가지를 가지고 버튼을 만들었고 해당 버튼을 누르면 각각의 값이 1씩 올라감
//랜더링이 일어나면 콘솔로 찍어주도록하게하고
//유즈 레프는 렌더링을 일으키는 함수가 없으므로 레프함수안에 콘솔로 올라가고있음을 나타내준다
function App() {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);

	console.log('랜더링');

	function plusState() {
		setCount(count + 1);
	};

	function plusRef() {
		countRef.current = countRef.current + 1;
		console.log("useRef :", countRef.current);
	};

	//레프는 올려도 랜더링을 시키지 않고 값만 올라간채 저장되고있음
	//즉 우리가 어떤 값을 저장하는데 만약 스테이트에 넣어두면 그 값이 바뀔때마다 우리가 원치않는 렌더링을 발생하게됨
	//하지만 레프에 저장하게되면 값이 바뀌더라도 랜더링을 시키지 않고 보관을 잘 해줌
	return (
		<div>
			<p>State : {count}</p>
			<p>Ref : {countRef.current}</p>
			<button onClick={plusState}>Up State</button>
			<button onClick={plusRef}>Up Ref</button>
		</div>
	);
}
export default App;
