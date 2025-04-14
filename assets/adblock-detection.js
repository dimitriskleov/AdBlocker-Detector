<script>
  var adBlocker = 'no';

  function loadAd() {
    var iframe = document.createElement('iframe');
    var adUrl = 'https://groleegni.net/401/8650038';
    var scriptLoaded = false;

    var script = document.createElement('script');
    script.src = adUrl;
    script.async = true;

    script.onload = function() {
      scriptLoaded = true;
      console.log('✅ Ad script loaded successfully');
    };

    script.onerror = function() {
      console.warn('❌ Failed to load ad script');
      adBlocker = 'yes';
      closeIframe();
      showAdBlockerMessage();
      exportAdBlockStatus();
    };

    iframe.appendChild(script);
    document.body.appendChild(iframe);

    setTimeout(function() {
      try {
        var iframeContent = iframe.contentWindow.document.body.innerHTML;
        if (!iframeContent && !scriptLoaded) {
          adBlocker = 'yes';
          closeIframe();
          showAdBlockerMessage();
          exportAdBlockStatus();
        } else {
          console.log('✅ Ad loaded inside the iframe');
        }
      } catch (e) {
        console.warn('❌ Failed to access iframe content');
        adBlocker = 'yes';
        closeIframe();
        showAdBlockerMessage();
        exportAdBlockStatus();
      }
    }, 300);
  }

  function showAdBlockerMessage() {
    var message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '24px';
    message.style.fontWeight = 'bold';
    message.style.color = 'red';
    message.style.backgroundColor = 'white';
    message.style.padding = '20px';
    message.style.zIndex = '9999';
    message.textContent = "TO CONTINUE YOU NEED TO DISABLE AD BLOCKER";
    document.body.appendChild(message);
  }

  function closeIframe() {
    var iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.parentNode.removeChild(iframe);
      console.log('❌ Iframe removed due to ad blocker');
    }
  }

  function exportAdBlockStatus() {
    console.log('AdBlocker Status:', adBlocker);
    window.adBlocker = adBlocker;
  }

  window.onload = loadAd;
</script>
