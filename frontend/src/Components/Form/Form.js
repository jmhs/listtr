import React, {PropTypes} from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount(){
  //   (function ($) {
  //
  //     var bar = $("#progressbar")[0];
  //
  //     UIkit.upload('.test-upload', {
  //
  //         url: '',
  //         multiple: true,
  //
  //         beforeSend: function() { console.log('beforeSend', arguments); },
  //         beforeAll: function() { console.log('beforeAll', arguments); },
  //         load: function() { console.log('load', arguments); },
  //         error: function() { console.log('error', arguments); },
  //         complete: function() { console.log('complete', arguments); },
  //
  //         loadStart: function (e) {
  //             console.log('loadStart', arguments);
  //
  //             bar.removeAttribute('hidden');
  //             bar.max =  e.total;
  //             bar.value =  e.loaded;
  //         },
  //
  //         progress: function (e) {
  //             console.log('progress', arguments);
  //
  //             bar.max =  e.total;
  //             bar.value =  e.loaded;
  //
  //         },
  //
  //         loadEnd: function (e) {
  //             console.log('loadEnd', arguments);
  //
  //             bar.max =  e.total;
  //             bar.value =  e.loaded;
  //         },
  //
  //         completeAll: function () {
  //             console.log('completeAll', arguments);
  //
  //             setTimeout(function () {
  //                 bar.setAttribute('hidden', 'hidden');
  //             }, 1000);
  //
  //             alert('Upload Completed');
  //         }
  //     });
  //
  // })(jQuery);
  // }
  render() {
    return (<div>
      <div className="test-upload uk-placeholder uk-text-center">
        <span uk-icon="icon: cloud-upload"></span>
        <span className="uk-text-middle">Attach binaries by dropping them here or</span>
        <div uk-form-custom>
          <input type="file" multiple/>
          <span className="uk-link">selecting one</span>
        </div>
      </div>

<progress id="progressbar" className="uk-progress" value="0" max="100" hidden></progress>
      </div>);
  }
}

Form.propTypes = {
};
