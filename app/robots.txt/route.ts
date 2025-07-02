export async function GET() {
    const isProduction = process.env.NODE_ENV === 'production';

    const content = isProduction
        ? `
  User-agent: *
  Disallow: /api/
  Disallow: /webhook/
  Disallow: /admin/
  `
        : `
  User-agent: *
  Disallow: /
  `;

    return new Response(content.trim(), {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
