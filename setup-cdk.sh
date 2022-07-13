#!/bin/bash

mkdir .cdk-dev
cd .cdk-dev
npx @guardian/cdk@latest new --app test-app --stack test-stack --stage CODE --package-manager npm

rm cdk/bin/cdk.ts
rm cdk/lib/__snapshots__/test-app.ts.snap
rm cdk/lib/test-app.test.ts
rm cdk/lib/test-app.ts

ln -s cdk/bin/cdk.ts ../cdk/cdk.ts
ln -s cdk/lib/__snapshots__/test-app.ts.snap ../cdk/test-app.ts.snap
ln -s cdk/lib/test-app.test.ts ../cdk/test-app.test.ts
ln -s cdk/lib/test-app.ts ../cdk/test-app.ts
