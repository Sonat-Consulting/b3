<script lang="ts">
	import { Document } from '@contentful/rich-text-types';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
	import type { EntryBlock } from '$lib/types/b3';
	import contentfulRichTextOptions from '$lib/utilities/contentful.richtext.js';

	export let richTextDocument: Document;
	export let assets: any[];
	export let entries: EntryBlock[];

	$: options = contentfulRichTextOptions(assets, entries);
</script>

<div class="leading-relaxed">
	{@html documentToHtmlString(richTextDocument, options)}
</div>
