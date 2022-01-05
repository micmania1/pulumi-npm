const fetch = require('node-fetch');

const pulumiRepo = 'https://api.github.com/repos/pulumi/pulumi';

module.exports = async function getLatestPulumiVersion() {
  const options = {};
  if (process.env.GITHUB_TOKEN) {
    options.headers = {
      authorization: `token ${process.env.GITHUB_TOKEN}`
    };
  }

  const tags = await fetch(`${pulumiRepo}/tags`, options).then(res =>
    res.json()
  );

  const latestVersion2Tag = tags.filter(tag => tag.name.startsWith('v3'))[0];
  return latestVersion2Tag.name;
};
