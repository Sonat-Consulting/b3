<script lang="ts">
	import { onDestroy } from 'svelte';
	import { isAfter, intervalToDuration, Interval } from 'date-fns';

	let timeoutRef: number, hasStarted: boolean, timeToPlannedStart: Interval;

	const TICK_MS = 1001;
	const plannedStartTime = new Date('2022-08-28T07:00:00Z');

	(function tick() {
		const now = new Date();
		timeToPlannedStart = intervalToDuration({ start: now, end: plannedStartTime });
		hasStarted = isAfter(now, plannedStartTime);
		timeoutRef = setTimeout(tick, TICK_MS) as number;
	})();

	onDestroy(() => {
		clearTimeout(timeoutRef);
	});
</script>

{#if !hasStarted}
	<div class="absolute right-3 top-3 md:right-5 md:top-5">
		<div class="grid grid-flow-col gap-2 md:gap-4 text-center text-black auto-cols-max">
			{#if timeToPlannedStart.months > 0}
				<div class="flex flex-col p-2 md:p-3 bg-white/50 rounded-box items-center">
					<span class="countdown font-mono text-black text-xl md:text-3xl">
						<span style="--value:{timeToPlannedStart.months};" />
					</span>
					{#if timeToPlannedStart.months === 1}
						måned
					{:else}
						måneder
					{/if}
				</div>
			{/if}

			{#if timeToPlannedStart.days > 0}
				<div class="flex flex-col p-2 md:p-3 bg-white/50 rounded-box items-center">
					<span class="countdown font-mono text-black text-xl md:text-3xl">
						<span style="--value:{timeToPlannedStart.days};" />
					</span>
					{#if timeToPlannedStart.days === 1}
						dag
					{:else}
						dager
					{/if}
				</div>
			{/if}

			<div class="flex flex-col p-2 md:p-3 bg-white/50 rounded-box items-center">
				<span class="countdown font-mono text-xl md:text-3xl">
					<span style="--value:{timeToPlannedStart.hours};" />
				</span>
				{#if timeToPlannedStart.hours === 1}
					time
				{:else}
					timer
				{/if}
			</div>
			<div class="flex flex-col p-2 md:p-3 bg-white/50 rounded-box items-center">
				<span class="countdown font-mono text-xl md:text-3xl">
					<span style="--value:{timeToPlannedStart.minutes};" />
				</span>
				minutt
			</div>
			<div class="flex flex-col p-2 md:p-3 bg-white/50 rounded-box items-center">
				<span class="countdown font-mono text-xl md:text-3xl">
					<span style="--value:{timeToPlannedStart.seconds};" />
				</span>
				sekund
			</div>
		</div>
	</div>
{/if}
