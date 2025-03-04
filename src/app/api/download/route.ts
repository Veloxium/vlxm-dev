import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(req: NextRequest) {
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
