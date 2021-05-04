var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect; // we are using the "expect" style of Chai

const dbExport = require('../app.js');

describe('workflows ', () => {
	
    const workflowsPath = "./test/workflows/";

	it('Should call the cogs', function(done) {
        var cogs = {};
        cogs.WorkflowBuilder = {};
        cogs.WorkflowBuilder.saveWorkflow = function (workflow){
            done();
        };
        dbExport.deployWorkflows(workflowsPath,cogs);
	}).timeout(3000);	
    
});

describe('forms ', () => {
	
    const formPath = "./test/forms/";

	it('Should call the cogs', function(done) {
        var cogs = {};
        cogs.FormBuilder = {};
        cogs.FormBuilder.saveForm = function (workflow){
            done();
        };
        dbExport.deployForms(formPath,cogs);
	}).timeout(3000);	
});

describe('automation templates  ', () => {
	
    const path = "./test/automation_templates/";
    
	it('Should call the cogs', function(done) {
        var cogs = {};
        cogs.AutomationStudio = {};
        cogs.AutomationStudio.importTemplates = function (workflow){
            done();
        };
        dbExport.deployAutomationTemplates(path,cogs);
	}).timeout(3000);	
});

describe('analytic templates  ', () => {
	
    const path = "./test/analytic_templates/";
    
	it('Should call the cogs', function(done) {
        var cogs = {};
        cogs.MOP = {};
        cogs.MOP.importTemplate = function (workflow,type){
            done();
        };
        dbExport.deployAnalyticTemplates(path,cogs);
	}).timeout(3000);	
});

describe('command templates  ', () => {
	
    const path = "./test/command_templates/";
    
	it('Should call the cogs', function(done) {
        var cogs = {};
        cogs.MOP = {};
        cogs.MOP.importTemplate = function (workflow,type){
            done();
        };
        dbExport.deployCommandTemplates(path,cogs);
	}).timeout(3000);	
});

