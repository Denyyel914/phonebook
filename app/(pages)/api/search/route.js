import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const queryTerm = searchParams.get("query");

  try {
    let contacts;

    if (!queryTerm) {
      // If no search term, return all contacts
      contacts = await prisma.phonebook.findMany();
    } else {
      // Case-insensitive search using `contains` with `mode: 'insensitive'`
      contacts = await prisma.phonebook.findMany({
        where: {
          OR: [
            { contactName: { contains: queryTerm, mode: "insensitive" } },
            { areaCode: { contains: queryTerm, mode: "insensitive" } },
            { phoneNumber: { contains: queryTerm, mode: "insensitive" } },
            { email: { contains: queryTerm, mode: "insensitive" } },
            { address: { contains: queryTerm, mode: "insensitive" } },
            { id: { equals: parseInt(queryTerm) || undefined } },
          ],
        },
        orderBy: { id: "desc" },
      });
    }

    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error("Error retrieving data:", error);
    return NextResponse.json(
      { message: "Error retrieving data", details: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Ensure the Prisma Client connection is closed
  }
}
