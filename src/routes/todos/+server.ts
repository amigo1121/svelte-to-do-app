import { error, json } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ((rq: RequestEvent)=>{
    return new Response(String("Hello from api"));
})


export const POST: RequestHandler = ((rq: RequestEvent)=>{
    // console.log(json(rq.request.body))
    return json(rq.request);
})