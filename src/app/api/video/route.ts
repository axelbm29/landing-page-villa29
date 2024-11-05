import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
    const videoPath = path.join(process.cwd(), 'src', 'app', 'assets', 'video_primera_section.mp4');
    
    // Verifica si el archivo existe
    if (fs.existsSync(videoPath)) {
        const videoBuffer = fs.readFileSync(videoPath);
        return new NextResponse(videoBuffer, {
            headers: {
                'Content-Type': 'video/mp4',
                'Content-Length': videoBuffer.length.toString(),
            },
        });
    } else {
        return NextResponse.error();
    }
}
