import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { getSession, destroySession } from "~/lib/session";

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  
  return redirect("/admin/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}