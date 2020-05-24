安装sass:cnpm install sass -D
安装redux,ruout:anzhuangcnpm install redux react-redux react-router-dom --save
安装antd:npm install antd --save
卸载ant: remove antd
安装jsonp：cnpm i fetch-jsonp -S


日历组件：
npm install react-mobile-datepicker --save

ant-mobile安装以及使用
1.安装#
  npm install antd-mobile --save
2.使用#
  组件使用实例：
  import { Button } from 'antd-mobile';
  ReactDOM.render(<Button>Start</Button>, mountNode);
  引入样式:
  import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
  按需加载# (精华以及重点)
    注意：强烈推荐使用
    下面两种方式都可以只加载用到的组件，选择其中一种方式即可。
    使用 babel-plugin-import（推荐）。
    // .babelrc or babel-loader option
      {
        "plugins": [
          ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
        ]
      }
    然后只需从 antd-mobile 引入模块即可，无需单独引入样式。
    // babel-plugin-import 会帮助你加载 JS 和 CSS
    import { DatePicker } from 'antd-mobile';
    手动引入
    import DatePicker from 'antd-mobile/lib/date-picker';  // 加载 JS
    import 'antd-mobile/lib/date-picker/style/css';        // 加载 CSS
    // import 'antd-mobile/lib/date-picker/style';         // 加载 LESS



    按钮拖动：npm install suspend-button -S
