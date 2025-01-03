export async function GET() {
    const response = await fetch('https://api.carrismetropolitana.pt/municipalities');
    const data = await response.json();
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    });
}