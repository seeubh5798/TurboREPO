import express from "express";
const app = express();
import { name } from "@repo/common/config";
app.get("/" , (req: any, res: any)=>{
     res.json({"msg":"health check" , name})
});

app.listen(3003);