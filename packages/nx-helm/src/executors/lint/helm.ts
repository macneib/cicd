
import * as exec from './exec';
import * as semver from 'semver';


export async function isAvailable(): Promise<boolean> {
  return await exec.exec(`helm`).then((res) => {
    if (res.stderr != '' && !res.success) {
      return false;
    }
    return res.success;
  });
}

export async function getVersion(): Promise<string> {
  return await exec.exec(`helm`, ['version'], true).then((res) => {
    if (res.stderr != '' && !res.success) {
      throw new Error(res.stderr);
    }
    return parseVersion(res.stdout);
  });
}

export async function parseVersion(stdout: string): Promise<string> {
  const matches = /"v?([0-9.]+)/.exec(stdout);
  if (!matches) {
    throw new Error(`Cannot parse Helm version`);
  }
  return semver.clean(matches[1]);
}
