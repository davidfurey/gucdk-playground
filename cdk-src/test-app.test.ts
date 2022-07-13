import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { TestApp } from './test-app';

describe('The TestApp stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new TestApp(app, 'TestApp', {
			stack: 'test-stack',
			stage: 'TEST',
		});
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
});
