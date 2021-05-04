'use strict';

/**
 * @version 3.0
 * @author Anthony Paulin <apaulin@cisco.com>
 */
const log = require("log");
const fs = require('fs');
const DELAY = 2000;

class DbExport { 

	deployWorkflows(workflowsPath,cogs){
		asyncCallWorkflows(workflowsPath,cogs);
	}

	deployForms(formsPath,cogs){
		asyncCallForms(formsPath,cogs);
	}

	deployCommandTemplates(templatesPath,cogs){
		asyncCallTemplates(templatesPath,cogs,"templates");
	}

	deployAnalyticTemplates(templatesPath,cogs){
		asyncCallTemplates(templatesPath,cogs,"analytics");
	}

	deployAutomationTemplates(templatesPath,cogs){
		asyncCallAutomationTemplates(templatesPath,cogs);
	}
}

function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

async function asyncCallTemplates(templatesPath,cogs,type) {
	log.info("Deploy templates "+type);
	await sleep(DELAY);
	fs.readdir(templatesPath, function (err, files) {
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		} 
		//listing all files using forEach
		files.forEach((file) => {
			var template = require(templatesPath+file);
			cogs.MOP.importTemplate(template,type, function(result){
				log.info(result);
			});
		});
	});
}

async function asyncCallAutomationTemplates(AutomationTemplatePath,cogs) {
	await sleep(DELAY);
	fs.readdir(AutomationTemplatePath, function (err, files) {
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		} 
		//listing all files using forEach
		files.forEach((file) => {
			var template = require(AutomationTemplatePath+file);
			//We need to create a list
			//var templates = {"templates":[template]};
			/*cogs.AutomationStudio.importTemplates(template, function(result){
				log.info(result);
			});*/
			cogs.AutomationStudio.createTemplate(template, function(result){
				log.info(result);
			});
		});
	});
}

async function asyncCallWorkflows(workflowsPath,cogs) {
	log.info("Deploy workflows");
	await sleep(DELAY);
	fs.readdir(workflowsPath, function (err, files) {
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		} 
		//listing all files using forEach
		files.forEach((file) => {
			var workflow = require(workflowsPath+file);
			cogs.WorkflowBuilder.saveWorkflow(workflow, function(result){
				log.info(result);
			});
		});
	});
}

async function asyncCallForms(formsPath,cogs) {
	log.info("Deploy forms");
	await sleep(DELAY);
	fs.readdir(formsPath, function (err, files) {
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		} 
		//listing all files using forEach
		files.forEach((file) => {
			var form = require(formsPath+file);
			cogs.FormBuilder.saveForm(form, function(result){
				log.info(result);
			});
		});
	});
}

//Export the module to pronghorn
module.exports = new DbExport();