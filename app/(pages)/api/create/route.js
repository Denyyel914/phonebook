// import { query } from "../../../lib/db";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { contact_name, area_code, phone_number, email, address } = req.body;

//     try {
//       const result = await query(
//         "INSERT INTO users (contact_name, area_code, phone_number, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *",
//         [contact_name, area_code, phone_number, email, address]
//       );

//       res.status(200).json({ message: "User added", data: result.rows[0] });
//     } catch (error) {
//       console.error("Error inserting data:", error);
//       res.status(500).json({ error: "Database insertion failed" });
//     }
//   } else {
//     res.status(405).json({ error: `Method ${req.method} not allowed` });
//   }
// }

//
import { NextResponse } from "next/server";
import { query } from "../../../lib/db";

export async function POST(request) {
  try {
    const { contact_name, area_code, phone_number, email, address } =
      await request.json();

    const result = await query(
      "INSERT INTO phonebook (contact_name, area_code, phone_number, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [contact_name, area_code, phone_number, email, address]
    );

    return NextResponse.json(
      {
        message: "Contact added successfully",
        contact: result.rows[0],
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
  }
}
