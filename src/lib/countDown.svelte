<script lang="ts">
	import { isAfter, intervalToDuration, Interval } from 'date-fns';

	const plannedStartTime = new Date('2022-08-28T07:00:00Z');

	let hasStarted;
	let timeToPlannedStart: Interval;

	(function tick() {
		const now = new Date();
		timeToPlannedStart = intervalToDuration({ start: now, end: plannedStartTime });
		hasStarted = isAfter(now, plannedStartTime);
		setTimeout(tick, 1000);
	})();
</script>

{#if !hasStarted}
	<div class="absolute top-0 left-0 object-cover h-full w-full">
		<div class="absolute right-5 top-5">
			<div class="grid grid-flow-col gap-5 text-center text-black auto-cols-max">
				<div class="flex flex-col p-2 bg-white/50 rounded-box">
					<span class="countdown font-mono text-black text-4xl">
						<span style="--value:{timeToPlannedStart.days};" />
					</span>
					{#if timeToPlannedStart.days == 1}
						dag
					{:else}
						dager
					{/if}
				</div>
				<div class="flex flex-col p-2 bg-white/50 rounded-box ">
					<span class="countdown font-mono text-4xl">
						<span style="--value:{timeToPlannedStart.hours};" />
					</span>
					{#if timeToPlannedStart.hours == 1}
						time
					{:else}
						timer
					{/if}
				</div>
				<div class="flex flex-col p-2 bg-white/50 rounded-box ">
					<span class="countdown font-mono text-4xl">
						<span style="--value:{timeToPlannedStart.minutes};" />
					</span>
					minutt
				</div>
				<div class="flex flex-col p-2 bg-white/50 rounded-box ">
					<span class="countdown font-mono text-4xl">
						<span style="--value:{timeToPlannedStart.seconds};" />
					</span>
					sekund
				</div>
			</div>
		</div>
	</div>
{/if}
