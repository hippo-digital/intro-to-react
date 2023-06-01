import {promisify} from "node:util";
const exec = promisify(require('node:child_process').exec);

export const POST = async (request: Request, { params }: { params: { test: string }; }) => {
    const testToRun = params.test
    try {
        const output = await exec(`NODE_ENV=test jest '${testToRun}.test.tsx' --noStackTrace`)
        return new Response(JSON.stringify({success:true, message:output.stdout}), {
            status: 200
        });
    } catch(e) {
        return new Response(JSON.stringify({success:false, message:e.stderr}), {
            status: 200
        });
    }
}
