// import { NextResponse } from "next/server";
// import { query } from "../../../../lib/db";

// export async function PUT(request, { params }) {
//   const { id } = params; // Retrieve the contact ID from the URL params

//   try {
//     const { contact_name, area_code, phone_number, email, address } =
//       await request.json(); // Get data from the request body

//     const result = await query(
//       "UPDATE phonebook SET contact_name = $1, area_code = $2, phone_number = $3, email = $4, address = $5 WHERE id = $6 RETURNING *",
//       [contact_name, area_code, phone_number, email, address, id]
//     );

//     if (result.rowCount === 0) {
//       return NextResponse.json(
//         { message: "Contact not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { message: "Contact updated successfully", contact: result.rows[0] },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error updating contact:", error);
//     return NextResponse.json(
//       { error: "Failed to update contact", details: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  const { id } = params; // Retrieve the contact ID from the URL params

  try {
    const { contact_name, area_code, phone_number, email, address } =
      await request.json();

    // Update the record using Prisma
    const updatedContact = await prisma.phonebook.update({
      where: { id: parseInt(id) }, // Ensure `id` is parsed as an integer
      data: {
        contactName: contact_name,
        areaCode: area_code,
        phoneNumber: phone_number,
        email: email,
        address: address,
      },
    });

    return NextResponse.json(
      { message: "Contact updated successfully", contact: updatedContact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating contact:", error);

    // Handle the case where the contact isn't found
    if (error.code === "P2025") {
      return NextResponse.json(
        { message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Failed to update contact", details: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Close the Prisma Client connection
  }
}
