import * as path from "path";
import * as fs from "fs";
import * as crypto from "crypto";

import { IKatieFAQ, IKatieFaqCacheStorage } from "../katie.types";

export class FaqCacheFileSystemStorage implements IKatieFaqCacheStorage {

	private storagePath: string;
	private keepBackups = false;

	constructor(storagePath: string, keepBackups = false) {
		this.storagePath = path.resolve(storagePath);
		if (!fs.existsSync(storagePath)) {
			throw new Error(`Storage path '${this.storagePath}' does not exist`)
		}
		this.keepBackups = keepBackups;
	}

	public async set(language: string, faq: IKatieFAQ): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				if (faq[0].questions.length === 0) {
					throw new Error("FAQ is empty")
				}
			} catch (e) {
				// No need to cache an empty faq
				return resolve();
			}

			fs.writeFile(path.resolve(this.storagePath, language + ".json"), JSON.stringify(faq), (err: NodeJS.ErrnoException | null) => {
				if (err) {
					return reject(err)
				}
				resolve();
			});
			// We can run this async
			this.keepBackup(language, faq);
		})
	}

	public async get(language: string): Promise<IKatieFAQ> {
		return new Promise((resolve, reject) => {
			fs.readFile(path.resolve(this.storagePath, language + ".json"), (err: NodeJS.ErrnoException | null, data: Buffer) => {
				if (err || !data) {
					return resolve(null)
				}
				try {
					const faq: IKatieFAQ = JSON.parse(data.toString());
					return resolve(faq);

				} catch (e) {
					return reject(e)
				}
			});
		})
	}

	public async delete(language: string): Promise<void> {
		return new Promise((resolve, reject) => {
			const faqPath = path.resolve(this.storagePath, language + ".json");
			fs.access(faqPath, (err: NodeJS.ErrnoException | null) => {
				if (err) {
					return resolve();
				}

				fs.unlink(path.resolve(this.storagePath, language + ".json"), (err: NodeJS.ErrnoException | null) => {
					if (err) {
						return reject(`Failed to delete FAQ: ${err}`)
					}
					resolve()
				});
			})
		});
	}

	public async clean(): Promise<void> {
		return new Promise((resolve, reject) => {
			fs.readdir(this.storagePath, (err: NodeJS.ErrnoException | null, files: string[]) => {
				if (err) {
					return reject(err);
				}
				for (const file of files) {
					fs.unlink(path.join(this.storagePath, file), (err: NodeJS.ErrnoException | null) => {
						if (err) {
							return reject(err);
						}
					});
				}

				resolve();
			});
		});
	}

	private keepBackup(language: string, faq: IKatieFAQ): void {
		if (!this.keepBackups) {
			return;
		}

		const backupString = JSON.stringify(faq);
		const faqHash = crypto.createHash('md5').update(backupString).digest('hex');

		const backupPath = path.resolve(this.storagePath, language + "-" + faqHash + ".json")

		fs.access(backupPath, (err: NodeJS.ErrnoException | null) => {
			if (!err) {
				// The file already exists, no need to store it again
				return;
			}

			fs.writeFile(backupPath, backupString, (err: NodeJS.ErrnoException | null) => {
				// We should probably do something if this failed...
			});
		})


	}
}