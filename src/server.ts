import app from "./app";
import { env } from "./app/config/env";


async function server() {
    app.listen(env.PORT,()=>{
        console.log(`Server is running on port ${env.PORT}`);
        console.log(`Database URL is ${env.DB_URL}`);
    })
}

server().catch((err) => {
    console.error("Error starting server:", err);
    process.exit(1);
});
// Compare this snippet from src/app/config/env.ts:

