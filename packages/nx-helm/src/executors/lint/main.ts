import * as core from '@nx-tools/core';
// import { config } from 'dotenv';
import * as os from 'os';
import * as helm from './helm';
import * as context from './context';

import * as exec from './exec';
import { LintExecutorSchema } from './schema';

export default async function run(options: LintExecutorSchema): Promise<{ success: true }> {
  // config();

  if (os.platform() !== 'linux' && os.platform() !== 'darwin') {
    throw new Error(`Only supported on linux and darwin platform`);
  }

  // disabled until I can find a way to silence on success
  // if (!(await helm.isAvailable())) {
  //   throw new Error(`Helm is required. See https://helm.sh/docs/intro/install/ to set up helm.`);
  // }

  // get version of helm
  const helmVersion = await helm.getVersion();
  core.info(`📣 Helm version: ${helmVersion}`);


  // const defContext = context.defaultContext();
  const inputs: context.Inputs = await context.getInputs(options);


  core.info(`🏃 Starting lint...`);
  const args: string[] = await context.getArgs(inputs);

  const helmCmd = `helm ${args.join(' ')}`;

  await exec.exec(`sh -c "${helmCmd}" `).then((res) => {
    if (res.stderr != '' && !res.success) {
      throw new Error(`helm call failed with: ${res.stderr}`);
    }
  });

  return { success: true };
}

