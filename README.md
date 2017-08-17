# sass with webpack

+ Sass
+ 

## [Yarn](https://yarnpkg.com/en/) 설치

> FAST, RELIABLE, AND SECURE DEPENDENCY MANAGEMENT.

NPM 보다 빠르고 안정적이면 보안성이 뛰어나다고 주장하고 있는 새로운 자바스크립트 패키지 매니저

+ `npm install --save` : `yarn add`
+ `npm install --save-dev` : `yarn add --dev` 

```sh
$ npm install --global yarn  # yarn 전역 설치
$ yarn --verision            # yarn -V

$ yarn self-update           # 업데이트

$ yarn init                  # yarn init -y : 프로젝트 디렉토리 초기화, package.json 생성
```

### [yarn.lock](https://yarnpkg.com/en/docs/yarn-lock)

`yarn.lock` 이라는 __lockfile__ 패키지에 대한 각 의존성의 정확한 버전을 저장한다. (이는 여러 컴퓨터에서 일관된 설치를 수행하게 한다.)

`yarn.lock`은 Yarn CLI를 통해 의존성을 추가/ 업그레이드/ 제거하는 것을 전적으로 yarn에서 핸들링하므로 직접 파일을 수정해서는 안된다.

[Yarn : CLI introduction](https://yarnpkg.com/lang/en/docs/cli/)

## wepack

### loader(로더)

+ __css-loader__ : css 파일들을 읽어준다.
+ __style-loader__ :  읽은 css파일들을 style 태그로 만들어 head 태그 안에 넣어준다.
+ __sass-loader__ : 
+ __postcss-loader__ : 
### plugin

#### 기본 내장 플러그인

+ __LoaderOptionsPlugin__ : 로더들에게 옵션을 넣어주는 플러그인
+ __ModuleConcatenationPlugin__ : 웹팩이 변환하는 자바스크립트 코드를 조금이나마 더 줄여준다.(웹팩3에서 새로 나왔다.) 
+ __UglifyJsPlugin__ : 압축, console 제거, 소스맵 보존 등을 한다.
+ __DefinePlugin__ : JS 변수를 치환한다.

BannersPlugin, IgnorePlugin, EnvironmentPlugin, ContextReplacementPlugin 등...

#### 추가 설치 플러그인

+ __extract-text-webpack-plugin__ : style 태그 대신 css 파일로 만들고 싶은 경우 