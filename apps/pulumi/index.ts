import * as pulumi from '@pulumi/pulumi';
import * as vault from '@pulumi/vault';

// Import config
const config = new pulumi.Config();

const secretValue = config.requireSecret('secretValue');



const example = new vault.Policy('example', {
  policy: `path "secret/my_app" {
  capabilities = ["update"]
}
`,
});
