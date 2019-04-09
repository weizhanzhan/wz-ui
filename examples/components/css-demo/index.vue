<template>
<div :class="['wrapper',slow?'slow-wind':'']">
     <div :class="['switch-wrap',slow?'':'switched']">
		<!-- wind flow velocity<br><span>- air moving from high to low pressure -</span> -->
		<div id="switch" @click="change">
			<div id="circle"></div>
		</div>
    </div>	
  	<div class="main-wrapper">
		<div class="sun">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="mountain-1"></div>
		<div class="mountain-2"></div>
		<div class="mountain-3"></div>
		<div class="mountain-4"></div>
		<div class="mountain-5"></div>
		<div class="tree-wrap">
			<div class="tree">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="windmill-pole-wrap">
			<div class="windmill-pole"></div>
		</div>
		<div class="windmill-pole-ellipses">
			<div class="windmill-pole-ellipses-wrapper">
				<div class="windmill-pole-ellipses-wrap">
					<div class="windmill-pole-ellipses-center"></div>
					<div class="ellipses">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
		<div class="windmill-pole-wrap right">
			<div class="windmill-pole"></div>
		</div>
		<div class="windmill-pole-ellipses right">
			<div class="windmill-pole-ellipses-wrapper">
				<div class="windmill-pole-ellipses-wrap">
					<div class="windmill-pole-ellipses-center"></div>
					<div class="ellipses delayed">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
		<div class="windmill-pole-wrap back-left">
			<div class="windmill-pole"></div>
		</div>
		<div class="windmill-pole-ellipses back-left">
			<div class="windmill-pole-ellipses-wrapper">
				<div class="windmill-pole-ellipses-wrap">
					<div class="windmill-pole-ellipses-center"></div>
					<div class="ellipses delayed">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
		<div class="clouds-wind-wrapper">
			<div class="clouds-wind-wrap">
				<div class="clouds-wind-section">
					<div class="cloud">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="cloud snd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="cloud trd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="wind">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="wind snd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="wind-small">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="clouds-wind-section snd">
					<div class="cloud">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="cloud snd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="cloud trd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="wind">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="wind snd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="wind-small">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="clouds-wind-section trd">
					<div class="cloud">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="cloud snd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="cloud trd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="wind">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="wind snd">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="wind-small">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
    data(){
        return {
            slow:true
        }
    },
    methods:{
        change(){
            this.slow = !this.slow
        }
    }
}
</script>

<style scoped>
    @import './style/style.css';
</style>
