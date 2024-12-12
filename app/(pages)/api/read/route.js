// import { NextResponse } from "next/server";
// import { query } from "../../../lib/db";

// export async function GET() {
// try {
//   const result = await query("SELECT * FROM phonebook ORDER BY id DESC");
//   return NextResponse.json(result.rows, { status: 200 });
// } catch (error) {
//   console.error("Error fetching contacts:", error);
//   return NextResponse.json(
//     { error: "Failed to fetch contacts" },
//     { status: 500 }
//   );
// }
// }

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all contacts from the phonebook table, ordered by id in descending order
    const contacts = await prisma.phonebook.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts", details: error.message },
      { status: 500 }
    );
  } finally {
    // Disconnect the Prisma Client to avoid open connections
    await prisma.$disconnect();
  }
}
