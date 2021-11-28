import got from "got";
import * as crypto from "crypto";

import { IKatieAnswer, IKatieConfig, IKatieExpertAnswer, IKatieExpertQuestion, IKatieFAQ, IKatieQuestion, IKatieExpertQuestionStorage, IKatieFaqCacheStorage } from "./katie.types";
import { ExpertQuestionMemoryStorage } from "./storage/expert-question-memory.storage";

export class Katie {

	private config: IKatieConfig;
	private expertQuestionStorage: IKatieExpertQuestionStorage;
	private faqCacheStorage: IKatieFaqCacheStorage;

	constructor(config: IKatieConfig) {
		this.config = Object.assign({
			hostname: "ukatie.com",
			defaultLanguage: "en"
		}, config);

		this.expertQuestionStorage = config.expertQuestionStorage || new ExpertQuestionMemoryStorage();

		this.faqCacheStorage = config.faqCacheStorage || null;
	}

	public async askQuestion(question: IKatieQuestion): Promise<IKatieAnswer> {

		return new Promise<IKatieAnswer>(async (resolve, reject) => {
			try {
				const answer: IKatieAnswer = await got(`https://${this.config.hostname}/api/v2/ask`, {
					searchParams: {
						question: question.question,
						language: question.language || this.config.defaultLanguage,
						domainId: this.config.domainId
					}
				}).json();

				resolve(answer);

			} catch (e) {
				reject(e)
			}
		})

	}

	public async getFAQ(language: string): Promise<IKatieFAQ> {

		return new Promise<IKatieFAQ>(async (resolve, reject) => {
			try {
				const answer: IKatieFAQ = await got(`https://${this.config.hostname}/api/v2/faq`, {
					searchParams: {
						language: language || this.config.defaultLanguage,
						context: this.config.domainId,
						"uuid-only": false
					}
				}).json();

				await this.cacheFaq(language, answer);

				resolve(answer);

			} catch (e) {
				const faq = await this.loadFaqFromCache(language);
				if (faq) {
					return resolve(faq)
				}

				reject(e)
			}
		})
	}

	public async askExpert(question: IKatieExpertQuestion): Promise<void> {

		return new Promise<void>(async (resolve, reject) => {
			try {

				const secureToken = crypto.randomBytes(64).toString('hex');

				await this.expertQuestionStorage.set(secureToken, question.email);

				await got.post(`https://${this.config.hostname}/api/v1/ask/${this.config.domainId}`, {
					json: {
						question: question.question,
						language: question.language || this.config.defaultLanguage,
						optionalContactInfo: {
							webhookEchoData: secureToken
						}
					}
				}).json();

				resolve();

			} catch (e) {
				reject(e)
			}
		})
	}

	public async onExpertAnswer(answer: IKatieExpertAnswer): Promise<IKatieAnswer> {

		return new Promise<IKatieAnswer>(async (resolve, reject) => {
			try {

				const email = await this.expertQuestionStorage.get(answer["echo-data"]);

				answer.email = email;

				resolve(answer);

			} catch (e) {
				reject(e)
			}
		})
	}

	private async cacheFaq(language: string, faq: IKatieFAQ) {
		try {
			if (this.faqCacheStorage) {
				await this.faqCacheStorage.set(language, faq);
			}
		} catch (e) {
			console.error(e);
		}
	}

	private async loadFaqFromCache(language: string): Promise<IKatieFAQ> {
		try {
			if (this.faqCacheStorage) {
				const faq = await this.faqCacheStorage.get(language);
				return faq;
			}
		} catch (e) {
			console.error(e);
		}

		return null;
	}
}