import type { Options } from "tsup";
import jsonConfig from '@repo/typescript-config/tsup.config.json'  assert { type: 'json' };

export const tsup: Options = jsonConfig as Options;