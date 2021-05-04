import * as core from '@nx-tools/core';

import { LintExecutorSchema } from './schema';

let _defaultContext: string;

export interface Inputs {
  path: string;
  // setString: string;
  strict: boolean;
  withSubcharts: boolean;
}


export async function getInputs(defaultContext: string, options: LintExecutorSchema): Promise<Inputs> {
  return {
    // context: core.getInput('context', options.context) || defaultContext,
    path: core.getInput('file', options.path),
    // setString: await getInputList('build-args', options.setString, true),
    strict: /true/i.test(core.getInput('no-cache', core.parseBoolean(options.strict))),
    withSubcharts: /true/i.test(core.getInput('pull', core.parseBoolean(options.withSubcharts))),
  };
}


export function defaultContext(): string {
  if (!_defaultContext) {
    _defaultContext = '.';
  }
  return _defaultContext;
}


export async function getArgs(inputs: Inputs, defaultContext: string, helmVersion: string): Promise<Array<string>> {
  const args: Array<string> = ['lint'];
  // eslint-disable-next-line prefer-spread
  args.push.apply(args, await getLintArgs(inputs, defaultContext, helmVersion));
  // eslint-disable-next-line prefer-spread
  // args.push.apply(args, await getCommonArgs(inputs));
  // args.push(inputs.context);
  return args;
}

async function getLintArgs(inputs: Inputs, defaultContext: string, helmVersion: string): Promise<Array<string>> {
  const args: Array<string> = ["./apps/my-app/chart/my-app"];

  return args;
}



export async function getInputList(name: string, fallback?: string[], ignoreComma?: boolean): Promise<string[]> {
  const res: Array<string> = [];

  const items = core.getInput(name);
  if (items == '') {
    return fallback ?? res;
  }

  // for (const output of (await csvparse(items, {
  //   columns: false,
  //   relaxColumnCount: true,
  //   skipLinesWithEmptyValues: true,
  // })) as Array<string[]>) {
  //   if (output.length == 1) {
  //     res.push(output[0]);
  //     continue;
  //   } else if (!ignoreComma) {
  //     res.push(...output);
  //     continue;
  //   }
  //   res.push(output.join(','));
  // }

  return res.filter((item) => item).map((pat) => pat.trim());
}
