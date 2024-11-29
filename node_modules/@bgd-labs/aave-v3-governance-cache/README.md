# Experimental: v3-governance-cache :ghost:

## About

Handling cache in decentralized applications is usually quite painful as the options of dynamic data storage in the space is limited.
Therefore applications usually go either:

- "fully decentralized", which usually results in repetitive work on the client side or
- "fully centralized"

Applications around aave governance exist on both sides of the spectrum, but there's currently no agnostic solution that fits both needs.
To close this gap `@bgd-labs/aave-v3-governance-cache`(temporary name) offers a common interface and a variety of provider for interfaces to go their own way.

## Providers

### Local Cache

The `customStorageProvider` is a simple file based cache that fetches "new" data based on the last seen block and stores them in json files per proposal.
If no cache is found the cache will try to refresh automatically.

```
import {customStorageProvider} from '@bgd-labs/aave-v3-governance-cache/localCache';
import {customStorageProvider} from '@bgd-labs/aave-v3-governance-cache/fileSystem';


const cachingLayer = customStorageProvider();

const payload = cachingLayer.getPayload({chainId, payloadsController, payloadId});
const proposal = cachingLayer.getProposal({chainId, governance, proposalId});
```

### Github hybrid Cache

The `githubHybridCache` is a a hybrid cache that tries to fetch the cache from github pages (which act as a simple json api).
If no results are found, the caching layer will fallback to the specified fallback.

```
import {githubHybridCacheAdapter} from '@bgd-labs/aave-v3-governance-cache/githubHybrid';
import {localCacheAdapter} from '@bgd-labs/aave-v3-governance-cache/localCache';

const cachingLayer = githubHybridCacheAdapter(localCacheAdapter);
```

## Install

To install:

```bash
bun install @bgd-labs/aave-v3-governance-cache
```

## Follow up work

- [ ] generate a sitemap with all the data directly reachable from this page
- [ ] create postgres adapter for systems that can rely on a centralized db somewhere
