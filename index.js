const core = require('@actions/core');
const github = require('@actions/github');

try {
  const name = core.getInput('name');
  console.log(`Hello ${name}!`);
  const time = (new Date()).toTimeString();
  core.setOutput('time', time);
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`event payload ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
