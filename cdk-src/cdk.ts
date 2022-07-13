import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { TestApp } from '../lib/test-app';

const app = new App();

new TestApp(app, 'TestApp-CODE', { stack: 'test-stack', stage: 'CODE' });