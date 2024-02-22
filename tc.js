<script type='text/javascript'>
&quot;use strict&quot;;
$(document).ready(function() {
  (function(W,D){
    W.asli_config = {
      url: &#39;&#39;,
      page: &#39;p/lanjut.html&#39;,
      output: &#39;#output&#39;,
      defaultkey: &#39;AnasRAR&#39;,
      fixednavbar: false,
      countdown: true,
      timedown: 10,
      lang: {
        urlempty: &quot;URL can not empty&quot;,
        convertsuccess: &quot;Convert URL success, copy url on box below&quot;,
        validtext: &quot;HTTP, HTTPS, or WWW&quot;,
        gourltext: &quot;coba di klik linknya pak&quot;,
        nourl: &quot;nggapain pak ??, linknya nggak ada&quot;,
        errorconvert: &quot;URL can not to convert&quot;,
        emptypass: &quot;Password can not empty&quot;,
        wrongpass: &quot;Password is incorrect&quot;,
        countdowntext: &quot;Please Wait {{anascountdown}} Second&quot;
      }
    }
    var xv = $(&#39;footer &gt; .d-table &gt; .d-table-row &gt; .d-table-cell &gt; .container &gt; .row &gt; .col-sm-7 &gt; a#naas&#39;);
    if(xv.length){
      W.validurlit = function (ur) {
        return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&amp;=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&amp;=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&amp;;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(ur);
      }
      W.sUp = function(el) {
        D.querySelector(el).parentNode.style.height = &#39;0&#39;;
      }
      W._GET = function(name, url) {
        if (!url) url = location.href;
        name = name.replace(/[\[]/,&quot;\\\[&quot;).replace(/[\]]/,&quot;\\\]&quot;);
        var regexS = &quot;[\\?&amp;]&quot;+name+&quot;=([^&amp;#]*)&quot;;
        var regex = new RegExp( regexS );
        var results = regex.exec( url );
        return results == null ? null : results[1];
      }
      xv.attr(&#39;href&#39;, &#39;//2kadam.in&#39;).text(&#39;www.2kadam.in&#39;);
    } else {
      location.href = &#39;//2kadam.in&#39;;
    }
  }(window,document));
});
</script>
