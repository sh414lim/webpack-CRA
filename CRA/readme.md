var HelloMessage = React.createClass({
render:function(){
return <div>{'Hello' + this.props.name}</div>
}
})

React.renderComponent(
<HelloMessage name = "John"/>,
document.getElementById('container')

//react.js를 빌드하는 프로세는 node.js 위에 구축되어잇다.

// grant?
// Grunt -=> 축소화, 컴파일 유닛 테스트, 린트 등 주기적인 태스크들을 자동으로 수해하기 위해 사용되는 도구
//자바스크립트 태스크 러너?
//태스크 러너 => 빌드 자동화(build automation 또는 makemake)
//소프트웨어 개발자가 반복해서 하는 코딩을 잘 짜여진 프로세스를 통해 자동으로 실행
// 맏을 수 있는 결과물도 생산해 낼 수 있는 일련의 작업 방식 및 방법

//Gruntfile 이라는 파일에 정의된 사용자 지정 태스크들을 수행하기 위해 명령 줄 인터페이스 사용

// ==> 명령줄 인터페이스(CLI , Command-line interface) 가상 터미널 또는 터미널을 통해 사용자와 컴퓨터가 상호 작용하는 방식
//작업 명령은 사용자가 컴퓨터 키보드 등을 통해 문자열의 형태로 입력 컴퓨터로부터 출력 역시 문자열

    return React.createElement('div',{className:'shopping-list'},
    React.createElement('h1')
    React.createElement('ul')
    )

//불변성 => 복잡한 특징들을 구현하기 쉽게 만든다
// 특정행동을 취소하고 다시 실행하는 기능 => 직접적인 데이터 변이를 피하는것은 이전 기능을 유지하고 재사용 할 수 있게 된다

//불변 객체에서 변화를 감지하는 것은 상당히 쉽습니다. 참조하고 있는 불변 객체가 이전 객체와 다르다면 객체는 변한 것입니다

//setState(updater,[callback])
// 컴포넌트 state 의 변경 사항을 대기열에 집어넣고 React 에게 해당 컴포넌트와 그 자식들이 갱신된 state 를 사용하여 다시 렌더링되어야 한다고 알린다

//setState() 는 컴포넌트를 갱신하는 데에 있어 즉각적인 명령이 아니라 요청이라고 생각
// 인지 성능(Perceived Performance) 의 향상을 위하여 React 는 이 메서드의 실행을 지연 시키고 여러 컴포넌트를 한번에 갱신 가능
//React state 변화가 즉시 적용되는것을 보장하지 않는다

# Webpack

## 역할

### 'entry' 에서 지정된 자바스크립트에서 부터 시작해서 그걸 입력으로 읽어 들인 다음 변환 과정을 거치고 그 변환 과정을 출력 -> 변환 과정에서 어떤 일을 할지는 webpack 이 자체적으로 세팅하는 것이 아니라 webpack 한테 지정한 프로그램을 알려주고 입력처리과정의 entry 로 파일을 넘겨준다 리턴된 값을모아서 webpack에 출력

[] 번들링- > n개의 파일을 입력받아서 하나의 파일을 만들어내는 과정

#### plugin

- 출력결과를 만들어낼때 처리할 필요가 있는 일들이 있으면 그것만을 위한 '소프트웨어' 공간 프로세스를 따로 정의
  -plugin 의 n개의 소프트웨어를 설정 해주면 마지막 처리 과정 개입

### wwebpack.config.js

- webpack 에 입력값으로 config 파일을 제공해주는 역할

- rules 안에 지정하는것을 loader 라고 한다
- test => 특정 확장자 파일
- exclude => 특정파일제외

# babel
