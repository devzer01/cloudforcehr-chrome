# cloudforcehr-chrome
A Small extension to allow Chrome users to use cloudforcehr

All this extension does it adjust a hidden html form element value. 
if you look at the code from https://clients.cloudforcehr.com/CFH/HM/browser.js 
you can clearly see that the compatibility flag is being sent from the client.

```
document.getElementById("hidIsCompatible").value = "yes";
```

the javascript file is app/scripts/index.js

if you don't know how to build a chrome extension you can use the pre-built version from /build

Tested with Chrome Version 40.0.2214.115 (64-bit) Ubuntu 14.04
