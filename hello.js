
function handle( event ) {
    const response = new Response(
        "<html><body><h2>Salut la terre - de lapart de : " + Deno.env.get('MYKEY') + "</h2></body></html>",
        { headers: { "content-type": "text/html; charset=utf-8" },  }
    );
    event.respondWith(response);
}

addEventListener("fetch", handle);
