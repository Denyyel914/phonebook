import { NextResponse } from "next/server";
import { query } from "../../../../lib/db";

export async function PUT(request, { params }) {
  const { id } = params; // Retrieve the contact ID from the URL params

  try {
    const { contact_name, area_code, phone_number, email, address } =
      await request.json(); // Get data from the request body

    const result = await query(
      "UPDATE phonebook SET contact_name = $1, area_code = $2, phone_number = $3, email = $4, address = $5 WHERE id = $6 RETURNING *",
      [contact_name, area_code, phone_number, email, address, id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Contact updated successfully", contact: result.rows[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating contact:", error);
    return NextResponse.json(
      { error: "Failed to update contact", details: error.message },
      { status: 500 }
    );
  }
}
