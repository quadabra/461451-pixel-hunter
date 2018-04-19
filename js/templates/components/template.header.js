import back from './template.go-back';
import lives from './template.lives';
import timer from './template.timer';

export default (state) => (`
   <header class="header">
    ${back()}
    ${timer(state)}
    ${lives(state)}
  </header>
`);
