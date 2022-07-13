import { AccessScope } from '@guardian/cdk/lib/constants/access';
import type { GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuStack } from '@guardian/cdk/lib/constructs/core';
import { GuPlayApp } from '@guardian/cdk/lib/patterns/ec2-app';
import type { App } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType } from 'aws-cdk-lib/aws-ec2';

export class TestApp extends GuStack {
	private readonly app: string = 'test-app';

	constructor(scope: App, id: string, props: GuStackProps) {
		super(scope, id, props);
		new GuPlayApp(this, {
			app: this.app,
			access: { scope: AccessScope.PUBLIC },
			instanceType: InstanceType.of(InstanceClass.T4G, InstanceSize.MEDIUM),
			certificateProps: {
				domainName: 'prod-guardian.com',
			},
			monitoringConfiguration: {
				snsTopicName: 'alerts-topic-for-my-team',
				http5xxAlarm: {
					tolerated5xxPercentage: 1,
				},
				unhealthyInstancesAlarm: true,
			},
			scaling: { minimumInstances: 1 },
			userData: {
				distributable: {
					fileName: 'app-name.deb',
					executionStatement: `dpkg -i /app-name/app-name.deb`,
				},
			},
		});
	}
}
