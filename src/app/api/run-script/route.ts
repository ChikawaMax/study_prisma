import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function GET(req: NextRequest) {
    return new Promise((resolve) => {
        exec('npx ts-node prisma/script/script.ts', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing script: ${error.message}`);
                resolve(NextResponse.json({ error: error.message }, { status: 500 }));
                return;
            }
            if (stderr) {
                console.error(`Script stderr: ${stderr}`);
                resolve(NextResponse.json({ error: stderr }, { status: 500 }));
                return;
            }
            console.log(`Script stdout: ${stdout}`);
            resolve(NextResponse.json({ message: stdout }, { status: 200 }));
        });
    });
}
