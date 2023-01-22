import app from "../server.mjs";
import { PORT } from "../config/index.mjs";
import connect from "../db/index.mjs";

app.listen(PORT, () => {
    connect();
    console.log(`Server started at port ${PORT}`);
});