// localStorage : 브라우저에 key, value 값을 저장할 수 있는 웹 스토리지 객체(web storage object) 저장한 데이터는 세션 간에 공유되기 때문에 세션이 바뀌어도 저장한 데이터가 유지된다.

// setItem(key, value) – 키/값 쌍 보관
// getItem(key) – 키에 해당하는 값을 받아옴
// removeItem(key) – 키와 해당 값을 삭제함.
// clear() – 모든 것을 삭제
// key(index) – 인덱스(index)에 해당하는 키를 받아옴.
// length – 저장된 항목의 개수를 얻음.

// JSON은 자바스크립트의 전체 영역에서 어디서든지 사용 가능한 전역 객체임.
// json 확장자를 가진 파일은 문자(string) 데이터이다.
// json의 문자 데이터를 가지고 오면, 자동으로 변환돼서 실제 객체 데이터처럼 출력된다.

// --------------------------------------------------------------

// localStorage에 저장할 객체
const obj = {
  name: "anna",
  age: 20,
};

// localStorage에 저장할 배열
const arr = [1, 2, 3];

// 객체, 배열을 JSON 문자열로 변환
const objString = JSON.stringify(obj);
const arrString = JSON.stringify(arr);

// JSON.stringity() : 자바스크립트 파일 내에서 특정한 데이터를 json의 형태(포맷, 문법)로 문자 데이터화 시켜주는 메소드.
// JSON 객체에서 stringify라는 메소드를 실행하면 원래의 객체 데이터가 json화 된다.

// setItem(key, value)
window.localStorage.setItem("person", objString);
window.localStorage.setItem("nums", JSON.stringify(arr));

// getItem(key)
const personString = window.localStorage.getItem("person");
const numsString = window.localStorage.getItem("nums");

// JSON 문자열을 객체, 배열로 변환
const personObj = JSON.parse(personString);
const numsArr = JSON.parse(numsString);
console.log(typeof numsArr);
// numsArr의 type은 object이다.

// JSON.parse() : 자바스크립트에서 활용할 수 있는 데이터로 변환 시켜주는 메소드.
// JSON 객체에서 parse라는 메소드를 실행하면 원래의 문자 데이터가 자바스크립트에서 가공하여 사용할 수 있는 데이터로 변환된다.

// 결과 출력
document.write(personString); // {"name" : "anna" , "age" : 20}
document.write(personObj); //[object object]

document.write(numsString); //[1, 2, 3] (겉모습은 배열이지만 실제로는 string)
document.write(numsArr); //1, 2, 3 (배열 그대로가 아닌 값만 가져옴)
