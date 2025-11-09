document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.alert').forEach(li => {
    li.addEventListener('click', () => {
        alert(li.textContent);
    });
});

tarteaucitron.init({
    	  "privacyUrl": "https://feue256.github.io/start/src/html/privacy.html", /* Privacy policy url */
          "bodyPosition": "top", /* top to bring it as first element for accessibility */

    	  "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
    	  "cookieName": "tarteaucitron", /* Cookie name */
    
    	  "orientation": "middle", /* Banner position (top - bottom) */
       
          "groupServices": true, /* Group services by category */
          "showDetailsOnClick": true, /* Click to expand the description */
          "serviceDefaultState": "wait", /* Default state (true - wait - false) */
                           
    	  "showAlertSmall": false, /* Show the small banner on bottom right */
    	  "cookieslist": false, /* Show the cookie list in a mini banner */
          "cookieslistEmbed": false, /* Show the cookie list on the control panel */
                           
          "closePopup": true, /* Show a close X on the banner */

          "showIcon": true, /* Show cookie icon to manage cookies */
          "iconSrc": "https://feue256.github.io/start/assets/images/webp/logo.webp", /* Optionnal: URL or base64 encoded image */
          "iconPosition": "BottomRight", /* Position of the cookie (BottomRight - BottomLeft - TopRight - TopLeft) */

    	  "adblocker": true, /* Show a Warning if an adblocker is detected */
                           
          "DenyAllCta" : true, /* Show the deny all button */
          "AcceptAllCta" : true, /* Show the accept all button */
          "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */
          "alwaysNeedConsent": false, /* Ask the consent for "Privacy by design" services */
                           
    	  "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */

    	  "removeCredit": false, /* Remove credit link */
    	  "moreInfoLink": true, /* Show more info link */

          "useExternalCss": false, /* Expert mode: do not load the tarteaucitron.css file */
          "useExternalJs": false, /* Expert mode: do not load the tarteaucitron js files */

    	  //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */
                          
          "readmoreLink": "https://feue256.github.io/start/src/html/gen.html", /* Change the default readmore link */

          "mandatory": true, /* Show a message about mandatory cookies */
          "mandatoryCta": false, /* Show the disabled accept button when mandatory on */
    
          //"customCloserId": "", /* Optional a11y: Custom element ID used to open the panel */
          
          "googleConsentMode": true, /* Enable Google Consent Mode v2 for Google ads & GA4 */
          "bingConsentMode": true, /* Enable Bing Consent Mode for Clarity & Bing Ads */
          "softConsentMode": false, /* Soft consent mode (consent is required to load the services) */

          "dataLayer": false, /* Send an event to dataLayer with the services status */
          "serverSide": false, /* Server side only, tags are not loaded client side */

          "partnersList": true /* Show the number of partners on the popup/middle banner */
        });

tarteaucitron.user.googleFonts = 'families';
(tarteaucitron.job = tarteaucitron.job || []).push('googlefonts');

(tarteaucitron.job = tarteaucitron.job || []).push('spotify');

document.querySelectorAll('.spotify_player').forEach(el => {
    const spotifyID = el.dataset.spotifyid;
    const width = el.dataset.width || 300;
    const height = el.dataset.height || 380;

    // Skapa iframe
    const iframe = document.createElement('iframe');
    iframe.src = `https://open.spotify.com/embed/track/${spotifyID}`;
    iframe.width = width;
    iframe.height = height;
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    iframe.loading = 'lazy';

    // Lägg in spelaren i div:en
    el.appendChild(iframe);
});


