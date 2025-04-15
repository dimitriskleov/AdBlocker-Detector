
    var adBlocker = 'no';

    function loadAd() {
      var iframe = document.createElement('iframe');
      var adUrl = 'https://groleegni.net/401/8650038';
      var scriptLoaded = false;

      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      try {
        var doc = iframe.contentWindow.document;
        doc.open();
        doc.write('<body></body>');
        doc.close();

        var script = doc.createElement('script');
        script.src = adUrl;
        script.async = true;

        script.onload = function () {
          scriptLoaded = true;
          adBlocker = 'no';
          closeIframe();
          exportAdBlockStatus();
          showMainContent();
        };

        script.onerror = function () {
          adBlocker = 'yes';
          showAdBlockerMessage();
          exportAdBlockStatus();
          closeIframe();
        };

        doc.body.appendChild(script);
      } catch (e) {
        adBlocker = 'yes';
        showAdBlockerMessage();
        exportAdBlockStatus();
        closeIframe();
      }

      setTimeout(function () {
        if (!scriptLoaded && adBlocker !== 'yes') {
          adBlocker = 'yes';
          showAdBlockerMessage();
          exportAdBlockStatus();
          closeIframe();
        }
      }, 300);
    }

    function showAdBlockerMessage() {
      document.body.style.overflow = 'hidden';

      var overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      overlay.style.zIndex = '9999';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.pointerEvents = 'auto';

      var message = document.createElement('div');
      message.style.position = 'absolute';
      message.style.fontSize = '24px';
      message.style.fontWeight = 'bold';
      message.style.color = 'red';
      message.style.backgroundColor = 'white';
      message.style.padding = '20px';
      message.style.borderRadius = '8px';
      message.style.zIndex = '10000';
      message.textContent = "⚠️ TO CONTINUE, PLEASE DISABLE YOUR AD BLOCKER";

      overlay.appendChild(message);
      document.body.appendChild(overlay);
    }

    function showMainContent() {
      document.getElementById('main-content').style.display = 'block';
    }

    function closeIframe() {
      var iframe = document.querySelector('iframe');
      if (iframe) {
        iframe.remove();
        console.log('🧹 Iframe removed');
      }
    }

    function exportAdBlockStatus() {
      console.log('AdBlocker Status:', adBlocker);
      window.adBlocker = adBlocker;
    }

    window.onload = loadAd;
