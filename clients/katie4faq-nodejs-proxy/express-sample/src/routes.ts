import * as express from "express";

import { Katie } from "@ukatie/proxy"

export class Routes {

    private static katie = new Katie({
        domainId: "<YOUR_KATIE_DOMAIN_ID>",
        hostname: "ukatie.com"
    });

    public static async register(app: express.Application) {

        app.get("/api/v1/ask", async (req: express.Request, res: express.Response) => {

            if (req.query.email) {
                await Routes.katie.askExpert({
                    question: req.query.question,
                    language: req.query.language,
                    email: req.query.email
                })
                res.send()
                return;
            }

            const answer = await Routes.katie.askQuestion({
                question: req.query.question,
                language: req.query.language
            })

            res.send(answer)
        });

        app.get("/api/v2/faq", async (req: express.Request, res: express.Response) => {

            const faq = await Routes.katie.getFAQ(req.query.language);

            res.send(faq)
        });

        app.post("/api/v2/expert-answer", async (req: express.Request, res: express.Response) => {
            console.log("Webhook called", JSON.stringify(req.body, null, 2));

            const answer = await Routes.katie.onExpertAnswer(req.body);

            console.log(" --> answer", JSON.stringify(answer, null, 2));

            // Send email answer to user here
            res.send();
        })
    };

}