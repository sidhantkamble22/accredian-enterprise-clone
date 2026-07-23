export async function POST(request) {

  const body = await request.json();

  console.log("Lead Data:", body);

  return Response.json({
    success: true,
    message: "Lead submitted successfully",
    data: body,
  });
}