# Katie Proxy Library

## Introduction

This is a NodeJS proxy library for the Katie FAQ service, written in Typescript. Its purpose is to proxy requests to Katie through a web server under your own control and to hide personal information of your website visitors from Katie.

The Katie Proxy Library implements the v1 API of Katie and provides an additional caching service to cache FAQs on your server.

Each expert question generates a unique UUID and stores it on your server, together with the email address of the user. This UUID instead of the email address is passed to Katie alongside the user's question. A new UUID is generated for each question separately, two questions from the same email address produce two different UUIDs. 

Questions answered by experts in Katie trigger a web hook call to the proxy. This web hook call contains the UUID associating the question with the user's email address. The proxy looks up the UUID in the storage to find the user's email address. The proxy may then forward the answer to the user's email address.

## Requirements

- NodeJS >= 14
- Typescript >= 4.35
  
## Build

```
npm install
npm run build:release
```

This creates an NPM package `ukatie-proxy-<VERSION>.tgz` in the root folder of the project

## Install

In our project, install the release package

```
npm install <PATH_TO_KATIE_PROXY_LIBRARY>/ukatie-proxy-<VERSION>.tgz
```

**TODO:** Publish on NPM 

## Sample project

See sample project in the `express-sample` folder

## Usage

Create an instance of the proxy and configure it. You need to provide at least your Katie `<KATIE_DOMAIN_ID>` and Katies domain name (defaults to `ukatie.com`)

```Typescript
const katie = new Katie({
  domainId: "<KATIE_DOMAIN_ID>",
  hostname: "ukatie.com"
});
```

The Katie instance has three public functions:

```Typescript
class Katie {
  // Loads the FAQ for a given language
  getFAQ(language: string): Promise<IKatieFAQ>;

  // Forwards a question to Katie's service and receives an answer
  askQuestion(question: IKatieQuestion): Promise<IKatieAnswer>;

  // Forwards a question to an expert to Katie's service
	// It replaces the user's email address with a unique UUID
  askExpert(question: IKatieExpertQuestion): Promise<void>;

  // Upon receiving a webhook callback from Katie, 
  // this function respolves the UUID to the user's email address
  onExpertAnswer(answer: IKatieExpertAnswer): Promise<IKatieAnswer>;
}
```

## Advanced

### Custom Expert Question Storage

By default, the library stores the pending expert question answers in memory. You can create your own storage by implementing the `IKatieExpertQuestionStorage` interface:

```Typescript
export interface IKatieExpertQuestionStorage {
  set(key: string, email: string): Promise<void>;
  get(key: string): Promise<string>;
  delete(key: string): Promise<void>;
  clean(): Promise<void>;
}
```

You need to pass your own expert question storage to the `Katie` constructor:

```Typescript
const customExpertQuestionsStorage: IKatieExpertQuestionStorage = ...

const katie = new Katie({
  domainId: "<KATIE_DOMAIN_ID>",
  hostname: "ukatie.com",
  expertQuestionStorage: customExpertQuestionsStorage
});
```

### Optional FAQ Caching Mechanism

FAQs are always loaded in real-time from Katie's server. You can however cache the response and serve the latest response in case something went wrong with the request to Katie's server.

The library comes with two different built-in FAQ cache storages: `FaqCacheMemoryStorage` stores the FAQ in memory, `FaqCacheFileSystemStorage` stores it on your local file system. 


```Typescript
const faqCache = new FaqCacheFileSystemStorage("/path/to/storage/folder")

const katie = new Katie({
  domainId: "<KATIE_DOMAIN_ID>",
  hostname: "ukatie.com",
  faqCacheStorage: faqCache
});
```

You may also implement your own FaqCache service by implementing the `IKatieFaqCacheStorage` interface.
