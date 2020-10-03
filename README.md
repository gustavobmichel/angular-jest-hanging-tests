# Description of the issue

I have an example where a service is injected into a component without the stub/mock for the service, and the test ends up hanging.

Based on this [thread](https://github.com/thymikee/jest-preset-angular/issues/288), we need to set `"emitDecoratorMetadata": true,` in the `tsconfig.spec.json`.

As soon as I add it, the test ends up hanging.

In order to test it, you just need to run `npm install` and `ng test`.

## Other information

I believe this was introduced in the latest versions of Jest, because once I rolled back to older versions of Jest and Preset it is not an issue.

I rolled back to a version of Jest 26.0.1 and keeping the dependencies on that version it is no longer an issue.

However, that means I cannot re-generate the `package-lock.json` because it will update to a version of 26.1+ and this is when I started noticing the issue.

# Version

Angular 10
