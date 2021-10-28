
function handle( event ) {
    const response = new Response(
        "<html><body>Salut la terre - de lapart de : " + Deno.env.get('MYKEY') + "</body></html>",
        { headers: { "content-type": "text/html" },  }
    );
    event.respondWith(response);
}

addEventListener("fetch", handle);
