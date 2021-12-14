//node.js file
//HTML-FILE-PLUGIN =>HTML 파일을 받아서 번들링 파일 에내보낼때 사용될 HTML을 생성및 템플릿화 
const HtmlWebpackPlugin =require('html-webpack-plugin')
const path = require('path')

module.exports={
  mode:'developoment',
  entry:'./app.js', // 입력정보-어떤 자바스크립트 파일에서 시작할지
  output:{
    //출력정보
    // 1. 어느 디렉토리
      path:path.resolve(__dirname,'dist'),
    // 2.어떤 이름
      filename:'bundle.js'

  },

  devServer:{
    //압축
    compress:true,
    port:9999,
  },

  module:{
    //처리 트렌스파일
    rules:[
      //웹팩 규정->rules 에 지정하는것을 loader
      {
            //필요없느 파일 제거(이미지,css 등등 JS파일 이 아닌 파일 제거)
        test:/\.js$/, //정규식에 매칭 되는 파일들 만 loader 에게 보내줘라
        exclude:/\node_modules/,   //특정 디렉토리 제외
        use:{
          loader:'bable-loader',
          options:{
            presets:["@bable/preset-env","@bable/preset-react"]
            
          }
        }
      }
    ]
  },


  //하나의 파일을 만들어낼때 무언가 처리할 필요할 필요가 있는 일들이 잇다면 소프트웨어를 플러그인 n개의 소프트웨어를 설정
  // ->ex/es6 이상의 문법 파일 모듈에 es5 변환 트렌스파일러 세팅 플러그인에 콘솔로그 주석 제거 플러그인 세팅 번들리을 돌리면 순서대로
  plugin:[
      //일 처리
      new HtmlWebpackPlugin({
        title:'setup webpack & babel',
        template:'index.html'
      }) //해당 하는 패키지에 문서 보세요,
  ]
}

//output 파일