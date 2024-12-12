import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { contact_name, area_code, phone_number, email, address } =
      await request.json();

    // Create a new contact using Prisma
    const newContact = await prisma.phonebook.create({
      data: {
        contactName: contact_name,
        areaCode: area_code,
        phoneNumber: phone_number,
        email: email,
        address: address,
      },
    });

    return NextResponse.json(
      {
        message: "Contact added successfully",
        contact: newContact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting data into phonebook:", error);
    return NextResponse.json(
      {
        error: "Failed to add contact",
        details: error.message,
      },
      { status: 500 }
    );
  } finally {
    // Disconnect the Prisma Client to avoid open connections
    await prisma.$disconnect();
  }
}
