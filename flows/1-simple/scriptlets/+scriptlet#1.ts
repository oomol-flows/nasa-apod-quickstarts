//#region generated meta
type Inputs = {
};
type Outputs = {
    explanation: string;
};
//#endregion
import type { Context } from "@oomol/types/oocana";

export default async function(
    params: Inputs,
    context: Context<Inputs, Outputs>
): Promise<Outputs> {
    const resp = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&thumbs=true");
    const data = await resp.json();
    if (!resp.ok) {
        throw new Error(JSON.stringify(data));
    }
    context.preview({ type: "image", data: data.thumbnail_url || data.url });
    return data;
};