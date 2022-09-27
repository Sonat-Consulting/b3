<script lang="ts">
	import { Document } from '@contentful/rich-text-types';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import type { ArticleLinks, EntryBlock, IFrameEntry } from '$lib/types/b3';
	import contentfulRichTextOptions from '$lib/utilities/contentful.richtext.js';

	export let richTextDocument: Document;
	export let articleLinks: ArticleLinks;

	let assetMap = new Map();
	let entryMap = new Map<string, EntryBlock>();

	$: {
		for (const asset of articleLinks?.assets.block) {
			assetMap.set(asset.sys.id, asset);
		}

		for (const entry of articleLinks?.entries.block) {
			entryMap.set(entry.sys.id, entry);
		}
	}

	$: options = contentfulRichTextOptions(assetMap, entryMap);
</script>

<div class="leading-relaxed">
	{@html documentToHtmlString(richTextDocument, options)}
</div>
