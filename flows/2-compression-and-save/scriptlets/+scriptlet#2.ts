import { cp } from "node:fs/promises";
import path from "node:path";
import sharp from 'sharp'

//#region generated meta
type Inputs = {
    input: string;
    out: string;
};
type Outputs = {
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Outputs> {
    const ext = path.extname(params.input);
    const out = path.join(params.out, path.basename(params.input));
    if (ext.endsWith("png")) {
        await sharp(params.input).png({ quality: 75 }).toFile(out);
    } else {
        await cp(params.input, out);
    }
    return;
};
