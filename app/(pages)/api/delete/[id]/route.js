// export async function DELETE(request) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get("id");

//   if (!id) {
//     return NextResponse.json(
//       { error: "Contact ID is required" },
//       { status: 400 }
//     );
//   }

//   try {
//     const result = await query(
//       "DELETE FROM phonebook WHERE id = $1 RETURNING *",
//       [id]
//     );

//     if (result.rowCount === 0) {
//       return NextResponse.json({ error: "Contact not found" }, { status: 404 });
//     }

//     return NextResponse.json(
//       { message: "Contact deleted successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error deleting contact:", error);
//     return NextResponse.json(
//       { error: "Failed to delete contact", details: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { query } from "../../../../lib/db"; // Ensure this path is correct

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    const result = await query(
      "DELETE FROM phonebook WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: "Contact not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Contact deleted successfully", contact: result.rows[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json(
      { error: "Failed to delete contact", details: error.message },
      { status: 500 }
    );
  }
}
