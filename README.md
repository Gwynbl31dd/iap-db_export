# IAP database export

INTRODUCTION
------------

This module is used to load the data to IAP.

REQUIREMENTS
------------

In order to integrate this module you need to install its dependencies.

You will also have to use pronghorn (This module uses IAP cogs)
   
INSTALLATION
------------

```
npm install
```
 
CONFIGURATION
-------------
 
/

FEATURES 
-------------

* Load workflows
* Load forms
   
USAGE
-------------

```javascript
'use strict';

// Add the module
const iapDbExport = require('iap-db_export');

// provide a directory for the forms and workflows
const FORM_PATH = __dirname+'/db/forms/';
const WORKFLOW_PATH = __dirname+'/db/workflows/';

class MyClass { 

    constructor() {
        // Call the DB export

        //You need to provide the cogs object from IAP/pronghorn

        //Deploy the workflows
		iapDbExport.deployWorkflows(WORKFLOW_PATH,cogs);
        //Deploy the forms
		iapDbExport.deployForms(FORM_PATH,cogs);
        // Deploy the analytic templates
		iapDbExport.deployAnalyticTemplates(ANALYTIC_PATH,cogs);
        //Deploy the templates
		iapDbExport.deployAutomationTemplates(AUTOMATION_PATH,cogs);
        //Deploy the command templates
		iapDbExport.deployCommandTemplates(COMMAND_PATH,cogs);
	}
}
//Export the module to pronghorn
module.exports = new MyClass();
```

TEST
---------------

Make sure you installed the dev dependencies

```bash
npm install --only=dev
```

Run the tests

```bash
npm test
```

TROUBLESHOOTING
---------------

/

FAQ
---

/

KNOWN ISSUES
---------------

* deployAnalyticTemplates and deployCommandTemplates could create duplications
* deployAutomationTemplates doesn't currently work

MAINTAINERS
-----------

Current maintainers:
 * Anthony Paulin (apaulin@cisco.com)

# TEST1
