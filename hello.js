
function handle( event ) {
    const response = new Response(
        "Salut la terre !",
        { headers: { "content-type": "text/plain" },  }
    );
    event.respondWith(response);
}

addEventListener("fetch", handle);
