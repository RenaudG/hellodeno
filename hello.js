
function handle( event ) {
    const response = new Response(
        "Salut la terre - de lapart de : " + Deno.env.get('MYKEY'),
        { headers: { "content-type": "text/plain" },  }
    );
    event.respondWith(response);
}

addEventListener("fetch", handle);
