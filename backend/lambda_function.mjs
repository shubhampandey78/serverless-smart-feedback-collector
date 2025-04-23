/*
This code:
1. Takes the form data
2. Logs it (just to see if it works)
3. Returns a success message to the frontend
*/

export async function handler(event) {
    const feedback = JSON.parse(event.body);
    console.log("Received feedback:", feedback);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Feedback received successfully!" }),
    };
}
  