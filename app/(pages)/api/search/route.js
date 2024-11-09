import { NextResponse } from "next/server";
import { query } from "../../../lib/db";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const queryTerm = searchParams.get("query"); // get the search term from the query string

  try {
    // If no search term, return all contacts
    if (!queryTerm) {
      const allContacts = await query("SELECT * FROM phonebook");
      return NextResponse.json(allContacts.rows, { status: 200 });
    }

    // Use ILIKE for case-insensitive search across columns
    const searchQuery = `
      SELECT * FROM phonebook
      WHERE 
        contact_name ILIKE $1 OR 
        area_code ILIKE $1 OR
        phone_number ILIKE $1 OR
        email ILIKE $1 OR
        address  ILIKE $1 OR 
        id::text ILIKE $1
    `;

    const values = [`%${queryTerm}%`]; // the search term wrapped in wildcards
    const result = await query(searchQuery, values);

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error("Error in search query:", error);
    return NextResponse.json(
      { message: "Error retrieving data", details: error.message },
      { status: 500 }
    );
  }
}
