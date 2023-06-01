import {promisify} from "node:util";
import Os from 'os';
const exec = promisify(require('node:child_process').exec);

export const POST = async (request: Request, { params }: { params: { test: string }; }) => {
    const testToRun = params.test
    try {
        const envSet = Os.platform() == "win32" ? "set" : "export"
        const output = await exec(`${envSet} NODE_ENV=test; jest '${testToRun}.test.tsx' --noStackTrace`)
        return new Response(JSON.stringify({success:true, message:output.stdout}), {
            status: 200
        });
    } catch(e) {
        return new Response(JSON.stringify({success:false, message:e.stderr}), {
            status: 200
        });
    }
}
