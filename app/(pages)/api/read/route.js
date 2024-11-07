import { NextResponse } from "next/server";
import { query } from "../../../lib/db";

export async function GET() {
  try {
    const result = await query("SELECT * FROM phonebook ORDER BY id ASC");
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
