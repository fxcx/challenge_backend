import swaggerJSDoc from "swagger-jsdoc";
import path from "path"

const __dirname = path.resolve();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "challenge-api-backend",
            version: "1.0.0",
        },
    },
    apis: [`${path.join(__dirname, "./routes/*")}`],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;