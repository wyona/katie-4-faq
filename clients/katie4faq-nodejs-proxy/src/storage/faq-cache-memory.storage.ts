import { IKatieFAQ, IKatieFaqCacheStorage } from "../katie.types";

export class FaqCacheMemoryStorage implements IKatieFaqCacheStorage {

	private storage: { [key: string]: IKatieFAQ } = {};

	public async set(key: string, faq: IKatieFAQ): Promise<void> {
		this.storage[key] = faq;
	}

	public async get(key: string): Promise<IKatieFAQ> {
		return this.storage[key];
	}

	public async delete(key: string): Promise<void> {
		delete this.storage[key];
	}

	public async clean(): Promise<void> {
		this.storage = {};
	}
}