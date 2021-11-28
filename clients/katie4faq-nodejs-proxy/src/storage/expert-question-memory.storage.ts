import { IKatieExpertQuestionStorage } from "../katie.types";

export class ExpertQuestionMemoryStorage implements IKatieExpertQuestionStorage {

	private storage: { [key: string]: string } = {};

	public async set(key: string, email: string): Promise<void> {
		this.storage[key] = email;
	}

	public async get(key: string): Promise<string> {
		return this.storage[key];
	}

	public async delete(key: string): Promise<void> {
		delete this.storage[key];
	}

	public async clean(): Promise<void> {
		this.storage = {};
	}
}