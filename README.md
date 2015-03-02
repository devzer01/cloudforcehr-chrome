# cloudforcehr-chrome
A Small extension to allow Chrome users to use cloudforcehr

All this extension does it adjust a hidden html form element value. 
if you look at the code from https://clients.cloudforcehr.com/CFH/HM/browser.js 
you can clearly see that the compatibility flag is being sent from the client.

```javascript
document.getElementById("hidIsCompatible").value = "yes";
```
# build 
- you can build the extension your self from chrome.

# install
- download the latest crx file from build directory and drag it to chrome://extensions

# misc
- Tested with Chrome Version 40.0.2214.115 (64-bit) Ubuntu 14.04

# bugs
- please create an issue on github if you find any bugs

# disclaimer 
i am not affiliated with CloudForce HR please use this software at your own risk. Some functions of website may not work if the developers of CloudForce HR has not tested them with chrome. 
