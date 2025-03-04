import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
    const filePath = path.join(process.cwd(), "src/assets/files/cv.pdf");

    if (!fs.existsSync(filePath)) {
        return new NextResponse("File not found", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'attachment; filename="MochammadFernanda_CV.pdf"',
        },
    });
}
